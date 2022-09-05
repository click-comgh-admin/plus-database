"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_clients_account_category_index_ts-src_addons_interfaces_location_countr-81861f"],{5102:(t,r,n)=>{n.r(r),n.d(r,{Convert:()=>e,typeMap:()=>u});class e{static toClientAccountCategoryModel(t){return c(JSON.parse(t),y("ClientAccountCategoryModel"),s)}static clientAccountCategoryModelToJson(t){return JSON.stringify(c(t,y("ClientAccountCategoryModel"),a),null,2)}}function o(t,r,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(t)} but got ${JSON.stringify(r)}`),console.error(`Invalid value ${JSON.stringify(r)} for type ${JSON.stringify(t)}`)}function s(t){if(void 0===t.jsonToJS){const r={};t.props.forEach((t=>r[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=r}return t.jsonToJS}function a(t){if(void 0===t.jsToJSON){const r={};t.props.forEach((t=>r[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=r}return t.jsToJSON}function c(t,r,n,e=""){if("any"===r)return t;if(null===r&&null===t)return t;if(!1!==r){for(;"object"==typeof r&&void 0!==r.ref;)r=u[r.ref];return Array.isArray(r)?function(t,r){return-1!==t.indexOf(r)?r:o(t,r)}(r,t):"object"==typeof r?r.hasOwnProperty("unionMembers")?function(t,r){const e=t.length;for(let o=0;o<e;o++){const e=t[o];try{return c(r,e,n)}catch(t){}}return o(t,r)}(r.unionMembers,t):r.hasOwnProperty("arrayItems")?function(t,r){return Array.isArray(r)?r.map((r=>c(r,t,n))):o("array",r)}(r.arrayItems,t):r.hasOwnProperty("props")?function(t,r,e){if(null===e||"object"!=typeof e||Array.isArray(e))return o("object",e);const s={};return Object.getOwnPropertyNames(t).forEach((r=>{const o=t[r],a=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;s[o.key]=c(a,o.typ,n,o.key)})),Object.getOwnPropertyNames(e).forEach((o=>{Object.prototype.hasOwnProperty.call(t,o)||(s[o]=c(e[o],r,n,o))})),s}(n(r),r.additional,t):o(r,t):r===Date&&"number"!=typeof t?function(t){if(null===t)return null;const r=new Date(t);return isNaN(r.valueOf())?o("Date",t):r}(t):function(t,r){return typeof t==typeof r?r:o(t,r,e)}(r,t)}}function i(...t){return{unionMembers:t}}function y(t){return{ref:t}}const u={ClientAccountCategoryModel:(p=[{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"category",js:"category",typ:i(null,"")},{json:"createdBy",js:"createdBy",typ:i(null,0)},{json:"updatedBy",js:"updatedBy",typ:i(null,0)},{json:"updateDate",js:"updateDate",typ:i(null,Date)},{json:"date",js:"date",typ:i(null,Date)}],!1,{props:p,additional:false})};var p},2761:(t,r,n)=>{n.r(r),n.d(r,{Convert:()=>e,typeMap:()=>y});class e{static toCountryModel(t){return c(JSON.parse(t),i("LocationCountryModel"),s)}static countryModelToJson(t){return JSON.stringify(c(t,i("LocationCountryModel"),a),null,2)}}function o(t,r,n=""){if(n)throw Error(`Invalid value for key "${n}". Expected type ${JSON.stringify(t)} but got ${JSON.stringify(r)}`);throw Error(`Invalid value ${JSON.stringify(r)} for type ${JSON.stringify(t)}`)}function s(t){if(void 0===t.jsonToJS){const r={};t.props.forEach((t=>r[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=r}return t.jsonToJS}function a(t){if(void 0===t.jsToJSON){const r={};t.props.forEach((t=>r[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=r}return t.jsToJSON}function c(t,r,n,e=""){if("any"===r)return t;if(null===r)return null===t?t:o(r,t);if(!1===r)return o(r,t);for(;"object"==typeof r&&void 0!==r.ref;)r=y[r.ref];return Array.isArray(r)?function(t,r){return-1!==t.indexOf(r)?r:o(t,r)}(r,t):"object"==typeof r?r.hasOwnProperty("unionMembers")?function(t,r){const e=t.length;for(let o=0;o<e;o++){const e=t[o];try{return c(r,e,n)}catch(t){}}return o(t,r)}(r.unionMembers,t):r.hasOwnProperty("arrayItems")?function(t,r){return Array.isArray(r)?r.map((r=>c(r,t,n))):o("array",r)}(r.arrayItems,t):r.hasOwnProperty("props")?function(t,r,e){if(null===e||"object"!=typeof e||Array.isArray(e))return o("object",e);const s={};return Object.getOwnPropertyNames(t).forEach((r=>{const o=t[r],a=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;s[o.key]=c(a,o.typ,n,o.key)})),Object.getOwnPropertyNames(e).forEach((o=>{Object.prototype.hasOwnProperty.call(t,o)||(s[o]=c(e[o],r,n,o))})),s}(n(r),r.additional,t):o(r,t):r===Date&&"number"!=typeof t?function(t){if(null===t)return null;const r=new Date(t);return isNaN(r.valueOf())?o("Date",t):r}(t):function(t,r){return typeof t==typeof r?r:o(t,r,e)}(r,t)}function i(t){return{ref:t}}const y={LocationCountryModel:(u=[{json:"id",js:"id",typ:0},{json:"name",js:"name",typ:""},{json:"short",js:"short",typ:""},{json:"code",js:"code",typ:""}],!1,{props:u,additional:false})};var u}}]);
//# sourceMappingURL=src_addons_interfaces_clients_account_category_index_ts-src_addons_interfaces_location_countr-81861f.js.map