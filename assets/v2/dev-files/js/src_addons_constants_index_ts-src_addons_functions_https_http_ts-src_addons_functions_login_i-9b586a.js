"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a"],{8485:(e,t,n)=>{n.r(t),n.d(t,{CONSTANTS:()=>i});var o=n(3133),r=n(4510);const i={URLS:n(577).URLS,APP_SETTINGS:r.APP_SETTINGS,SERVICE_WORKER_TYPES:o.SERVICE_WORKER_TYPES};window.CONSTANTS=i},3133:(e,t,n)=>{n.r(t),n.d(t,{SERVICE_WORKER_TYPES:()=>o});const o={postAction:"POST_ACTION",networkStatus:"NETWORK_STATUS"}},4510:(e,t,n)=>{let o;n.r(t),n.d(t,{APP_SETTINGS:()=>r}),o=!!window.location.href.includes(void 0);const r={production:!0,isClientApp:o}},577:(e,t,n)=>{let o,r,i,s,a,c,u,p,d;if(n.r(t),n.d(t,{URLS:()=>l}),n(4510).APP_SETTINGS.production){const e="akwaabaapp.com/";r="https://api.akwaabaapp.com/",i="https://api."+e,p="akwaabaclients."+e,o="https://"+p,c="https://akwaabaapp."+e,s="https://file-bucket.plusdatabase.com/",a=o+"",u=c+"",d="https://database.akwaabaapp.com/"}else{p="akwaaba-forms/";const e="192.168.173.1";o="http://127.0.0.1:9001/",r="http://"+e+"/AMG/plus_db/api/",i=o+"api/",d="http://"+e+"/AMG/plus_db/client_dashboard/",s="http://"+e+"/AMG/plus_db/file_bucket/",a=o+p,u=o+"akwaaba-forms-public/"}const l={BASE_URL:o,API_BASE_URL:r,PDB_CLIENT:d,AKWAABA_API_BASE_URL:i,FILE_BUCKET_BASE_URL:s,HOME_PAGE_BASE_URL:a,PUBLIC_PAGE_BASE_URL:u,LOGIN_PAGE_BASE_URL:void 0,PUBLIC_LOGIN_PAGE_BASE_URL:void 0,PUBLIC_BASE_URL:"https://akwaabaapp.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/"}},7052:(e,t,n)=>{n.r(t),n.d(t,{base64Encode:()=>r,base64Decode:()=>i});var o=n(8764);const r=(e,t=!1)=>{const n=o.Buffer.from(e).toString("base64");return t?n.replaceAll("=",""):n},i=e=>o.Buffer.from(e,"base64").toString()},1942:(e,t,n)=>{function o(e,t,n=1,o="/"){let r=new Date;r.setHours(r.getHours()+3*n);let s="expires="+r.toUTCString();i(e)!=t&&(document.cookie=e+"="+t+"; "+s+"; path="+o)}function r(e,t,n=1,o="/"){let r=new Date;r.setMinutes(r.getMinutes()+n);let s="expires="+r.toUTCString();i(e)!=t&&(document.cookie=e+"="+t+"; "+s+"; path="+o)}function i(e){e+="=";let t=decodeURIComponent(document.cookie).split(";");for(let n=0;n<t.length;n++){let o=t[n];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}n.r(t),n.d(t,{set_cookies:()=>o,set_cookies_minutes:()=>r,get_cookie:()=>i})},7270:(e,t,n)=>{n.r(t),n.d(t,{http:()=>i});var o=n(7153),r=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function i(e,t,n=!0){return r(this,void 0,void 0,(function*(){let i=null;t=null==t?{method:"GET"}:t;var s=new Headers;if(s.append("Access-Control-Allow-Origin","*/*"),s.append("Accept","application/json, text/plain, */*"),n&&s.append("Content-Type","application/json"),void 0===t.headers)t.headers=s;else for(const e of s.keys())t.headers[e]=s.get(e);return t.mode="cors",t.redirect="follow",yield(0,o.default)(e,t,3e5).then((e=>(i=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>r(this,void 0,void 0,(function*(){return{jsonData:204===e.status?{}:yield e.json(),response:e,error:""}})))).then((e=>r(this,void 0,void 0,(function*(){return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},7153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});function o(e,t,n=7e3){return o=this,r=void 0,s=function*(){return Promise.race([fetch(e,t),new Promise(((e,t)=>{setTimeout((()=>t(new Error("Connection timeout, check network for internet access"))),n)}))])},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,a)}c((s=s.apply(o,r||[])).next())}));var o,r,i,s}},3600:(e,t,n)=>{n.r(t),n.d(t,{setUserLoginInfoCookie:()=>a,LogUserOut:()=>c,getUserLoginInfoCookie:()=>u});var o=n(1566),r=n(7052),i=n(1942);const s="pdb-client-user",a=e=>{const t=JSON.stringify(e);window.supersecret={unknowable:{ops:{email:e.user.email,id:e.user.id,cookieName:s}}},(0,i.set_cookies)(s,"",-1),(0,i.set_cookies)(s,(0,r.base64Encode)(t),3500)},c=()=>{(0,i.set_cookies)(s,"",-1)},u=()=>{if(""===(0,i.get_cookie)(s))return null;{const e=(0,r.base64Decode)((0,i.get_cookie)(s)),t=JSON.parse(e);return(0,o.userLoginInfo_S)(t)}}},1566:(e,t,n)=>{function o(e){const t=e.user;return{expiry:new Date(e.expiry),token:String(e.token),user:{id:Number(t.id),accountId:Number(t.accountId),branchId:Number(t.branchId),firstname:String(t.firstname),surname:String(t.surname),phone:String(t.phone),email:String(t.email),profilePicture:String(t.profilePicture)}}}n.r(t),n.d(t,{userLoginInfo_S:()=>o})}}]);
//# sourceMappingURL=src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a.js.map