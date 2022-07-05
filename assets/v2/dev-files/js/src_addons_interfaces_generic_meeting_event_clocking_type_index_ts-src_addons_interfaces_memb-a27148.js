"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_generic_meeting_event_clocking_type_index_ts-src_addons_interfaces_memb-a27148"],{6660:(e,t,n)=>{n.r(t)},6951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>i,getDateTime:()=>o});const i=(e="")=>{let t=new Date,n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),r=t.getHours(),c=t.getMinutes(),a=t.getSeconds(),s=n+"-"+i+"-"+o,l=r+":"+c+":"+a;return{dateTime:new Date(n,i,o,r,c,a),__string__:s+" "+l,__code__:n+i+o+r+c+a}},o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},2831:(e,t,n)=>{n.r(t),n.d(t,{getTime:()=>i,getLocalTime:()=>o});const i=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)},o=(e,t)=>e.toLocaleTimeString("en-US",t)},3464:(e,t,n)=>{function i(e){return{id:Number(e.id),page:e.page}}n.r(t),n.d(t,{ClientPageAccess_S:()=>i})},2583:(e,t,n)=>{n.r(t),n.d(t,{ClientUserAccess_S:()=>o});var i=n(3464);function o(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,i.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},69:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericMeetingEventClockingTypeInfo_S:()=>i})},3437:(e,t,n)=>{n.r(t),n.d(t,{GroupingsGroup_S:()=>o});var i=n(267);function o(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,n)=>{n.r(t),n.d(t,{GroupingsSubGroup_S:()=>o}),n(2892);var i=n(267);function o(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},707:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceCancelClocking:()=>u});var i=n(6455),o=n.n(i),r=n(8485),c=n(7270),a=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,i={};return o().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(n,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},6232:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockIn:()=>u});var i=n(6455),o=n.n(i),r=n(8485),c=n(7270),a=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,u=null===t?{}:{time:t};return o().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},8572:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockOut:()=>u});var i=n(6455),o=n.n(i),r=n(8485),c=n(7270),a=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,u=null===t?{}:{time:t};return o().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},1184:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingEndBreak:()=>u});var i=n(6455),o=n.n(i),r=n(8485),c=n(7270),a=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,u=null===t?{}:{time:t};return o().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},388:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceMultipleClockingBreak:()=>u});var i=n(6455),o=n.n(i),r=n(8485),c=n(7270),a=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};function u(e,t,n,i,u){return d(this,void 0,void 0,(function*(){const h=(0,l.getUserLoginInfoCookie)();let p=0;u.forEach((e=>{e.name===n&&(p=e.id)}));const m=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/bulk-clocking/"+e,g={clockingType:p,clockingIds:i};return o().fire({title:`${t} multiple action?`,icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(m,{method:"PATCH",body:JSON.stringify(g),headers:{Authorization:"Token "+h.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},596:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceClockingUpdateClockingList:()=>u});var i=n(6455),o=n.n(i),r=n(8485),c=n(7270),a=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/reset-clocking-list/"+e,i={};return o().fire({title:"Update Clocking List?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(n,{method:"POST",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},6719:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingStartBreak:()=>u});var i=n(6455),o=n.n(i),r=n(8485),c=n(7270),a=n(4492),s=n(8967),l=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,u=null===t?{}:{time:t};return o().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,s.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},1148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}r((l=l.apply(n,a||[])).next())}));var n,a,s,l}},7824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}r((l=l.apply(n,a||[])).next())}));var n,a,s,l}},4843:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleGroup:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}r((l=l.apply(n,a||[])).next())}));var n,a,s,l}},2734:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleFromDate:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e,t=""){return n=this,a=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,s=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}r((l=l.apply(n,a||[])).next())}));var n,a,s,l}},1694:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleNow:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=""){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},7435:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleToday:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=""){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},6972:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleUpcoming:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=""){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},8786:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleSubGroup:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}r((l=l.apply(n,a||[])).next())}));var n,a,s,l}},2506:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUserAccess:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access"+(null===e?"":"/"+e)+t,s=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}r((l=l.apply(n,a||[])).next())}));var n,a,s,l}},115:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericMeetingEventClockingType:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},72:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},9605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>a});var i=n(8485),o=n(7270),r=n(4492),c=n(3600);function a(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e),a=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>a});var i=n(5862),o=n(9662),r=(n(9975),n(6788),function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected}createRenderRoot(){return this}};a.styles=[i.css`
      :host {
        display: block;
      }
    `],r([(0,o.property)({type:String}),c("design:type",String)],a.prototype,"name",void 0),r([(0,o.property)({type:String}),c("design:type",String)],a.prototype,"label",void 0),r([(0,o.property)({type:Boolean}),c("design:type",Boolean)],a.prototype,"selected",void 0),r([(0,o.property)({type:String}),c("design:type",String)],a.prototype,"value",void 0),r([(0,o.property)({type:Boolean}),c("design:type",Boolean)],a.prototype,"isSelected",void 0),a=r([(0,o.customElement)("switch-input")],a)},546:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirst:()=>l});var i=n(7052),o=n(7325),r=(n(8281),n(5862)),c=n(9662),a=function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,o.MemberClockingInfo_S)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,i.base64Encode)(String(e.memberId.id),!0);return r.html`<div class="flex flex-col whitespace-normal justify-between content-between">
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
    </div>`}firstUpdated(){}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],a([(0,c.property)({type:String}),s("design:type",String)],l.prototype,"clocking_info",void 0),a([(0,c.property)({type:String}),s("design:type",String)],l.prototype,"memberProfileBaseUrl",void 0),l=a([(0,c.customElement)("clocker-table-parts-first"),s("design:paramtypes",[])],l)},601:(e,t,n)=>{n.r(t),n.d(t,{setClockingTimeInfo:()=>p,getClockingTimeInfo:()=>m,ClockerTablePartsSecond:()=>g});var i=n(6951),o=n(2831),r=n(7325),c=n(6232),a=n(6719),s=n(5862),l=n(9662),d=function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};const p=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},m=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let g=class extends s.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clockingTime=!1,this.clockingInfo=null,this.clocking_info=""}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,r.MemberClockingInfo_S)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,i.getDateTime)(e.date,{dateStyle:"medium",timeStyle:"short"}),n=e.inTime,r=null!==n?(0,o.getLocalTime)(n,{timeStyle:"short"}):"--:--",c=e.id,a=e.inOrOut,l=e.startBreak,d=null!==l?(0,o.getLocalTime)(l,{timeStyle:"short"}):"--:--",u=new Date,h=e.meetingEventId.hasBreakTime,p=e.date.toDateString()===u.toDateString();return s.html`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          <input type="checkbox" multi-break-check-in="${c}" name="member_check_in_${c}"
            id="member_check_in_${c}"
            class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          <label for="member_check_in_${c}">@ ${t}</label>
        </div>
      </div>
      <div class="text-center whitespace-nowrap">
        <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${c}" clock-user="in">
          <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
        </button>
      </div>
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-success mx-1">${p?s.html`Today`:s.html`Post Clocking`}</span>
        ${a?s.html`
        <span class="badge badge-success bg-grow-early mx-1">Present</span>`:s.html`
        <span class="badge badge-danger mx-1">Not Clocked</span>
        `}
      </div>
      ${a&&null!==n?s.html`
      <div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Clock in Time</b>: ${r}
        </span>
      </div>`:""}
      ${h?s.html`
      <hr class="whitespace-nowrap">
      <div class="text-center whitespace-nowrap">
        <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${c}" user-break="start"
          icon="check">
        </mwc-button>
      </div>
      `:""}
      ${null!==l?s.html`
      <div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Break Start Time</b>: ${d}
        </span>
      </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=m();this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"in"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockInUser(e,t)}))}))}clockInUser(e,t){return h(this,void 0,void 0,(function*(){t.preventDefault(),console.log({"this.clockingTime":this.clockingTime,"this.clockingTimeValue":this.clockingTimeValue});const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,c.PATCH_AttendanceClockingClockIn)(n,this.clockingTimeValue):yield(0,c.PATCH_AttendanceClockingClockIn)(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"start"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.startUserBreak(e,t)}))}))}startUserBreak(e,t){return h(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,a.PATCH_AttendanceClockingStartBreak)(n,this.clockingTimeValue):yield(0,a.PATCH_AttendanceClockingStartBreak)(n)}))}createRenderRoot(){return this}};g.styles=[s.css`
   :host { display: block; }
  `],d([(0,l.property)({type:String}),u("design:type",String)],g.prototype,"clockingTimeValue",void 0),d([(0,l.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"clockingTime",void 0),d([(0,l.property)({type:String}),u("design:type",String)],g.prototype,"clocking_info",void 0),g=d([(0,l.customElement)("clocker-table-parts-second"),u("design:paramtypes",[])],g)},694:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsThird:()=>f});var i=n(7052),o=n(6951),r=n(2831),c=n(7325),a=n(707),s=n(8572),l=n(1184),d=n(5862),u=n(9662),h=n(601),p=function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};let f=class extends d.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.clocking_info="",this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/attendance/v2/clocking/excuse?clocking-id="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,c.MemberClockingInfo_S)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,o.getDateTime)(e.date,{dateStyle:"medium",timeStyle:"short"}),n=e.outTime,c=null!==n?(0,r.getLocalTime)(n,{timeStyle:"short"}):"--:--",a=e.id,s=e.inOrOut,l=e.endBreak,u=null!==l?(0,r.getLocalTime)(l,{timeStyle:"short"}):"--:--",h=e.meetingEventId.hasBreakTime,p=(0,i.base64Encode)(String(a),!0);return d.html`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          <input type="checkbox" multi-break-check-out="${a}" name="member_check_out_${a}" id="member_check_out_${a}"
            class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          <label for="member_check_out_${a}">@ ${t}</label>
        </div>	
      </div>
      <div class="text-center whitespace-nowrap">
        <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}" clock-user="out">
          <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
        </button>
        <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}" cancel-user-clock="true">
          <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
        </button>
      </div>
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-warning">'X' to Cancel Attendance</span>
      </div>
      <div class="text-center whitespace-nowrap">
        <a href="${this.excuseBaseUrl}${p}" class="btn btn-info btn-sm" target="_blank" type="button">Enter Excuse</a>
      </div>
      ${s&&null!==n?d.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${c}
          </span>
        </div>`:""}
      ${h?d.html`
        <hr class="whitespace-nowrap">
        <div class="text-center whitespace-nowrap">
          <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${a}"
            user-break="end" icon="close">
          </mwc-button>
        </div>
        `:""}
      ${null!==l?d.html`
        <div class="text-center">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break End Time</b>: ${u}
          </span>
        </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,h.getClockingTimeInfo)();this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>g(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));yield(0,a.PATCH_AttendanceCancelClocking)(n)}))))}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"out"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockOutUser(e,t)}))}))}clockOutUser(e,t){return g(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,s.PATCH_AttendanceClockingClockOut)(n,this.clockingTimeValue):yield(0,s.PATCH_AttendanceClockingClockOut)(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"end"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.endUserBreak(e,t)}))}))}endUserBreak(e,t){return g(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield(0,l.PATCH_AttendanceClockingEndBreak)(n,this.clockingTimeValue):yield(0,l.PATCH_AttendanceClockingEndBreak)(n)}))}createRenderRoot(){return this}};f.styles=[d.css`
   :host { display: block; }
  `],p([(0,u.property)({type:String}),m("design:type",String)],f.prototype,"clocking_info",void 0),p([(0,u.property)({type:String}),m("design:type",String)],f.prototype,"clockingTimeValue",void 0),p([(0,u.property)({type:Boolean}),m("design:type",Boolean)],f.prototype,"clockingTime",void 0),p([(0,u.property)({type:String}),m("design:type",String)],f.prototype,"excuseBaseUrl",void 0),f=p([(0,u.customElement)("clocker-table-parts-third"),m("design:paramtypes",[])],f)},997:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClockerMeetingPicker:()=>B}),n(3794);var i,o,r,c,a=n(5862),s=n(9662),l=n(7725),d=n(7052),u=n(4672),h=(n(1511),n(2715),n(8763),n(5474),n(6163),n(2583)),p=n(2506),m=n(3600),g=n(3283),f=n(1694),v=n(7435),y=n(2734),b=n(6972),_=(n(3690),n(1148)),w=n(8698),k=n(7824),S=n(8881),A=function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};let B=class extends a.LitElement{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return T(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,l.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,m.getUserLoginInfoCookie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return a.html`
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
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():e.getDateMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?a.html`
        ${this.nowSectionData}
      `:2===this.formId?a.html`
        ${this.upcomingSectionData}
      `:3===this.formId?a.html`
        ${this.todaySectionData}
      `:a.html`
        ${this.dateSectionData}
      `}get notFound(){const e=a.html`<h4 class="text-white">Empty</h4>`,t=a.html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return a.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:a.html`
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):a.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:a.html`
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):a.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:a.html`
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):a.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=a.html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return a.html`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?a.html`${e}${this.notFound}`:a.html`
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):a.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,d.base64Encode)(String(t),!0),i=this.getTime(String(e.startTime)),o=this.getTime(String(e.closeTime));return a.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${i} - To: ${o} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,S.until)(this.getAttendanceScheduleDay(t),a.html`<span>Loading...</span>`):(0,S.until)(this.getAttendanceScheduleDate(t),a.html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,d.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,p.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,h.ClientUserAccess_S)(e)).page.id}))}}))}getAttendanceScheduleNow(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,f.GET_AttendanceScheduleNow)("?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_AttendanceScheduleUpcoming)("?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,v.GET_AttendanceScheduleToday)("?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,y.GET_AttendanceScheduleFromDate)(this.todayDate,"?branchId="+e+"&length=100000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return T(this,void 0,void 0,(function*(){const t=yield(0,k.GET_AttendanceScheduleDay)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return a.html`<li class="border p-1">Every ${(0,S.until)(this.getDayOfWeek(t),a.html`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return a.html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return T(this,void 0,void 0,(function*(){const t=yield(0,_.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return T(this,void 0,void 0,(function*(){const t=yield(0,w.GET_AttendanceScheduleDate)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return a.html`<li class="border p-1">On ${t}</li>`}));return a.html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};B.styles=[a.css`
   :host { display: block; }
  `],A([(0,s.query)("#getNowMeetingsBtn"),C("design:type","function"==typeof(i=void 0!==g.Button&&g.Button)?i:Object)],B.prototype,"getNowMeetingsBtn",void 0),A([(0,s.query)("#getTodayMeetingsBtn"),C("design:type","function"==typeof(o=void 0!==g.Button&&g.Button)?o:Object)],B.prototype,"getTodayMeetingsBtn",void 0),A([(0,s.query)("#getUpcomingMeetingsBtn"),C("design:type","function"==typeof(r=void 0!==g.Button&&g.Button)?r:Object)],B.prototype,"getUpcomingMeetingsBtn",void 0),A([(0,s.query)("#getDateMeetingsBtn"),C("design:type","function"==typeof(c=void 0!==g.Button&&g.Button)?c:Object)],B.prototype,"getDateMeetingsBtn",void 0),A([(0,s.property)({type:String}),C("design:type",String)],B.prototype,"todayDate",void 0),A([(0,s.property)({type:Number}),C("design:type",Number)],B.prototype,"meetingEventId",void 0),A([(0,s.property)({type:Number}),C("design:type",Number)],B.prototype,"loggedUserId",void 0),A([(0,s.property)({type:Number}),C("design:type",Number)],B.prototype,"formId",void 0),A([(0,s.property)({type:Boolean}),C("design:type",Boolean)],B.prototype,"allowFetch",void 0),A([(0,s.property)({type:Boolean}),C("design:type",Boolean)],B.prototype,"recurring",void 0),A([(0,s.property)({type:String}),C("design:type",String)],B.prototype,"openContentBaseUrl",void 0),A([(0,s.property)({type:String}),C("design:type",String)],B.prototype,"openMeetingEventBaseUrl",void 0),A([(0,s.property)({type:Array}),C("design:type",Array)],B.prototype,"_pageAccesses",void 0),A([(0,s.property)({type:Array}),C("design:type",Array)],B.prototype,"_activeBranchId",void 0),A([(0,s.property)({type:Array}),C("design:type",Array)],B.prototype,"_userLoginInfo",void 0),B=A([(0,s.customElement)("pdb-attendance-clocking-meeting-picker"),C("design:paramtypes",[])],B)},3629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>l}),n(6660);var i=n(5862),o=n(9662),r=n(72),c=function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};let l=class extends i.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return s(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?i.html`
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
    `}firstUpdated(){}getMemberCategories(){return s(this,void 0,void 0,(function*(){const e=yield(0,r.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};l.styles=[i.css`
   :host { display: block; }
  `],c([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"material",void 0),c([(0,o.property)({type:Number}),a("design:type",Number)],l.prototype,"defaultValue",void 0),c([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"label",void 0),c([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"name",void 0),c([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"id",void 0),c([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"tag_class",void 0),c([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"css_style",void 0),c([(0,o.property)({type:Array}),a("design:type",Array)],l.prototype,"_memberCategories",void 0),l=c([(0,o.customElement)("pdb-membership-select-member-type"),a("design:paramtypes",[])],l)}}]);
//# sourceMappingURL=src_addons_interfaces_generic_meeting_event_clocking_type_index_ts-src_addons_interfaces_memb-a27148.js.map