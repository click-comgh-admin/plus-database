(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-a4a175"],{3794:(e,t,n)=>{"use strict";n.r(t)},9493:(e,t,n)=>{"use strict";n.r(t)},6660:(e,t,n)=>{"use strict";n.r(t)},2368:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FilterFieldBox:()=>r});var i=n(4672);class r{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__allowed=!1,this.clear_filter=e=>{e.preventDefault();const t=window.FilterFieldBox.form,n=new FormData(t),i=this.unmutableInputNames.map((e=>e.name));n.forEach(((e,t)=>{i.includes(t)||document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=""}))})),this.unmutableInputNames.map((e=>{const t=e.name,n=e.value;void 0!==n&&document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=n}))})),t.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__=(0,i.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){"true"===this.__filtering__&&this.container.hasAttribute("hidden")&&this.filterSectionContextBtn.click()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},367:()=>{},2869:(e,t,n)=>{"use strict";function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericGenderInfo_S:()=>i})},5069:(e,t,n)=>{"use strict";function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericMeetingEventClockingTypeInfo_S:()=>i})},1801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Constituency_S:()=>a,_Constituency_D:()=>o});var i=n(6909),r=n(7202);function a(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),districtId:"districtId"in e?(0,i.District_S)(e.districtId):(0,i._District_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,r._Region_D)(),districtId:(0,i._District_D)(),location:"-"}}},9492:(e,t,n)=>{"use strict";function i(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function r(){return{id:0,name:"-",short:"-",code:"-"}}n.r(t),n.d(t,{Country_S:()=>i,_Country_D:()=>r})},6909:(e,t,n)=>{"use strict";n.r(t),n.d(t,{District_S:()=>r,_District_D:()=>a});var i=n(7202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),location:String(e.location)}}function a(){return{id:0,regionId:(0,i._Region_D)(),location:"-"}}},8769:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ElectoralArea_S:()=>a,_ElectoralArea_D:()=>o});var i=n(6909),r=n(7202);function a(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),districtId:"districtId"in e?(0,i.District_S)(e.districtId):(0,i._District_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,r._Region_D)(),districtId:(0,i._District_D)(),location:"-"}}},7202:(e,t,n)=>{"use strict";function i(e){return{id:Number(e.id),location:String(e.location)}}function r(){return{id:0,location:"-"}}n.r(t),n.d(t,{Region_S:()=>i,_Region_D:()=>r})},3437:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GroupingsGroup_S:()=>r});var i=n(267);function r(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},267:(e,t,n)=>{"use strict";function i(e){return{id:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}n.r(t),n.d(t,{GroupingsMemberCategories_S:()=>i})},660:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GroupingsSubGroup_S:()=>r}),n(2892);var i=n(267);function r(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},6246:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MembershipUser_S:()=>l});var i=n(1801),r=n(9492),a=n(6909),o=n(8769),s=n(7202);function l(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:String(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:String(e.referenceId),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,r.Country_S)(e.countryInfo):(0,r._Country_D)(),regionInfo:"regionInfo"in e?(0,s.Region_S)(e.regionInfo):(0,s._Region_D)(),districtInfo:"districtInfo"in e?(0,a.District_S)(e.districtInfo):(0,a._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,i.Constituency_S)(e.constituencyInfo):(0,i._Constituency_D)(),electoralareaInfo:"electoralareaInfo"in e?(0,o.ElectoralArea_S)(e.electoralareaInfo):(0,o._ElectoralArea_D)()}}},1148:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_DayOfWeek:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},8698:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{a(c.next(e))}catch(e){t(e)}}function r(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}a((c=c.apply(n,s||[])).next())}));var n,s,l,c}},7824:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{a(c.next(e))}catch(e){t(e)}}function r(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}a((c=c.apply(n,s||[])).next())}));var n,s,l,c}},4843:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleGroup:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{a(c.next(e))}catch(e){t(e)}}function r(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}a((c=c.apply(n,s||[])).next())}));var n,s,l,c}},2734:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleFromDate:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{a(c.next(e))}catch(e){t(e)}}function r(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}a((c=c.apply(n,s||[])).next())}));var n,s,l,c}},1694:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleNow:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=""){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},7435:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleToday:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=""){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},6972:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleUpcoming:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=""){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},2218:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceSchedule:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{a(c.next(e))}catch(e){t(e)}}function r(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}a((c=c.apply(n,s||[])).next())}));var n,s,l,c}},8786:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceScheduleSubGroup:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{a(c.next(e))}catch(e){t(e)}}function r(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}a((c=c.apply(n,s||[])).next())}));var n,s,l,c}},7553:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_GenericGender:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},4115:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_GenericMeetingEventClockingType:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},2892:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},72:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},9605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>s});var i=n(8485),r=n(7270),a=n(4492),o=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e),s=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{o(l.next(e))}catch(e){i(e)}}function a(e){try{o(l.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}o((l=l.apply(t,n||[])).next())}));var t,n,s,l}},6883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{_DATATABLES_:()=>l});var i,r=n(5862),a=n(9662),o=(n(367),n(9493),function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.html`
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
  `}thead(){return r.html`
      ${this.dt_head.map((e=>r.html`<th>${e.title}</th>`))}
    `}tbody(){return r.html`
      ${this.dt_body.map((e=>r.html`<tr>${e.map((e=>r.html`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return r.html`
    ${this.dt_foot.map((e=>r.html`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const n=this.ajaxHeader[e];t[e]=n}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[r.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],o([(0,a.property)({type:Number}),s("design:type",Number)],l.prototype,"randomID1",void 0),o([(0,a.property)({type:Number}),s("design:type",Number)],l.prototype,"randomID2",void 0),o([(0,a.property)({type:String}),s("design:type",String)],l.prototype,"ID",void 0),o([(0,a.property)({type:Object}),s("design:type","function"==typeof(i="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?i:Object)],l.prototype,"datatable",void 0),o([(0,a.property)({type:Array}),s("design:type",Array)],l.prototype,"dt_head",void 0),o([(0,a.property)({type:Array}),s("design:type",Array)],l.prototype,"dt_foot",void 0),o([(0,a.property)({type:Array}),s("design:type",Array)],l.prototype,"dt_body",void 0),o([(0,a.property)(),s("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=o([(0,a.customElement)("datatables-new"),s("design:paramtypes",[])],l)},3690:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SwitchInput:()=>s});var i=n(5862),r=n(9662),a=(n(9975),n(6788),function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected}createRenderRoot(){return this}};s.styles=[i.css`
      :host {
        display: block;
      }
    `],a([(0,r.property)({type:String}),o("design:type",String)],s.prototype,"name",void 0),a([(0,r.property)({type:String}),o("design:type",String)],s.prototype,"label",void 0),a([(0,r.property)({type:Boolean}),o("design:type",Boolean)],s.prototype,"selected",void 0),a([(0,r.property)({type:String}),o("design:type",String)],s.prototype,"value",void 0),a([(0,r.property)({type:Boolean}),o("design:type",Boolean)],s.prototype,"isSelected",void 0),s=a([(0,r.customElement)("switch-input")],s)},8281:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UserProfilePhoto:()=>l});var i=n(8485),r=n(5862),a=n(9662),o=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return r.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],o([(0,a.property)({type:String}),s("design:type",String)],l.prototype,"url",void 0),o([(0,a.property)({type:String}),s("design:type",String)],l.prototype,"type",void 0),o([(0,a.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"rounded",void 0),o([(0,a.property)({type:String}),s("design:type",String)],l.prototype,"click-to-open",void 0),o([(0,a.property)({type:Number}),s("design:type",Number)],l.prototype,"size",void 0),l=o([(0,a.customElement)("user-profile-photo"),s("design:paramtypes",[])],l)},997:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PdbAttendanceClockingClockerMeetingPicker:()=>E}),n(3794);var i,r,a,o,s,l=n(5862),c=n(9662),d=n(7725),u=n(7052),h=n(4672),p=(n(1511),n(2715),n(8763),n(5474),n(6163),n(2583)),m=n(2506),g=n(3600),y=n(3283),f=n(1694),v=n(7435),b=n(2734),_=n(6972),S=(n(3690),n(1148)),w=n(8698),A=n(7824),I=n(8881),k=n(2218),D=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},N=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},B=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};let E=class extends l.LitElement{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return B(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,g.getUserLoginInfoCookie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return l.html`
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
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?l.html`
        ${this.nowSectionData}
      `:2===this.formId?l.html`
        ${this.upcomingSectionData}
      `:3===this.formId?l.html`
        ${this.todaySectionData}
      `:4===this.formId?l.html`
        ${this.dateSectionData}
      `:(console.log({"this.allMeetingsSectionData":this.allMeetingsSectionData}),l.html`
        ${this.allMeetingsSectionData}
      `)}get notFound(){const e=l.html`<h4 class="text-white">Empty</h4>`,t=l.html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return l.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:l.html`
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:l.html`
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:l.html`
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=l.html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return l.html`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?l.html`${e}${this.notFound}`:l.html`
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return l.html`
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,u.base64Encode)(String(t),!0),i=this.getTime(String(e.startTime)),r=this.getTime(String(e.closeTime));return l.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${i} - To: ${r} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,I.until)(this.getAttendanceScheduleDay(t),l.html`<span>Loading...</span>`):(0,I.until)(this.getAttendanceScheduleDate(t),l.html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,h.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,u.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,m.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,p.ClientUserAccess_S)(e)).page.id}))}}))}getAttendanceAllSchedules(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,k.GET_AttendanceSchedule)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));console.log({_networkResponse:t}),null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,f.GET_AttendanceScheduleNow)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,_.GET_AttendanceScheduleUpcoming)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,v.GET_AttendanceScheduleToday)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_AttendanceScheduleFromDate)(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return B(this,void 0,void 0,(function*(){const t=yield(0,A.GET_AttendanceScheduleDay)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return l.html`<li class="border p-1">Every ${(0,I.until)(this.getDayOfWeek(t),l.html`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return l.html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return B(this,void 0,void 0,(function*(){const t=yield(0,S.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return B(this,void 0,void 0,(function*(){const t=yield(0,w.GET_AttendanceScheduleDate)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return l.html`<li class="border p-1">On ${t}</li>`}));return l.html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};E.styles=[l.css`
   :host { display: block; }
  `],D([(0,c.query)("#getNowMeetingsBtn"),N("design:type","function"==typeof(i=void 0!==y.Button&&y.Button)?i:Object)],E.prototype,"getNowMeetingsBtn",void 0),D([(0,c.query)("#getAllMeetingsBtn"),N("design:type","function"==typeof(r=void 0!==y.Button&&y.Button)?r:Object)],E.prototype,"getAllMeetingsBtn",void 0),D([(0,c.query)("#getTodayMeetingsBtn"),N("design:type","function"==typeof(a=void 0!==y.Button&&y.Button)?a:Object)],E.prototype,"getTodayMeetingsBtn",void 0),D([(0,c.query)("#getUpcomingMeetingsBtn"),N("design:type","function"==typeof(o=void 0!==y.Button&&y.Button)?o:Object)],E.prototype,"getUpcomingMeetingsBtn",void 0),D([(0,c.query)("#getDateMeetingsBtn"),N("design:type","function"==typeof(s=void 0!==y.Button&&y.Button)?s:Object)],E.prototype,"getDateMeetingsBtn",void 0),D([(0,c.property)({type:String}),N("design:type",String)],E.prototype,"todayDate",void 0),D([(0,c.property)({type:Number}),N("design:type",Number)],E.prototype,"meetingEventId",void 0),D([(0,c.property)({type:Number}),N("design:type",Number)],E.prototype,"loggedUserId",void 0),D([(0,c.property)({type:Number}),N("design:type",Number)],E.prototype,"formId",void 0),D([(0,c.property)({type:Boolean}),N("design:type",Boolean)],E.prototype,"allowFetch",void 0),D([(0,c.property)({type:Boolean}),N("design:type",Boolean)],E.prototype,"recurring",void 0),D([(0,c.property)({type:String}),N("design:type",String)],E.prototype,"openContentBaseUrl",void 0),D([(0,c.property)({type:String}),N("design:type",String)],E.prototype,"openMeetingEventBaseUrl",void 0),D([(0,c.property)({type:Array}),N("design:type",Array)],E.prototype,"_pageAccesses",void 0),D([(0,c.property)({type:Array}),N("design:type",Array)],E.prototype,"_activeBranchId",void 0),D([(0,c.property)({type:Array}),N("design:type",Array)],E.prototype,"_userLoginInfo",void 0),E=D([(0,c.customElement)("pdb-attendance-clocking-meeting-picker"),N("design:paramtypes",[])],E)},3629:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>c}),n(6660);var i=n(5862),r=n(9662),a=n(72),o=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};let c=class extends i.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?i.html`
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
    `}firstUpdated(){}getMemberCategories(){return l(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],o([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"material",void 0),o([(0,r.property)({type:Number}),s("design:type",Number)],c.prototype,"defaultValue",void 0),o([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"label",void 0),o([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"name",void 0),o([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"id",void 0),o([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"tag_class",void 0),o([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"css_style",void 0),o([(0,r.property)({type:Array}),s("design:type",Array)],c.prototype,"_memberCategories",void 0),c=o([(0,r.customElement)("pdb-membership-select-member-type"),s("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-a4a175.js.map