"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_login_index_ts-src_addons_network_attendance_meeting_event_link-types_in-46a935"],{3600:(e,n,t)=>{t.r(n),t.d(n,{setUserLoginInfoCookie:()=>c,LogUserOut:()=>u,getUserLoginInfoCookie:()=>a});var o=t(1566),r=t(7052),i=t(1942);const s="pdb-client-user",c=e=>{const n=JSON.stringify(e);window.supersecret={unknowable:{ops:{email:e.user.email,id:e.user.id,cookieName:s}}},(0,i.set_cookies)(s,"",-1),(0,i.set_cookies)(s,(0,r.base64Encode)(n),3500)},u=()=>{(0,i.set_cookies)(s,"",-1)},a=()=>{if(""===(0,i.get_cookie)(s))return null;{const e=(0,r.base64Decode)((0,i.get_cookie)(s)),n=JSON.parse(e);return(0,o.userLoginInfo_S)(n)}}},1566:(e,n,t)=>{function o(e){const n=e.user;return{expiry:new Date(e.expiry),token:String(e.token),user:{id:Number(n.id),accountId:Number(n.accountId),branchId:Number(n.branchId),firstname:String(n.firstname),surname:String(n.surname),phone:String(n.phone),email:String(n.email),profilePicture:String(n.profilePicture)}}}t.r(n),t.d(n,{userLoginInfo_S:()=>o})},5663:(e,n,t)=>{t.r(n),t.d(n,{GET_MeetingEventLinkTypes:()=>a});var o=t(8485),r=t(1942),i=t(7270),s=t(7052),c=t(4492),u=t(4108);function a(e=null,n="client_tokenLogin"){return t=this,a=void 0,d=function*(){const t=String(window.supersecret.unknowable.ops.id),a=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(a,t,n);const l=(0,s.base64Decode)((0,r.get_cookie)(n)),d=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),p=yield(0,i.http)(d,{method:"GET",headers:{Authorization:"Token "+l}},!0);try{return new c.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let n=p;return n.error=e,new c.NetWorkCallResponses("get",n,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function o(e){try{i(d.next(e))}catch(e){n(e)}}function r(e){try{i(d.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof l?t:new l((function(e){e(t)}))).then(o,r)}i((d=d.apply(t,a||[])).next())}));var t,a,l,d}},6404:(e,n,t)=>{t.r(n),t.d(n,{GET_MeetingEventLocations:()=>a});var o=t(8485),r=t(1942),i=t(7270),s=t(7052),c=t(4492),u=t(4108);function a(e=null,n="client_tokenLogin"){return t=this,a=void 0,d=function*(){const t=String(window.supersecret.unknowable.ops.id),a=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(a,t,n);const l=(0,s.base64Decode)((0,r.get_cookie)(n)),d=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),p=yield(0,i.http)(d,{method:"GET",headers:{Authorization:"Token "+l}},!0);try{return new c.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let n=p;return n.error=e,new c.NetWorkCallResponses("get",n,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function o(e){try{i(d.next(e))}catch(e){n(e)}}function r(e){try{i(d.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof l?t:new l((function(e){e(t)}))).then(o,r)}i((d=d.apply(t,a||[])).next())}));var t,a,l,d}},7790:(e,n,t)=>{t.r(n),t.d(n,{GET_MeetingEventMemberTypes:()=>a});var o=t(8485),r=t(1942),i=t(7270),s=t(7052),c=t(4492),u=t(4108);function a(e=null,n="client_tokenLogin"){return t=this,a=void 0,d=function*(){const t=String(window.supersecret.unknowable.ops.id),a=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(a,t,n);const l=(0,s.base64Decode)((0,r.get_cookie)(n)),d=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),p=yield(0,i.http)(d,{method:"GET",headers:{Authorization:"Token "+l}},!0);try{return new c.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let n=p;return n.error=e,new c.NetWorkCallResponses("get",n,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function o(e){try{i(d.next(e))}catch(e){n(e)}}function r(e){try{i(d.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof l?t:new l((function(e){e(t)}))).then(o,r)}i((d=d.apply(t,a||[])).next())}));var t,a,l,d}},28:(e,n,t)=>{t.r(n),t.d(n,{GET_MeetingEventTypes:()=>a});var o=t(8485),r=t(1942),i=t(7270),s=t(7052),c=t(4492),u=t(4108);function a(e=null,n="client_tokenLogin"){return t=this,a=void 0,d=function*(){const t=String(window.supersecret.unknowable.ops.id),a=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(a,t,n);const l=(0,s.base64Decode)((0,r.get_cookie)(n)),d=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),p=yield(0,i.http)(d,{method:"GET",headers:{Authorization:"Token "+l}},!0);try{return new c.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let n=p;return n.error=e,new c.NetWorkCallResponses("get",n,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function o(e){try{i(d.next(e))}catch(e){n(e)}}function r(e){try{i(d.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof l?t:new l((function(e){e(t)}))).then(o,r)}i((d=d.apply(t,a||[])).next())}));var t,a,l,d}}}]);
//# sourceMappingURL=src_addons_functions_login_index_ts-src_addons_network_attendance_meeting_event_link-types_in-46a935.js.map