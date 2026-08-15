import{$ as E,A as ie,B as A,E as oe,G as se,Ga as M,Ha as C,I as ae,J as ce,L as le,Ma as Se,N,Na as we,Nb as Te,Pa as u,Q as de,R as b,Rb as Ae,S as m,T as F,U as s,V as me,Va as R,Wa as I,Xa as x,Xb as Ne,Y as $,Ya as q,Yb as W,Z as pe,_ as ue,_b as ke,a as X,b as Y,ba as fe,ca as he,cb as L,d as Z,da as k,fa as ge,gc as De,ha as _e,hb as ye,ia as ve,ib as be,ja as Ie,jb as Ee,k as y,l as J,lb as Me,mb as Ce,nb as xe,o as d,oa as p,oc as Re,p as ee,pa as D,q as te,qc as Le,ra as g,rb as Fe,s as ne,sb as P,tb as O,ub as B,va as v,wc as Pe,z as re}from"./chunk-QGIYU67U.js";var j=new WeakMap,Ge=(()=>{class r{_appRef;_injector=s(ue);_environmentInjector=s(me);load(e){let t=this._appRef=this._appRef||this._injector.get(we),n=j.get(t);n||(n={loaders:new Set,refs:[]},j.set(t,n),t.onDestroy(()=>{j.get(t)?.refs.forEach(i=>i.destroy()),j.delete(t)})),n.loaders.has(e)||(n.loaders.add(e),n.refs.push(ke(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||r)};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})();var wt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=M({type:r,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return r})(),H;function Xe(){if(H===void 0&&(H=null,typeof window<"u")){let r=window;r.trustedTypes!==void 0&&(H=r.trustedTypes.createPolicy("angular#components",{createHTML:c=>c}))}return H}function S(r){return Xe()?.createHTML(r)||r}function yt(r,c,e){let t=e.sanitize(g.HTML,c);r.innerHTML=S(t||"")}function Oe(r){return Error(`Unable to find icon with the name "${r}"`)}function Ye(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Be(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function We(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var f=class{url;svgText;options;svgElement=null;constructor(c,e,t){this.url=c,this.svgText=e,this.options=t}},He=(()=>{class r{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,i){this._httpClient=e,this._sanitizer=t,this._errorHandler=i,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,i){return this._addSvgIconConfig(e,t,new f(n,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,i){let o=this._sanitizer.sanitize(g.HTML,n);if(!o)throw We(n);let a=S(o);return this._addSvgIconConfig(e,t,new f("",a,i))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new f(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let i=this._sanitizer.sanitize(g.HTML,t);if(!i)throw We(t);let o=S(i);return this._addSvgIconSetConfig(e,new f("",o,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(g.RESOURCE_URL,e);if(!t)throw Be(e);let n=this._cachedIconsByUrl.get(t);return n?y(z(n)):this._loadSvgIconFromConfig(new f(e,null)).pipe(N(i=>this._cachedIconsByUrl.set(t,i)),d(i=>z(i)))}getNamedSvgIcon(e,t=""){let n=je(t,e),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(t,e),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):J(Oe(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(z(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(d(t=>z(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return y(n);let i=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(re(a=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(g.RESOURCE_URL,o.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(h)),y(null)})));return ne(i).pipe(d(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw Oe(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let i=t[n];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(i),a=this._extractSvgIconFromSet(o,e,i.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(N(t=>e.svgText=t),d(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(N(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let i=e.querySelector(`[id="${t}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),n);let a=this._svgElementFromString(S("<svg></svg>"));return a.appendChild(o),this._setSvgAttributes(a,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(S("<svg></svg>")),n=e.attributes;for(let i=0;i<n.length;i++){let{name:o,value:a}=n[i];o!=="id"&&t.setAttribute(o,a)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[i].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,i=n?.withCredentials??!1;if(!this._httpClient)throw Ye();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(g.RESOURCE_URL,t);if(!o)throw Be(t);let a=this._inProgressUrlFetches.get(o);if(a)return a;let l=this._httpClient.get(o,{responseType:"text",withCredentials:i}).pipe(d(h=>S(h)),oe(()=>this._inProgressUrlFetches.delete(o)),se());return this._inProgressUrlFetches.set(o,l),l}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(je(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](t,e);if(i)return Ze(i)?new f(i.url,null,i.options):new f(i,null)}}static \u0275fac=function(t){return new(t||r)(F(Le,8),F(Pe),F(E,8),F(k))};static \u0275prov=de({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function z(r){return r.cloneNode(!0)}function je(r,c){return r+":"+c}function Ze(r){return!!(r.url&&r.options)}var Je=new m("cdk-dir-doc",{providedIn:"root",factory:()=>s(E)}),et=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ze(r){let c=r?.toLowerCase()||"";return c==="auto"&&typeof navigator<"u"&&navigator?.language?et.test(navigator.language)?"rtl":"ltr":c==="rtl"?"rtl":"ltr"}var tt=(()=>{class r{get value(){return this.valueSignal()}valueSignal=ge("ltr");change=new fe;constructor(){let e=s(Je,{optional:!0});if(e){let t=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ze(t||n||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})();var U=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=C({type:r});static \u0275inj=b({})}return r})();var nt=["*"],rt=new m("MAT_ICON_DEFAULT_OPTIONS"),it=new m("mat-icon-location",{providedIn:"root",factory:()=>{let r=s(E),c=r?r.location:null;return{getPathname:()=>c?c.pathname+c.search:""}}}),Ue=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ot=Ue.map(r=>`[${r}]`).join(", "),st=/^url\(['"]?#(.*?)['"]?\)$/,Yt=(()=>{class r{_elementRef=s(D);_iconRegistry=s(He);_location=s(it);_errorHandler=s(k);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=X.EMPTY;constructor(){let e=s(new Ae("aria-hidden"),{optional:!0}),t=s(rt,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,i)=>{n.forEach(o=>{i.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ot),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<t.length;i++)Ue.forEach(o=>{let a=t[i],l=a.getAttribute(o),h=l?l.match(st):null;if(h){let T=n.get(a);T||(T=[],n.set(a,T)),T.push({name:o,value:h[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(A(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${t}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=M({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&(u("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),B(n.color?"mat-"+n.color:""),O("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ne],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:nt,decls:1,vars:0,template:function(t,n){t&1&&(be(),Ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return r})(),Zt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=C({type:r});static \u0275inj=b({imports:[U]})}return r})();var Q;try{Q=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Q=!1}var Ve=(()=>{class r{_platformId=s(_e);isBrowser=this._platformId?Re(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Q)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||r)};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})();function K(r){return Array.isArray(r)?r:[r]}var $e=new Set,w,V=(()=>{class r{_platform=s(Ve);_nonce=s(Ie,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ct}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&at(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})();function at(r,c){if(!$e.has(r))try{w||(w=document.createElement("style"),c&&w.setAttribute("nonce",c),w.setAttribute("type","text/css"),document.head.appendChild(w)),w.sheet&&(w.sheet.insertRule(`@media ${r.replace(/[{}]/g,"")} {body{ }}`,0),$e.add(r))}catch(e){console.error(e)}}function ct(r){return{matches:r==="all"||r==="",media:r,addListener:()=>{},removeListener:()=>{}}}var lt=(()=>{class r{_mediaMatcher=s(V);_zone=s(he);_queries=new Map;_destroySubject=new Z;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return qe(K(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=qe(K(e)).map(o=>this._registerQuery(o).observable),i=ee(n);return i=te(i.pipe(A(1)),i.pipe(ae(1),ie(0))),i.pipe(d(o=>{let a={matches:!1,breakpoints:{}};return o.forEach(({matches:l,query:h})=>{a.matches=a.matches||l,a.breakpoints[h]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),i={observable:new Y(o=>{let a=l=>this._zone.run(()=>o.next(l));return t.addListener(a),()=>{t.removeListener(a)}}).pipe(ce(t),d(({matches:o})=>({query:e,matches:o})),le(this._destroySubject)),mql:t};return this._queries.set(e,i),i}static \u0275fac=function(t){return new(t||r)};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})();function qe(r){return r.map(c=>c.split(",")).reduce((c,e)=>c.concat(e)).map(c=>c.trim())}var dt=new m("MATERIAL_ANIMATIONS"),Qe=null;function G(){return s(dt,{optional:!0})?.animationsDisabled||s(ve,{optional:!0})==="NoopAnimations"?"di-disabled":(Qe??=s(V).matchMedia("(prefers-reduced-motion)").matches,Qe?"reduced-motion":"enabled")}function _n(){return G()!=="enabled"}var mt=["determinateSpinner"];function pt(r,c){if(r&1&&($(),I(0,"svg",11),q(1,"circle",12),x()),r&2){let e=ye();u("viewBox",e._viewBox()),v(),P("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),u("r",e._circleRadius())}}var ut=new m("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Ke})}),Ke=100,ft=10,Fn=(()=>{class r{_elementRef=s(D);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(ut),t=G(),n=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Ke;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ft)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=M({type:r,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,n){if(t&1&&Me(mt,5),t&2){let i;Ce(i=xe())&&(n._determinateCircle=i.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,n){t&2&&(u("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),B("mat-"+n.color),P("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),O("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",W],diameter:[2,"diameter","diameter",W],strokeWidth:[2,"strokeWidth","strokeWidth",W]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,n){if(t&1&&(Se(0,pt,2,8,"ng-template",null,0,Te),I(2,"div",2,1),$(),I(4,"svg",3),q(5,"circle",4),x()(),pe(),I(6,"div",5)(7,"div",6)(8,"div",7),L(9,8),x(),I(10,"div",9),L(11,8),x(),I(12,"div",10),L(13,8),x()()()),t&2){let i=Fe(1);v(4),u("viewBox",n._viewBox()),v(),P("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),u("r",n._circleRadius()),v(4),R("ngTemplateOutlet",i),v(2),R("ngTemplateOutlet",i),v(2),R("ngTemplateOutlet",i)}},dependencies:[De],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return r})();var Tn=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=C({type:r});static \u0275inj=b({imports:[U]})}return r})();export{Ve as a,Ge as b,K as c,tt as d,U as e,wt as f,yt as g,V as h,lt as i,_n as j,Yt as k,Zt as l,Fn as m,Tn as n};
