import{a as q,b as I,c as k,d as R,e as Y,f as J,g as S,h as T,i as E,j as P,k as A,l as B,m as Q,n as U,o as Z,p as ee,q as te,r as z,s as ae}from"./chunk-2RBMYNCF.js";import{a as W}from"./chunk-IODH42ZU.js";import{d as K,i as X}from"./chunk-VQ5XAIGO.js";import{Db as s,Fa as g,Ga as L,Ha as d,Ka as o,Pa as F,Qa as M,R as j,Va as y,Wa as b,Yb as G,bb as c,d as H,e as f,hb as V,ib as v,k as x,na as l,o as h,p,sb as $,v as C,va as _}from"./chunk-CBFKIYWN.js";var ie=[[["caption"]],[["colgroup"],["col"]],"*"],re=["caption","colgroup, col","*"];function oe(e,i){e&1&&v(0,2)}function le(e,i){e&1&&(y(0,"thead",0),c(1,1),b(),y(2,"tbody",2),c(3,3)(4,4),b(),y(5,"tfoot",0),c(6,5),b())}function se(e,i){e&1&&c(0,1)(1,3)(2,4)(3,5)}var ze=(()=>{class e extends z{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275cmp=g({type:e,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(n,a){n&2&&$("mat-table-fixed-layout",a.fixedLayout)},exportAs:["matTable"],features:[s([{provide:z,useExisting:e},{provide:q,useExisting:e},{provide:Q,useValue:null}]),o],ngContentSelectors:re,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(n,a){n&1&&(V(ie),v(0),v(1,1),F(2,oe,1,0),F(3,le,7,0)(4,se,4,0)),n&2&&(_(2),M(a._isServer?2:-1),_(),M(a._isNativeHtmlTable?3:4))},dependencies:[Z,U,te,ee],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return e})(),Ne=(()=>{class e extends I{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275dir=d({type:e,selectors:[["","matCellDef",""]],features:[s([{provide:I,useExisting:e}]),o]})}return e})(),Oe=(()=>{class e extends k{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275dir=d({type:e,selectors:[["","matHeaderCellDef",""]],features:[s([{provide:k,useExisting:e}]),o]})}return e})();var He=(()=>{class e extends R{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275dir=d({type:e,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[s([{provide:R,useExisting:e}]),o]})}return e})(),je=(()=>{class e extends Y{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275dir=d({type:e,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[o]})}return e})();var Le=(()=>{class e extends J{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275dir=d({type:e,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[o]})}return e})();var Ve=(()=>{class e extends S{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275dir=d({type:e,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",G]},features:[s([{provide:S,useExisting:e}]),o]})}return e})();var $e=(()=>{class e extends T{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275dir=d({type:e,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[s([{provide:T,useExisting:e}]),o]})}return e})(),Ge=(()=>{class e extends P{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275cmp=g({type:e,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[s([{provide:P,useExisting:e}]),o],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(n,a){n&1&&c(0,0)},dependencies:[E],encapsulation:2,changeDetection:1})}return e})();var Ke=(()=>{class e extends A{static \u0275fac=(()=>{let t;return function(a){return(t||(t=l(e)))(a||e)}})();static \u0275cmp=g({type:e,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[s([{provide:A,useExisting:e}]),o],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(n,a){n&1&&c(0,0)},dependencies:[E],encapsulation:2,changeDetection:1})}return e})(),We=(()=>{class e extends B{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(n){return new(n||e)};static \u0275dir=d({type:e,selectors:[["ng-template","matNoDataRow",""]],features:[s([{provide:B,useExisting:e}]),o]})}return e})();var Xe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=L({type:e});static \u0275inj=j({imports:[ae,X]})}return e})(),de=9007199254740991,ne=class extends W{_data;_renderData=new f([]);_filter=new f("");_internalPageChanges=new H;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(i){i=Array.isArray(i)?i:[],this._data.next(i),this._renderChangesSubscription||this._filterData(i)}get filter(){return this._filter.value}set filter(i){this._filter.next(i),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(i){this._sort=i,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(i){this._paginator=i,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(i,t)=>{let n=i[t];if(K(n)){let a=Number(n);return a<de?a:n}return n};sortData=(i,t)=>{let n=t.active,a=t.direction;return!n||a==""?i:i.sort((w,D)=>{let r=this.sortingDataAccessor(w,n),m=this.sortingDataAccessor(D,n),N=typeof r,O=typeof m;N!==O&&(N==="number"&&(r+=""),O==="number"&&(m+=""));let u=0;return r!=null&&m!=null?r>m?u=1:r<m&&(u=-1):r!=null?u=1:m!=null&&(u=-1),u*(a=="asc"?1:-1)})};filterPredicate=(i,t)=>{let n=t.trim().toLowerCase();return Object.values(i).some(a=>`${a}`.toLowerCase().includes(n))};constructor(i=[]){super(),this._data=new f(i),this._updateChangeSubscription()}_updateChangeSubscription(){let i=this._sort?C(this._sort.sortChange,this._sort.initialized):x(null),t=this._paginator?C(this._paginator.page,this._internalPageChanges,this._paginator.initialized):x(null),n=this._data,a=p([n,this._filter]).pipe(h(([r])=>this._filterData(r))),w=p([a,i]).pipe(h(([r])=>this._orderData(r))),D=p([w,t]).pipe(h(([r])=>this._pageData(r)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=D.subscribe(r=>this._renderData.next(r))}_filterData(i){return this.filteredData=this.filter==null||this.filter===""?i:i.filter(t=>this.filterPredicate(t,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(i){return this.sort?this.sortData(i.slice(),this.sort):i}_pageData(i){if(!this.paginator)return i;let t=this.paginator.pageIndex*this.paginator.pageSize;return i.slice(t,t+this.paginator.pageSize)}_updatePaginator(i){Promise.resolve().then(()=>{let t=this.paginator;if(t&&(t.length=i,t.pageIndex>0)){let n=Math.ceil(t.length/t.pageSize)-1||0,a=Math.min(t.pageIndex,n);a!==t.pageIndex&&(t.pageIndex=a,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};export{ze as a,Ne as b,Oe as c,He as d,je as e,Le as f,Ve as g,$e as h,Ge as i,Ke as j,We as k,Xe as l,ne as m};
