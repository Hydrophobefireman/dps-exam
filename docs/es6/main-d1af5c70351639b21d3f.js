(function(__wpcc){'use strict';var fa,ea,v,u,ia,ja,ka,la,na,oa,z,A,pa,B,ta,ya,Aa,Ca,Da,Ea,xa,Ia,Ja,Ma,Na,Ra,Sa,L,Xa,$a,cb,db,eb;fa=function(a,b,c){if(!(null==a||a instanceof Text||b===c)){for(var d in null==a._listeners&&(a._listeners={}),null==b&&(b=t),null==c&&(c=t),c)null==b[d]&&(delete a._listeners[d],a.removeEventListener(d,ea));for(var e in b){d=b[e];var h=c[e];null!=d&&h!==d&&(null==h&&a.addEventListener(e,ea),a._listeners[e]=d)}}};ea=function(a){return this._listeners[a.type].call(this,a)};
v=function(a,b,c){u(a,b,c,"_renders");u(a,b,c,"_renderedBy")};u=function(a,b,c,d){for(var e=ha[b];a;)e&&(a[e]=null),a[b]=c,a=a[d]};ia=function(a,b,c){return b in a?a[b]=null==c?"":c:null==c?a.removeAttribute(b):a.setAttribute(b,c)};ja=function(a,b){null!=b&&u(a,"_parentDom",b,"_renderedBy")};ka=function(a,b,c){return function l(a,b,c,m){if(!a)return b;for(var e=0;e<a.length;e++){var h=a[e];Array.isArray(h)?l(h,b,c,m):m&&null==h||b.push(c?c(h):h)}return b}(a,[],b,c)};
la=function(a){return"o"===a[0]&&"n"===a[1]};__wpcc.w=function(a,b){if(null==a||"boolean"==typeof a)return null;null==b&&(b=t);var c,d=b.ref,e=b.key,h="string"==typeof a?{}:null,k=b,m={},l=null!=h,n;for(n in k)null==ma[n]&&(m[n]=k[n],l&&la(n)&&(h[n.substr(2).toLowerCase()]=k[n]));b=m;k=arguments.length;m=Array(2<k?k-2:0);for(l=2;l<k;l++)m[l-2]=arguments[l];return m.length&&null==b.children&&(c=ka(m)),null!=b.children&&(c=ka([b.children])),b.children=c,na(a,b,h,e,d)};
na=function(a,b,c,d,e){a={type:"string"==typeof a?a.toLowerCase():a,props:b,events:c,key:d,ref:e,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return a.__self=a,a};__wpcc.x=function(){};
oa=function(a){return null==a||"boolean"==typeof a?__wpcc.w(y):"string"==typeof a||"number"==typeof a?na(null,String(a)):Array.isArray(a)?__wpcc.w(__wpcc.x,null,a):null!=a._dom?na(a.type,a.props,a.events,a.key,null):a};z=function(a){for(var b;b=a.pop();)pa(b)};A=function(a){var b=a.name;return"componentDidMount"===b?qa.push(a):"componentDidUpdate"===b?ra.push(a):void pa(a)};
pa=function(a){var b=a.args,c=a.bind;a=a.name;c._lastLifeCycleMethod=a;var d=c[a],e=!!c.componentDidCatch;if(sa)Promise.resolve().then(()=>d&&d.apply(c,b)).catch(a=>{if(e)return c.componentDidCatch(a);throw a;});else try{d.apply(c,b)}catch(h){if(e)return c.componentDidCatch(h);throw h;}};
B=function(a,b){if(null!=a&&a!==t){B(a._renders,b);var c=a._component;b||null==c||(c.setState=__wpcc.x,c._VNode=null,A({name:"componentWillUnmount",bind:c}));if(c=a._children)for(;c.length;)B(c.pop(),b);!function(a,b){if(!b&&"function"!=typeof a.type){var c=a._dom;null!=c&&(a.type!==y&&fa(c,null,a.events),ta(ua,c),function(a){if(null!=a){var b=a.parentNode;b&&b.removeChild(a)}}(c))}!function(a,b){if(null!=a){if(!b){b=a._nextSibDomVNode;if(null!=b){var c=b._dom;c=c&&c.previousSibling;v(b,"_prevSibDomVNode",
c&&c._VNode)}b=a._prevSibDomVNode;null!=b&&(c=(c=b._dom)&&c.nextSibling,v(b,"_nextSibDomVNode",c&&c._VNode))}ta(va,a)}}(a,b)}(a,b)}};ta=function(a,b){if(null!=b)for(var c in a)b[c]=null};
ya=function(a,b,c,d){var e=a._children||wa,h=(b||t)._children||wa,k=a.type===__wpcc.x;b=e.length;for(var m=Math.max(b,h.length),l=0;l<m;l++){var n=e[l]||(l<b?__wpcc.w(y):null),W=h[l]||t;if(null==W._nextSibDomVNode){var J=k?a._nextSibDomVNode:null;null!=J&&u(n,"_nextSibDomVNode",J,"_renderedBy")}xa(n,W,c,null,d);k&&null!=n&&(W=l,n=n&&(n._dom||n._FragmentDomNodeChildren),J=a._FragmentDomNodeChildren,null==J&&u(a,"_FragmentDomNodeChildren",J=[],"_renderedBy"),J[W]=n)}k&&b&&(c=a._children,u(a,"_nextSibDomVNode",
c[b-1]._nextSibDomVNode,"_renderedBy"),u(a,"_prevSibDomVNode",c[0]._prevSibDomVNode,"_renderedBy"))};Aa=function(){var a;for(za.sort((a,c)=>a._depth-c._depth);a=za.pop();)a._dirty&&(a._dirty=!1,a.forceUpdate(!1))};Ca=function(a,b){if(b._renders=a,a)for(var c in a._renderedBy=b,Ba)a[c]=b[c]};Da=function(a){return this.constructor(a)};Ea=function(a,b,c){var d,e=C({},a.state||t,a._nextState||t);(b=null!=(d=b.getDerivedStateFromProps)?C({},d(c.props,e)):null)&&C(e,b);a._nextState=e};
xa=function(a,b,c,d,e){if("boolean"==typeof a&&(a=null),null==b&&(b=t),null!=a){if(a===t||!((h=a)&&h.__self===h||(console.warn("component not of expected type =>",h),0)))return null;var h;if(b===a)return a._dom;!function(a,b){if(b!==t&&null!=a&&null!=b){var c=b._prevSibDomVNode;null==a._prevSibDomVNode&&null!=c&&(v(a,"_prevSibDomVNode",c),v(c,"_nextSibDomVNode",a));b=b._nextSibDomVNode;null==a._nextSibDomVNode&&null!=b&&(v(a,"_nextSibDomVNode",b),v(b,"_prevSibDomVNode",a))}}(a,b);h=b.type;var k=a.type,
m=Fa(k);k===h&&m&&(a._component=b._component);k!==h&&(B(b),b=t);var l,n;m=a;return"string"!=typeof a.props&&k!==y&&(a=function(a,b,c,d){var e;return null!=a&&Fa(e=a.type)?(b=b||t,function(a){a=a.prototype;return!(!a||!a.render)}(e)?function(a,b,c,d){var e=a.type,h=a._component;if(null!=h){if(null!=h.shouldComponentUpdate&&!c&&!1===h.shouldComponentUpdate(a.props,h._nextState||h.state))return t;Ea(h,e,a);A({bind:h,name:"componentWillUpdate",args:[a.props,h._nextState]});c="componentDidUpdate"}else c=
"componentDidMount",h=new e(a.props),a._component=h,Ea(h,e,a),A({bind:h,name:"componentWillMount"}),h._depth=++d.depth;h._VNode=a;d=h._oldState;b=b.props;h.state=h._nextState;h._oldState=null;h._nextState=null;h.props=a.props;e=oa(h.render(h.props,h.state));return A({bind:h,name:c,args:"componentDidUpdate"===c?[b,d]:[]}),Ca(e,a),e}(a,b,c,d):function(a,b){var c,d,e=a.type;return a._component?d=a._component:(d=new __wpcc.D(a.props),a._component=d,d.render=Da,d.constructor=e,d.props=a.props),c=oa(d.render(a.props)),
d._depth=++b.depth,Ca(c,a),c}(a,d)):a}(a,b,d,e)),Fa(b.type)&&(b=b._renders),a!==m?xa(a,b,c,d,e):(a._children=null==(n=(l=a).props.children)&&l.type!==__wpcc.x?[]:ka([n],oa),h=b.type,k=a.type,ja(a,c),k===__wpcc.x?ya(a,b,c,e):(h!==k&&(b=null),function(a,b,c){var d=(b=b||t)===t;var e=b._dom;(e=a.type!==b.type||null==e?function(a){if("string"==typeof a.props)return document.createTextNode("");a=a.type;if(a===y)return document.createComment("");a=document.createElement(a);return a.onclick=__wpcc.x,a}(a):
e)._VNode=a;(function(a,b,c){if(b.type!==y){if(c=c||t,"string"==typeof b.props)return function(a,b,c){return b===c||(a.nodeValue=b)}(a,b.props,c.props);var d=c.props||t,e=b.props;null!=d&&function(a,b,c){for(var d in b)la(d)||d in Ga||null==c[d]&&ia(a,d,null)}(a,d,e);(function(a,b,c){for(var d in c)if(!(la(d)||d in Ga)){var e=c[d],h=Ha[d]?a[d]:b[d];if(e!==h)if("className"!==(d="class"===d?"className":d))if("style"!==d)ia(a,d,e);else{var k=void 0,l=void 0;h=h||"";var m=a.style;if("string"!=typeof e){var n=
"string"==typeof h;if(n)m.cssText="";else for(l in h)null==e[l]&&(m[l]="");for(k in e)l=e[k],(n||l!==h[k])&&(m[k]=l)}else m.cssText=e}else k=a,l=e,e=h,h=Array.isArray,h(l)&&(l=l.join(" ").trim()),h(e)&&(e=e.join(" ").trim()),l!==e&&ia(k,"className",l)}})(a,d,e);fa(a,b.events,c.events)}})(e,a,d?null:b);v(a,"_dom",e);(function zb(a,b){a&&(null!=a._component?a._component.base=b:zb(a._renderedBy,b))})(a,e);d&&function(a,b){var c=function(a){if(a){var b=a._dom;return b?b:(a=a._FragmentDomNodeChildren)?
function Ab(a){for(var b=0;b<a.length;b++){var c=a[b];if(Array.isArray(c)){if(c=Ab(c))return c}else if(c)return c}}(a):void 0}}(a._nextSibDomVNode),d=a._dom;d&&(function(a,b,c){var d,e=!0;b&&b!==a&&(e=!1,d=b);!e&&d?c.insertBefore(a,d):c.appendChild(a)}(d,c,b),function(a){var b=a._dom;null==a._parentDom&&ja(a,b.parentNode);var c=a._nextSibDomVNode;if(null==c){var d=b.nextSibling;null!=d&&(c=d._VNode)}v(c,"_prevSibDomVNode",a);v(a,"_nextSibDomVNode",c);c=a._prevSibDomVNode;null==c&&(b=b.previousSibling,
null!=b&&(c=b._VNode));v(c,"_nextSibDomVNode",a);v(a,"_prevSibDomVNode",c)}(a))}(a,c)}(a,b,c),ya(a,b,a._dom,e)),a._dom)}B(b)};Ia=function(){return(Ia=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)};Ja=function(a,b){if(null==a)return{};var c,d,e={},h=Object.keys(a);for(d=0;d<h.length;d++)0<=b.indexOf(c=h[d])||(e[c]=a[c]);return e};
__wpcc.F=function(a){window.history.replaceState(0,0,a);__wpcc.E.emit(a,{type:"redirect",native:!1})};__wpcc.Ka=function(){if("object"===typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0});const a=___this.globalThis=___this;delete Object.prototype.___this;return a};Ma=function(){return __wpcc.w("div",{style:__wpcc.G},La.Error$BodyText)};Na=function(){return __wpcc.w("div",{style:__wpcc.G},La.Loading$Default)};
Ra=function(){return __wpcc.w("main",{class:"router-app"},__wpcc.w("div",{class:"router-parent"},__wpcc.w(__wpcc.H,null,(0,__wpcc.Oa)(Pa).map(([a,b])=>Qa(a,b)))))};Sa=function(a){return new Promise(b=>setTimeout(b,a))};
__wpcc.Va=function(a,b,c,d){c=void 0===c?{}:c;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){var e=I({},b||{});const h=I({},Ta,c);e=new Request(a,Object.assign({},{method:d,headers:e},h));try{const a=yield(yield Ua(e)).json(),b=a.data||{},c=a.error||b.error;return c?{error:c}:b}catch(k){return{error:"Unknown error"}}})};__wpcc.K=function(a,b,c){b={body:JSON.stringify(b)};c=I({},c);c["content-type"]="application/json";return __wpcc.Va(a,c,b,"post")};
L=function(a){return(new URL(a,Wa)).href};Xa=function(){return __wpcc.w(Ra)};$a=function(){return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){if(Ya.isLoggedIn)return Xa;try{yield __wpcc.Za.checkAuth()}catch(a){return console.log(a),Ma}return Xa})};__wpcc.bb=function(a){return __wpcc.w(__wpcc.M,Object.assign({},a,{title:ab.Error$TitleDefault}))};cb=["3","4","5","6"];db=0;
for(;db<cb.length;db++)eb=cb[db],__wpcc.g.rs(cb[db],"es6/"+({}[eb]||eb)+"-"+{3:"6b3d46966363f6326b4d",4:"7b791821593f53214299",5:"86e6ec64f98f5581183d",6:"b0e500d37449c9f2c71b"}[eb]+".js");var Ga={key:1,ref:1,children:1},Ha={value:1,checked:1},ha={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"},t={},wa=[],fb=t.hasOwnProperty,C="assign"in Object?t.constructor.assign:function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)fb.call(c,d)&&(a[d]=c[d])}return a},y=Object.freeze({}),ma={key:1,ref:1},sa="undefined"!=typeof Promise,gb="undefined"!=typeof requestAnimationFrame,hb=setTimeout,ib=sa?Promise.prototype.then.bind(Promise.resolve()):hb,jb={deferImplementation:ib,
scheduleRender:gb?function(a){return requestAnimationFrame(a)}:ib,eagerlyHydrate:!0,beforeHookRender:null},qa=[],ra=[],ua={_VNode:1,_listeners:1,onclick:1},va={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1},za=[],lb,N;
__wpcc.D=class{constructor(a){this.state={};this.props=a}render(){return null}setState(a){if(this._oldState=C({},this.state),this._nextState=C({},this.state),"function"==typeof a){a=a(this._nextState,this.props);if(null==a)return;C(this._nextState,a)}else C(this._nextState,a);this.state=this._nextState;this._dirty=!0;1===za.push(this)&&jb.scheduleRender(Aa)}forceUpdate(a){var b=!1!==a;this.base=xa(this._VNode,C({},this._VNode),this._VNode._parentDom,b,{depth:this._depth});"function"==typeof a&&a();
z(qa);z(ra)}};var Fa=a=>"function"==typeof a&&a!==__wpcc.x,Ba={_nextSibDomVNode:1,_prevSibDomVNode:1};
__wpcc.kb=class extends __wpcc.D{constructor(a,b){var {componentPromise:c,fallbackComponent:d}=a;super(a,b);this.state={ready:!1,componentPromise:c,finalComponent:null,fallbackComponent:d}}static getDerivedStateFromProps(a,b){b=b||{};return b.componentPromise===a.componentPromise||null!=a.componentPromise&&(b.componentPromise=a.componentPromise,b.ready=!1,b.finalComponent=null),b}render(a,b){var {eager:c=!0,loadComponent:d=!1}=a;a=Ja(a,["eager","loadComponent","componentPromise","fallbackComponent"]);
var {ready:e,finalComponent:h}=b;if(!c&&!d||e||this.loadComponent(),e)return __wpcc.w(h,a);b=Ja(a,["children"]);return null!=this.state.fallbackComponent?__wpcc.w(this.state.fallbackComponent,b):lb}loadComponent(){return this.state.componentPromise().then(a=>{this.setState({ready:!0,finalComponent:a})})}};lb=__wpcc.w("div",null,"Loading..");N=[];
__wpcc.E={subscribe(a){N.includes(a)||N.push(a)},unsubscribe(a){for(var b=0;b<N.length;b++)if(N[b]===a)return N.splice(b,1)},emit(a,b){for(var c of N)c(a,b)},unsubscribeAll(){N.length=0}};
__wpcc.H=class extends __wpcc.D{static __emitter(){__wpcc.E.emit(__wpcc.H.getPath+__wpcc.H.getQs,{type:"popstate",native:!0})}componentWillMount(){__wpcc.E.subscribe(this._routeChangeHandler);window.addEventListener("popstate",__wpcc.H.__emitter)}componentWillUnmount(){window.removeEventListener("popstate",__wpcc.H.__emitter);this.props.destroySubscriptionOnUnmount&&__wpcc.E.unsubscribeAll()}absolute(a){return(new URL(a||"",location.protocol+"//"+location.host)).toString()}getCurrentComponent(){return this.getPathComponent(__wpcc.H.getPath)||
[]}_routeChangeHandler(){var [a,b]=this.getCurrentComponent();this.setState({component:a,match:b})}_notFoundComponent(){return __wpcc.w("div",null,'The Requested URL "'+this.absolute(__wpcc.H.getPath)+'" was not found')}static get getPath(){return location.pathname}static get getQs(){return location.search}getPathComponent(a){for(var b of this.state.routes){var {regex:c,component:d}=b,e=c.exec(a);if(e)return[d,e]}return[]}initComponents(a){var b=[],c;for(c of a)null!=c.props&&null!=c.props.path&&
b.push({regex:c.props.path,component:c});return b}constructor(a,b){var {children:c,fallbackComponent:d}=a;super(Ja(a,["children","fallbackComponent"]),b);d=d||this._notFoundComponent.bind(this);this.state={routes:this.initComponents(c),fallbackComponent:d};var [e,h]=this.getCurrentComponent();this.state.component=e;this.state.match=h;this._routeChangeHandler=this._routeChangeHandler.bind(this)}componentDidMount(){}render(){var a,b=Ja(this.props,["children"]);b=Ia({match:this.state.match},b);return null!=
this.state.component&&null!=this.state.match?C((a=this.state.component).props,b):a=__wpcc.w(this.state.fallbackComponent,b),a.__self||(a=__wpcc.w(a,b)),__wpcc.w(__wpcc.x,null,a)}};const mb=__wpcc.Ka().Symbol||{},nb={},O=nb.constructor,ob=nb.hasOwnProperty;"function"==typeof Promise&&Promise.prototype.then.bind(Promise.resolve());var I="assign"in O?O.assign:function(a){for(let b=1;b<arguments.length;b++){const c=arguments[b];for(const b in c)ob.call(c,b)&&(a[b]=c[b])}return a};__wpcc.pb="keys"in O?O.keys:function(a){const b=[];for(const c in a)ob.call(a,c)&&b.push(c);return b};__wpcc.Oa="entries"in O?O.entries:function(a){const b=(0,__wpcc.pb)(a);let c=b.length;const d=Array(c);for(;c--;){const e=b[c];d[c]=[e,a[e]]}return d};const qb="Set"in __wpcc.Ka();let rb,sb,tb;if("undefined"!==typeof Symbol){var ub=function(a,b){const c=a["__@@set"];let d=0;const e=c.length;return{[Symbol.iterator]:function(){return this},next:function(){if(d<e){const a=c[d++];return{value:b?[a,a]:a,done:!1}}return{value:void 0,done:!0}}}};rb=function(){return ub(this,!0)};sb=function(){return ub(this,!1)};tb=function(){return ub(this,!1)}}else rb=tb=sb=function(){console.warn("no symbol support")};var vb={keys:tb,values:sb,entries:rb};const xb=function wb(a,b){var d=null!=wb&&"undefined"!==typeof Symbol&&wb[Symbol.hasInstance]?!!wb[Symbol.hasInstance](this):this instanceof wb;if(!d)throw new TypeError("Cannot call a class as a function");if(!b&&qb)return new Set(a);this["__@@set"]=[];if(null!=a){if(!a||!a[mb.iterator])throw Error("value:"+String(a)+" is not iterable");b=a.length;for(d=0;d<b;d++)this.add(a[d])}};
(function(a){a.prototype.add=function(a){this.has(a)||this["__@@set"].push(0===a?0:a);return this};a.prototype.has=function(a){const b=this["__@@set"],d=b.length;for(let c=0;c<d;c++){var e=b[c];if(e===a||e!==e&&a!==a)return!0}return!1};a.prototype.delete=function(a){let b=!1;this["__@@set"]=this["__@@set"].filter(c=>{(c=!(c===a||c!==c&&a!==a))||(b=!0);return c});return b};a.prototype.forEach=function(a,c){const b=this["__@@set"],e=b.length;for(let d=0;d<e;d++){const e=b[d];c?a.call(c,e,e,this):a(e,
e,this)}};a.prototype.clear=function(){return void(this["__@@set"].length=0)};Object.defineProperty(a.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this["__@@set"].length}});"undefined"!==typeof Symbol&&(a.prototype[Symbol.iterator]=vb.values,a.prototype[Symbol.toStringTag]="Set");I(a.prototype,vb)})(xb);xb[Symbol.species]=xb;var yb;const P={userData:null,examBeginTimeStamp:null,$fetchedStringData:{}};Object.defineProperty(P,"isLoggedIn",{get:()=>!(!P.userData||!P.userData.scholar)});Object.defineProperty(P,"examBegan",{get:()=>P.examBeginTimeStamp?0>P.examBeginTimeStamp-+new Date:!1,set:a=>a});yb=new xb;__wpcc.Q={subscribe(a){yb.add(a)},set(a,b){P[a]=b;yb.forEach(c=>c(a,b,P))},unsubscribe(a){yb.delete(a)},getStore(){return P},getStrings(){return P.$fetchedStringData}};var La;La=__wpcc.Q.getStrings();__wpcc.G={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};const Pa={"/":()=>__wpcc.g.e(3).then(function(){return __wpcc.Bb}).then(Cb),"/profile":()=>__wpcc.g.e(6).then(function(){return __wpcc.Db}).then(Cb),"/exam":()=>__wpcc.g.e(4).then(function(){return __wpcc.Eb}).then(Cb),"/admin":()=>__wpcc.g.e(5).then(function(){return __wpcc.Fb}).then(Cb)},Cb=a=>a.default,Qa=(a,b)=>__wpcc.w(()=>__wpcc.w("section",{"data-application-state":a},__wpcc.w(__wpcc.kb,{componentPromise:b,fallbackComponent:Na})),{path:RegExp("^"+a+"(/?)$")});const Ta={credentials:"include"},Ua=function(a,b,c,d){b=void 0===b?3:b;return function(){const e=arguments;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){let h=0;for(;h<b;)try{return yield Promise.resolve(a.apply(d,[].slice.call(e)))}catch(k){h++,c&&(yield Sa(c))}throw Error("function "+(a.name||"")+" failed "+b+" times");})}}(fetch,3,100);var Wa;Wa=location.hostname.includes("localhost")?"http://localhost:5000":"https://dps-exam.herokuapp.com";__wpcc.R={authenticate:L("/api/auth/login"),getUserDetails:L("/api/auth/get-status"),logout:L("/api/logout"),getAllStudents:L("/api/auth/get-all-students"),resetSubject:L("/api/auth/reset-subject")};__wpcc.Gb={getSubjectInfo:L("/api/exam/get-subject-info"),startTest:L("/api/exam/start-test"),gradeTest:L("/api/exam/grade-test"),quickSave:L("/api/exam/quicksave")};var Hb=class{constructor(){var a={checkedAuth:!1};"state"in this?Object.defineProperty(this,"state",{value:a,enumerable:!0,configurable:!0,writable:!0}):this.state=a}auth(a){const b=this;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){const c=yield __wpcc.K(__wpcc.R.authenticate,a);if(null!=c.error)return c;__wpcc.Q.set("userData",c.user_data);b.state.checkedAuth=!0;return c})}checkAuth(){const a=this;return __wpcc.p.asyncExecutePromiseGeneratorFunction(function*(){var b=__wpcc.Q.getStore().isLoggedIn;
if(a.state.checkedAuth||b)return a.state.checkedAuth=!0,b;a.state.checkedAuth=!0;b=yield __wpcc.Va(__wpcc.R.getUserDetails,void 0,void 0,"get");if(!b.error&&b.user_data)return __wpcc.Q.set("userData",b.user_data),b;if("Unknown error"===b.error)throw Error("");return!1})}logout(){__wpcc.Q.set("userData",null);return __wpcc.K(__wpcc.R.logout,{})}};__wpcc.Za=new Hb;const Ya=__wpcc.Q.getStore();
I(Ya.$fetchedStringData,{Error$TitleDefault:"An error occured",Error$BodyText:"An unexpected error occured",Success$TitleDefault:"Success",Loading$Default:"Loading...",Landing$Welcome:"Welcome",Landing$RequestDetails:"Enter your details",Login$Scholar:"Scholar No.",Login$DateOfBirth:"Date of Birth (DD-MM-YYYY)",Login$login:"Login",Login$InProgressText:"Checking your details",Login$ErrorText:"Can't login",Profile$ClassOf:"Class of",Profile$YourSubjects:"Your Subjects",Logout$logout:"Logout",Exam$Begin:"Begin Examination",
Exam$Invalid:"Invalid Exam",Exam$UnansweredQuestionsLeft:"Unanswered Questions Left",Exam$NoNegativeMarking:"There is no negative marking. Please answer the following questions",Exam$LoadingQuestions:"Loading questions",Exam$TimeUp:"Time up",Exam$TimeUpAnswerSubmitInfo:"Your answers are being submitted (Time Over)",Exam$CalculatingScore:"Calculating your score",Exam$ResultText:"Results",Exam$MaximumMarks:"Maximum Marks: ",Exam$YourScore:"Your score: ",Exam$TimeAllotted:"Time allotted - ",Exam$TimeLeft:"Time Left - ",
Exam$Submit:"Submit",Admin$AreYouSure:"Are You sure?",Admin$AboutToExecuteReset(a,b,c){const d={style:{fontWeight:"bold",color:"red"}};return __wpcc.w("div",null,"You are about to reset ",__wpcc.w("span",d,a,"(",b,")"),"'s marks for ",__wpcc.w("span",d,c))}});__wpcc.Q.set("$fetchedStringData",Ya.$fetchedStringData);var Ib=__wpcc.w(()=>__wpcc.w(__wpcc.kb,{componentPromise:$a,fallbackComponent:Na})),Jb=document.getElementById("app-mount"),Kb=__wpcc.w(__wpcc.x,null,Ib);
if(Jb.hasChildNodes())for(var Lb;Lb=Jb.firstChild;)Jb.removeChild(Lb);xa(Kb,null,Jb,!1,{depth:0});z(qa);z(ra);const ab=__wpcc.Q.getStrings();
__wpcc.M=class extends __wpcc.D{constructor(...a){super(...a);a=Math.random();"__id"in this?Object.defineProperty(this,"__id",{value:a,enumerable:!0,configurable:!0,writable:!0}):this.__id=a}componentDidMount(){const a=document.getElementById(`${this.__id}`);a&&a.focus()}render(a){return __wpcc.w(__wpcc.x,null,__wpcc.w("div",{class:"mask",onClick:a.cancel},__wpcc.w("div",{class:"app-popup"},__wpcc.w("div",{class:"heading-text clr app-popup-title"},a.title),__wpcc.w("div",null,a.errorHead),__wpcc.w("div",
{class:"err-reasons"},__wpcc.w("div",null,(a.reasons||[]).map(a=>__wpcc.w("div",null,a)))),__wpcc.w("button",{id:this.__id,class:"app-popup-close",onClick:a.close},"OK"))))}};__wpcc.Mb=a=>{const b=Math.floor(a/3600);a=a%3600/60;return`${`${0<b?`${b} ${1===b?"hour":"hours"}`:""}`}${0<a?` ${a} mins`:""}`};__wpcc.Nb={hour:"numeric",hour12:!0,minute:"numeric"};__wpcc.Ob="undefined"!==typeof Intl;}).call(this || window, (window.__wpcc = window.__wpcc || {}));
