(function(__wpcc){'use strict';var fa,ea,v,u,ia,ja,ka,la,na,oa,qa,ta,pa,va,wa,Ba,Da,Fa,Ga,Ha,Aa,La,B,Oa,Qa,Ra,Va,Wa,I,ab,db,jb,ib,lb,ob,pb,qb;fa=function(a,b,c){if(!(null==a||a instanceof Text||b===c)){for(var d in null==a._listeners&&(a._listeners={}),null==b&&(b=t),null==c&&(c=t),c)null==b[d]&&(delete a._listeners[d],a.removeEventListener(d,ea));for(var e in b){d=b[e];var h=c[e];null!=d&&h!==d&&(null==h&&a.addEventListener(e,ea),a._listeners[e]=d)}}};ea=function(a){return this._listeners[a.type].call(this,a)};
v=function(a,b,c){u(a,b,c,"_renders");u(a,b,c,"_renderedBy")};u=function(a,b,c,d){for(var e=ha[b];a;)e&&(a[e]=null),a[b]=c,a=a[d]};ia=function(a,b,c){return b in a?a[b]=null==c?"":c:null==c?a.removeAttribute(b):a.setAttribute(b,c)};ja=function(a,b){null!=b&&u(a,"_parentDom",b,"_renderedBy")};ka=function(a,b,c){return function l(a,b,c,m){if(!a)return b;for(var e=0;e<a.length;e++){var h=a[e];Array.isArray(h)?l(h,b,c,m):m&&null==h||b.push(c?c(h):h)}return b}(a,[],b,c)};
la=function(a){return"o"===a[0]&&"n"===a[1]};__wpcc.w=function(a,b){if(null==a||"boolean"==typeof a)return null;null==b&&(b=t);var c,d=b.ref,e=b.key,h="string"==typeof a?{}:null,k=b,m={},l=null!=h,n;for(n in k)null==ma[n]&&(m[n]=k[n],l&&la(n)&&(h[n.substr(2).toLowerCase()]=k[n]));b=m;k=arguments.length;m=Array(2<k?k-2:0);for(l=2;l<k;l++)m[l-2]=arguments[l];return m.length&&null==b.children&&(c=ka(m)),null!=b.children&&(c=ka([b.children])),b.children=c,na(a,b,h,e,d)};
na=function(a,b,c,d,e){a={type:"string"==typeof a?a.toLowerCase():a,props:b,events:c,key:d,ref:e,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return a.__self=a,a};__wpcc.x=function(){};
oa=function(a){return null==a||"boolean"==typeof a?__wpcc.w(y):"string"==typeof a||"number"==typeof a?na(null,String(a)):Array.isArray(a)?__wpcc.w(__wpcc.x,null,a):null!=a._dom?na(a.type,a.props,a.events,a.key,null):a};qa=function(a){for(var b;b=a.pop();)pa(b)};ta=function(a){var b=a.name;return"componentDidMount"===b?ra.push(a):"componentDidUpdate"===b?sa.push(a):void pa(a)};
pa=function(a){var b=a.args,c=a.bind;a=a.name;c._lastLifeCycleMethod=a;var d=c[a],e=!!c.componentDidCatch;if(ua)Promise.resolve().then(()=>d&&d.apply(c,b)).catch(a=>{if(e)return c.componentDidCatch(a);throw a;});else try{d.apply(c,b)}catch(h){if(e)return c.componentDidCatch(h);throw h;}};
va=function(a,b){if(null!=a&&a!==t){va(a._renders,b);var c=a._component;b||null==c||(c.setState=__wpcc.x,c._VNode=null,ta({name:"componentWillUnmount",bind:c}));if(c=a._children)for(;c.length;)va(c.pop(),b);!function(a,b){if(!b&&"function"!=typeof a.type){var c=a._dom;null!=c&&(a.type!==y&&fa(c,null,a.events),wa(xa,c),function(a){if(null!=a){var b=a.parentNode;b&&b.removeChild(a)}}(c))}!function(a,b){if(null!=a){if(!b){b=a._nextSibDomVNode;if(null!=b){var c=b._dom;c=c&&c.previousSibling;v(b,"_prevSibDomVNode",
c&&c._VNode)}b=a._prevSibDomVNode;null!=b&&(c=(c=b._dom)&&c.nextSibling,v(b,"_nextSibDomVNode",c&&c._VNode))}wa(ya,a)}}(a,b)}(a,b)}};wa=function(a,b){if(null!=b)for(var c in a)b[c]=null};
Ba=function(a,b,c,d){var e=a._children||za,h=(b||t)._children||za,k=a.type===__wpcc.x;b=e.length;for(var m=Math.max(b,h.length),l=0;l<m;l++){var n=e[l]||(l<b?__wpcc.w(y):null),Z=h[l]||t;if(null==Z._nextSibDomVNode){var K=k?a._nextSibDomVNode:null;null!=K&&u(n,"_nextSibDomVNode",K,"_renderedBy")}Aa(n,Z,c,null,d);k&&null!=n&&(Z=l,n=n&&(n._dom||n._FragmentDomNodeChildren),K=a._FragmentDomNodeChildren,null==K&&u(a,"_FragmentDomNodeChildren",K=[],"_renderedBy"),K[Z]=n)}k&&b&&(c=a._children,u(a,"_nextSibDomVNode",
c[b-1]._nextSibDomVNode,"_renderedBy"),u(a,"_prevSibDomVNode",c[0]._prevSibDomVNode,"_renderedBy"))};Da=function(){var a;for(Ca.sort((a,c)=>a._depth-c._depth);a=Ca.pop();)a._dirty&&(a._dirty=!1,a.forceUpdate(!1))};Fa=function(a,b){if(b._renders=a,a)for(var c in a._renderedBy=b,Ea)a[c]=b[c]};Ga=function(a){return this.constructor(a)};Ha=function(a,b,c){var d,e=z({},a.state||t,a._nextState||t);(b=null!=(d=b.getDerivedStateFromProps)?z({},d(c.props,e)):null)&&z(e,b);a._nextState=e};
Aa=function(a,b,c,d,e){if("boolean"==typeof a&&(a=null),null==b&&(b=t),null!=a){if(a===t||!((h=a)&&h.__self===h||(console.warn("component not of expected type =>",h),0)))return null;var h;if(b===a)return a._dom;!function(a,b){if(b!==t&&null!=a&&null!=b){var c=b._prevSibDomVNode;null==a._prevSibDomVNode&&null!=c&&(v(a,"_prevSibDomVNode",c),v(c,"_nextSibDomVNode",a));b=b._nextSibDomVNode;null==a._nextSibDomVNode&&null!=b&&(v(a,"_nextSibDomVNode",b),v(b,"_prevSibDomVNode",a))}}(a,b);h=b.type;var k=a.type,
m=Ia(k);k===h&&m&&(a._component=b._component);k!==h&&(va(b),b=t);var l,n;m=a;return"string"!=typeof a.props&&k!==y&&(a=function(a,b,c,d){var e;return null!=a&&Ia(e=a.type)?(b=b||t,function(a){a=a.prototype;return!(!a||!a.render)}(e)?function(a,b,c,d){var e=a.type,h=a._component;if(null!=h){if(null!=h.shouldComponentUpdate&&!c&&!1===h.shouldComponentUpdate(a.props,h._nextState||h.state))return t;Ha(h,e,a);ta({bind:h,name:"componentWillUpdate",args:[a.props,h._nextState]});c="componentDidUpdate"}else c=
"componentDidMount",h=new e(a.props),a._component=h,Ha(h,e,a),ta({bind:h,name:"componentWillMount"}),h._depth=++d.depth;h._VNode=a;d=h._oldState;b=b.props;h.state=h._nextState;h._oldState=null;h._nextState=null;h.props=a.props;e=oa(h.render(h.props,h.state));return ta({bind:h,name:c,args:"componentDidUpdate"===c?[b,d]:[]}),Fa(e,a),e}(a,b,c,d):function(a,b){var c,d,e=a.type;return a._component?d=a._component:(d=new __wpcc.A(a.props),a._component=d,d.render=Ga,d.constructor=e,d.props=a.props),c=oa(d.render(a.props)),
d._depth=++b.depth,Fa(c,a),c}(a,d)):a}(a,b,d,e)),Ia(b.type)&&(b=b._renders),a!==m?Aa(a,b,c,d,e):(a._children=null==(n=(l=a).props.children)&&l.type!==__wpcc.x?[]:ka([n],oa),h=b.type,k=a.type,ja(a,c),k===__wpcc.x?Ba(a,b,c,e):(h!==k&&(b=null),function(a,b,c){var d=(b=b||t)===t;var e=b._dom;(e=a.type!==b.type||null==e?function(a){if("string"==typeof a.props)return document.createTextNode("");a=a.type;if(a===y)return document.createComment("");a=document.createElement(a);return a.onclick=__wpcc.x,a}(a):
e)._VNode=a;(function(a,b,c){if(b.type!==y){if(c=c||t,"string"==typeof b.props)return function(a,b,c){return b===c||(a.nodeValue=b)}(a,b.props,c.props);var d=c.props||t,e=b.props;null!=d&&function(a,b,c){for(var d in b)la(d)||d in Ja||null==c[d]&&ia(a,d,null)}(a,d,e);(function(a,b,c){for(var d in c)if(!(la(d)||d in Ja)){var e=c[d],h=Ka[d]?a[d]:b[d];if(e!==h)if("className"!==(d="class"===d?"className":d))if("style"!==d)ia(a,d,e);else{var k=void 0,l=void 0;h=h||"";var m=a.style;if("string"!=typeof e){var n=
"string"==typeof h;if(n)m.cssText="";else for(l in h)null==e[l]&&(m[l]="");for(k in e)l=e[k],(n||l!==h[k])&&(m[k]=l)}else m.cssText=e}else k=a,l=e,e=h,h=Array.isArray,h(l)&&(l=l.join(" ").trim()),h(e)&&(e=e.join(" ").trim()),l!==e&&ia(k,"className",l)}})(a,d,e);fa(a,b.events,c.events)}})(e,a,d?null:b);v(a,"_dom",e);(function Db(a,b){a&&(null!=a._component?a._component.base=b:Db(a._renderedBy,b))})(a,e);d&&function(a,b){var c=function(a){if(a){var b=a._dom;return b?b:(a=a._FragmentDomNodeChildren)?
function Eb(a){for(var b=0;b<a.length;b++){var c=a[b];if(Array.isArray(c)){if(c=Eb(c))return c}else if(c)return c}}(a):void 0}}(a._nextSibDomVNode),d=a._dom;d&&(function(a,b,c){var d,e=!0;b&&b!==a&&(e=!1,d=b);!e&&d?c.insertBefore(a,d):c.appendChild(a)}(d,c,b),function(a){var b=a._dom;null==a._parentDom&&ja(a,b.parentNode);var c=a._nextSibDomVNode;if(null==c){var d=b.nextSibling;null!=d&&(c=d._VNode)}v(c,"_prevSibDomVNode",a);v(a,"_nextSibDomVNode",c);c=a._prevSibDomVNode;null==c&&(b=b.previousSibling,
null!=b&&(c=b._VNode));v(c,"_nextSibDomVNode",a);v(a,"_prevSibDomVNode",c)}(a))}(a,c)}(a,b,c),Ba(a,b,a._dom,e)),a._dom)}va(b)};La=function(){return(La=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)};B=function(a,b){if(null==a)return{};var c,d,e={},h=Object.keys(a);for(d=0;d<h.length;d++)0<=b.indexOf(c=h[d])||(e[c]=a[c]);return e};
__wpcc.Ma=function(a){window.history.pushState(0,0,a);C.emit(a,{type:"load",native:!1})};__wpcc.D=function(a){window.history.replaceState(0,0,a);C.emit(a,{type:"redirect",native:!1})};
__wpcc.Na=function(a){var {native:b,href:c,onClick:d}=a,e=B(a,["native","href","onClick"]);return e.href=c,b||null==c||(e.onClick=b=>{var c=a.href;b.altKey||b.ctrlKey||b.metaKey||b.shiftKey||(b.stopImmediatePropagation&&b.stopImmediatePropagation(),b.stopPropagation&&b.stopPropagation(),b.preventDefault(),__wpcc.Ma(c),null!=d&&d(b,c))}),__wpcc.w("a",e)};
Oa=function(){if("object"===typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0});const a=___this.globalThis=___this;delete Object.prototype.___this;return a};Qa=function(){return __wpcc.w("div",{style:__wpcc.E},Pa.Error$BodyText)};Ra=function(){return __wpcc.w("div",{style:__wpcc.E},Pa.Loading$Default)};
Va=function(){return __wpcc.w("main",{class:"router-app"},__wpcc.w("div",{class:"router-parent"},__wpcc.w(__wpcc.F,null,(0,__wpcc.Sa)(Ta).map(([a,b])=>Ua(a,b)))))};Wa=function(a){return new Promise(b=>setTimeout(b,a))};
__wpcc.Za=function(a,b,c,d){c=void 0===c?{}:c;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){var e=G({},b||{});const h=G({},Xa,c);e=new Request(a,Object.assign({},{method:d,headers:e},h));try{const a=yield(yield Ya(e)).json(),b=a.data||{},c=a.error||b.error;return c?{error:c}:b}catch(k){return{error:"Unknown error"}}})};__wpcc.H=function(a,b,c){b={body:JSON.stringify(b)};c=G({},c);c["content-type"]="application/json";return __wpcc.Za(a,c,b,"post")};
I=function(a){return(new URL(a,$a)).href};ab=function(){return __wpcc.w(Va)};db=function(){return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){if(bb.isLoggedIn)return ab;try{yield __wpcc.cb.checkAuth()}catch(a){return console.log(a),Qa}return ab})};__wpcc.fb=function(a){return __wpcc.w(__wpcc.J,Object.assign({},a,{title:eb.Error$TitleDefault}))};
__wpcc.hb=function(a){return globalThis.URLSearchParams?(new URLSearchParams(a)).toString():""+gb(a).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a[b])}).join("&")};jb=function(a){return __wpcc.w("span",{"data-rich":1},a.data.map(a=>ib(a)))};
ib=function(a){const b=a.type;a=a.value;switch(b){case "sup":case "div":case "sub":return __wpcc.w(b,null,a);case "inline-img":return __wpcc.w("span",{class:"opt-image-container"},__wpcc.w("img",{src:a,class:"opt-img"}));case "img":return __wpcc.w("div",{style:"text-align:center"},__wpcc.w("img",{src:a,class:"opt-img"}));case "underline":case "bold":return __wpcc.w("span",{class:b},a);default:return __wpcc.w("span",null,a)}};
__wpcc.mb=function(a){const {x:b,i:c,setOption:d,answered:e}=a;return __wpcc.w("div",{class:"question-body"},__wpcc.w("div",{class:"question-text"},"Q.",c+1,__wpcc.w("span",{class:"q-main"},kb(b.question))),__wpcc.w(lb,{options:b.options,onClick:d,questionIndex:c,answered:e,correct:b.correct}))};
lb=function(a){return __wpcc.w("div",null,a.options.map((b,c)=>{const d=a.correct===c;return __wpcc.w("div",{class:"option-box"},__wpcc.w("span",{class:"readable-name"},nb[c]),__wpcc.w("div",{onClick:a.onClick,class:`question-choice${c===a.answered?" selected":""}${d?" correct":""}`,"data-option_index":c,"data-question_index":a.questionIndex},kb(b)))}))};ob=["3","4","5","6","7"];pb=0;
for(;pb<ob.length;pb++)qb=ob[pb],__wpcc.g.rs(ob[pb],"es6/"+({}[qb]||qb)+"-"+{3:"d99764965da3854d057b",4:"3b9d513e4761ff7753e8",5:"90cd0052c88085a532f3",6:"81027890f8612a357c13",7:"3cca5aae8927e42485b7"}[qb]+".js");var Ja={key:1,ref:1,children:1},Ka={value:1,checked:1},ha={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"},t={},za=[],rb=t.hasOwnProperty,z="assign"in Object?t.constructor.assign:function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)rb.call(c,d)&&(a[d]=c[d])}return a},y=Object.freeze({}),ma={key:1,ref:1},ua="undefined"!=typeof Promise,sb="undefined"!=typeof requestAnimationFrame,tb=setTimeout,ub=ua?Promise.prototype.then.bind(Promise.resolve()):tb,vb={deferImplementation:ub,
scheduleRender:sb?function(a){return requestAnimationFrame(a)}:ub,eagerlyHydrate:!0,beforeHookRender:null},ra=[],sa=[],xa={_VNode:1,_listeners:1,onclick:1},ya={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1},Ca=[];
__wpcc.A=class{constructor(a){this.state={};this.props=a}render(){return null}setState(a){if(this._oldState=z({},this.state),this._nextState=z({},this.state),"function"==typeof a){a=a(this._nextState,this.props);if(null==a)return;z(this._nextState,a)}else z(this._nextState,a);this.state=this._nextState;this._dirty=!0;1===Ca.push(this)&&vb.scheduleRender(Da)}forceUpdate(a){var b=!1!==a;this.base=Aa(this._VNode,z({},this._VNode),this._VNode._parentDom,b,{depth:this._depth});"function"==typeof a&&a();
qa(ra);qa(sa)}};var Ia=a=>"function"==typeof a&&a!==__wpcc.x,Ea={_nextSibDomVNode:1,_prevSibDomVNode:1};
__wpcc.wb=class extends __wpcc.A{constructor(a,b){var {componentPromise:c,fallbackComponent:d}=a;super(a,b);this.state={ready:!1,componentPromise:c,finalComponent:null,fallbackComponent:d}}static getDerivedStateFromProps(a,b){b=b||{};return b.componentPromise===a.componentPromise||null!=a.componentPromise&&(b.componentPromise=a.componentPromise,b.ready=!1,b.finalComponent=null),b}render(a,b){var {eager:c=!0,loadComponent:d=!1}=a;a=B(a,["eager","loadComponent","componentPromise","fallbackComponent"]);
var {ready:e,finalComponent:h}=b;if(!c&&!d||e||this.loadComponent(),e)return __wpcc.w(h,a);b=B(a,["children"]);return null!=this.state.fallbackComponent?__wpcc.w(this.state.fallbackComponent,b):xb}loadComponent(){return this.state.componentPromise().then(a=>{this.setState({ready:!0,finalComponent:a})})}};
var xb=__wpcc.w("div",null,"Loading.."),L=[],C={subscribe(a){L.includes(a)||L.push(a)},unsubscribe(a){for(var b=0;b<L.length;b++)if(L[b]===a)return L.splice(b,1)},emit(a,b){for(var c of L)c(a,b)},unsubscribeAll(){L.length=0}};
__wpcc.F=class extends __wpcc.A{static __emitter(){C.emit(__wpcc.F.getPath+__wpcc.F.getQs,{type:"popstate",native:!0})}componentWillMount(){C.subscribe(this._routeChangeHandler);window.addEventListener("popstate",__wpcc.F.__emitter)}componentWillUnmount(){window.removeEventListener("popstate",__wpcc.F.__emitter);this.props.destroySubscriptionOnUnmount&&C.unsubscribeAll()}absolute(a){return(new URL(a||"",location.protocol+"//"+location.host)).toString()}getCurrentComponent(){return this.getPathComponent(__wpcc.F.getPath)||
[]}_routeChangeHandler(){var [a,b]=this.getCurrentComponent();this.setState({component:a,match:b})}_notFoundComponent(){return __wpcc.w("div",null,'The Requested URL "'+this.absolute(__wpcc.F.getPath)+'" was not found')}static get getPath(){return location.pathname}static get getQs(){return location.search}getPathComponent(a){for(var b of this.state.routes){var {regex:c,component:d}=b,e=c.exec(a);if(e)return[d,e]}return[]}initComponents(a){var b=[],c;for(c of a)null!=c.props&&null!=c.props.path&&
b.push({regex:c.props.path,component:c});return b}constructor(a,b){var {children:c,fallbackComponent:d}=a;super(B(a,["children","fallbackComponent"]),b);d=d||this._notFoundComponent.bind(this);this.state={routes:this.initComponents(c),fallbackComponent:d};var [e,h]=this.getCurrentComponent();this.state.component=e;this.state.match=h;this._routeChangeHandler=this._routeChangeHandler.bind(this)}componentDidMount(){}render(){var a,b=B(this.props,["children"]);b=La({match:this.state.match},b);return null!=
this.state.component&&null!=this.state.match?z((a=this.state.component).props,b):a=__wpcc.w(this.state.fallbackComponent,b),a.__self||(a=__wpcc.w(a,b)),__wpcc.w(__wpcc.x,null,a)}};const yb=Oa().Symbol||{},zb={},M=zb.constructor,Ab=zb.hasOwnProperty;"function"==typeof Promise&&Promise.prototype.then.bind(Promise.resolve());var G="assign"in M?M.assign:function(a){for(let b=1;b<arguments.length;b++){const c=arguments[b];for(const b in c)Ab.call(c,b)&&(a[b]=c[b])}return a};var gb="keys"in M?M.keys:function(a){const b=[];for(const c in a)Ab.call(a,c)&&b.push(c);return b};__wpcc.Sa="entries"in M?M.entries:function(a){const b=gb(a);let c=b.length;const d=Array(c);for(;c--;){const e=b[c];d[c]=[e,a[e]]}return d};const Bb="Set"in Oa();let Cb,Fb,Gb;if("undefined"!==typeof Symbol){var Hb=function(a,b){const c=a["__@@set"];let d=0;const e=c.length;return{[Symbol.iterator]:function(){return this},next:function(){if(d<e){const a=c[d++];return{value:b?[a,a]:a,done:!1}}return{value:void 0,done:!0}}}};Cb=function(){return Hb(this,!0)};Fb=function(){return Hb(this,!1)};Gb=function(){return Hb(this,!1)}}else Cb=Gb=Fb=function(){console.warn("no symbol support")};var Ib={keys:Gb,values:Fb,entries:Cb};const Kb=function Jb(a,b){var d=null!=Jb&&"undefined"!==typeof Symbol&&Jb[Symbol.hasInstance]?!!Jb[Symbol.hasInstance](this):this instanceof Jb;if(!d)throw new TypeError("Cannot call a class as a function");if(!b&&Bb)return new Set(a);this["__@@set"]=[];if(null!=a){if(!a||!a[yb.iterator])throw Error("value:"+String(a)+" is not iterable");b=a.length;for(d=0;d<b;d++)this.add(a[d])}};
(function(a){a.prototype.add=function(a){this.has(a)||this["__@@set"].push(0===a?0:a);return this};a.prototype.has=function(a){const b=this["__@@set"],d=b.length;for(let c=0;c<d;c++){var e=b[c];if(e===a||e!==e&&a!==a)return!0}return!1};a.prototype.delete=function(a){let b=!1;this["__@@set"]=this["__@@set"].filter(c=>{(c=!(c===a||c!==c&&a!==a))||(b=!0);return c});return b};a.prototype.forEach=function(a,c){const b=this["__@@set"],e=b.length;for(let d=0;d<e;d++){const e=b[d];c?a.call(c,e,e,this):a(e,
e,this)}};a.prototype.clear=function(){return void(this["__@@set"].length=0)};Object.defineProperty(a.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this["__@@set"].length}});"undefined"!==typeof Symbol&&(a.prototype[Symbol.iterator]=Ib.values,a.prototype[Symbol.toStringTag]="Set");G(a.prototype,Ib)})(Kb);Kb[Symbol.species]=Kb;var Lb;const N={userData:null,examBeginTimeStamp:null,$fetchedStringData:{}};Object.defineProperty(N,"isLoggedIn",{get:()=>!(!N.userData||!N.userData.scholar)});Object.defineProperty(N,"examBegan",{get:()=>N.examBeginTimeStamp?0>N.examBeginTimeStamp-+new Date:!1,set:a=>a});Lb=new Kb;__wpcc.O={subscribe(a){Lb.add(a)},set(a,b){N[a]=b;Lb.forEach(c=>c(a,b,N))},unsubscribe(a){Lb.delete(a)},getStore(){return N},getStrings(){return N.$fetchedStringData}};var Pa;Pa=__wpcc.O.getStrings();__wpcc.E={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};const Ta={"/":()=>__wpcc.g.e(3).then(function(){return __wpcc.Mb}).then(P),"/profile":()=>__wpcc.g.e(6).then(function(){return __wpcc.Nb}).then(P),"/exam":()=>__wpcc.g.e(5).then(function(){return __wpcc.Ob}).then(P),"/admin":()=>__wpcc.g.e(4).then(function(){return __wpcc.Pb}).then(P),"/report":()=>__wpcc.g.e(7).then(function(){return __wpcc.Qb}).then(P)},P=a=>a.default,Ua=(a,b)=>__wpcc.w(()=>__wpcc.w("section",{"data-application-state":a},__wpcc.w(__wpcc.wb,{componentPromise:b,fallbackComponent:Ra})),
{path:RegExp("^"+a+"(/?)$")});const Xa={credentials:"include"},Ya=function(a,b,c,d){b=void 0===b?3:b;return function(){const e=arguments;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){let h=0;for(;h<b;)try{return yield Promise.resolve(a.apply(d,[].slice.call(e)))}catch(k){h++,c&&(yield Wa(c))}throw Error("function "+(a.name||"")+" failed "+b+" times");})}}(fetch,3,100);var $a;$a=location.hostname.includes("localhost")?"http://localhost:5000":"https://dps-exam.herokuapp.com";__wpcc.Q={authenticate:I("/api/auth/login"),getUserDetails:I("/api/auth/get-status"),logout:I("/api/logout"),getAllStudents:I("/api/auth/get-all-students"),resetSubject:I("/api/auth/reset-subject")};__wpcc.R={getSubjectInfo:I("/api/exam/get-subject-info"),startTest:I("/api/exam/start-test"),gradeTest:I("/api/exam/grade-test"),quickSave:I("/api/exam/quicksave"),getReport:I("/api/exam/get-report")};var Rb=class{constructor(){var a={checkedAuth:!1};"state"in this?Object.defineProperty(this,"state",{value:a,enumerable:!0,configurable:!0,writable:!0}):this.state=a}auth(a){const b=this;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){const c=yield __wpcc.H(__wpcc.Q.authenticate,a);if(null!=c.error)return c;__wpcc.O.set("userData",c.user_data);b.state.checkedAuth=!0;return c})}checkAuth(){const a=this;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){var b=__wpcc.O.getStore().isLoggedIn;
if(a.state.checkedAuth||b)return a.state.checkedAuth=!0,b;a.state.checkedAuth=!0;b=yield __wpcc.Za(__wpcc.Q.getUserDetails,void 0,void 0,"get");if(!b.error&&b.user_data)return __wpcc.O.set("userData",b.user_data),b;if("Unknown error"===b.error)throw Error("");return!1})}logout(){__wpcc.O.set("userData",null);return __wpcc.H(__wpcc.Q.logout,{})}};__wpcc.cb=new Rb;const bb=__wpcc.O.getStore();
G(bb.$fetchedStringData,{Error$TitleDefault:"An error occured",Error$BodyText:"An unexpected error occured",Success$TitleDefault:"Success",Loading$Default:"Loading...",Landing$Welcome:"Welcome",Landing$RequestDetails:"Enter your details",Login$Scholar:"Scholar No.",Login$DateOfBirth:"Date of Birth (DD-MM-YYYY)",Login$login:"Login",Login$InProgressText:"Checking your details",Login$ErrorText:"Can't login",Profile$ClassOf:"Class of",Profile$YourSubjects:"Your Subjects",Profile$ViewReport:"View Report",
Logout$logout:"Logout",Exam$Begin:"Begin Examination",Exam$Invalid:"Invalid Exam",Exam$UnansweredQuestionsLeft:"Unanswered Questions Left",Exam$NoNegativeMarking:"There is no negative marking. Please answer the following questions",Exam$LoadingQuestions:"Loading questions",Exam$TimeUp:"Time up",Exam$TimeUpAnswerSubmitInfo:"Your answers are being submitted (Time Over)",Exam$CalculatingScore:"Calculating your score",Exam$ResultText:"Results",Exam$MaximumMarks:"Maximum Marks: ",Exam$YourScore:"Your score: ",
Exam$TimeAllotted:"Time allotted - ",Exam$TimeLeft:"Time Left - ",Exam$Submit:"Submit",Admin$AreYouSure:"Are You sure?",Admin$AboutToExecuteReset(a,b,c){const d={style:{fontWeight:"bold",color:"red"}};return __wpcc.w("div",null,"You are about to reset ",__wpcc.w("span",d,a,"(",b,")"),"'s marks for ",__wpcc.w("span",d,c))},Report$YourReportFor(a){return`Report For ${a}`},Report$CorrectAnswers:"Correct answers"});__wpcc.O.set("$fetchedStringData",bb.$fetchedStringData);
var Sb=__wpcc.w(()=>__wpcc.w(__wpcc.wb,{componentPromise:db,fallbackComponent:Ra})),Tb=document.getElementById("app-mount"),Ub=__wpcc.w(__wpcc.x,null,Sb);if(Tb.hasChildNodes())for(var Vb;Vb=Tb.firstChild;)Tb.removeChild(Vb);Aa(Ub,null,Tb,!1,{depth:0});qa(ra);qa(sa);const eb=__wpcc.O.getStrings();
__wpcc.J=class extends __wpcc.A{constructor(...a){super(...a);a=Math.random();"__id"in this?Object.defineProperty(this,"__id",{value:a,enumerable:!0,configurable:!0,writable:!0}):this.__id=a}componentDidMount(){const a=document.getElementById(`${this.__id}`);a&&a.focus()}render(a){return __wpcc.w(__wpcc.x,null,__wpcc.w("div",{class:"mask",onClick:a.cancel},__wpcc.w("div",{class:"app-popup"},__wpcc.w("div",{class:"heading-text clr app-popup-title"},a.title),__wpcc.w("div",null,a.errorHead),__wpcc.w("div",
{class:"err-reasons"},__wpcc.w("div",null,(a.reasons||[]).map(a=>__wpcc.w("div",null,a)))),__wpcc.w("button",{id:this.__id,class:"app-popup-close",onClick:a.close},"OK"))))}};__wpcc.Wb=a=>{const b=Math.floor(a/3600);a=a%3600/60;return`${`${0<b?`${b} ${1===b?"hour":"hours"}`:""}`}${0<a?` ${a} mins`:""}`};__wpcc.Xb={hour:"numeric",hour12:!0,minute:"numeric"};__wpcc.Yb="undefined"!==typeof Intl;Oa();const nb={0:"A",1:"B",2:"C",3:"D"},kb=a=>"object"===typeof a?__wpcc.w(jb,{data:a}):String(a);}).call(this || window, (window.__wpcc = window.__wpcc || {}));
