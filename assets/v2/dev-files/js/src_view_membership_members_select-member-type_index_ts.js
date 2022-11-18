"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_membership_members_select-member-type_index_ts"],{26660:(e,t,i)=>{i.r(t)},90072:(e,t,i)=>{i.r(t),i.d(t,{GET_MemberGroupingsMemberCategories:()=>a});var s=i(48485),r=i(87270),l=i(14492),n=i(33600);function a(e=null){return t=this,i=void 0,o=function*(){const t=(0,n.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),a=yield(0,r.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,s){function r(e){try{n(o.next(e))}catch(e){s(e)}}function l(e){try{n(o.throw(e))}catch(e){s(e)}}function n(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(r,l)}n((o=o.apply(t,i||[])).next())}));var t,i,a,o}},43629:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipSelectMemberType:()=>c}),i(26660);var s=i(85862),r=i(59662),l=i(90072),n=function(e,t,i,s){var r,l=arguments.length,n=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(l<3?r(n):l>3?r(t,i,n):r(t,i))||n);return l>3&&n&&Object.defineProperty(t,i,n),n},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,i,s){return new(i||(i=Promise))((function(r,l){function n(e){try{o(s.next(e))}catch(e){l(e)}}function a(e){try{o(s.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}o((s=s.apply(e,t||[])).next())}))};let c=class extends s.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.selectedCategory=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?s.html`
        ${this.materialSelectField}
      `:s.html`
        ${this.selectField}
      `}get materialSelectField(){return null===this.defaultValue?s.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>s.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `:s.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>this.defaultValue===e.id?s.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:s.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `}get selectField(){let e=s.html``;return e=null===this.defaultValue?s.html`
      <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}">
				<option value="0">${this.label}</option>
        ${this._memberCategories.map((e=>s.html`<option value="${e.id}">${e.category}</option>`))}
			</select>
    `:s.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>this.defaultValue===e.id?s.html`<option value="${e.id}" selected>${e.category}</option>`:s.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `,s.html`
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
    `}firstUpdated(){}getMemberCategories(){return o(this,void 0,void 0,(function*(){const e=yield(0,l.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};c.styles=[s.css`
   :host { display: block; }
  `],n([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"material",void 0),n([(0,r.property)({type:Number}),a("design:type",Number)],c.prototype,"defaultValue",void 0),n([(0,r.property)({type:Number}),a("design:type",Number)],c.prototype,"selectedCategory",void 0),n([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"label",void 0),n([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"name",void 0),n([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"id",void 0),n([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"tag_class",void 0),n([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"css_style",void 0),n([(0,r.property)({type:Array}),a("design:type",Array)],c.prototype,"_memberCategories",void 0),c=n([(0,r.customElement)("pdb-membership-select-member-type"),a("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_view_membership_members_select-member-type_index_ts.js.map