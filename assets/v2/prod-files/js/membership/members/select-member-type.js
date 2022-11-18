"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4814],{72:(e,t,i)=>{i.d(t,{L:()=>l});var s=i(771),n=i(7270),a=i(596),r=i(3600);function l(e=null){return t=this,i=void 0,o=function*(){const t=(0,r.Ie)(),i=s.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),l=yield(0,n.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,s){function n(e){try{r(o.next(e))}catch(e){s(e)}}function a(e){try{r(o.throw(e))}catch(e){s(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}r((o=o.apply(t,i||[])).next())}));var t,i,l,o}},3629:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipSelectMemberType:()=>d});var s=i(9392),n=i(9662),a=i(5713),r=i(72),l=function(e,t,i,s){var n,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,i,s){return new(i||(i=Promise))((function(n,a){function r(e){try{o(s.next(e))}catch(e){a(e)}}function l(e){try{o(s.throw(e))}catch(e){a(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}o((s=s.apply(e,t||[])).next())}))};let d=class extends s.oi{constructor(){super(),this.material="true",this.defaultValue=null,this.selectedCategory=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?s.dy`
        ${this.materialSelectField}
      `:s.dy`
        ${this.selectField}
      `}get materialSelectField(){return null===this.defaultValue?s.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>s.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `:s.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>this.defaultValue===e.id?s.dy`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:s.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `}get selectField(){let e=s.dy``;return e=null===this.defaultValue?s.dy`
      <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}">
				<option value="0">${this.label}</option>
        ${this._memberCategories.map((e=>s.dy`<option value="${e.id}">${e.category}</option>`))}
			</select>
    `:s.dy`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>this.defaultValue===e.id?s.dy`<option value="${e.id}" selected>${e.category}</option>`:s.dy`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `,s.dy`
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
    `}firstUpdated(){}getMemberCategories(){return c(this,void 0,void 0,(function*(){const e=yield(0,r.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};d.styles=[s.iv`
   :host { display: block; }
  `],l([(0,n.C)({type:String}),o("design:type",String)],d.prototype,"material",void 0),l([(0,n.C)({type:Number}),o("design:type",Number)],d.prototype,"defaultValue",void 0),l([(0,n.C)({type:Number}),o("design:type",Number)],d.prototype,"selectedCategory",void 0),l([(0,n.C)({type:String}),o("design:type",String)],d.prototype,"label",void 0),l([(0,n.C)({type:String}),o("design:type",String)],d.prototype,"name",void 0),l([(0,n.C)({type:String}),o("design:type",String)],d.prototype,"id",void 0),l([(0,n.C)({type:String}),o("design:type",String)],d.prototype,"tag_class",void 0),l([(0,n.C)({type:String}),o("design:type",String)],d.prototype,"css_style",void 0),l([(0,n.C)({type:Array}),o("design:type",Array)],d.prototype,"_memberCategories",void 0),d=l([(0,a.M)("pdb-membership-select-member-type"),o("design:paramtypes",[])],d)}},e=>(e.O(0,[2185,2459,5291,6553,3712],(()=>(3629,e(e.s=3629)))),e.O())])}));
//# sourceMappingURL=select-member-type.js.map