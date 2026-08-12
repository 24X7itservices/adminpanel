import{a as ue,b as Ue,c as He,d as k,e as w,f as q,h as Ve,i as Ge,j as We,m as Z,o as ze,r as $}from"./chunk-CR7VKLDM.js";import{f as Be}from"./chunk-5OJSJM3B.js";import{A as Ye,D as ge,N as qe,O as Ze,a as je,b as Q,h as me,k as he,o as Ne,p as O,q as Y,r as Je,w as Ke,x as Qe}from"./chunk-SDLBEH7P.js";import{b as $e}from"./chunk-RPK7W7OZ.js";import{$ as N,B as b,Ba as se,Ga as C,Ha as z,Ia as S,J as F,Ka as xe,La as A,Ma as J,Pa as x,Q as P,Qb as Le,R as j,S as f,T as re,U as r,Va as le,Wa as u,Xa as g,Yb as Me,_ as c,ba as B,ca as U,d as p,e as De,eb as ce,f as ae,fa as D,fb as Oe,ha as H,lb as ke,ma as Se,mb as we,na as V,nb as Ee,oa as G,oc as Fe,pa as I,pc as d,r as M,rc as Pe,tb as de,ua as Ae,v as Ce,va as W,vb as _,w as T,wa as Te,wb as Re,ya as Ie,yc as K}from"./chunk-TWPT2VZY.js";import{a as h,b as be}from"./chunk-IFGU66OU.js";function ut(n,o){}var v=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var fe=(()=>{class n extends He{_elementRef=r(I);_focusTrapFactory=r(Qe);_config;_interactivityChecker=r(Ke);_ngZone=r(U);_focusMonitor=r(Je);_renderer=r(Ie);_changeDetectorRef=r(Me);_injector=r(c);_platform=r(je);_document=r(N);_portalOutlet;_focusTrapped=new p;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(v,{optional:!0})||new v,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),s(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",i),s=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||Ae(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=Q(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Q();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Q()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&ke(k,7),t&2){let a;we(a=Ee())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&x("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[A],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&J(0,ut,0,0,"ng-template",0)},dependencies:[k],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})(),E=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new p;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Y(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},gt=new f("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=r(c);return()=>q(n)}}),pt=new f("DialogData"),ft=new f("DefaultDialogConfig");function _t(n){let o=D(n),e=new B;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var _e=(()=>{class n{_injector=r(c);_defaultOptions=r(ft,{optional:!0});_parentDialog=r(n,{optional:!0,skipSelf:!0});_overlayContainer=r(Ge);_idGenerator=r(O);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;_ariaHiddenElements=new Map;_scrollStrategy=r(gt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=M(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(F(void 0)));open(e,t){let i=this._defaultOptions||new v;t=h(h({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),s=ze(this._injector,a),l=new E(s,t),m=this._attachContainer(s,l,t);if(l.containerInstance=m,!this.openDialogs.length){let oe=this._overlayContainer.getContainerElement();m._focusTrapped?m._focusTrapped.pipe(b(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(oe)}):this._hideNonDialogContentFromAssistiveTechnology(oe)}return this._attachDialogContent(e,l,m,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){pe(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){pe(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),pe(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Ve({positionStrategy:e.positionStrategy||Z().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,s=[{provide:v,useValue:i},{provide:E,useValue:t},{provide:We,useValue:e}],l;i.container?typeof i.container=="function"?l=i.container:(l=i.container.type,s.push(...i.container.providers(i))):l=fe;let m=new ue(l,i.viewContainerRef,c.create({parent:a||this._injector,providers:s}));return e.attach(m).instance}_attachDialogContent(e,t,i,a){if(e instanceof Te){let s=this._createInjector(a,t,i,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=h(h({},l),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),i.attachTemplatePortal(new Ue(e,null,l,s))}else{let s=this._createInjector(a,t,i,this._injector),l=i.attachComponentPortal(new ue(e,a.viewContainerRef,s,null,a.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,a){let s=e.injector||e.viewContainerRef?.injector,l=[{provide:pt,useValue:e.data},{provide:E,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!s||!s.get(he,null,{optional:!0}))&&l.push({provide:he,useValue:_t(e.direction)}),c.create({parent:s||a,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,s)=>{a?s.setAttribute("aria-hidden",a):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();function pe(n,o){let e=n.length;for(;e--;)o(n[e])}var et=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=j({providers:[_e],imports:[$,w,Ye,w]})}return n})();function vt(n,o){}var te=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},ve="mdc-dialog--open",tt="mdc-dialog--opening",it="mdc-dialog--closing",yt=150,bt=75,Dt=(()=>{class n extends fe{_animationStateChanged=new B;_animationsEnabled=!ge();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ot(this._config.enterAnimationDuration)??yt:0;_exitAnimationDuration=this._animationsEnabled?ot(this._config.exitAnimationDuration)??bt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(nt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(tt,ve)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ve),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ve),this._animationsEnabled?(this._hostElement.style.setProperty(nt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(it)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(tt,it)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(ce("id",i._config.id),x("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),de("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[A],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(u(0,"div",0)(1,"div",1),J(2,vt,0,0,"ng-template",2),g()())},dependencies:[k],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return n})(),nt="--mat-dialog-transition-duration";function ot(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?me(n.substring(0,n.length-2)):n.endsWith("s")?me(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var ee=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(ee||{}),y=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ae(1);_beforeClosed=new ae(1);_result;_closeFallbackTimeout;_state=ee.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(T(i=>i.state==="opened"),b(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(T(i=>i.state==="closed"),b(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ce(this.backdropClick(),this.keydownEvents().pipe(T(i=>i.keyCode===27&&!this.disableClose&&!Y(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),at(this,i.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(T(t=>t.state==="closing"),b(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=ee.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=ee.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function at(n,o,e){return n._closeInteractionType=o,n.close(e)}var ye=new f("MatMdcDialogData"),Ct=new f("mat-mdc-dialog-default-options"),St=new f("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(c);return()=>q(n)}}),R=(()=>{class n{_defaultOptions=r(Ct,{optional:!0});_scrollStrategy=r(St);_parentDialog=r(n,{optional:!0,skipSelf:!0});_idGenerator=r(O);_injector=r(c);_dialog=r(_e);_animationsDisabled=ge();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;dialogConfigClass=te;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=M(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(F(void 0)));constructor(){this._dialogRefConstructor=y,this._dialogContainerType=Dt,this._dialogDataToken=ye}open(e,t){let i;t=h(h({},this._defaultOptions||new te),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,be(h({},t),{positionStrategy:Z(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:v,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(s,l,m)=>(i=new this._dialogRefConstructor(s,t,m),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(i);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})(),rt=(()=>{class n{dialogRef=r(y,{optional:!0});_elementRef=r(I);_dialog=r(R);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=mt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&at(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,i){t&1&&Oe("click",function(s){return i._onButtonClick(s)}),t&2&&x("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Se]})}return n})(),st=(()=>{class n{_dialogRef=r(y,{optional:!0});_elementRef=r(I);_dialog=r(R);ngOnInit(){this._dialogRef||(this._dialogRef=mt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n})}return n})(),lt=(()=>{class n extends st{id=r(O).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,i){t&2&&ce("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[A]})}return n})(),ct=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[xe([Be])]})}return n})(),dt=(()=>{class n extends st{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,i){t&2&&de("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[A]})}return n})();function mt(n,o){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=j({providers:[R],imports:[et,$,w,Ne]})}return n})();var ie=class n{constructor(o,e){this.dialogRef=o;this.data=e}dialogRef;data;static \u0275fac=function(e){return new(e||n)(se(y),se(ye))};static \u0275cmp=C({type:n,selectors:[["app-session-warning-dialog"]],decls:15,vars:3,consts:[["mat-dialog-title",""],["align","end"],["mat-button","",3,"mat-dialog-close"],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(e,t){e&1&&(u(0,"h2",0),_(1,"Session Expiring Soon"),g(),u(2,"mat-dialog-content")(3,"p"),_(4,"Your session will expire in "),u(5,"strong"),_(6),g(),_(7," seconds."),g(),u(8,"p"),_(9,"Would you like to stay logged in?"),g()(),u(10,"mat-dialog-actions",1)(11,"button",2),_(12,"Logout"),g(),u(13,"button",3),_(14," Extend Session "),g()()),e&2&&(W(6),Re(t.data.remainingSeconds),W(5),le("mat-dialog-close",!1),W(2),le("mat-dialog-close",!0))},dependencies:[Fe,ht,rt,lt,dt,ct,Ze,qe],encapsulation:2})};var ne=class n{router=r(K);http=r(Pe);dialog=r(R);ngZone=r(U);platformId=r(H);injector=r(c);config=r($e);remainingSeconds=D(null);timerInterval=null;isDialogOpen=!1;dialogRef=null;WARNING_THRESHOLD_SECONDS=120;formattedTimeRemaining=Le(()=>{let o=this.remainingSeconds();if(o===null)return"Initializing...";if(o<=0)return"Expired";let e=Math.floor(o/60),t=o%60;return`${e}m ${t}s`});getRawToken(o){if(!d(this.platformId))return null;let e=localStorage.getItem(o);if(!e)return null;try{return JSON.parse(e)?.value||e}catch{return e}}startTimerFromStorage(){let o=this.getRawToken("auth_token");o&&this.startTimer(o)}startTimer(o){if(!d(this.platformId))return;this.stopTimer();let e=this.getJwtExpiration(o);if(!e||e<=Date.now()){console.warn("[TokenTimer] Invalid or expired token on start. Logging out."),this.logoutImmediately();return}let t=Math.floor((e-Date.now())/1e3);this.remainingSeconds.set(t),this.timerInterval=setInterval(()=>{let i=Math.floor((e-Date.now())/1e3);i<=0?(this.remainingSeconds.set(0),this.logoutImmediately()):(this.remainingSeconds.set(i),this.dialogRef?.componentInstance&&(this.dialogRef.componentInstance.data.remainingSeconds=i),i<=this.WARNING_THRESHOLD_SECONDS&&!this.isDialogOpen&&this.promptSessionExtension())},1e3)}promptSessionExtension(){d(this.platformId)&&(this.isDialogOpen=!0,this.ngZone.run(()=>{this.dialogRef=this.dialog.open(ie,{width:"400px",disableClose:!0,data:{remainingSeconds:this.remainingSeconds()}}),this.dialogRef.afterClosed().subscribe(o=>{console.log("[TokenTimer] Dialog outcome:",o),this.isDialogOpen=!1,this.dialogRef=null,o===!0?this.extendSession():this.logoutImmediately()})}))}extendSession(){if(!d(this.platformId))return;let o=this.getRawToken("refresh_token")||this.getRawToken("auth_token");if(!o){this.logoutImmediately();return}let t=`${this.config.apiUrl.endsWith("/")?this.config.apiUrl:`${this.config.apiUrl}/`}auth/refresh-token`;this.http.post(t,{refresh_token:o}).subscribe({next:i=>{let a=i?.auth_token||i?.access_token||i?.token;if(a){let s=this.injector.get(L);s.setLocalStorage("auth_token",a,7),i.refresh_token&&s.setLocalStorage("refresh_token",i.refresh_token,7),this.ngZone.run(()=>{this.startTimer(a),this.router.url.includes("/login")&&this.router.navigate(["/dashboard"])})}else this.logoutImmediately()},error:i=>{console.error("[TokenTimer] Refresh request failed:",i),this.logoutImmediately()}})}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}closeDialogIfOpen(){this.dialogRef&&(this.dialogRef.close(!1),this.dialogRef=null),this.isDialogOpen=!1}logoutImmediately(){this.stopTimer(),this.closeDialogIfOpen(),d(this.platformId)&&this.ngZone.run(()=>{let o=this.injector.get(L);o&&typeof o.logout=="function"&&o.logout(),localStorage.removeItem("auth_token"),localStorage.removeItem("refresh_token"),sessionStorage.clear(),this.router.navigate(["/login"],{replaceUrl:!0})})}getJwtExpiration(o){try{let e=o.split(".")[1],t=JSON.parse(atob(e));return t.exp?t.exp>1e10?t.exp:t.exp*1e3:null}catch(e){return console.error("[TokenTimer] Error parsing token payload:",e),null}}ngOnDestroy(){this.stopTimer()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})};var L=class n{constructor(o,e){this.platformId=o;this.document=e;let t=this.getInitialUser();this.currentUserSubject.next(t),this.isAuthenticatedSignal.set(!!t)}platformId;document;TOKEN_KEY="auth_token";USER_KEY="user_data";router=r(K);currentUserSubject=new De(null);currentUser$=this.currentUserSubject.asObservable();isAuthenticatedSignal=D(!1);tokenTimer=r(ne);getLocalStorage(o){if(!d(this.platformId))return null;let e=localStorage.getItem(o);if(!e)return null;try{let t=JSON.parse(e);return t&&t.expiry?new Date().getTime()>t.expiry?(localStorage.removeItem(o),null):t.value:t}catch{return e}}setLocalStorage(o,e,t){if(d(this.platformId)){let a={value:e,expiry:new Date().getTime()+t*24*60*60*1e3};localStorage.setItem(o,JSON.stringify(a))}}deleteLocalStorage(o){d(this.platformId)&&(o?localStorage.removeItem(o):localStorage.clear())}getToken(){return this.getLocalStorage(this.TOKEN_KEY)}getUserId(){let o=this.currentUserSubject.value;return o?o.id||o.userId:null}REFRESH_TOKEN_KEY="refresh_token";getStoredValue(o){let e=localStorage.getItem(o);if(!e)return null;try{let t=JSON.parse(e);return t?.value?t.value:e}catch{return e}}loginSuccess(o,e,t){this.setLocalStorage("auth_token",e,7),t?this.setLocalStorage("refresh_token",t,7):console.error("[AuthService] Login response is missing refresh_token!"),this.setLocalStorage("user_data",JSON.stringify(o),7),this.tokenTimer.startTimer(e),this.currentUserSubject.next(o),this.isAuthenticatedSignal.set(!0)}clearLocalSession(){this.deleteLocalStorage(),this.currentUserSubject.next(null),this.isAuthenticatedSignal.set(!1)}logout(o){this.tokenTimer.stopTimer(),localStorage.removeItem("auth_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user_data"),sessionStorage.clear(),this.currentUserSubject.next(null),this.isAuthenticatedSignal.set(!1),this.router.navigate(["/login"])}isLoggedIn(){return!!this.getToken()}getInitialUser(){try{let o=this.getLocalStorage(this.USER_KEY),e=this.getToken();return!o||!e?null:typeof o=="string"?JSON.parse(o):o}catch{return null}}static \u0275fac=function(e){return new(e||n)(re(H),re(N))};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})};export{y as a,ye as b,R as c,rt as d,lt as e,ct as f,dt as g,ht as h,ne as i,L as j};
