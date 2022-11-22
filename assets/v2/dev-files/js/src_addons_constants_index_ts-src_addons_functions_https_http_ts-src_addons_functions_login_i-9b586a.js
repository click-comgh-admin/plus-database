"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a"],{48485:(e,t,n)=>{n.r(t),n.d(t,{CONSTANTS:()=>s});var o=n(43133),r=n(4510);const s={URLS:n(50577).URLS,APP_SETTINGS:r.APP_SETTINGS,SERVICE_WORKER_TYPES:o.SERVICE_WORKER_TYPES};window.CONSTANTS=s},43133:(e,t,n)=>{n.r(t),n.d(t,{SERVICE_WORKER_TYPES:()=>o});const o={postAction:"POST_ACTION",networkStatus:"NETWORK_STATUS"}},4510:(e,t,n)=>{let o;n.r(t),n.d(t,{APP_SETTINGS:()=>r}),o=!!window.location.href.includes(void 0);const r={production:!1,isClientApp:o}},50577:(e,t,n)=>{let o,r,s,i,a,c,u,d,p,l;if(n.r(t),n.d(t,{URLS:()=>f}),n(4510).APP_SETTINGS.production){const e="akwaabasoftware.com/";r="https://db-api.akwaabasoftware.com/",s="https://db-api-v2."+e,p="akwaabaclients."+e,o="https://"+p,u="https://akwaabaapp."+e,i="https://file-bucket.akwaabasoftware.com/",a=o+"",d=u+"",l="https://database.akwaabasoftware.com/",c=l+"login"}else{p="akwaaba-forms/";const e="192.168.173.1";o="http://127.0.0.1:9001/",r="http://"+e+"/AMG/plus_db/api/",s=o+"api/",l="http://"+e+":82/",i="http://"+e+"/AMG/plus_db/file_bucket/",a=o+p,d=o+"akwaaba-forms-public/",c=l+"login"}const f={BASE_URL:o,API_BASE_URL:r,PDB_CLIENT:l,AKWAABA_API_BASE_URL:s,FILE_BUCKET_BASE_URL:i,HOME_PAGE_BASE_URL:a,PUBLIC_PAGE_BASE_URL:d,LOGIN_PAGE_BASE_URL:c,PUBLIC_LOGIN_PAGE_BASE_URL:void 0,PUBLIC_BASE_URL:"https://akwaabasoftware.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/"}},67052:(e,t,n)=>{n.r(t),n.d(t,{base64Encode:()=>r,base64Decode:()=>s});var o=n(48764);const r=(e,t=!1)=>{const n=o.Buffer.from(e).toString("base64");return t?n.replaceAll("=",""):n},s=e=>o.Buffer.from(e,"base64").toString()},21942:(e,t,n)=>{function o(e,t,n=1,o="/"){let r=new Date;r.setHours(r.getHours()+3*n);let i="expires="+r.toUTCString();s(e)!=t&&(document.cookie=e+"="+t+"; "+i+"; path="+o)}function r(e,t,n=1,o="/"){let r=new Date;r.setMinutes(r.getMinutes()+n);let i="expires="+r.toUTCString();s(e)!=t&&(document.cookie=e+"="+t+"; "+i+"; path="+o)}function s(e){e+="=";let t=decodeURIComponent(document.cookie).split(";");for(let n=0;n<t.length;n++){let o=t[n];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}n.r(t),n.d(t,{set_cookies:()=>o,set_cookies_minutes:()=>r,get_cookie:()=>s})},87270:(e,t,n)=>{n.r(t),n.d(t,{http:()=>s});var o=n(67153),r=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};function s(e,t,n=!0,s=!1){return r(this,void 0,void 0,(function*(){let i=null;t=null==t?{method:"GET"}:t;var a=new Headers;if(a.append("Access-Control-Allow-Origin","*/*"),a.append("Accept","application/json, text/plain, */*"),n&&a.append("Content-Type","application/json"),void 0===t.headers)t.headers=a;else for(const e of a.keys())t.headers[e]=a.get(e);return t.mode="cors",t.redirect="follow",yield(0,o.default)(e,t,3e5).then((e=>(i=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>r(this,void 0,void 0,(function*(){const t=204===e.status?{}:yield e.json();return s?{jsonData:{success:!0,message:"",data:t},response:e,error:""}:{jsonData:t,response:e,error:""}})))).then((e=>r(this,void 0,void 0,(function*(){return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},67153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});function o(e,t,n=7e3){return o=this,r=void 0,i=function*(){return Promise.race([fetch(e,t),new Promise(((e,t)=>{setTimeout((()=>t(new Error("Connection timeout, check network for internet access"))),n)}))])},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof s?o:new s((function(e){e(o)}))).then(n,a)}c((i=i.apply(o,r||[])).next())}));var o,r,s,i}},33600:(e,t,n)=>{n.r(t),n.d(t,{setUserLoginInfoCookie:()=>a,LogUserOut:()=>c,getUserLoginInfoCookie:()=>u});var o=n(1566),r=n(67052),s=n(21942);const i="pdb-client-user",a=e=>{const t=JSON.stringify(e);window.supersecret={unknowable:{ops:{email:e.user.email,id:e.user.id,cookieName:i}}},(0,s.set_cookies)(i,"",-1),(0,s.set_cookies)(i,(0,r.base64Encode)(t),3500)},c=()=>{(0,s.set_cookies)(i,"",-1)},u=()=>{if(""===(0,s.get_cookie)(i))return null;{const e=(0,r.base64Decode)((0,s.get_cookie)(i)),t=JSON.parse(e);return(0,o.userLoginInfo_S)(t)}}},1566:(e,t,n)=>{function o(e){const t=e.user;return{expiry:new Date(e.expiry),token:String(e.token),user:{id:Number(t.id),accountId:Number(t.accountId),branchId:Number(t.branchId),firstname:String(t.firstname),surname:String(t.surname),phone:String(t.phone),email:String(t.email),profilePicture:String(t.profilePicture)}}}n.r(t),n.d(t,{userLoginInfo_S:()=>o})}}]);
//# sourceMappingURL=src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a.js.map