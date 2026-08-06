import{d as Re,t as We,u as Xe}from"./chunk-HO27U5MZ.js";import{a as Oe,b as ke}from"./chunk-D3QUTKC2.js";import{A as Ye,B as Je,C as Ke,E as et,z as Qe}from"./chunk-OIXBC7R7.js";import{a as xe}from"./chunk-2HJGIOR4.js";import{a as it,b as at}from"./chunk-7SS7BDVR.js";import{A as je,E as Ue,J as Ge,M as $e,R as Ze,T as $,V as tt,i as Be,o as qe,p as Ve,z as He}from"./chunk-W6HQWFQ2.js";import{b as Te,c as Le}from"./chunk-A646AUJV.js";import{a as we,b as h,d as De,e as Me,f as Ae,h as M,j as Pe,o as Ie,p as ze,q as Ee,s as Fe}from"./chunk-5KFNVHLJ.js";import{Aa as C,Ac as Ne,Ba as x,Bb as _e,Fa as E,Ga as j,Ha as se,La as w,Na as de,Oa as b,Pa as v,Qa as y,R,Ra as le,S as q,Sa as ce,Ta as me,U as g,Ua as m,Va as n,W as P,Wa as o,Wb as O,X as I,Xa as u,Xb as D,Y as z,Ya as U,Yb as L,Z as ae,Za as k,_a as pe,ba as V,cb as F,d as N,eb as f,ec as be,f as B,fa as H,gb as _,ha as ne,hb as ge,ib as Y,kb as ue,lb as J,lc as ve,ma as re,mb as K,mc as G,n as A,oa as Q,oc as ye,pa as oe,qb as he,sb as Z,tc as Se,ub as l,v as ie,va as s,vb as fe,vc as Ce,wb as T,za as S}from"./chunk-UILZSVQ5.js";import{a as ee,b as te}from"./chunk-IFGU66OU.js";function lt(a,r){if(a&1&&(n(0,"mat-option",17),l(1),o()),a&2){let e=r.$implicit;m("value",e),s(),T(" ",e," ")}}function ct(a,r){if(a&1){let e=F();n(0,"mat-form-field",14)(1,"mat-select",16,0),f("selectionChange",function(t){P(e);let d=_(2);return I(d._changePageSize(t.value))}),ce(3,lt,2,2,"mat-option",17,le),o(),n(5,"div",18),f("click",function(){P(e);let t=he(2);return I(t.open())}),o()()}if(a&2){let e=_(2);m("appearance",e._formFieldAppearance)("color",e.color),s(),m("value",e.pageSize)("disabled",e.disabled),de("aria-labelledby",e._pageSizeLabelId),m("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),s(2),me(e._displayedPageSizeOptions)}}function mt(a,r){if(a&1&&(n(0,"div",15),l(1),o()),a&2){let e=_(2);s(),fe(e.pageSize)}}function pt(a,r){if(a&1&&(n(0,"div",3)(1,"div",13),l(2),o(),v(3,ct,6,7,"mat-form-field",14),v(4,mt,2,1,"div",15),o()),a&2){let e=_();s(),b("id",e._pageSizeLabelId),s(),T(" ",e._intl.itemsPerPageLabel," "),s(),y(e._displayedPageSizeOptions.length>1?3:-1),s(),y(e._displayedPageSizeOptions.length<=1?4:-1)}}function gt(a,r){if(a&1){let e=F();n(0,"button",19),f("click",function(){P(e);let t=_();return I(t._buttonClicked(0,t._previousButtonsDisabled()))}),z(),n(1,"svg",8),u(2,"path",20),o()()}if(a&2){let e=_();m("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),b("aria-label",e._intl.firstPageLabel)}}function ut(a,r){if(a&1){let e=F();n(0,"button",21),f("click",function(){P(e);let t=_();return I(t._buttonClicked(t.getNumberOfPages()-1,t._nextButtonsDisabled()))}),z(),n(1,"svg",8),u(2,"path",22),o()()}if(a&2){let e=_();m("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),b("aria-label",e._intl.lastPageLabel)}}var ht=(()=>{class a{changes=new N;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,i,t)=>{if(t==0||i==0)return`0 of ${t}`;t=Math.max(t,0);let d=e*i,c=d<t?Math.min(d+i,t):d+i;return`${d+1} \u2013 ${c} of ${t}`};static \u0275fac=function(i){return new(i||a)};static \u0275prov=Q({token:a,factory:a.\u0275fac})}return a})(),ft=50;var _t=new q("MAT_PAGINATOR_DEFAULT_OPTIONS"),W=(()=>{class a{_intl=g(ht);_changeDetectorRef=g(O);_formFieldAppearance;_pageSizeLabelId=g(He).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new B(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>L(i,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new V;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=g(_t,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:t,pageSizeOptions:d,hidePageSize:c,showFirstLastButtons:p}=i;t!=null&&(this._pageSize=t),d!=null&&(this._pageSizeOptions=d),c!=null&&(this.hidePageSize=c),p!=null&&(this.showFirstLastButtons=p)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,t=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(t)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:ft),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=E({type:a,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",L],length:[2,"length","length",L],pageSize:[2,"pageSize","pageSize",L],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",D],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",D],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",D]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(i,t){i&1&&(n(0,"div",1)(1,"div",2),v(2,pt,5,4,"div",3),n(3,"div",4)(4,"div",5),l(5),o(),v(6,gt,3,5,"button",6),n(7,"button",7),f("click",function(){return t._buttonClicked(t.pageIndex-1,t._previousButtonsDisabled())}),z(),n(8,"svg",8),u(9,"path",9),o()(),ae(),n(10,"button",10),f("click",function(){return t._buttonClicked(t.pageIndex+1,t._nextButtonsDisabled())}),z(),n(11,"svg",8),u(12,"path",11),o()(),v(13,ut,3,5,"button",12),o()()()),i&2&&(s(2),y(t.hidePageSize?-1:2),s(3),T(" ",t._intl.getRangeLabel(t.pageIndex,t.pageSize,t.length)," "),s(),y(t.showFirstLastButtons?6:-1),s(),m("matTooltip",t._intl.previousPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),b("aria-label",t._intl.previousPageLabel),s(3),m("matTooltip",t._intl.nextPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),b("aria-label",t._intl.nextPageLabel),s(3),y(t.showFirstLastButtons?13:-1))},dependencies:[Ge,Je,Qe,Ze,We],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return a})(),Jt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=j({type:a});static \u0275inj=R({imports:[$,Ke,Xe,W]})}return a})();var bt=["*",[["","matSortHeaderIcon",""]]],vt=["*","[matSortHeaderIcon]"];function yt(a,r){a&1&&(z(),U(0,"svg",3),pe(1,"path",4),k())}function St(a,r){a&1&&(U(0,"div",2),Y(1,1,null,yt,2,0),k())}var rt=new q("MAT_SORT_DEFAULT_OPTIONS"),X=(()=>{class a{_defaultOptions;_initializedStream=new B(1);sortables=new Map;_stateChanges=new N;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new V;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let i=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,t=Ct(e.start||this.start,i),d=t.indexOf(this.direction)+1;return d>=t.length&&(d=0),t[d]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(i){return new(i||a)(x(rt,8))};static \u0275dir=se({type:a,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",D],disabled:[2,"matSortDisabled","disabled",D]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[re]})}return a})();function Ct(a,r){let e=["asc","desc"];return a=="desc"&&e.reverse(),r||e.push(""),e}var fi=(()=>{class a{_sort=g(X,{optional:!0});_columnDef=g(Re,{optional:!0});_changeDetectorRef=g(O);_focusMonitor=g(qe);_elementRef=g(oe);_ariaDescriber=g(je,{optional:!0});_renderChanges;_animationsDisabled=Ue();_recentlyCleared=H(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){g(Ve).load($e);let e=g(rt,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=ie(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),i=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?i:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=E({type:a,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(i,t){i&1&&f("click",function(){return t._toggleOnInteraction()})("keydown",function(c){return t._handleKeydown(c)})("mouseleave",function(){return t._recentlyCleared.set(null)}),i&2&&(b("aria-sort",t._getAriaSortAttribute()),Z("mat-sort-header-disabled",t._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",D],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",D]},exportAs:["matSortHeader"],ngContentSelectors:vt,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(i,t){i&1&&(ge(bt),U(0,"div",0)(1,"div",1),Y(2),k(),v(3,St,3,0,"div",2),k()),i&2&&(Z("mat-sort-header-sorted",t._isSorted())("mat-sort-header-position-before",t.arrowPosition==="before")("mat-sort-header-descending",t._sort.direction==="desc")("mat-sort-header-ascending",t._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",t._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",t._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",t._animationsDisabled),b("tabindex",t._isDisabled()?null:0)("role",t._isDisabled()?null:"button"),s(3),y(t._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return a})(),_i=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=j({type:a});static \u0275inj=R({imports:[Be]})}return a})();function xt(a,r){if(a&1){let e=F();n(0,"ngb-alert",41),f("closed",function(){P(e);let t=_();return I(t.closeAlert())}),n(1,"strong"),l(2),o()()}if(a&2){let e=_();m("type",_e(e.type)),s(2),T(" ",e.alertMsg," ")}}function wt(a,r){a&1&&(n(0,"div",17),u(1,"mat-spinner",42),n(2,"p",43),l(3,"Processing, please wait..."),o()())}function Dt(a,r){a&1&&(n(0,"span",44),l(1," Organisation Name is required. "),o())}function Mt(a,r){a&1&&(n(0,"span",44),l(1," Client Name is required. "),o())}function At(a,r){a&1&&(n(0,"span",44),l(1," Email is required. "),o())}function Pt(a,r){a&1&&(n(0,"span",44),l(1," Contact number is required. "),o())}function It(a,r){a&1&&(n(0,"span",44),l(1," District is required. "),o())}function zt(a,r){a&1&&(n(0,"span",44),l(1," State is required. "),o())}function Et(a,r){a&1&&(n(0,"span",44),l(1," Pincode is required. "),o())}function Ft(a,r){a&1&&(n(0,"span",44),l(1," Address is required. "),o())}var ot=class a{constructor(r,e,i,t,d,c){this.fb=r;this.auth=e;this.http=i;this.crypto=t;this.router=d;this.config=c}fb;auth;http;crypto;router;config;paginator;sort;platformId=g(ne);cdr=g(O);route=g(Se);isLoading=H(!1);showAlert=!1;alertMsg="";type="";isEditMode=!1;isClientEditMode=!1;clientaddid=null;clientEdit=null;clientAddForm=new Ae({name:new M("",[h.required,h.minLength(2)]),email:new M("",[h.required,h.email]),phone:new M("",[h.required,h.pattern("^[0-9]{10}$")]),district:new M("",[h.required]),state:new M("",[h.required]),pincode:new M("",[h.required]),address:new M("",[h.maxLength(500),h.required]),organisation_name:new M("",[h.required,h.minLength(2)])});ngOnInit(){this.clientaddid=this.route.snapshot.paramMap.get("id"),this.clientEdit=this.route.snapshot.paramMap.get("clientid"),this.clientaddid?(this.loadQuotationDetails(),this.isEditMode=!0):this.clientEdit&&(this.loadClientDetails(),this.isClientEditMode=!0)}async loadQuotationDetails(){if(G(this.platformId)){this.isLoading.set(!0),this.cdr.detectChanges();try{let e=(await A(this.http.get(`${this.config.apiUrl}quotation-request/${this.clientaddid}`,{observe:"response"})))?.body;if(!e||!e.data){console.warn("Response body or encrypted data payload is missing");return}let i=e.data.result||e.data,t=e.data.iv||e.iv,d=e.data.tag||e.tag,c=await this.crypto.decrypt(i,t,d);if(!c||typeof c!="string"||!c.trim()){console.error("Decryption returned empty or invalid text:",c);return}let p=JSON.parse(c.trim());this.clientAddForm.patchValue({name:p.full_name||"",email:p.email||"",phone:p.phone||"",address:p.installation_address||""})}catch(r){console.error("Failed to load quotation details:",r),this.isLoading.set(!1),this.cdr.detectChanges()}finally{this.isLoading.set(!1),this.cdr.detectChanges()}}}async loadClientDetails(){if(G(this.platformId)){this.isLoading.set(!0),this.cdr.detectChanges();try{let e=(await A(this.http.get(`${this.config.apiUrl}usersbyid/${this.clientEdit}`,{observe:"response"})))?.body;if(!e||!e.data){console.warn("Response body or encrypted data payload is missing");return}let i=e.data.result||e.data,t=e.data.iv||e.iv,d=e.data.tag||e.tag,c=await this.crypto.decrypt(i,t,d);if(!c||typeof c!="string"||!c.trim()){console.error("Decryption returned empty or invalid text:",c);return}let p=JSON.parse(c.trim());this.clientAddForm.patchValue({name:p.name||"",email:p.email||"",phone:p.phone||"",address:p.address||"",district:p.district||"",state:p.state||"",pincode:p.pincode||"",organisation_name:p.organisation_name||""})}catch(r){console.error("Failed to load quotation details:",r),this.isLoading.set(!1),this.cdr.detectChanges()}finally{this.isLoading.set(!1),this.cdr.detectChanges()}}}async submitContactForm(){if(!this.clientAddForm.valid){this.showAlert=!0,this.alertMsg="* Fields are required!!",this.type="danger";return}if(G(this.platformId))if(this.isLoading.set(!0),this.cdr.detectChanges(),this.isClientEditMode){let r=this.clientAddForm.value,e={};Object.keys(r).forEach(i=>{let t=r[i];t!=null&&(i==="full_name"?e.name=t:e[i]=t)}),console.log("Sending Payload:",e);try{let t=(await A(this.http.patch(`${this.config.apiUrl}updateusersbyid/${this.clientEdit}`,e,{observe:"response"})))?.body;if(t&&t.data){let d=(t.data.result||t.data).replace(/ /g,"+"),c=(t.data.iv||t.iv).replace(/ /g,"+"),p=(t.data.tag||t.tag)?.replace(/ /g,"+"),st=await this.crypto.decrypt(d,c,p),dt=JSON.parse(st);console.log("User Updated Successfully:",dt),this.router.navigate(["/view_client"])}}catch(i){console.error("Failed to update user:",i)}finally{this.isLoading.set(!1),this.cdr.detectChanges()}}else try{let r=this.crypto.generateToken(),e=new FormData;e.append("role","client"),e.append("name",this.clientAddForm.value.name??""),e.append("email",this.clientAddForm.value.email??""),e.append("phone",this.clientAddForm.value.phone??""),e.append("address",this.clientAddForm.value.address??""),e.append("district",this.clientAddForm.value.district??""),e.append("state",this.clientAddForm.value.state??""),e.append("pincode",this.clientAddForm.value.pincode??""),e.append("organisation_name",this.clientAddForm.value.organisation_name??""),e.append("password",r);let i=await A(this.http.post(this.config.apiUrl+"create_user",e,{observe:"response"}));if(this.sendEmailToClient(te(ee({},this.clientAddForm.value),{password:r})),this.isEditMode){let t={status:"viewed",assigned_admin_id:this.clientaddid};try{let d=await A(this.http.patch(this.config.apiUrl+"quotationupdate/"+this.clientaddid,t,{observe:"response"}))}catch(d){console.log(d)}}this.showAlert=!0,this.alertMsg="Client Added Successfully !!",this.type="success",this.clientAddForm.reset(),this.isLoading.set(!1),this.cdr.detectChanges(),setTimeout(()=>{this.router.navigate(["/view_client"])},1e3)}catch(r){console.error(r),this.showAlert=!0,this.type="danger",r.status===403?this.auth.logout():this.alertMsg="Unable to add client.",this.isLoading.set(!1),this.cdr.detectChanges()}}closeAlert(){this.showAlert=!1,this.alertMsg="",this.type=""}async sendEmailToClient(r){let e={email:r.email,name:r.name,temp_password:r.password,login_link:this.config.customerPanelUrl+"/login/"};try{let t=(await A(this.http.post(this.config.apiUrl+"sendLoginCredentials",e,{observe:"response"}))).body,d=await this.crypto.decrypt(t.data.result,t.data.iv,t.data.tag),c=JSON.parse(d);console.log(c)}catch(i){console.error("Email trigger failed:",i),this.showAlert=!0,this.alertMsg="Failed to send email.",this.type="danger"}}static \u0275fac=function(e){return new(e||a)(x(Ee),x(xe),x(ye),x(Le),x(Ce),x(Te))};static \u0275cmp=E({type:a,selectors:[["app-add-client"]],viewQuery:function(e,i){if(e&1&&ue(W,5)(X,5),e&2){let t;J(t=K())&&(i.paginator=t.first),J(t=K())&&(i.sort=t.first)}},hostVars:1,hostBindings:function(e,i){e&2&&b("ngSkipHydration","")},decls:80,vars:12,consts:[[1,"body"],[1,"inner-wrapper"],["id","sidebar-left",1,"sidebar-left"],["role","main",1,"content-body"],[1,"page-header"],[1,"right-wrapper","text-end"],[1,"breadcrumbs"],["href","/dashboard"],[1,"bx","bx-home-alt"],[1,"card"],[1,"card-body"],[1,"table-container"],[1,"form-container"],[1,"row"],[1,"col-md-12"],[3,"type"],[1,"col-md-12",2,"position","relative","min-height","250px"],[2,"position","absolute","top","0","left","0","width","100%","height","100%","background","rgba(255, 255, 255, 0.9)","z-index","99999","display","flex","flex-direction","column","align-items","center","justify-content","center","border-radius","8px"],["ngSkipHydration","",1,"row","client-add-form",3,"ngSubmit","formGroup"],[1,"col-md-4"],[1,"form-floating"],["placeholder","Organisation Name","type","text","id","organisation_name","formControlName","organisation_name","autocomplete","current-orgname",1,"form-control"],["style","color: red;font-size: 11px;font-weight: 700;",4,"ngIf"],["for","organisation_name"],["placeholder","Client Name","type","text","id","name","formControlName","name","autocomplete","current-name",1,"form-control"],["for","name"],["placeholder","Email Address","type","text","id","email","formControlName","email","autocomplete","current-email",1,"form-control"],["for","email"],["placeholder","Contact Number","type","text","id","phone","formControlName","phone","autocomplete","current-phone",1,"form-control"],["for","phone"],["placeholder","District","type","text","id","district","formControlName","district","autocomplete","current-district",1,"form-control"],["for","district"],["placeholder","State","type","text","id","state","formControlName","state","autocomplete","current-state",1,"form-control"],["for","state"],["placeholder","Pincode","type","text","id","pincode","formControlName","pincode","autocomplete","current-pincode",1,"form-control"],["for","pincode"],["placeholder","Address","id","address","formControlName","address","autocomplete","street-address",1,"form-control",2,"height","100px"],["style","color: red; font-size: 11px; font-weight: 700;",4,"ngIf"],["for","address"],[1,"col-12"],["type","submit",1,"btn","btn-primary","w-100","py-3",3,"disabled"],[3,"closed","type"],["diameter","50"],[2,"margin-top","12px","font-weight","bold","color","#333"],[2,"color","red","font-size","11px","font-weight","700"]],template:function(e,i){e&1&&(n(0,"section",0)(1,"div",1)(2,"aside",2),u(3,"app-sidenav"),o(),n(4,"section",3)(5,"header",4)(6,"h2"),l(7,"Add Client"),o(),n(8,"div",5)(9,"ol",6)(10,"li")(11,"a",7),u(12,"i",8),o()(),n(13,"li")(14,"span"),l(15,"Add Client"),o()()()()(),n(16,"section",9)(17,"div",10)(18,"div",11)(19,"div",12)(20,"h2"),l(21,"Client Information"),o(),n(22,"div",13)(23,"div",14),v(24,xt,3,3,"ngb-alert",15),o(),n(25,"div",16),v(26,wt,4,0,"div",17),n(27,"form",18),f("ngSubmit",function(){return i.submitContactForm()}),n(28,"div",19)(29,"div",20),u(30,"input",21),S(),w(31,Dt,2,0,"span",22),n(32,"label",23),l(33,"Organisation Name *"),o()()(),n(34,"div",19)(35,"div",20),u(36,"input",24),S(),w(37,Mt,2,0,"span",22),n(38,"label",25),l(39,"Client Name *"),o()()(),n(40,"div",19)(41,"div",20),u(42,"input",26),S(),w(43,At,2,0,"span",22),n(44,"label",27),l(45,"Email Address *"),o()()(),n(46,"div",19)(47,"div",20),u(48,"input",28),S(),w(49,Pt,2,0,"span",22),n(50,"label",29),l(51,"Contact Number *"),o()()(),n(52,"div",19)(53,"div",20),u(54,"input",30),S(),w(55,It,2,0,"span",22),n(56,"label",31),l(57,"District *"),o()()(),n(58,"div",19)(59,"div",20),u(60,"input",32),S(),w(61,zt,2,0,"span",22),n(62,"label",33),l(63,"State *"),o()()(),n(64,"div",19)(65,"div",20),u(66,"input",34),S(),w(67,Et,2,0,"span",22),n(68,"label",35),l(69,"Pincode *"),o()()(),n(70,"div",19)(71,"div",20)(72,"textarea",36),l(73,"                                                "),o(),S(),w(74,Ft,2,0,"span",37),n(75,"label",38),l(76,"Address *"),o()()(),n(77,"div",39)(78,"button",40),l(79,"Add Client"),o()()()()()()()()()()()()),e&2&&(s(24),y(i.showAlert?24:-1),s(2),y(i.isLoading()?26:-1),s(),m("formGroup",i.clientAddForm),s(3),C(),s(),m("ngIf",i.clientAddForm.get("organisation_name")?.touched&&i.clientAddForm.get("organisation_name")?.errors?.required),s(5),C(),s(),m("ngIf",i.clientAddForm.get("name")?.touched&&i.clientAddForm.get("name")?.errors?.required),s(5),C(),s(),m("ngIf",i.clientAddForm.get("email")?.touched&&i.clientAddForm.get("email")?.errors?.required),s(5),C(),s(),m("ngIf",i.clientAddForm.get("phone")?.touched&&i.clientAddForm.get("phone")?.errors?.required),s(5),C(),s(),m("ngIf",i.clientAddForm.get("district")?.touched&&i.clientAddForm.get("district")?.errors?.required),s(5),C(),s(),m("ngIf",i.clientAddForm.get("state")?.touched&&i.clientAddForm.get("state")?.errors?.required),s(5),C(),s(),m("ngIf",i.clientAddForm.get("pincode")?.touched&&i.clientAddForm.get("pincode")?.errors?.required),s(5),C(),s(2),m("ngIf",i.clientAddForm.get("address")?.hasError("required")&&i.clientAddForm.get("address")?.touched),s(4),m("disabled",i.clientAddForm.invalid))},dependencies:[Ne,ve,be,Fe,Pe,we,De,Me,ze,Ie,Ye,et,$,tt,ke,Oe,at,it],styles:[`.form-container{max-width:100%}.full-width{width:100%;margin-bottom:.5rem}.actions{display:flex;justify-content:flex-end;margin-top:1rem}textarea{resize:none}hr{height:2px;background-color:#000}.client-add-form .col-md-4{margin-bottom:2rem}.client-add-form textarea{height:100px}.position-relative{position:relative}.loading-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#ffffffd9;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:1000;border-radius:8px}
`],encapsulation:2})};export{W as a,Jt as b,X as c,fi as d,_i as e,ot as f};
