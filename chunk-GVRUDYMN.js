import{b as ni,c as ai,d as ri,e as oi,f as si,g as li,h as di,i as ci,j as mi,k as pi,m as gi,n as ct,o as wi,p as Mi}from"./chunk-2BHBGVF3.js";import{$ as We,A as X,C as hi,D as pt,E as Le,H as Ne,I as gt,J as _i,K as vi,L as oe,M as se,N as ze,P as bi,Q as yi,R as xi,T as Ve,U as Di,V as He,X as Ci,Y as Ge,Z as Ei,_ as Ue,a as Te,aa as Y,b as lt,ba as J,c as ti,ca as Si,d as dt,da as Ai,ea as qe,fa as $e,j as N,l as ii,s as Fe,t as ui,w as mt,x as fi,y as Re,z as Be}from"./chunk-LJ7R5G5O.js";import{a as Wt,b as H,e as je,f as qt,i as $t,k as Qt,l as Zt,m as Kt,p as Xt,q as Yt,r as Jt,t as Pe}from"./chunk-KKJLUPEX.js";import{b as ke,c as Oe}from"./chunk-VICUXMHB.js";import{$ as yt,$a as x,$b as Rt,Aa as $,B as W,Ba as Q,Cb as Pt,Eb as kt,Fa as v,Fb as Ot,Ga as I,Ha as w,Hb as y,Ib as Ft,J as pe,Ja as wt,Jb as ne,Ka as Z,Kb as F,La as g,Lb as ae,Oa as S,R as A,S as E,Sa as Mt,Ta as St,Tb as we,U as c,Ua as m,Va as o,Vb as Me,W as j,Wa as r,X as P,Xa as _,Y as at,Ya as At,Z as bt,Za as It,_ as k,ab as D,ac as Bt,ba as ge,bb as ye,bc as Se,ca as ue,cb as K,cc as Lt,d as B,db as rt,dc as Nt,eb as b,f as nt,fa as fe,fc as re,gb as h,gc as zt,ha as he,hb as ot,hc as Vt,ib as ie,ic as Ae,jc as Ht,kb as xe,lb as De,lc as Ie,ma as xt,mb as Ce,n as U,na as _e,oa as ve,pa as V,qb as O,qc as Gt,r as me,rb as Ee,sa as be,sb as L,sc as Ut,tb as Tt,tc as st,ua as Dt,ub as s,v as vt,va as l,vb as C,w as te,wa as Ct,wb as f,xb as jt,xc as ei,ya as Et,za as q}from"./chunk-23V2VA2Z.js";import{a as M,b as ce}from"./chunk-IFGU66OU.js";var Ji=["*"];var en=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],tn=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],nn=new E("MAT_CARD_CONFIG"),Ii=(()=>{class t{appearance;constructor(){let e=c(nn,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,n){i&2&&L("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Ji,decls:1,vars:0,template:function(i,n){i&1&&(ot(),ie(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})(),Ti=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ji=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),Pi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var ki=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:tn,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,n){i&1&&(ot(en),ie(0),At(1,"div",0),ie(2,1),It(),ie(3,2))},encapsulation:2})}return t})();var Oi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var Fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=I({type:t});static \u0275inj=A({imports:[N]})}return t})();var Ri=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=I({type:t});static \u0275inj=A({imports:[Re,N]})}return t})();function rn(t,a){}var z=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var ft=(()=>{class t extends vi{_elementRef=c(V);_focusTrapFactory=c(fi);_config;_interactivityChecker=c(mt);_ngZone=c(ue);_focusMonitor=c(ui);_renderer=c(Et);_changeDetectorRef=c(we);_injector=c(k);_platform=c(ti);_document=c(yt);_portalOutlet;_focusTrapped=new B;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(z,{optional:!0})||new z,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{d(),p(),e.removeAttribute("tabindex")},d=this._renderer.listen(e,"blur",n),p=this._renderer.listen(e,"mousedown",n)})),e.focus(i)}_focusByCssSelector(e,i){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,i)}_trapFocus(e){this._isDestroyed||Dt(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let n=Fe(),d=this._elementRef.nativeElement;(!n||n===this._document.body||n===d||d.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=Fe();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Fe()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,n){if(i&1&&xe(oe,7),i&2){let d;De(d=Ce())&&(n._portalOutlet=d.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,n){i&2&&S("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[Z],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,n){i&1&&g(0,rn,0,0,"ng-template",0)},dependencies:[oe],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return t})(),le=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new B;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!Be(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(a),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},on=new E("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=c(k);return()=>ze(t)}}),sn=new E("DialogData"),ln=new E("DefaultDialogConfig");function dn(t){let a=fe(t),e=new ge;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var ht=(()=>{class t{_injector=c(k);_defaultOptions=c(ln,{optional:!0});_parentDialog=c(t,{optional:!0,skipSelf:!0});_overlayContainer=c(yi);_idGenerator=c(X);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new B;_afterOpenedAtThisLevel=new B;_ariaHiddenElements=new Map;_scrollStrategy=c(on);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=me(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));open(e,i){let n=this._defaultOptions||new z;i=M(M({},n),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let d=this._getOverlayConfig(i),p=Di(this._injector,d),u=new le(p,i),T=this._attachContainer(p,u,i);if(u.containerInstance=T,!this.openDialogs.length){let it=this._overlayContainer.getContainerElement();T._focusTrapped?T._focusTrapped.pipe(W(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(it)}):this._hideNonDialogContentFromAssistiveTechnology(it)}return this._attachDialogContent(e,u,T,i),this.openDialogs.push(u),u.closed.subscribe(()=>this._removeOpenDialog(u,!0)),this.afterOpened.next(u),u}closeAll(){ut(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){ut(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),ut(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new bi({positionStrategy:e.positionStrategy||Ve().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,n){let d=n.injector||n.viewContainerRef?.injector,p=[{provide:z,useValue:n},{provide:le,useValue:i},{provide:xi,useValue:e}],u;n.container?typeof n.container=="function"?u=n.container:(u=n.container.type,p.push(...n.container.providers(n))):u=ft;let T=new gt(u,n.viewContainerRef,k.create({parent:d||this._injector,providers:p}));return e.attach(T).instance}_attachDialogContent(e,i,n,d){if(e instanceof Ct){let p=this._createInjector(d,i,n,void 0),u={$implicit:d.data,dialogRef:i};d.templateContext&&(u=M(M({},u),typeof d.templateContext=="function"?d.templateContext():d.templateContext)),n.attachTemplatePortal(new _i(e,null,u,p))}else{let p=this._createInjector(d,i,n,this._injector),u=n.attachComponentPortal(new gt(e,d.viewContainerRef,p,null,d.bindings));i.componentRef=u,i.componentInstance=u.instance}}_createInjector(e,i,n,d){let p=e.injector||e.viewContainerRef?.injector,u=[{provide:sn,useValue:e.data},{provide:le,useValue:i}];return e.providers&&(typeof e.providers=="function"?u.push(...e.providers(i,e,n)):u.push(...e.providers)),e.direction&&(!p||!p.get(lt,null,{optional:!0}))&&u.push({provide:lt,useValue:dn(e.direction)}),k.create({parent:p||d,providers:u})}_removeOpenDialog(e,i){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((d,p)=>{d?p.setAttribute("aria-hidden",d):p.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let n=i.length-1;n>-1;n--){let d=i[n];d!==e&&d.nodeName!=="SCRIPT"&&d.nodeName!=="STYLE"&&!d.hasAttribute("aria-live")&&!d.hasAttribute("popover")&&(this._ariaHiddenElements.set(d,d.getAttribute("aria-hidden")),d.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=ve({token:t,factory:t.\u0275fac})}return t})();function ut(t,a){let e=t.length;for(;e--;)a(t[e])}var Li=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=I({type:t});static \u0275inj=A({providers:[ht],imports:[He,se,Re,se]})}return t})();function cn(t,a){}var Ze=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},_t="mdc-dialog--open",Ni="mdc-dialog--opening",zi="mdc-dialog--closing",mn=150,pn=75,gn=(()=>{class t extends ft{_animationStateChanged=new ge;_animationsEnabled=!pt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Hi(this._config.enterAnimationDuration)??mn:0;_exitAnimationDuration=this._animationsEnabled?Hi(this._config.exitAnimationDuration)??pn:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Vi,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ni,_t)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(_t),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(_t),this._animationsEnabled?(this._hostElement.style.setProperty(Vi,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(zi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ni,zi)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_e(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,n){i&2&&(rt("id",n._config.id),S("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),L("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[Z],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1),g(2,cn,0,0,"ng-template",2),r()())},dependencies:[oe],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return t})(),Vi="--mat-dialog-transition-duration";function Hi(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?dt(t.substring(0,t.length-2)):t.endsWith("s")?dt(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Qe=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Qe||{}),R=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new nt(1);_beforeClosed=new nt(1);_result;_closeFallbackTimeout;_state=Qe.OPEN;_closeInteractionType;constructor(a,e,i){this._ref=a,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(te(n=>n.state==="opened"),W(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(te(n=>n.state==="closed"),W(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),vt(this.backdropClick(),this.keydownEvents().pipe(te(n=>n.keyCode===27&&!this.disableClose&&!Be(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Gi(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(te(i=>i.state==="closing"),W(1)).subscribe(i=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=Qe.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Qe.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Gi(t,a,e){return t._closeInteractionType=a,t.close(e)}var un=new E("MatMdcDialogData"),fn=new E("mat-mdc-dialog-default-options"),hn=new E("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(k);return()=>ze(t)}}),de=(()=>{class t{_defaultOptions=c(fn,{optional:!0});_scrollStrategy=c(hn);_parentDialog=c(t,{optional:!0,skipSelf:!0});_idGenerator=c(X);_injector=c(k);_dialog=c(ht);_animationsDisabled=pt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new B;_afterOpenedAtThisLevel=new B;dialogConfigClass=Ze;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=me(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));constructor(){this._dialogRefConstructor=R,this._dialogContainerType=gn,this._dialogDataToken=un}open(e,i){let n;i=M(M({},this._defaultOptions||new Ze),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let d=this._dialog.open(e,ce(M({},i),{positionStrategy:Ve(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:z,useValue:i}]},templateContext:()=>({dialogRef:n}),providers:(p,u,T)=>(n=new this._dialogRefConstructor(p,i,T),n.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:T},{provide:this._dialogDataToken,useValue:u.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=d.componentRef,n.componentInstance=d.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let p=this.openDialogs.indexOf(n);p>-1&&(this.openDialogs.splice(p,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=ve({token:t,factory:t.\u0275fac})}return t})(),Ke=(()=>{class t{dialogRef=c(R,{optional:!0});_elementRef=c(V);_dialog=c(de);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Wi(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let i=e._matDialogClose;i&&(this.dialogResult=i.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&Gi(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,n){i&1&&b("click",function(p){return n._onButtonClick(p)}),i&2&&S("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[xt]})}return t})(),Ui=(()=>{class t{_dialogRef=c(R,{optional:!0});_elementRef=c(V);_dialog=c(de);ngOnInit(){this._dialogRef||(this._dialogRef=Wi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t})}return t})(),Xe=(()=>{class t extends Ui{id=c(X).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_e(t)))(n||t)}})();static \u0275dir=w({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,n){i&2&&rt("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Z]})}return t})(),Ye=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[wt([ii])]})}return t})(),Je=(()=>{class t extends Ui{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_e(t)))(n||t)}})();static \u0275dir=w({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,n){i&2&&L("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[Z]})}return t})();function Wi(t,a){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(i=>i.id===e.id):null}var ee=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=I({type:t});static \u0275inj=A({providers:[de],imports:[Li,He,se,N]})}return t})();var _n=["determinateSpinner"];function vn(t,a){if(t&1&&(at(),o(0,"svg",11),_(1,"circle",12),r()),t&2){let e=h();S("viewBox",e._viewBox()),l(),Ee("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),S("r",e._circleRadius())}}var bn=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:$i})}),$i=100,yn=10,Qi=(()=>{class t{_elementRef=c(V);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(bn),i=hi(),n=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=$i;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-yn)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,n){if(i&1&&xe(_n,5),i&2){let d;De(d=Ce())&&(n._determinateCircle=d.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,n){i&2&&(S("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),Tt("mat-"+n.color),Ee("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),L("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Me],diameter:[2,"diameter","diameter",Me],strokeWidth:[2,"strokeWidth","strokeWidth",Me]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,n){if(i&1&&(g(0,vn,2,8,"ng-template",null,0,ae),o(2,"div",2,1),at(),o(4,"svg",3),_(5,"circle",4),r()(),bt(),o(6,"div",5)(7,"div",6)(8,"div",7),ye(9,8),r(),o(10,"div",9),ye(11,8),r(),o(12,"div",10),ye(13,8),r()()()),i&2){let d=O(1);l(4),S("viewBox",n._viewBox()),l(),Ee("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),S("r",n._circleRadius()),l(4),m("ngTemplateOutlet",d),l(2),m("ngTemplateOutlet",d),l(2),m("ngTemplateOutlet",d)}},dependencies:[Lt],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return t})();var Zi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=I({type:t});static \u0275inj=A({imports:[N]})}return t})();function Mn(t,a){if(t&1){let e=K();o(0,"div",19)(1,"span",20),s(2,"Upload Receipt Image or PDF"),r(),o(3,"button",21),b("click",function(){j(e),h();let n=O(23);return P(n.click())}),s(4,"Browse"),r()()}}function Sn(t,a){if(t&1){let e=K();o(0,"div",22)(1,"span",23),s(2),r(),o(3,"button",24),b("click",function(){j(e);let n=h(),d=O(23);return P(n.removeFile(d))}),o(4,"mat-icon"),s(5,"close"),r()()()}if(t&2){let e=h();l(2),C(e.rawFile.name)}}var et=class t{fb=c(Jt);dialogRef=c(R);rawFile=null;expenseForm=this.fb.group({expense_type:["",H.required],expense_value:["",[H.required,H.min(1)]],expense_description:["",H.required]});onFileSelected(a){let e=a.target.files[0];e&&(this.rawFile=e)}removeFile(a){this.rawFile=null,a.value=""}onSubmit(){this.expenseForm.valid&&this.dialogRef.close(ce(M({},this.expenseForm.value),{file:this.rawFile}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-add-expense-dialog"]],decls:31,vars:4,consts:[["fileInput",""],[1,"p-2"],["mat-dialog-title","",1,"m-0","font-weight-bold","text-primary"],[1,"pt-3"],[1,"row","g-3",3,"formGroup"],[1,"col-md-6"],["appearance","outline",1,"w-100"],["matInput","","type","text","formControlName","expense_type","placeholder","Category"],["matInput","","type","number","formControlName","expense_value","placeholder","0.00"],[1,"col-md-12"],["matInput","","formControlName","expense_description","placeholder","Type here...","rows","4"],[1,"col-12"],[1,"p-3","border","rounded-3","text-center","bg-light"],["type","file","hidden","","accept","image/*,application/pdf",3,"change"],["class","d-flex align-items-center justify-content-center gap-2",4,"ngIf"],["class","d-flex align-items-center justify-content-between",4,"ngIf"],["align","end",1,"mt-3"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"click","disabled"],[1,"d-flex","align-items-center","justify-content-center","gap-2"],[1,"text-muted","small"],["type","button","mat-stroked-button","","color","primary",3,"click"],[1,"d-flex","align-items-center","justify-content-between"],[1,"small","font-weight-bold","text-truncate"],["type","button","mat-icon-button","","color","warn",3,"click"]],template:function(e,i){e&1&&(o(0,"div",1)(1,"h2",2),s(2,"Add Project Expense"),r(),o(3,"mat-dialog-content",3)(4,"form",4)(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),s(8,"Category"),r(),_(9,"input",7),q(),r()(),o(10,"div",5)(11,"mat-form-field",6)(12,"mat-label"),s(13,"Amount (\u20B9)"),r(),_(14,"input",8),q(),r()(),o(15,"div",9)(16,"mat-form-field",6)(17,"mat-label"),s(18,"Description"),r(),_(19,"textarea",10),q(),r()(),o(20,"div",11)(21,"div",12)(22,"input",13,0),b("change",function(d){return i.onFileSelected(d)}),r(),g(24,Mn,5,0,"div",14)(25,Sn,6,1,"div",15),r()()()(),o(26,"mat-dialog-actions",16)(27,"button",17),s(28,"Cancel"),r(),o(29,"button",18),b("click",function(){return i.onSubmit()}),s(30,"Save"),r()()()),e&2&&(l(4),m("formGroup",i.expenseForm),l(5),$(),l(5),$(),l(5),$(),l(5),m("ngIf",!i.rawFile),l(),m("ngIf",i.rawFile),l(4),m("disabled",i.expenseForm.invalid))},dependencies:[Ae,Se,Pe,Qt,Wt,Zt,je,qt,Yt,Xt,ee,Ke,Xe,Je,Ye,Ge,Ne,Le,Ai,Si,Ue,J,Y,We,$e,qe],styles:[".project-details-page[_ngcontent-%COMP%]{background-color:#f8f9fa;min-height:100vh}.project-details-page[_ngcontent-%COMP%]   .icon-lg[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.project-details-page[_ngcontent-%COMP%]   .white-space-pre[_ngcontent-%COMP%]{white-space:pre-line}.project-details-page[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]{width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px}.project-details-page[_ngcontent-%COMP%]   .border-dashed[_ngcontent-%COMP%]{border:2px dashed #cbd5e1;transition:all .2s ease-in-out}.project-details-page[_ngcontent-%COMP%]   .border-dashed[_ngcontent-%COMP%]:hover{background-color:#f1f5f9;border-color:#0284c7}.project-details-page[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .media-preview[_ngcontent-%COMP%]{height:160px;object-fit:cover;width:100%}.project-details-page[_ngcontent-%COMP%]   .x-small[_ngcontent-%COMP%]{font-size:11px}.project-details-page[_ngcontent-%COMP%]   .cdk-overlay-pane.mat-mdc-dialog-panel[_ngcontent-%COMP%]{max-width:800px!important}"]})};var An=(t,a)=>a.id;function In(t,a){if(t&1&&(o(0,"mat-option",4),s(1),y(2,"titlecase"),r()),t&2){let e=a.$implicit;m("value",e.id),l(),jt(" ",e.name," (",Ft(2,4,e.designation),") - ",e.id," ")}}function Tn(t,a){t&1&&(o(0,"mat-option",5),s(1,"No employees available"),r())}var tt=class t{constructor(a,e,i,n,d){this.auth=a;this.http=e;this.crypto=i;this.config=n;this.ngZone=d}auth;http;crypto;config;ngZone;dialogRef=c(R);platformId=c(he);ngOnInit(){this.loadUsersAndTableData()}selectedEmployeeControl=new $t("",H.required);async loadUsersAndTableData(){if(Ht(this.platformId))try{let e=(await U(this.http.get(this.config.apiUrl+"employees",{observe:"response"}))).body,i=await this.crypto.decrypt(e.data.result,e.data.iv,e.data.tag),n=JSON.parse(i);console.log("Decrypted Employee Data:",i);let d=n.map(p=>({id:p.client_employee_id,name:p.name,designation:p.role,phone:p.phone}));this.ngZone.run(()=>{this.availableEmployees.set(d)})}catch(a){a.status===403&&this.auth.logout(),this.ngZone.run(()=>{})}}availableEmployees=fe([]);submit(){this.selectedEmployeeControl.valid&&this.dialogRef.close(this.selectedEmployeeControl.value)}static \u0275fac=function(e){return new(e||t)(Q(Te),Q(Ie),Q(Oe),Q(ke),Q(ue))};static \u0275cmp=v({type:t,selectors:[["app-add-team-member-dialog"]],decls:15,vars:3,consts:[["mat-dialog-title",""],[1,"py-3"],["appearance","outline",1,"w-100","my-2"],[3,"formControl"],[3,"value"],["disabled",""],["align","end",1,"pb-3","px-4"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,i){e&1&&(o(0,"h2",0),s(1,"Select Team Member"),r(),o(2,"mat-dialog-content",1)(3,"mat-form-field",2)(4,"mat-label"),s(5,"Choose Employee"),r(),o(6,"mat-select",3),Mt(7,In,3,6,"mat-option",4,An,!1,Tn,2,0,"mat-option",5),r(),q(),r()(),o(10,"mat-dialog-actions",6)(11,"button",7),s(12,"Cancel"),r(),o(13,"button",8),b("click",function(){return i.submit()}),s(14," Add Member "),r()()),e&2&&(l(6),m("formControl",i.selectedEmployeeControl),$(),l(),St(i.availableEmployees()),l(6),m("disabled",i.selectedEmployeeControl.invalid))},dependencies:[Pe,je,Kt,ee,Ke,Xe,Je,Ye,Ge,Ne,Le,Ue,Ei,Ci,J,Y,Nt],styles:["mat-dialog-content[_ngcontent-%COMP%]{padding:24px 24px 12px!important;overflow:visible!important}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-top:12px;margin-bottom:12px}"]})};var jn=t=>["/generate-quotation",t],Pn=(t,a)=>({"bg-warning text-dark":t,"bg-success":a});function kn(t,a){t&1&&(o(0,"div",18),_(1,"mat-spinner",19),o(2,"p",20),s(3,"Loading project details..."),r()())}function On(t,a){if(t&1&&(o(0,"span",79),s(1),y(2,"number"),r()),t&2){let e=h(2);l(),f(" (",ne(2,1,e.getProfitMargin(),"1.1-1"),"%) ")}}function Fn(t,a){if(t&1&&(o(0,"div",82)(1,"div",83)(2,"div",84),s(3),r(),o(4,"div")(5,"h6",23),s(6),r(),o(7,"span",33),s(8),r(),o(9,"small",8),s(10),r()()()()),t&2){let e=a.$implicit,i=h(3);l(3),f(" ",i.getInitials(e.employee_details?.name)," "),l(3),C(e.employee_details?.name),l(2),f("ID: ",e.client_employee_id),l(2),C(e.employee_details?.phone)}}function Rn(t,a){if(t&1&&(o(0,"div",80),g(1,Fn,11,4,"div",81),r()),t&2){let e=h(2);l(),m("ngForOf",e.projectData.project_employees)}}function Bn(t,a){t&1&&(o(0,"p",85),s(1,"No team members assigned yet."),r())}function Ln(t,a){t&1&&(o(0,"th",94),s(1," # "),r())}function Nn(t,a){if(t&1&&(o(0,"td",95),s(1),r()),t&2){let e=a.index;l(),f(" ",e+1," ")}}function zn(t,a){t&1&&(o(0,"th",94),s(1," Product / Particular "),r())}function Vn(t,a){if(t&1&&(o(0,"td",95)(1,"strong"),s(2),r()()),t&2){let e=a.$implicit;l(2),C(e.product_name)}}function Hn(t,a){t&1&&(o(0,"th",96),s(1," Qty "),r())}function Gn(t,a){if(t&1&&(o(0,"td",97),s(1),r()),t&2){let e=a.$implicit;l(),f(" ",e.quantity," ")}}function Un(t,a){t&1&&(o(0,"th",96),s(1," Unit "),r())}function Wn(t,a){if(t&1&&(o(0,"td",97),s(1),r()),t&2){let e=a.$implicit;l(),f(" ",e.unit," ")}}function qn(t,a){t&1&&(o(0,"th",98),s(1," Rate "),r())}function $n(t,a){if(t&1&&(o(0,"td",99),s(1),y(2,"currency"),r()),t&2){let e=a.$implicit;l(),f(" ",F(2,1,e.price,"INR","symbol","1.2-2")," ")}}function Qn(t,a){t&1&&(o(0,"th",98),s(1," GST "),r())}function Zn(t,a){if(t&1&&(o(0,"td",99),s(1),y(2,"currency"),r()),t&2){let e=a.$implicit;l(),f(" ",F(2,1,e.gst,"INR","symbol","1.2-2")," ")}}function Kn(t,a){t&1&&(o(0,"th",98),s(1," Total "),r())}function Xn(t,a){if(t&1&&(o(0,"td",100),s(1),y(2,"currency"),r()),t&2){let e=a.$implicit;l(),f(" ",F(2,1,e.total,"INR","symbol","1.2-2")," ")}}function Yn(t,a){t&1&&_(0,"tr",101)}function Jn(t,a){t&1&&_(0,"tr",102)}function ea(t,a){if(t&1&&(o(0,"div",37)(1,"mat-card",45)(2,"mat-card-header",28)(3,"mat-icon",29),s(4,"inventory_2"),r(),o(5,"mat-card-title"),s(6,"Quoted Scope / Products"),r(),o(7,"mat-card-subtitle"),s(8,"Items included in reference quotation"),r()(),o(9,"mat-card-content")(10,"div",52)(11,"table",53),x(12,54),g(13,Ln,2,0,"th",55)(14,Nn,2,1,"td",56),D(),x(15,86),g(16,zn,2,0,"th",55)(17,Vn,3,1,"td",56),D(),x(18,87),g(19,Hn,2,0,"th",64)(20,Gn,2,1,"td",65),D(),x(21,88),g(22,Un,2,0,"th",64)(23,Wn,2,1,"td",65),D(),x(24,89),g(25,qn,2,0,"th",60)(26,$n,3,6,"td",90),D(),x(27,91),g(28,Qn,2,0,"th",60)(29,Zn,3,6,"td",90),D(),x(30,92),g(31,Kn,2,0,"th",60)(32,Xn,3,6,"td",93),D(),g(33,Yn,1,0,"tr",66)(34,Jn,1,0,"tr",67),r()()()()()),t&2){let e=h(2);l(11),m("dataSource",e.productsDataSource),l(22),m("matHeaderRowDef",e.productColumns),l(),m("matRowDefColumns",e.productColumns)}}function ta(t,a){t&1&&(o(0,"th",94),s(1," # "),r())}function ia(t,a){if(t&1&&(o(0,"td",95),s(1),r()),t&2){let e=a.index;l(),f(" ",e+1," ")}}function na(t,a){t&1&&(o(0,"th",94),s(1," Type "),r())}function aa(t,a){if(t&1&&(o(0,"td",95)(1,"strong"),s(2),r()()),t&2){let e=a.$implicit;l(2),C(e.expense_type)}}function ra(t,a){t&1&&(o(0,"th",94),s(1," Date "),r())}function oa(t,a){if(t&1&&(o(0,"td",95),s(1),y(2,"date"),r()),t&2){let e=a.$implicit;l(),f(" ",ne(2,1,e.expense_date,"dd/MM/yyyy HH:mm")," ")}}function sa(t,a){t&1&&(o(0,"th",98),s(1," Description "),r())}function la(t,a){if(t&1&&(o(0,"td",103),s(1),r()),t&2){let e=a.$implicit;l(),f(" ",e.expense_description," ")}}function da(t,a){t&1&&(o(0,"th",98),s(1," Amount "),r())}function ca(t,a){if(t&1&&(o(0,"td",103),s(1),y(2,"currency"),r()),t&2){let e=a.$implicit;l(),f(" ",F(2,1,e.expense_value,"INR","symbol","1.2-2")," ")}}function ma(t,a){t&1&&(o(0,"th",96),s(1," Proof "),r())}function pa(t,a){if(t&1&&(o(0,"a",106)(1,"mat-icon",107),s(2,"visibility"),r(),s(3," View "),r()),t&2){let e=h().$implicit;m("href",e.expense_proof,be)}}function ga(t,a){t&1&&(o(0,"span",75),s(1,"None"),r())}function ua(t,a){if(t&1&&(o(0,"td",97),g(1,pa,4,1,"a",104)(2,ga,2,0,"span",105),r()),t&2){let e=a.$implicit;l(),m("ngIf",e.expense_proof),l(),m("ngIf",!e.expense_proof)}}function fa(t,a){t&1&&_(0,"tr",101)}function ha(t,a){t&1&&_(0,"tr",102)}function _a(t,a){if(t&1&&_(0,"img",116),t&2){let e=h().$implicit;m("src",e.image_path,be)}}function va(t,a){if(t&1&&_(0,"video",117),t&2){let e=h().$implicit;m("src",e.image_path,be)}}function ba(t,a){if(t&1){let e=K();o(0,"div",109)(1,"div",110),g(2,_a,1,1,"img",111)(3,va,1,1,"video",112),o(4,"button",113),b("click",function(){let n=j(e).$implicit,d=h(3);return P(d.deleteMedia(n.id))}),o(5,"mat-icon"),s(6,"delete"),r()(),o(7,"div",114)(8,"span",115),s(9),y(10,"date"),r()()()()}if(t&2){let e=a.$implicit;l(2),m("ngIf",!e.image_path?.endsWith(".mp4")&&!e.image_path?.endsWith(".webm")&&!e.image_path?.endsWith(".mov")),l(),m("ngIf",e.image_path?.endsWith(".mp4")||e.image_path?.endsWith(".webm")||e.image_path?.endsWith(".mov")),l(6),f(" Uploaded: ",ne(10,3,e.uploaded_at,"dd/MM/yyyy")," ")}}function ya(t,a){if(t&1&&(o(0,"div",31),g(1,ba,11,6,"div",108),r()),t&2){let e=h(2);l(),m("ngForOf",e.projectData.images)}}function xa(t,a){t&1&&(o(0,"p",118),s(1,"No site photos or videos uploaded yet."),r())}function Da(t,a){if(t&1){let e=K();o(0,"div",21)(1,"div",22)(2,"div")(3,"h4",23),s(4),r()(),o(5,"div")(6,"button",24)(7,"mat-icon"),s(8,"edit"),r(),s(9," Edit Quotation "),r()()(),o(10,"div",25)(11,"div",26)(12,"mat-card",27)(13,"mat-card-header",28)(14,"mat-icon",29),s(15,"person"),r(),o(16,"mat-card-title"),s(17,"Client Information"),r(),o(18,"mat-card-subtitle"),s(19),r()(),o(20,"mat-card-content",30)(21,"div",31)(22,"div",32)(23,"span",33),s(24,"Client Name"),r(),o(25,"strong"),s(26),r()(),o(27,"div",32)(28,"span",33),s(29,"Mobile Number"),r(),o(30,"strong"),s(31),r()(),o(32,"div",34)(33,"span",33),s(34,"Email Address"),r(),o(35,"strong"),s(36),r()(),o(37,"div",34)(38,"span",33),s(39,"Organisation / Dept"),r(),o(40,"strong"),s(41),r()()()()()(),o(42,"div",26)(43,"mat-card",27)(44,"mat-card-header",28)(45,"mat-icon",35),s(46,"assignment"),r(),o(47,"mat-card-title"),s(48,"Project Overview"),r(),o(49,"mat-card-subtitle"),s(50),r()(),o(51,"mat-card-content",30)(52,"div",31)(53,"div",32)(54,"span",33),s(55,"Project Status"),r(),o(56,"span",36),s(57),r()(),o(58,"div",32)(59,"span",33),s(60,"Start Date"),r(),o(61,"strong"),s(62),y(63,"date"),r()(),o(64,"div",37),_(65,"hr",38),r(),o(66,"div",39)(67,"span",33),s(68,"Quotation Total"),r(),o(69,"strong",40),s(70),y(71,"currency"),r()(),o(72,"div",39)(73,"span",33),s(74,"Total Expenses"),r(),o(75,"strong",41),s(76),y(77,"currency"),r()(),o(78,"div",39)(79,"span",33),s(80,"Estimated Profit"),r(),o(81,"strong",42),s(82),y(83,"currency"),r(),g(84,On,3,4,"span",43),r(),o(85,"div",37),_(86,"hr",38),r(),o(87,"div",34)(88,"span",33),s(89,"Quotation For"),r(),o(90,"p",44),s(91),r()()()()()(),o(92,"div",37)(93,"mat-card",45)(94,"mat-card-header",28)(95,"mat-icon",46),s(96,"groups"),r(),o(97,"mat-card-title"),s(98),r(),o(99,"mat-card-subtitle"),s(100,"Staff deployed on this project"),r(),o(101,"button",47),b("click",function(){j(e);let n=h();return P(n.openAddTeamMemberDialog())}),o(102,"mat-icon"),s(103,"person_add"),r(),s(104," Add Team Member "),r()(),o(105,"mat-card-content"),g(106,Rn,2,1,"div",48)(107,Bn,2,0,"ng-template",null,0,ae),r()()(),g(109,ea,35,3,"div",49),o(110,"div",37)(111,"mat-card",45)(112,"mat-card-header",50)(113,"div")(114,"mat-icon",51),s(115,"receipt_long"),r(),o(116,"mat-card-title"),s(117,"Project Expenses"),r(),o(118,"mat-card-subtitle"),s(119,"Track site costs and field purchases"),r()(),o(120,"button",47),b("click",function(){j(e);let n=h();return P(n.openAddExpenseDialog())}),o(121,"mat-icon"),s(122,"add"),r(),s(123," Add Expense "),r()(),o(124,"mat-card-content")(125,"div",52)(126,"table",53),x(127,54),g(128,ta,2,0,"th",55)(129,ia,2,1,"td",56),D(),x(130,57),g(131,na,2,0,"th",55)(132,aa,3,1,"td",56),D(),x(133,58),g(134,ra,2,0,"th",55)(135,oa,3,4,"td",56),D(),x(136,59),g(137,sa,2,0,"th",60)(138,la,2,1,"td",61),D(),x(139,62),g(140,da,2,0,"th",60)(141,ca,3,6,"td",61),D(),x(142,63),g(143,ma,2,0,"th",64)(144,ua,3,2,"td",65),D(),g(145,fa,1,0,"tr",66)(146,ha,1,0,"tr",67),r()(),o(147,"div",68)(148,"span",69),s(149,"Total Expenses Incurred:"),r(),o(150,"span",70),s(151),y(152,"currency"),r()()()()(),o(153,"div",37)(154,"mat-card",71)(155,"mat-card-header",28)(156,"mat-icon",72),s(157,"collections"),r(),o(158,"mat-card-title"),s(159,"Site Photos & Videos"),r(),o(160,"mat-card-subtitle"),s(161,"Uploaded progress media from the site"),r()(),o(162,"mat-card-content")(163,"div",73)(164,"mat-icon",74),s(165,"cloud_upload"),r(),o(166,"h5"),s(167,"Drag & Drop Site Photos/Videos Here"),r(),o(168,"p",75),s(169,"Supports JPG, PNG, MP4, WEBM files"),r(),o(170,"input",76,1),b("change",function(n){j(e);let d=h();return P(d.onSiteMediaSelected(n))}),r(),o(172,"button",77),b("click",function(){j(e);let n=O(171);return P(n.click())}),o(173,"mat-icon"),s(174,"file_upload"),r(),s(175),r()(),g(176,ya,2,1,"div",78)(177,xa,2,0,"ng-template",null,2,ae),r()()()()()}if(t&2){let e=O(108),i=O(178),n=h();l(4),f(" ",n.projectData.quotation?.quotation_for," Implementation "),l(2),m("routerLink",kt(52,jn,n.projectData.quotation?.url_call)),l(13),f("ID: ",n.projectData.client_employee?.client_employee_id),l(7),C(n.projectData.client_employee?.name||"N/A"),l(5),C(n.projectData.client_employee?.phone||"N/A"),l(5),C(n.projectData.client_employee?.email||"N/A"),l(5),C(n.projectData.client_employee?.organisation_name||"N/A"),l(9),f("Ref: ",n.projectData.quotation_reference_number),l(6),m("ngClass",Ot(54,Pn,n.projectData.project_status==="Pending",n.projectData.project_status==="Accepted"||n.projectData.project_status==="Completed")),l(),f(" ",n.projectData.project_status," "),l(5),C(ne(63,29,n.projectData.project_start_date,"dd/MM/yyyy")),l(8),f(" ",F(71,32,n.getQuotationTotal(),"INR","symbol","1.2-2")," "),l(6),f(" ",F(77,37,n.getTotalExpenses(),"INR","symbol","1.2-2")," "),l(5),m("ngClass",n.getNetProfit()>=0?"text-success":"text-danger"),l(),f(" ",F(83,42,n.getNetProfit(),"INR","symbol","1.2-2")," "),l(2),m("ngIf",n.getQuotationTotal()>0),l(7),C(n.projectData.quotation?.quotation_for),l(7),f("Assigned Team Members (",n.projectData.project_employees?.length||0,")"),l(8),m("ngIf",n.projectData.project_employees?.length)("ngIfElse",e),l(3),m("ngIf",n.projectData.quotation?.products?.length),l(17),m("dataSource",n.expensesDataSource),l(19),m("matHeaderRowDef",n.expenseColumns),l(),m("matRowDefColumns",n.expenseColumns),l(5),f(" ",F(152,47,n.getTotalExpenses(),"INR","symbol","1.2-2")," "),l(21),m("disabled",n.isUploadingMedia),l(3),f(" ",n.isUploadingMedia?"Uploading...":"Browse Files"," "),l(),m("ngIf",n.projectData?.images?.length)("ngIfElse",i)}}var Yi=class t{http=c(Ie);route=c(Gt);router=c(Ut);crypto=c(Oe);auth=c(Te);dialog=c(de);cdr=c(we);datePipe=c(re);config=c(ke);projectIdParam="";isLoading=!1;isUploadingMedia=!1;projectData=null;productsDataSource=new ct([]);expensesDataSource=new ct([]);productColumns=["sl_no","product_name","quantity","unit","price","gst","total"];expenseColumns=["sl_no","expense_type","expense_date","expense_description","expense_value","proof"];platformId=c(he);ngOnInit(){this.route.paramMap.subscribe(a=>{let e=a.get("id");e?(this.projectIdParam=decodeURIComponent(e),this.fetchProjectDetails(this.projectIdParam)):(console.warn("No project ID found in URL parameters"),this.isLoading=!1)})}async fetchProjectDetails(a){this.isLoading=!0;try{let i=(await U(this.http.get(this.config.apiUrl+"fulldetails/"+a,{observe:"response"}))).body,n;if(i?.data?.result){let d=await this.crypto.decrypt(i.data.result,i.data.iv,i.data.tag);n=JSON.parse(d)}else n=i?.data||i;this.projectData=n,this.projectData?.quotation?.products&&(this.productsDataSource.data=this.projectData.quotation.products),this.projectData?.expenses&&(this.expensesDataSource.data=this.projectData.expenses)}catch(e){console.error("Failed to load project details on reload:",e),(e?.status===403||e?.status===401)&&this.auth.logout()}finally{this.isLoading=!1,this.cdr.detectChanges()}}getInitials(a){if(!a)return"EMP";let e=a.trim().split(" ");return e.length>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():a.slice(0,2).toUpperCase()}async onFileSelected(a){let e=a.target.files;if(e&&e.length>0&&this.projectData){for(let i=0;i<e.length;i++){let n=e[i],d={id:Date.now(),project_id:this.projectData.project_id,image_path:URL.createObjectURL(n),is_thumbnail:!1,uploaded_at:new Date().toISOString()};this.projectData.images.push(d)}this.cdr.detectChanges()}}deleteMedia(a){this.projectData&&(this.projectData.images=this.projectData.images.filter(e=>e.id!==a))}getQuotationTotal(){return parseFloat(this.projectData?.quotation?.total_amount||"0")}getTotalExpenses(){return this.projectData?.expenses?.length?this.projectData.expenses.reduce((a,e)=>a+parseFloat(e.expense_value||"0"),0):0}getNetProfit(){return this.getQuotationTotal()-this.getTotalExpenses()}getProfitMargin(){let a=this.getQuotationTotal();return a===0?0:this.getNetProfit()/a*100}openAddExpenseDialog(){this.dialog.open(et,{width:"800px",data:{projectId:this.projectData?.project_id}}).afterClosed().subscribe(async e=>{e&&await this.submitExpenseToFastApi(e)})}async submitExpenseToFastApi(a){if(!this.projectData){console.error("Cannot submit expense: projectData is null.");return}console.log(a);try{let e=new FormData;e.append("project_id",this.projectData.project_id),e.append("expense_type",a.expense_type),e.append("expense_value",a.expense_value),e.append("expense_description",a.expense_description),a.file&&e.append("expense_proof",a.file,a.file.name);let i=await U(this.http.post(`${this.config.apiUrl}projects-expenses`,e));console.log("Expense added successfully:",i),this.projectData.expenses.push(i.data),this.expensesDataSource.data=[...this.projectData.expenses]}catch(e){console.error("Failed to upload expense to FastAPI:",e)}}async onSiteMediaSelected(a){let e=a.target;if(!e.files||e.files.length===0)return;if(!this.projectData?.project_id){console.error("Project ID missing");return}let i=e.files;this.isUploadingMedia=!0;try{let n=new FormData;n.append("project_id",this.projectData.project_id);for(let p=0;p<i.length;p++)n.append("files",i[p],i[p].name);let d=await U(this.http.post(`${this.config.apiUrl}projects-media`,n));console.log("Upload success:",d),d?.data?.length&&(this.projectData.images=[...this.projectData.images,...d.data]),e.value=""}catch(n){console.error("Failed to upload site media:",n)}finally{this.isUploadingMedia=!1}}openAddTeamMemberDialog(){this.dialog.open(tt,{width:"550px",maxWidth:"90vw",disableClose:!0}).afterClosed().subscribe(e=>{e&&(console.log("Selected Employee ID to assign:",e),this.assignTeamMember(e))})}assignTeamMember(a){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-project-details"]],features:[Pt([re,st])],decls:26,vars:3,consts:[["noTeam",""],["fileInput",""],["noImages",""],[1,"body"],[1,"inner-wrapper"],["id","sidebar-left",1,"sidebar-left"],["role","main",1,"content-body"],[1,"page-header"],[1,"text-primary"],[1,"right-wrapper","text-end"],[1,"breadcrumbs"],["href","/dashboard"],[1,"bx","bx-home-alt"],["routerLink","/projects"],[1,"card"],[1,"card-body"],["class","text-center p-5",4,"ngIf"],["class","container-fluid p-2 project-details-page",4,"ngIf"],[1,"text-center","p-5"],["diameter","50",1,"mx-auto"],[1,"mt-3","text-muted"],[1,"container-fluid","p-2","project-details-page"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"mb-0","font-weight-bold"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"row","g-4"],[1,"col-lg-6"],[1,"h-100","shadow-sm","border-0","rounded-3"],[1,"border-bottom","pb-3","mb-3"],["matCardAvatar","",1,"text-primary","icon-lg"],[1,"pt-2"],[1,"row","g-3"],[1,"col-sm-6"],[1,"text-muted","small","d-block"],[1,"col-sm-12"],["matCardAvatar","",1,"text-success","icon-lg"],[1,"badge","px-3","py-2","mt-1",3,"ngClass"],[1,"col-12"],[1,"my-1","text-muted"],[1,"col-sm-4"],[1,"text-primary","h6","mb-0"],[1,"text-danger","h6","mb-0"],[1,"h6","mb-0",3,"ngClass"],["class","badge bg-light text-dark ms-1 small",4,"ngIf"],[1,"mb-0","text-secondary","font-weight-bold"],[1,"shadow-sm","border-0","rounded-3"],["matCardAvatar","",1,"text-info","icon-lg"],["mat-stroked-button","","color","primary",3,"click"],["class","row g-3 pt-2",4,"ngIf","ngIfElse"],["class","col-12",4,"ngIf"],[1,"border-bottom","pb-3","mb-3","d-flex","justify-content-between","align-items-center"],["matCardAvatar","",1,"text-danger","icon-lg"],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","sl_no"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","expense_type"],["matColumnDef","expense_date"],["matColumnDef","expense_description"],["mat-header-cell","","class","text-end",4,"matHeaderCellDef"],["mat-cell","","class","text-end text-danger font-weight-bold",4,"matCellDef"],["matColumnDef","expense_value"],["matColumnDef","proof"],["mat-header-cell","","class","text-center",4,"matHeaderCellDef"],["mat-cell","","class","text-center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"d-flex","justify-content-end","align-items-center","p-3","mt-3","bg-light","rounded-3"],[1,"me-3","h6","mb-0"],[1,"h5","mb-0","text-danger","font-weight-bold"],[1,"shadow-sm","border-0","rounded-3","mb-4"],["matCardAvatar","",1,"text-warning","icon-lg"],[1,"upload-dropzone","p-4","text-center","border-dashed","rounded-3","mb-4","bg-light"],[1,"text-muted","display-4","mb-2"],[1,"text-muted","small"],["type","file","hidden","","multiple","","accept","image/*,video/*",3,"change"],["mat-raised-button","","color","accent",3,"click","disabled"],["class","row g-3",4,"ngIf","ngIfElse"],[1,"badge","bg-light","text-dark","ms-1","small"],[1,"row","g-3","pt-2"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"p-3","border","rounded-3","bg-light","d-flex","align-items-center"],[1,"avatar-circle","bg-primary","text-white","font-weight-bold","me-3"],[1,"text-muted","p-2","mb-0"],["matColumnDef","product_name"],["matColumnDef","quantity"],["matColumnDef","unit"],["matColumnDef","price"],["mat-cell","","class","text-end",4,"matCellDef"],["matColumnDef","gst"],["matColumnDef","total"],["mat-cell","","class","text-end font-weight-bold",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"text-center"],["mat-cell","",1,"text-center"],["mat-header-cell","",1,"text-end"],["mat-cell","",1,"text-end"],["mat-cell","",1,"text-end","font-weight-bold"],["mat-header-row",""],["mat-row",""],["mat-cell","",1,"text-end","text-danger","font-weight-bold"],["target","_blank","class","btn btn-sm btn-outline-secondary",3,"href",4,"ngIf"],["class","text-muted small",4,"ngIf"],["target","_blank",1,"btn","btn-sm","btn-outline-secondary",3,"href"],[1,"align-middle"],["class","col-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-6","col-md-4","col-lg-3"],[1,"card","h-100","media-card","position-relative","overflow-hidden","shadow-sm"],["class","card-img-top media-preview","alt","Site Photo",3,"src",4,"ngIf"],["controls","","class","card-img-top media-preview",3,"src",4,"ngIf"],["mat-icon-button","","color","warn","matTooltip","Delete Media",1,"position-absolute","top-0","end-0","m-1","bg-white","shadow-sm",3,"click"],[1,"card-body","p-2"],[1,"text-muted","x-small","d-block"],["alt","Site Photo",1,"card-img-top","media-preview",3,"src"],["controls","",1,"card-img-top","media-preview",3,"src"],[1,"text-muted","p-2","text-center"]],template:function(e,i){e&1&&(o(0,"section",3)(1,"div",4)(2,"aside",5),_(3,"app-sidenav"),r(),o(4,"section",6)(5,"header",7)(6,"h2"),s(7,"Project Details : "),o(8,"span",8),s(9),r()(),o(10,"div",9)(11,"ol",10)(12,"li")(13,"a",11),_(14,"i",12),r()(),o(15,"li")(16,"span")(17,"a",13),s(18," Projects "),r()()(),o(19,"li")(20,"span"),s(21,"Project Details"),r()()()()(),o(22,"section",14)(23,"div",15),g(24,kn,4,0,"div",16)(25,Da,179,57,"div",17),r()()()()()),e&2&&(l(9),C(i.projectData?.project_id||i.projectIdParam),l(15),m("ngIf",i.isLoading),l(),m("ngIf",!i.isLoading&&i.projectData))},dependencies:[Ae,Rt,Bt,Se,st,Fi,Ii,Oi,ji,ki,Pi,Ti,J,Y,We,$e,qe,Ri,gi,ni,ri,di,oi,ai,ci,si,li,mi,pi,Mi,wi,ee,Zi,Qi,ei,zt,Vt,re],styles:[".project-details-page[_ngcontent-%COMP%]{background-color:#f8f9fa;min-height:100vh}.project-details-page[_ngcontent-%COMP%]   .icon-lg[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.project-details-page[_ngcontent-%COMP%]   .white-space-pre[_ngcontent-%COMP%]{white-space:pre-line}.project-details-page[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]{width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px}.project-details-page[_ngcontent-%COMP%]   .border-dashed[_ngcontent-%COMP%]{border:2px dashed #cbd5e1;transition:all .2s ease-in-out}.project-details-page[_ngcontent-%COMP%]   .border-dashed[_ngcontent-%COMP%]:hover{background-color:#f1f5f9;border-color:#0284c7}.project-details-page[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .media-preview[_ngcontent-%COMP%]{height:160px;object-fit:cover;width:100%}.project-details-page[_ngcontent-%COMP%]   .x-small[_ngcontent-%COMP%]{font-size:11px}.project-details-page[_ngcontent-%COMP%]   .cdk-overlay-pane.mat-mdc-dialog-panel[_ngcontent-%COMP%]{max-width:800px!important}"]})};export{Yi as ProjectDetails};
