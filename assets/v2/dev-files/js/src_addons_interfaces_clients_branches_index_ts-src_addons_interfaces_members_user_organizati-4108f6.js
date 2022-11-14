"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_clients_branches_index_ts-src_addons_interfaces_members_user_organizati-4108f6"],{61489:(n,t,e)=>{function s(n){return{id:Number(n.id),name:String(n.name),accountId:Number(n.accountId),createdBy:Number(n.createdBy),creationDate:new Date(n.creationDate),updatedBy:Number(n.updatedBy),updateDate:new Date(n.updateDate)}}function o(n){return{id:Number(n.id),name:String(n.name),accountId:Number(n.accountId)}}e.r(t),e.d(t,{ClientBranch_S:()=>s,clientBranchInfo_S:()=>o})},18530:(n,t,e)=>{e.r(t),e.d(t,{Convert:()=>s,typeMap:()=>c});class s{static toMembershipOrganizationUserModel(n){return l(JSON.parse(n),j("MembershipOrganizationUserModel"),r)}static membershipOrganizationUserModelToJson(n){return JSON.stringify(l(n,j("MembershipOrganizationUserModel"),a),null,2)}}function o(n,t,e=""){e&&console.log(`Invalid value for key "${e}". Expected type ${JSON.stringify(n)} but got ${JSON.stringify(t)}`),console.log(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(n)}`)}function r(n){if(void 0===n.jsonToJS){const t={};n.props.forEach((n=>t[n.json]={key:n.js,typ:n.typ})),n.jsonToJS=t}return n.jsonToJS}function a(n){if(void 0===n.jsToJSON){const t={};n.props.forEach((n=>t[n.js]={key:n.json,typ:n.typ})),n.jsToJSON=t}return n.jsToJSON}function l(n,t,e,s=""){if("any"===t)return n;if(null===t&&null===n)return n;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(n,t){return-1!==n.indexOf(t)?t:o(n,t)}(t,n):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(n,t){const s=n.length;for(let o=0;o<s;o++){const s=n[o];try{return l(t,s,e)}catch(n){}}return o(n,t)}(t.unionMembers,n):t.hasOwnProperty("arrayItems")?function(n,t){return Array.isArray(t)?t.map((t=>l(t,n,e))):o("array",t)}(t.arrayItems,n):t.hasOwnProperty("props")?function(n,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return o("object",s);const r={};return Object.getOwnPropertyNames(n).forEach((t=>{const o=n[t],a=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;r[o.key]=l(a,o.typ,e,o.key)})),Object.getOwnPropertyNames(s).forEach((o=>{Object.prototype.hasOwnProperty.call(n,o)||(r[o]=l(s[o],t,e,o))})),r}(e(t),t.additional,n):o(t,n):t===Date&&"number"!=typeof n?function(n){if(null===n)return null;const t=new Date(n);return isNaN(t.valueOf())?o("Date",n):t}(n):function(n,t){return typeof n==typeof t?t:o(n,t,s)}(t,n)}}function i(...n){return{unionMembers:n}}function u(n,t){return{props:n,additional:t}}function j(n){return{ref:n}}const c={MembershipOrganizationUserModel:u([{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"organizationName",js:"organizationName",typ:i(null,"")},{json:"contactPersonName",js:"contactPersonName",typ:i(null,"")},{json:"organizationType",js:"organizationType",typ:i(null,j("OrganizationType"))},{json:"businessRegistered",js:"businessRegistered",typ:i(null,!0)},{json:"organizationPhone",js:"organizationPhone",typ:i(null,"")},{json:"organizationEmail",js:"organizationEmail",typ:i(null,"")},{json:"contactPersonGender",js:"contactPersonGender",typ:i(null,0)},{json:"contactPersonPhoto",js:"contactPersonPhoto",typ:i(null,"")},{json:"dateOfIncorporation",js:"dateOfIncorporation",typ:i(null,Date)},{json:"logo",js:"logo",typ:i(null,"")},{json:"contactPersonPhone",js:"contactPersonPhone",typ:i(null,"")},{json:"contactPersonEmail",js:"contactPersonEmail",typ:i(null,"")},{json:"countryOfBusiness",js:"countryOfBusiness",typ:i(null,"")},{json:"stateProvince",js:"stateProvince",typ:i(null,"")},{json:"region",js:"region",typ:i(null,0)},{json:"district",js:"district",typ:i(null,0)},{json:"constituency",js:"constituency",typ:i(null,0)},{json:"electoralArea",js:"electoralArea",typ:i(null,0)},{json:"community",js:"community",typ:i(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:i(null,"")},{json:"level",js:"level",typ:i(null,0)},{json:"status",js:"status",typ:i(null,0)},{json:"accountType",js:"accountType",typ:i(null,0)},{json:"memberType",js:"memberType",typ:i(null,0)},{json:"date",js:"date",typ:i(null,Date)},{json:"last_login",js:"lastLogin",typ:i(null,Date)},{json:"referenceId",js:"referenceID",typ:i(null,"")},{json:"branchId",js:"branchID",typ:i(null,0)},{json:"certificates",js:"certificates",typ:i(null,(p=j("Certificate"),{arrayItems:p}))}],!1),Certificate:u([{json:"id",js:"id",typ:i(null,0)},{json:"memberId",js:"memberID",typ:i(null,0)},{json:"attachment",js:"attachment",typ:i(null,j("Attachment"))},{json:"date",js:"date",typ:i(null,Date)}],!1),Attachment:u([{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"attachment",js:"attachment",typ:i(null,"")},{json:"filename",js:"filename",typ:i(null,"")},{json:"source",js:"source",typ:i(null,"")},{json:"size",js:"size",typ:i(null,"")},{json:"folderId",js:"folderID",typ:i(null,j("FolderID"))},{json:"fileDescription",js:"fileDescription",typ:i(null,"")},{json:"createdBy",js:"createdBy",typ:i(null,0)},{json:"updatedBy",js:"updatedBy",typ:i(null,0)},{json:"updateDate",js:"updateDate",typ:i(null,Date)},{json:"archived",js:"archived",typ:i(null,!0)},{json:"archivedBy",js:"archivedBy",typ:i(null,0)},{json:"archivedDate",js:"archivedDate",typ:i(null,Date)},{json:"date",js:"date",typ:i(null,Date)}],!1),FolderID:u([{json:"id",js:"id",typ:i(null,0)},{json:"parentFolder",js:"parentFolder",typ:i(null,null)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"branchId",js:"branchID",typ:i(null,0)},{json:"folder",js:"folder",typ:i(null,"")},{json:"folderType",js:"folderType",typ:i(null,0)},{json:"createdBy",js:"createdBy",typ:i(null,0)},{json:"updatedBy",js:"updatedBy",typ:i(null,0)},{json:"updateDate",js:"updateDate",typ:i(null,Date)},{json:"date",js:"date",typ:i(null,Date)}],!1),OrganizationType:u([{json:"id",js:"id",typ:i(null,0)},{json:"memberId",js:"memberID",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"type",js:"type",typ:i(null,"")},{json:"createdBy",js:"createdBy",typ:i(null,0)},{json:"updatedBy",js:"updatedBy",typ:i(null,0)},{json:"updateDate",js:"updateDate",typ:i(null,Date)},{json:"date",js:"date",typ:i(null,Date)}],!1)};var p}}]);
//# sourceMappingURL=src_addons_interfaces_clients_branches_index_ts-src_addons_interfaces_members_user_organizati-4108f6.js.map