import{c as Qe,d as Je,e as We,f as Ze,h as Ke}from"./chunk-ISNVZ5EO.js";import{a as Ue}from"./chunk-DM5ELRG3.js";import{a as Re,b as Ne,c as Ve,d as qe,f as je,g as Be}from"./chunk-H5HXTBJG.js";import{a as Fe,b as De,e as Le,h as Ae}from"./chunk-XPDRJX7C.js";import{a as Xe,b as $e}from"./chunk-HITYQEX3.js";import{a as Ge,b as He}from"./chunk-INWMKDZI.js";import{a as ke,b as xe,c as Ce,d as b,h as Me,i as Pe,n as Ie,s as Se,t as Oe,x as Te,z as ze}from"./chunk-KMDM75EA.js";import{$a as J,Ad as we,Ca as v,Cd as ye,Dc as ge,Fa as T,Ga as I,Gd as Ee,Ha as S,Jb as te,Jc as pe,La as c,M as N,Ma as i,Na as t,Nb as E,O as V,Oa as s,Ob as w,P as q,Pb as ie,R as g,S as y,T as k,Tb as ne,U as j,Ub as ae,Va as z,Vb as re,Wa as $,Xa as p,Z as L,Za as x,Zc as he,_a as Q,ba as M,bb as W,bc as oe,ca as B,cb as Z,cc as le,db as K,ec as de,fa as G,hb as f,ia as H,ic as ce,jb as A,jd as ue,ka as U,kb as Y,lb as o,m as D,mb as C,na as l,nc as se,ra as h,sa as u,ta as P,uc as me,vb as ee,vd as fe,wd as be,xa as O,xd as _e,ya as X,zd as ve}from"./chunk-T4U2ES6H.js";var it=["switch"],nt=["*"];function at(r,d){r&1&&(i(0,"span",11),j(),i(1,"svg",13),s(2,"path",14),t(),i(3,"svg",15),s(4,"path",16),t()())}var rt=new q("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),F=class{source;checked;constructor(d,e){this.source=d,this.checked=e}},R=(()=>{class r{_elementRef=g(H);_focusMonitor=g(he);_changeDetectorRef=g(E);defaults=g(rt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new F(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ue();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new L;toggleChange=new L;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){g(me).load(be);let e=g(new te("tabindex"),{optional:!0}),a=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=a.color||"accent",this.id=this._uniqueId=g(pe).getId("mat-mdc-slide-toggle-"),this.hideIcon=a.hideIcon??!1,this.disabledInteractive=a.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new F(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=O({type:r,selectors:[["mat-slide-toggle"]],viewQuery:function(a,n){if(a&1&&W(it,5),a&2){let m;Z(m=K())&&(n._switchElement=m.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(a,n){a&2&&($("id",n.id),T("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Y(n.color?"mat-"+n.color:""),A("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",w],color:"color",disabled:[2,"disabled","disabled",w],disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ie(e)],checked:[2,"checked","checked",w],hideIcon:[2,"hideIcon","hideIcon",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ee([{provide:ke,useExisting:N(()=>r),multi:!0},{provide:Ce,useExisting:r,multi:!0}]),G],ngContentSelectors:nt,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(a,n){if(a&1&&(Q(),i(0,"div",1)(1,"button",2,0),p("click",function(){return n._handleClick()}),s(3,"div",3)(4,"span",4),i(5,"span",5)(6,"span",6)(7,"span",7),s(8,"span",8),t(),i(9,"span",9),s(10,"span",10),t(),I(11,at,5,0,"span",11),t()()(),i(12,"label",12),p("click",function(_){return _.stopPropagation()}),J(13),t()()),a&2){let m=f(2);c("labelPosition",n.labelPosition),l(),A("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),c("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),T("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),l(9),c("matRippleTrigger",m)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),l(),S(n.hideIcon?-1:11),l(),c("for",n.buttonId),T("id",n._labelId)}},dependencies:[fe,Ue],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return r})(),Ye=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=X({type:r});static \u0275inj=V({imports:[R,ge]})}return r})();function lt(r,d){r&1&&(i(0,"div",13),s(1,"mat-spinner",51),i(2,"p",52),o(3,"Processing training program, please wait..."),t()())}function dt(r,d){if(r&1&&(i(0,"div",53)(1,"div",54)(2,"mat-icon"),o(3),t(),i(4,"span"),o(5),t()()()),r&2){let e=x();l(),c("ngClass",e.alertType()),l(2),C(e.alertType()==="success"?"check_circle":"error"),l(2),C(e.alertMsg())}}function ct(r,d){r&1&&(i(0,"mat-error"),o(1," Training ID is required. "),t())}function st(r,d){r&1&&(i(0,"mat-error"),o(1," Training Title is required. "),t())}function mt(r,d){if(r&1&&(i(0,"mat-option",55),o(1),t()),r&2){let e=d.$implicit;c("value",e),l(),C(e)}}function gt(r,d){r&1&&(i(0,"mat-error"),o(1," Mode selection is required. "),t())}function pt(r,d){if(r&1){let e=z();i(0,"div",56),p("click",function(){y(e),x();let n=f(93);return k(n.click())}),i(1,"div",57)(2,"mat-icon",58),o(3,"add_photo_alternate"),t(),i(4,"p",59),o(5,"Click to select course cover image"),t(),i(6,"p",60),o(7,"Supports PNG, JPG, or WebP format"),t()()()}}function ht(r,d){if(r&1){let e=z();i(0,"div",61),s(1,"img",62),i(2,"div",63)(3,"span",64),o(4),t(),i(5,"div",65)(6,"button",66),p("click",function(){y(e),x();let n=f(93);return k(n.click())}),o(7,"Change Image"),t(),i(8,"button",67),p("click",function(){y(e);let n=x();return k(n.removeSelectedFile())}),i(9,"mat-icon"),o(10,"delete_outline"),t()()()()()}if(r&2){let e=x();l(),c("src",e.imagePreview,U),l(3),C(e.selectedFile?.name)}}function ut(r,d){r&1&&(i(0,"mat-icon"),o(1,"cloud_upload"),t())}function ft(r,d){r&1&&s(0,"mat-spinner",50)}var et=class r{constructor(d,e,a,n){this.fb=d;this.http=e;this.router=a;this.config=n;this.trainingForm=this.fb.group({training_id:["",[b.required,b.maxLength(50)]],training_title:["",[b.required,b.maxLength(255)]],training_description:[""],instructor_name:["",[b.maxLength(150)]],duration:["",[b.maxLength(100)]],mode:["Online",[b.required]],start_date:[null],is_active:[!0],start_time:[""]})}fb;http;router;config;trainingForm;selectedFile=null;imagePreview=null;platformId=g(B);cdr=g(E);isLoading=M(!1);showAlert=M(!1);alertMsg=M("");alertType=M("success");modes=["Online","Offline","Hybrid"];onFileSelected(d){let e=d.target;if(e.files&&e.files.length>0){this.selectedFile=e.files[0];let a=new FileReader;a.onload=()=>{this.imagePreview=a.result},a.readAsDataURL(this.selectedFile)}}removeSelectedFile(){this.selectedFile=null,this.imagePreview=null}ngOnInit(){le(this.platformId)&&this.getjobid()}async getjobid(){this.isLoading.set(!0),this.cdr.detectChanges();try{let e=(await D(this.http.get(`${this.config.apiUrl}trainings/generate-reference-id`,{observe:"response"})))?.body;e?.training_id&&this.trainingForm&&this.trainingForm.patchValue({training_id:e.training_id})}catch(d){console.error("Failed to generate Job ID:",d)}finally{this.isLoading.set(!1),this.cdr.detectChanges()}}async onSubmit(){if(this.trainingForm.invalid){this.trainingForm.markAllAsTouched();return}this.isLoading.set(!0),this.showAlert.set(!1);let d=new FormData;d.append("training_id",this.trainingForm.get("training_id")?.value),d.append("training_title",this.trainingForm.get("training_title")?.value),d.append("training_description",this.trainingForm.get("training_description")?.value||""),d.append("instructor_name",this.trainingForm.get("instructor_name")?.value||""),d.append("duration",this.trainingForm.get("duration")?.value||""),d.append("mode",this.trainingForm.get("mode")?.value||"Online"),d.append("is_active",String(this.trainingForm.get("is_active")?.value));let e=this.trainingForm.get("start_date")?.value,a=this.trainingForm.get("start_time")?.value,n="";e&&a&&(n=`${e instanceof Date?e.toISOString().split("T")[0]:e} ${a}:00`),d.append("start_date",n),this.selectedFile&&d.append("image",this.selectedFile,this.selectedFile.name);try{await D(this.http.post(`${this.config.apiUrl}trainings`,d)),this.isLoading.set(!1),this.alertType.set("success"),this.alertMsg.set("Training program and image uploaded successfully!"),this.showAlert.set(!0)}catch(m){this.isLoading.set(!1),this.alertType.set("danger"),console.error("Failed to load job details:",m),this.showAlert.set(!0)}finally{this.cdr.detectChanges()}}static \u0275fac=function(e){return new(e||r)(P(Te),P(de),P(se),P(ye))};static \u0275cmp=O({type:r,selectors:[["app-training-posting"]],decls:111,vars:14,consts:[["datePicker",""],["timeInput",""],["fileInput",""],[1,"body"],[1,"inner-wrapper"],["id","sidebar-left",1,"sidebar-left"],["role","main",1,"content-body"],[1,"page-header"],[1,"right-wrapper","text-end","pe-3"],[1,"breadcrumbs"],["href","/dashboard"],[1,"bx","bx-home-alt"],[1,"training-page-wrapper"],[1,"loading-overlay"],["class","mb-3",4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"form-card"],[1,"card-header-clean"],[1,"header-titles"],[1,"badge-tag"],[1,"grid-2","mb-3"],["appearance","outline",1,"w-100"],["matInput","","readonly","","formControlName","training_id","placeholder","Auto-generated ID"],["matSuffix","",1,"text-muted"],[4,"ngIf"],["matInput","","formControlName","training_title","placeholder","e.g. Master Angular & TypeScript"],[1,"grid-2"],["matInput","","formControlName","instructor_name","placeholder","Trainer full name"],["matInput","","formControlName","duration","placeholder","e.g. 6 Weeks / 40 Hours"],[1,"section-title"],[1,"grid-3"],["formControlName","mode","placeholder","Select mode"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","start_date","placeholder","Choose date",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","type","time","formControlName","start_time",3,"click"],["matIconSuffix","",1,"cursor-pointer","text-muted",3,"click"],[1,"thumbnail-dropzone-wrapper","mb-4"],[1,"dropzone-title"],["type","file","accept","image/png, image/jpeg, image/jpg, image/webp",2,"display","none",3,"change"],["class","clean-dropzone",3,"click",4,"ngIf"],["class","image-preview-card",4,"ngIf"],["appearance","outline",1,"w-100","mb-3"],["matInput","","formControlName","training_description","rows","5","placeholder","Provide syllabus, prerequisites, key learning outcomes..."],[1,"form-footer-toolbar"],[1,"toggle-pill-box"],["formControlName","is_active","color","primary"],[1,"toggle-label"],[1,"form-actions"],["mat-flat-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"],["diameter","18",1,"d-inline-block","me-2"],["diameter","44"],[1,"mt-3","font-semibold","text-secondary"],[1,"mb-3"],[1,"custom-alert-banner",3,"ngClass"],[3,"value"],[1,"clean-dropzone",3,"click"],[1,"dropzone-inner"],[1,"dropzone-icon"],[1,"drop-text-primary"],[1,"drop-text-sub"],[1,"image-preview-card"],["alt","Course Thumbnail Preview",1,"preview-img",3,"src"],[1,"preview-details"],[1,"file-name"],[1,"preview-actions"],["type","button","mat-stroked-button","","color","primary",3,"click"],["type","button","mat-icon-button","","color","warn","title","Remove Image",3,"click"]],template:function(e,a){if(e&1){let n=z();i(0,"section",3)(1,"div",4)(2,"aside",5),s(3,"app-sidenav"),t(),i(4,"section",6)(5,"header",7)(6,"h2"),o(7,"Add Training Program"),t(),i(8,"div",8)(9,"ol",9)(10,"li")(11,"a",10),s(12,"i",11),t()(),i(13,"li")(14,"span"),o(15,"Training"),t()(),i(16,"li")(17,"span"),o(18,"Add Training"),t()()()()(),i(19,"div",12),I(20,lt,4,0,"div",13),v(21,dt,6,3,"div",14),i(22,"form",15),p("ngSubmit",function(){return a.onSubmit()}),i(23,"div",16)(24,"div",17)(25,"div",18)(26,"span",19),o(27,"Course Details"),t(),i(28,"h3"),o(29,"General Information"),t()()(),i(30,"div",20)(31,"mat-form-field",21)(32,"mat-label"),o(33,"Training ID / Code"),t(),s(34,"input",22),h(),i(35,"mat-icon",23),o(36,"tag"),t(),v(37,ct,2,0,"mat-error",24),t(),i(38,"mat-form-field",21)(39,"mat-label"),o(40,"Training Title"),t(),s(41,"input",25),h(),i(42,"mat-icon",23),o(43,"school"),t(),v(44,st,2,0,"mat-error",24),t()(),i(45,"div",26)(46,"mat-form-field",21)(47,"mat-label"),o(48,"Instructor / Lead Trainer"),t(),s(49,"input",27),h(),i(50,"mat-icon",23),o(51,"person_outline"),t()(),i(52,"mat-form-field",21)(53,"mat-label"),o(54,"Course Duration"),t(),s(55,"input",28),h(),i(56,"mat-icon",23),o(57,"timelapse"),t()()()(),i(58,"div",16)(59,"h4",29)(60,"mat-icon"),o(61,"event_available"),t(),o(62," Schedule & Delivery Mode"),t(),i(63,"div",30)(64,"mat-form-field",21)(65,"mat-label"),o(66,"Delivery Mode"),t(),i(67,"mat-select",31),v(68,mt,2,2,"mat-option",32),t(),h(),v(69,gt,2,0,"mat-error",24),t(),i(70,"mat-form-field",21)(71,"mat-label"),o(72,"Start Date"),t(),s(73,"input",33),h(),s(74,"mat-datepicker-toggle",34)(75,"mat-datepicker",null,0),t(),i(77,"mat-form-field",21)(78,"mat-label"),o(79,"Start Time"),t(),i(80,"input",35,1),p("click",function(){y(n);let _=f(81);return k(_.showPicker())}),t(),h(),i(82,"mat-icon",36),p("click",function(){y(n);let _=f(81);return k(_.showPicker())}),o(83," schedule "),t()()()(),i(84,"div",16)(85,"h4",29)(86,"mat-icon"),o(87,"image"),t(),o(88," Media & Curriculum Overview"),t(),i(89,"div",37)(90,"label",38),o(91,"Program Thumbnail Image"),t(),i(92,"input",39,2),p("change",function(_){return a.onFileSelected(_)}),t(),v(94,pt,8,0,"div",40)(95,ht,11,2,"div",41),t(),i(96,"mat-form-field",42)(97,"mat-label"),o(98,"Training Description & Syllabus"),t(),s(99,"textarea",43),h(),t(),i(100,"div",44)(101,"div",45)(102,"mat-slide-toggle",46)(103,"span",47),o(104,"Active for Enrollment"),t()(),h(),t(),i(105,"div",48)(106,"button",49),I(107,ut,2,0,"mat-icon")(108,ft,1,0,"mat-spinner",50),i(109,"span"),o(110),t()()()()()()()()()()}if(e&2){let n=f(76);l(20),S(a.isLoading()?20:-1),l(),c("ngIf",a.showAlert()),l(),c("formGroup",a.trainingForm),l(12),u(),l(3),c("ngIf",a.trainingForm.get("training_id")?.hasError("required")),l(4),u(),l(3),c("ngIf",a.trainingForm.get("training_title")?.hasError("required")),l(5),u(),l(6),u(),l(12),u(),l(),c("ngForOf",a.modes),l(),c("ngIf",a.trainingForm.get("mode")?.hasError("required")),l(4),c("matDatepicker",n),u(),l(),c("for",n),l(6),u(),l(14),c("ngIf",!a.imagePreview),l(),c("ngIf",a.imagePreview),l(4),u(),l(3),u(),l(4),c("disabled",a.isLoading()||a.trainingForm.invalid),l(),S(a.isLoading()?108:107),l(3),C(a.isLoading()?"Saving Program...":"Publish Training Program")}},dependencies:[oe,ne,ae,re,ze,Ie,xe,Me,Pe,Oe,Se,ce,Ne,Ae,Fe,De,Le,Be,je,qe,Ve,Re,Ze,Qe,Je,We,Ke,Ye,R,we,ve,_e,He,Ge,Ee,$e,Xe],styles:[".training-page-wrapper[_ngcontent-%COMP%]{padding:1.5rem 1rem;max-width:1100px;margin:0 auto;position:relative}.form-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:1.5rem 1.75rem;margin-bottom:1.5rem;border:1px solid #e2e8f0;box-shadow:0 1px 3px #0000000d}.card-header-clean[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f1f5f9;padding-bottom:.75rem;margin-bottom:1.25rem}.card-header-clean[_ngcontent-%COMP%]   .badge-tag[_ngcontent-%COMP%]{background:#eef2ff;color:#4f46e5;font-size:.75rem;font-weight:600;padding:3px 8px;border-radius:4px;text-transform:uppercase;margin-bottom:4px;display:inline-block}.card-header-clean[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600;color:#1e293b;margin:0}.section-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:#334155;display:flex;align-items:center;gap:8px;margin-bottom:1.25rem}.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#64748b}.grid-2[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.25rem}.grid-3[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem}mat-form-field[_ngcontent-%COMP%]{margin-bottom:.25rem}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.custom-alert-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:.85rem 1.25rem;border-radius:8px;font-size:.9rem;font-weight:600}.custom-alert-banner.success[_ngcontent-%COMP%]{background-color:#dcfce7;color:#15803d;border:1px solid #bbf7d0}.custom-alert-banner.error[_ngcontent-%COMP%]{background-color:#fee2e2;color:#b91c1c;border:1px solid #fecaca}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .dropzone-title[_ngcontent-%COMP%]{display:block;font-size:.82rem;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:.025em;margin-bottom:.5rem}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .clean-dropzone[_ngcontent-%COMP%]{border:2px dashed #cbd5e1;background:#f8fafc;border-radius:10px;padding:2rem 1.5rem;text-align:center;cursor:pointer;transition:all .2s ease}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .clean-dropzone[_ngcontent-%COMP%]:hover{border-color:#3b82f6;background:#f0f9ff}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .clean-dropzone[_ngcontent-%COMP%]   .dropzone-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .clean-dropzone[_ngcontent-%COMP%]   .dropzone-inner[_ngcontent-%COMP%]   .dropzone-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;color:#94a3b8;margin-bottom:.5rem}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .clean-dropzone[_ngcontent-%COMP%]   .dropzone-inner[_ngcontent-%COMP%]   .drop-text-primary[_ngcontent-%COMP%]{font-size:.92rem;font-weight:600;color:#1e293b;margin:0 0 2px}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .clean-dropzone[_ngcontent-%COMP%]   .dropzone-inner[_ngcontent-%COMP%]   .drop-text-sub[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;margin:0}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .image-preview-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.25rem;padding:.85rem 1rem;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .image-preview-card[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%]{width:110px;height:70px;object-fit:cover;border-radius:6px;border:1px solid #cbd5e1}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .image-preview-card[_ngcontent-%COMP%]   .preview-details[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:space-between;align-items:center}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .image-preview-card[_ngcontent-%COMP%]   .preview-details[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{font-weight:600;color:#1e293b;font-size:.88rem}.thumbnail-dropzone-wrapper[_ngcontent-%COMP%]   .image-preview-card[_ngcontent-%COMP%]   .preview-details[_ngcontent-%COMP%]   .preview-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.form-footer-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid #f1f5f9;flex-wrap:wrap;gap:1rem}.form-footer-toolbar[_ngcontent-%COMP%]   .toggle-pill-box[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;padding:6px 14px;border-radius:9999px}.form-footer-toolbar[_ngcontent-%COMP%]   .toggle-pill-box[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:#334155}.form-footer-toolbar[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{padding:.65rem 2rem;font-size:.92rem;font-weight:600;border-radius:8px;display:inline-flex;align-items:center;gap:8px;min-height:44px}.loading-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#ffffffd9;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px}@media(max-width:768px){.grid-2[_ngcontent-%COMP%], .grid-3[_ngcontent-%COMP%]{grid-template-columns:1fr}.form-footer-toolbar[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.form-footer-toolbar[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{width:100%;justify-content:center}}"]})};export{R as a,Ye as b,et as c};
