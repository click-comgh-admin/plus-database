"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_admin_register_main_scss-src_addons_functions_views_home_branch_index-b59972"],{95358:(e,t,i)=>{i.r(t)},91243:(e,t,i)=>{i.r(t)},17725:(e,t,i)=>{i.r(t),i.d(t,{setActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>a,getActiveBranchIdCookie:()=>p});var r=i(67052),o=i(21942),s=i(61489);const n="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,o.set_cookies)(n,"",-1),(0,o.set_cookies)(n,(0,r.base64Encode)(t),3500)};function a(){(0,o.set_cookies)(n,"",-1)}const p=()=>{if(""===(0,o.get_cookie)(n))return null;{const e=(0,r.base64Decode)((0,o.get_cookie)(n)),t=JSON.parse(e);return(0,s.clientBranchInfo_S)(t)}}},61489:(e,t,i)=>{function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}i.r(t),i.d(t,{ClientBranch_S:()=>r,clientBranchInfo_S:()=>o})},37725:(e,t,i)=>{i.r(t),i.d(t,{FileInput:()=>l});var r=i(85862),o=i(59662),s=(i(29975),i(23283),i(91243),function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.nothing}
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.nothing}
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.nothing}
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.nothing}
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"name",void 0),s([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"label",void 0),s([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"value",void 0),s([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID",void 0),s([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"id",void 0),s([(0,o.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"required",void 0),s([(0,o.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"hasLabel",void 0),s([(0,o.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,o.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,o.customElement)("file-input")],l)},43690:(e,t,i)=>{i.r(t),i.d(t,{SwitchInput:()=>l});var r=i(85862),o=i(59662),s=(i(29975),i(16788),function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return r.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?r.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:r.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[r.css`
      :host {
        display: block;
      }
    `],s([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"name",void 0),s([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"label",void 0),s([(0,o.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"value",void 0),s([(0,o.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,o.customElement)("switch-input")],l)}}]);
//# sourceMappingURL=src_assets_styles_views_admin_register_main_scss-src_addons_functions_views_home_branch_index-b59972.js.map