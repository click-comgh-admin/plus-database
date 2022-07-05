"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_attendance_clocking_clocker_table_parts_first_ts-src_view_attendance_clocking_clocke-b3299c"],{6660:(e,t,n)=>{n.r(t)},6951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>i,getDateTime:()=>o});const i=(e="")=>{let t=new Date,n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),a=t.getHours(),c=t.getMinutes(),r=t.getSeconds(),s=n+"-"+i+"-"+o,l=a+":"+c+":"+r;return{dateTime:new Date(n,i,o,a,c,r),__string__:s+" "+l,__code__:n+i+o+a+c+r}},o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},2831:(e,t,n)=>{n.r(t),n.d(t,{getTime:()=>i,getLocalTime:()=>o});const i=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)},o=(e,t)=>e.toLocaleTimeString("en-US",t)},3464:(e,t,n)=>{function i(e){return{id:Number(e.id),page:e.page}}n.r(t),n.d(t,{ClientPageAccess_S:()=>i})},2583:(e,t,n)=>{n.r(t),n.d(t,{ClientUserAccess_S:()=>o});var i=n(3464);function o(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,i.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},4707:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceCancelClocking:()=>u});var i=n(6455),o=n.n(i),a=n(8485),c=n(7270),r=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,i={};return o().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(n,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new r.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},6232:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockIn:()=>u});var i=n(6455),o=n.n(i),a=n(8485),c=n(7270),r=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,u=null===t?{}:{time:t};return o().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new r.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},8572:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockOut:()=>u});var i=n(6455),o=n.n(i),a=n(8485),c=n(7270),r=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,u=null===t?{}:{time:t};return o().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new r.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},1184:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingEndBreak:()=>u});var i=n(6455),o=n.n(i),a=n(8485),c=n(7270),r=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,u=null===t?{}:{time:t};return o().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new r.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},6719:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingStartBreak:()=>u});var i=n(6455),o=n.n(i),a=n(8485),c=n(7270),r=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,u=null===t?{}:{time:t};return o().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new r.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},1148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),r=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,a)}c((s=s.apply(t,n||[])).next())}));var t,n,r,s}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e=null,t=""){return n=this,r=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{a(l.next(e))}catch(e){t(e)}}function o(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}a((l=l.apply(n,r||[])).next())}));var n,r,s,l}},7824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e=null,t=""){return n=this,r=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{a(l.next(e))}catch(e){t(e)}}function o(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}a((l=l.apply(n,r||[])).next())}));var n,r,s,l}},2734:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleFromDate:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e,t=""){return n=this,r=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,s=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{a(l.next(e))}catch(e){t(e)}}function o(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}a((l=l.apply(n,r||[])).next())}));var n,r,s,l}},1694:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleNow:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e=""){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,r=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,a)}c((s=s.apply(t,n||[])).next())}));var t,n,r,s}},7435:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleToday:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e=""){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,r=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,a)}c((s=s.apply(t,n||[])).next())}));var t,n,r,s}},6972:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleUpcoming:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e=""){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,r=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,a)}c((s=s.apply(t,n||[])).next())}));var t,n,r,s}},2506:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUserAccess:()=>r});var i=n(8485),o=n(7270),a=n(4492),c=n(3600);function r(e=null,t=""){return n=this,r=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{a(l.next(e))}catch(e){t(e)}}function o(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}a((l=l.apply(n,r||[])).next())}));var n,r,s,l}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>r});var i=n(5862),o=n(9662),a=(n(9975),n(6788),function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected}createRenderRoot(){return this}};r.styles=[i.css`
      :host {
        display: block;
      }
    `],a([(0,o.property)({type:String}),c("design:type",String)],r.prototype,"name",void 0),a([(0,o.property)({type:String}),c("design:type",String)],r.prototype,"label",void 0),a([(0,o.property)({type:Boolean}),c("design:type",Boolean)],r.prototype,"selected",void 0),a([(0,o.property)({type:String}),c("design:type",String)],r.prototype,"value",void 0),a([(0,o.property)({type:Boolean}),c("design:type",Boolean)],r.prototype,"isSelected",void 0),r=a([(0,o.customElement)("switch-input")],r)},7546:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirst:()=>l});var i=n(7052),o=n(7325),a=(n(8281),n(5862)),c=n(9662),r=function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends a.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,o.MemberClockingInfo_S)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,i.base64Encode)(String(e.memberId.id),!0);return a.html`<div class="flex flex-col whitespace-normal justify-between content-between">
      <div class="d-block m-1">
        <span class="badge badge-info shadow-lg p-2 m-1">
          ${e.clockingMethodName}
        </span>
      </div>
      <div class="flex m-1 justify-evenly">
        <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"
          url="${e.memberId.profilePicture}" size="32"></user-profile-photo>
      </div>
      <div class="block m-1">
        <span class="shadow p-1 block bg-white rounded text-dark">
          <b>Name</b>: ${e.memberId.firstname} ${e.memberId.middlename} ${e.memberId.surname}
        </span>
      </div>
    </div>`}firstUpdated(){}createRenderRoot(){return this}};l.styles=[a.css`
   :host { display: block; }
  `],r([(0,c.property)({type:String}),s("design:type",String)],l.prototype,"clocking_info",void 0),r([(0,c.property)({type:String}),s("design:type",String)],l.prototype,"memberProfileBaseUrl",void 0),l=r([(0,c.customElement)("clocker-table-parts-first"),s("design:paramtypes",[])],l)},7601:(e,t,n)=>{n.r(t),n.d(t,{setClockingTimeInfo:()=>m,getClockingTimeInfo:()=>g,ClockerTablePartsSecond:()=>p});var i=n(6951),o=n(2831),a=n(7325),c=n(6232),r=n(6719),s=n(5862),l=n(9662),d=function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};const m=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},g=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let p=class extends s.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clocking=!1,this.clockingTime=!1,this.clockingInfo=null,this.clocking_info=""}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,a.MemberClockingInfo_S)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,i.getDateTime)(e.date,{dateStyle:"medium",timeStyle:"short"}),n=e.inTime,a=null!==n?(0,o.getLocalTime)(n,{timeStyle:"short"}):"--:--",c=e.id,r=e.inOrOut,l=e.startBreak,d=null!==l?(0,o.getLocalTime)(l,{timeStyle:"short"}):"--:--",u=new Date,h=e.meetingEventId.hasBreakTime,m=e.date.toDateString()===u.toDateString();return s.html`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          ${this.clocking?s.html`
            <input type="checkbox" multi-break-check-in="${c}" name="member_check_in_${c}" id="member_check_in_${c}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `:s.nothing}
          <label for="member_check_in_${c}">@ ${t}</label>
        </div>
      </div>
      ${this.clocking?s.html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${c}" clock-user="in">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
        </div>
      `:s.nothing}
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-success mx-1">${m?s.html`Today`:s.html`Post Clocking`}</span>
        ${r?s.html`
        <span class="badge badge-success bg-grow-early mx-1">Present</span>`:s.html`
        <span class="badge badge-danger mx-1">Not Clocked</span>
        `}
      </div>
      ${r&&null!==n?s.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock in Time</b>: ${a}
          </span>
        </div>`:""}
      ${this.clocking?s.html`
        ${h?s.html`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${c}" user-break="start"
              icon="check">
            </mwc-button>
          </div>
          `:""}
      `:s.nothing}
      ${null!==l?s.html`
      <div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Break Start Time</b>: ${d}
        </span>
      </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=g();this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"in"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockInUser(e,t)}))}))}clockInUser(e,t){return h(this,void 0,void 0,(function*(){t.preventDefault(),console.log({"this.clockingTime":this.clockingTime,"this.clockingTimeValue":this.clockingTimeValue});const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,c.PATCH_AttendanceClockingClockIn)(n,this.clockingTimeValue):yield(0,c.PATCH_AttendanceClockingClockIn)(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"start"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.startUserBreak(e,t)}))}))}startUserBreak(e,t){return h(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,r.PATCH_AttendanceClockingStartBreak)(n,this.clockingTimeValue):yield(0,r.PATCH_AttendanceClockingStartBreak)(n)}))}createRenderRoot(){return this}};p.styles=[s.css`
   :host { display: block; }
  `],d([(0,l.property)({type:String}),u("design:type",String)],p.prototype,"clockingTimeValue",void 0),d([(0,l.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"clocking",void 0),d([(0,l.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"clockingTime",void 0),d([(0,l.property)({type:String}),u("design:type",String)],p.prototype,"clocking_info",void 0),p=d([(0,l.customElement)("clocker-table-parts-second"),u("design:paramtypes",[])],p)},3961:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsThird:()=>f});var i=n(7052),o=n(6951),a=n(2831),c=n(7325),r=n(4707),s=n(8572),l=n(1184),d=n(5862),u=n(9662),h=n(7601),m=function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};let f=class extends d.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.clocking_info="",this.clocking=!1,this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/attendance/v2/clocking/excuse?clocking-id="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,c.MemberClockingInfo_S)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,o.getDateTime)(e.date,{dateStyle:"medium",timeStyle:"short"}),n=e.outTime,c=null!==n?(0,a.getLocalTime)(n,{timeStyle:"short"}):"--:--",r=e.id,s=e.inOrOut,l=e.endBreak,u=null!==l?(0,a.getLocalTime)(l,{timeStyle:"short"}):"--:--",h=e.meetingEventId.hasBreakTime,m=(0,i.base64Encode)(String(r),!0);return d.html`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          ${this.clocking?d.html`
            <input type="checkbox" multi-break-check-out="${r}" name="member_check_out_${r}" id="member_check_out_${r}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `:d.nothing}
          <label for="member_check_out_${r}">@ ${t}</label>
        </div>	
      </div>
      ${this.clocking?d.html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${r}" clock-user="out">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${r}" cancel-user-clock="true">
            <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
          </button>
        </div>
      `:d.nothing}
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-warning">'X' to Cancel Attendance</span>
      </div>
      <div class="text-center whitespace-nowrap">
        <a href="${this.excuseBaseUrl}${m}" class="btn btn-info btn-sm" target="_blank" type="button">Enter/ View Excuse</a>
      </div>
      ${s&&null!==n?d.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${c}
          </span>
        </div>`:""}
      ${this.clocking?d.html`
        ${h?d.html`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${r}"
              user-break="end" icon="close">
            </mwc-button>
          </div>
          `:""}
      `:d.nothing}
      ${null!==l?d.html`
        <div class="text-center">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break End Time</b>: ${u}
          </span>
        </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,h.getClockingTimeInfo)();this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>p(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));yield(0,r.PATCH_AttendanceCancelClocking)(n)}))))}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"out"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockOutUser(e,t)}))}))}clockOutUser(e,t){return p(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,s.PATCH_AttendanceClockingClockOut)(n,this.clockingTimeValue):yield(0,s.PATCH_AttendanceClockingClockOut)(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"end"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.endUserBreak(e,t)}))}))}endUserBreak(e,t){return p(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield(0,l.PATCH_AttendanceClockingEndBreak)(n,this.clockingTimeValue):yield(0,l.PATCH_AttendanceClockingEndBreak)(n)}))}createRenderRoot(){return this}};f.styles=[d.css`
   :host { display: block; }
  `],m([(0,u.property)({type:String}),g("design:type",String)],f.prototype,"clocking_info",void 0),m([(0,u.property)({type:Boolean}),g("design:type",Boolean)],f.prototype,"clocking",void 0),m([(0,u.property)({type:String}),g("design:type",String)],f.prototype,"clockingTimeValue",void 0),m([(0,u.property)({type:Boolean}),g("design:type",Boolean)],f.prototype,"clockingTime",void 0),m([(0,u.property)({type:String}),g("design:type",String)],f.prototype,"excuseBaseUrl",void 0),f=m([(0,u.customElement)("clocker-table-parts-third"),g("design:paramtypes",[])],f)},997:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClockerMeetingPicker:()=>E}),n(3794);var i,o,a,c,r,s=n(5862),l=n(9662),d=n(7725),u=n(7052),h=n(4672),m=(n(1511),n(2715),n(8763),n(5474),n(6163),n(2583)),g=n(2506),p=n(3600),f=n(3283),v=n(1694),y=n(7435),b=n(2734),_=n(6972),w=(n(3690),n(1148)),k=n(8698),S=n(7824),A=n(8881),C=function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},B=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};let E=class extends s.LitElement{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return B(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.getUserLoginInfoCookie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return s.html`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?s.html`
        ${this.nowSectionData}
      `:2===this.formId?s.html`
        ${this.upcomingSectionData}
      `:3===this.formId?s.html`
        ${this.todaySectionData}
      `:4===this.formId?s.html`
        ${this.dateSectionData}
      `:s.html`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=s.html`<h4 class="text-white">Empty</h4>`,t=s.html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:s.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):s.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:s.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):s.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:s.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):s.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=s.html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return s.html`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?s.html`${e}${this.notFound}`:s.html`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):s.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceScheduleFromDate(),null===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return s.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):s.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,u.base64Encode)(String(t),!0),i=this.getTime(String(e.startTime)),o=this.getTime(String(e.closeTime));return s.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${i} - To: ${o} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,A.until)(this.getAttendanceScheduleDay(t),s.html`<span>Loading...</span>`):(0,A.until)(this.getAttendanceScheduleDate(t),s.html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,h.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,u.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,g.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,m.ClientUserAccess_S)(e)).page.id}))}}))}getAttendanceScheduleNow(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,v.GET_AttendanceScheduleNow)("?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,_.GET_AttendanceScheduleUpcoming)("?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,y.GET_AttendanceScheduleToday)("?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_AttendanceScheduleFromDate)(this.todayDate,"?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return B(this,void 0,void 0,(function*(){const t=yield(0,S.GET_AttendanceScheduleDay)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return s.html`<li class="border p-1">Every ${(0,A.until)(this.getDayOfWeek(t),s.html`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return s.html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return B(this,void 0,void 0,(function*(){const t=yield(0,w.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return B(this,void 0,void 0,(function*(){const t=yield(0,k.GET_AttendanceScheduleDate)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return s.html`<li class="border p-1">On ${t}</li>`}));return s.html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};E.styles=[s.css`
   :host { display: block; }
  `],C([(0,l.query)("#getNowMeetingsBtn"),T("design:type","function"==typeof(i=void 0!==f.Button&&f.Button)?i:Object)],E.prototype,"getNowMeetingsBtn",void 0),C([(0,l.query)("#getAllMeetingsBtn"),T("design:type","function"==typeof(o=void 0!==f.Button&&f.Button)?o:Object)],E.prototype,"getAllMeetingsBtn",void 0),C([(0,l.query)("#getTodayMeetingsBtn"),T("design:type","function"==typeof(a=void 0!==f.Button&&f.Button)?a:Object)],E.prototype,"getTodayMeetingsBtn",void 0),C([(0,l.query)("#getUpcomingMeetingsBtn"),T("design:type","function"==typeof(c=void 0!==f.Button&&f.Button)?c:Object)],E.prototype,"getUpcomingMeetingsBtn",void 0),C([(0,l.query)("#getDateMeetingsBtn"),T("design:type","function"==typeof(r=void 0!==f.Button&&f.Button)?r:Object)],E.prototype,"getDateMeetingsBtn",void 0),C([(0,l.property)({type:String}),T("design:type",String)],E.prototype,"todayDate",void 0),C([(0,l.property)({type:Number}),T("design:type",Number)],E.prototype,"meetingEventId",void 0),C([(0,l.property)({type:Number}),T("design:type",Number)],E.prototype,"loggedUserId",void 0),C([(0,l.property)({type:Number}),T("design:type",Number)],E.prototype,"formId",void 0),C([(0,l.property)({type:Boolean}),T("design:type",Boolean)],E.prototype,"allowFetch",void 0),C([(0,l.property)({type:Boolean}),T("design:type",Boolean)],E.prototype,"recurring",void 0),C([(0,l.property)({type:String}),T("design:type",String)],E.prototype,"openContentBaseUrl",void 0),C([(0,l.property)({type:String}),T("design:type",String)],E.prototype,"openMeetingEventBaseUrl",void 0),C([(0,l.property)({type:Array}),T("design:type",Array)],E.prototype,"_pageAccesses",void 0),C([(0,l.property)({type:Array}),T("design:type",Array)],E.prototype,"_activeBranchId",void 0),C([(0,l.property)({type:Array}),T("design:type",Array)],E.prototype,"_userLoginInfo",void 0),E=C([(0,l.customElement)("pdb-attendance-clocking-meeting-picker"),T("design:paramtypes",[])],E)},3629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>l}),n(6660);var i=n(5862),o=n(9662),a=n(72),c=function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function c(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((i=i.apply(e,t||[])).next())}))};let l=class extends i.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return s(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?i.html`
        ${this.materialSelectField}
      `:i.html`
        ${this.selectField}
      `}get materialSelectField(){return null===this.defaultValue?i.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>i.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `:i.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>this.defaultValue===e.id?i.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:i.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `}get selectField(){let e=i.html``;return e=null===this.defaultValue?i.html`
      <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
				<option value="0">${this.label}</option>
        ${this._memberCategories.map((e=>i.html`<option value="${e.id}">${e.category}</option>`))}
			</select>
    `:i.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>this.defaultValue===e.id?i.html`<option value="${e.id}" selected>${e.category}</option>`:i.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `,i.html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return s(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};l.styles=[i.css`
   :host { display: block; }
  `],c([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"material",void 0),c([(0,o.property)({type:Number}),r("design:type",Number)],l.prototype,"defaultValue",void 0),c([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"label",void 0),c([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"name",void 0),c([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"id",void 0),c([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"tag_class",void 0),c([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"css_style",void 0),c([(0,o.property)({type:Array}),r("design:type",Array)],l.prototype,"_memberCategories",void 0),l=c([(0,o.customElement)("pdb-membership-select-member-type"),r("design:paramtypes",[])],l)}}]);
//# sourceMappingURL=src_view_attendance_clocking_clocker_table_parts_first_ts-src_view_attendance_clocking_clocke-b3299c.js.map