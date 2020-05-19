(function(__wpcc){'use strict';var ia,ha,t,r,ka,la,ma,na,pa,qa,sa,va,ra,xa,ya,Da,Fa,Ga,Ia,Ja,Ka,Ca,Na,A,Qa,Sa,Ta,G,Ua,Xa,Ya,K,cb,db,gb,nb,mb,ob,pb,sb,tb,ub;ia=function(a,b,c){if(!(null==a||a instanceof Text||b===c)){for(var d in null==a._listeners&&(a._listeners={}),null==b&&(b=q),null==c&&(c=q),c)null==b[d]&&(delete a._listeners[d],a.removeEventListener(d,ha));for(var f in b){d=b[f];var h=c[f];null!=d&&h!==d&&(null==h&&a.addEventListener(f,ha),a._listeners[f]=d)}}};
ha=function(a){return this._listeners[a.type].call(this,a)};t=function(a,b,c){r(a,b,c,"_renders");r(a,b,c,"_renderedBy")};r=function(a,b,c,d){for(var f=ja[b];a;)f&&(a[f]=null),a[b]=c,a=a[d]};ka=function(a,b,c){return b in a?a[b]=null==c?"":c:null==c?a.removeAttribute(b):a.setAttribute(b,c)};la=function(a,b){null!=b&&r(a,"_parentDom",b,"_renderedBy")};
ma=function(a,b,c){return function m(a,b,c,l){if(!a)return b;for(var f=0;f<a.length;f++){var h=a[f];Array.isArray(h)?m(h,b,c,l):l&&null==h||b.push(c?c(h):h)}return b}(a,[],b,c)};na=function(a){return"o"===a[0]&&"n"===a[1]};
__wpcc.v=function(a,b){if(null==a||"boolean"==typeof a)return null;null==b&&(b=q);var c,d=b.ref,f=b.key,h="string"==typeof a?{}:null,k=b,l={},m=null!=h,n;for(n in k)null==oa[n]&&(l[n]=k[n],m&&na(n)&&(h[n.substr(2).toLowerCase()]=k[n]));b=l;k=arguments.length;l=Array(2<k?k-2:0);for(m=2;m<k;m++)l[m-2]=arguments[m];return l.length&&null==b.children&&(c=ma(l)),null!=b.children&&(c=ma([b.children])),b.children=c,pa(a,b,h,f,d)};
pa=function(a,b,c,d,f){a={type:"string"==typeof a?a.toLowerCase():a,props:b,events:c,key:d,ref:f,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return a.__self=a,a};__wpcc.w=function(){};
qa=function(a){return null==a||"boolean"==typeof a?__wpcc.v(x):"string"==typeof a||"number"==typeof a?pa(null,String(a)):Array.isArray(a)?__wpcc.v(__wpcc.w,null,a):null!=a._dom?pa(a.type,a.props,a.events,a.key,null):a};sa=function(a){for(var b;b=a.pop();)ra(b)};va=function(a){var b=a.name;return"componentDidMount"===b?ta.push(a):"componentDidUpdate"===b?ua.push(a):void ra(a)};
ra=function(a){var b=a.args,c=a.bind;a=a.name;c._lastLifeCycleMethod=a;var d=c[a],f=!!c.componentDidCatch;if(wa)Promise.resolve().then(function(){return d&&d.apply(c,b)}).catch(function(a){if(f)return c.componentDidCatch(a);throw a;});else try{d.apply(c,b)}catch(h){if(f)return c.componentDidCatch(h);throw h;}};
xa=function(a,b){if(null!=a&&a!==q){xa(a._renders,b);var c=a._component;b||null==c||(c.setState=__wpcc.w,c._VNode=null,va({name:"componentWillUnmount",bind:c}));if(c=a._children)for(;c.length;)xa(c.pop(),b);!function(a,b){if(!b&&"function"!=typeof a.type){var c=a._dom;null!=c&&(a.type!==x&&ia(c,null,a.events),ya(za,c),function(a){if(null!=a){var b=a.parentNode;b&&b.removeChild(a)}}(c))}!function(a,b){if(null!=a){if(!b){b=a._nextSibDomVNode;if(null!=b){var c=b._dom;c=c&&c.previousSibling;t(b,"_prevSibDomVNode",
c&&c._VNode)}b=a._prevSibDomVNode;null!=b&&(c=(c=b._dom)&&c.nextSibling,t(b,"_nextSibDomVNode",c&&c._VNode))}ya(Aa,a)}}(a,b)}(a,b)}};ya=function(a,b){if(null!=b)for(var c in a)b[c]=null};
Da=function(a,b,c,d){var f=a._children||Ba,h=(b||q)._children||Ba,k=a.type===__wpcc.w;b=f.length;for(var l=Math.max(b,h.length),m=0;m<l;m++){var n=f[m]||(m<b?__wpcc.v(x):null),I=h[m]||q;if(null==I._nextSibDomVNode){var u=k?a._nextSibDomVNode:null;null!=u&&r(n,"_nextSibDomVNode",u,"_renderedBy")}Ca(n,I,c,null,d);k&&null!=n&&(I=m,n=n&&(n._dom||n._FragmentDomNodeChildren),u=a._FragmentDomNodeChildren,null==u&&r(a,"_FragmentDomNodeChildren",u=[],"_renderedBy"),u[I]=n)}k&&b&&(c=a._children,r(a,"_nextSibDomVNode",
c[b-1]._nextSibDomVNode,"_renderedBy"),r(a,"_prevSibDomVNode",c[0]._prevSibDomVNode,"_renderedBy"))};__wpcc.y=function(a){this.state={};this.props=a};Fa=function(){var a;for(Ea.sort(function(a,c){return a._depth-c._depth});a=Ea.pop();)a._dirty&&(a._dirty=!1,a.forceUpdate(!1))};Ga=function(a){return"function"==typeof a&&a!==__wpcc.w};Ia=function(a,b){if(b._renders=a,a)for(var c in a._renderedBy=b,Ha)a[c]=b[c]};Ja=function(a){return this.constructor(a)};
Ka=function(a,b,c){var d,f=z({},a.state||q,a._nextState||q);(b=null!=(d=b.getDerivedStateFromProps)?z({},d(c.props,f)):null)&&z(f,b);a._nextState=f};
Ca=function(a,b,c,d,f){if("boolean"==typeof a&&(a=null),null==b&&(b=q),null!=a){if(a===q||!((h=a)&&h.__self===h||(console.warn("component not of expected type =>",h),0)))return null;var h;if(b===a)return a._dom;!function(a,b){if(b!==q&&null!=a&&null!=b){var c=b._prevSibDomVNode;null==a._prevSibDomVNode&&null!=c&&(t(a,"_prevSibDomVNode",c),t(c,"_nextSibDomVNode",a));b=b._nextSibDomVNode;null==a._nextSibDomVNode&&null!=b&&(t(a,"_nextSibDomVNode",b),t(b,"_prevSibDomVNode",a))}}(a,b);h=b.type;var k=a.type,
l=Ga(k);k===h&&l&&(a._component=b._component);k!==h&&(xa(b),b=q);var m,n;l=a;return"string"!=typeof a.props&&k!==x&&(a=function(a,b,c,d){var f;return null!=a&&Ga(f=a.type)?(b=b||q,function(a){a=a.prototype;return!(!a||!a.render)}(f)?function(a,b,c,d){var f=a.type,h=a._component;if(null!=h){if(null!=h.shouldComponentUpdate&&!c&&!1===h.shouldComponentUpdate(a.props,h._nextState||h.state))return q;Ka(h,f,a);va({bind:h,name:"componentWillUpdate",args:[a.props,h._nextState]});c="componentDidUpdate"}else c=
"componentDidMount",h=new f(a.props),a._component=h,Ka(h,f,a),va({bind:h,name:"componentWillMount"}),h._depth=++d.depth;h._VNode=a;d=h._oldState;b=b.props;h.state=h._nextState;h._oldState=null;h._nextState=null;h.props=a.props;f=qa(h.render(h.props,h.state));return va({bind:h,name:c,args:"componentDidUpdate"===c?[b,d]:[]}),Ia(f,a),f}(a,b,c,d):function(a,b){var c,d,f=a.type;return a._component?d=a._component:(d=new __wpcc.y(a.props),a._component=d,d.render=Ja,d.constructor=f,d.props=a.props),c=qa(d.render(a.props)),
d._depth=++b.depth,Ia(c,a),c}(a,d)):a}(a,b,d,f)),Ga(b.type)&&(b=b._renders),a!==l?Ca(a,b,c,d,f):(a._children=null==(n=(m=a).props.children)&&m.type!==__wpcc.w?[]:ma([n],qa),h=b.type,k=a.type,la(a,c),k===__wpcc.w?Da(a,b,c,f):(h!==k&&(b=null),function(a,b,c){var d=(b=b||q)===q;var f=b._dom;(f=a.type!==b.type||null==f?function(a){if("string"==typeof a.props)return document.createTextNode("");a=a.type;if(a===x)return document.createComment("");a=document.createElement(a);return a.onclick=__wpcc.w,a}(a):
f)._VNode=a;(function(a,b,c){if(b.type!==x){if(c=c||q,"string"==typeof b.props)return function(a,b,c){return b===c||(a.nodeValue=b)}(a,b.props,c.props);var d=c.props||q,f=b.props;null!=d&&function(a,b,c){for(var d in b)na(d)||d in La||null==c[d]&&ka(a,d,null)}(a,d,f);(function(a,b,c){for(var d in c)if(!(na(d)||d in La)){var f=c[d],h=Ma[d]?a[d]:b[d];if(f!==h)if("className"!==(d="class"===d?"className":d))if("style"!==d)ka(a,d,f);else{var k=void 0,l=void 0;h=h||"";var m=a.style;if("string"!=typeof f){var n=
"string"==typeof h;if(n)m.cssText="";else for(l in h)null==f[l]&&(m[l]="");for(k in f)l=f[k],(n||l!==h[k])&&(m[k]=l)}else m.cssText=f}else k=a,l=f,f=h,h=Array.isArray,h(l)&&(l=l.join(" ").trim()),h(f)&&(f=f.join(" ").trim()),l!==f&&ka(k,"className",l)}})(a,d,f);ia(a,b.events,c.events)}})(f,a,d?null:b);t(a,"_dom",f);(function Nb(a,b){a&&(null!=a._component?a._component.base=b:Nb(a._renderedBy,b))})(a,f);d&&function(a,b){var c=function(a){if(a){var b=a._dom;return b?b:(a=a._FragmentDomNodeChildren)?
function Ob(a){for(var b=0;b<a.length;b++){var c=a[b];if(Array.isArray(c)){if(c=Ob(c))return c}else if(c)return c}}(a):void 0}}(a._nextSibDomVNode),d=a._dom;d&&(function(a,b,c){var d,f=!0;b&&b!==a&&(f=!1,d=b);!f&&d?c.insertBefore(a,d):c.appendChild(a)}(d,c,b),function(a){var b=a._dom;null==a._parentDom&&la(a,b.parentNode);var c=a._nextSibDomVNode;if(null==c){var d=b.nextSibling;null!=d&&(c=d._VNode)}t(c,"_prevSibDomVNode",a);t(a,"_nextSibDomVNode",c);c=a._prevSibDomVNode;null==c&&(b=b.previousSibling,
null!=b&&(c=b._VNode));t(c,"_nextSibDomVNode",a);t(a,"_prevSibDomVNode",c)}(a))}(a,c)}(a,b,c),Da(a,b,a._dom,f)),a._dom)}xa(b)};Na=function(){return(Na=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)};A=function(a,b){if(null==a)return{};var c,d,f={},h=Object.keys(a);for(d=0;d<h.length;d++)0<=b.indexOf(c=h[d])||(f[c]=a[c]);return f};
__wpcc.B=function(a,b){var c=a.componentPromise,d=a.fallbackComponent;__wpcc.y.call(this,a,b);this.state={ready:!1,componentPromise:c,finalComponent:null,fallbackComponent:d}};__wpcc.Oa=function(a){window.history.pushState(0,0,a);C.emit(a,{type:"load",native:!1})};__wpcc.D=function(a){window.history.replaceState(0,0,a);C.emit(a,{type:"redirect",native:!1})};
__wpcc.E=function(a,b){var c=a.children,d=a.fallbackComponent;__wpcc.y.call(this,A(a,["children","fallbackComponent"]),b);d=d||this._notFoundComponent.bind(this);this.state={routes:this.initComponents(c),fallbackComponent:d};b=__wpcc.p.makeIterator(this.getCurrentComponent());a=b.next().value;b=b.next().value;this.state.component=a;this.state.match=b;this._routeChangeHandler=this._routeChangeHandler.bind(this)};
__wpcc.Pa=function(a){var b=a.native,c=a.href,d=a.onClick,f=A(a,["native","href","onClick"]);return f.href=c,b||null==c||(f.onClick=function(b){var c=a.href;b.altKey||b.ctrlKey||b.metaKey||b.shiftKey||(b.stopImmediatePropagation&&b.stopImmediatePropagation(),b.stopPropagation&&b.stopPropagation(),b.preventDefault(),__wpcc.Oa(c),null!=d&&d(b,c))}),__wpcc.v("a",f)};
Qa=function(){if("object"===typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0});var a=___this.globalThis=___this;delete Object.prototype.___this;return a};Sa=function(){return __wpcc.v("div",{style:__wpcc.F},Ra.Error$BodyText)};Ta=function(){return __wpcc.v("div",{style:__wpcc.F},Ra.Loading$Default)};G=function(a){return a.default};
Ua=function(a,b){return __wpcc.v(function(){return __wpcc.v("section",{"data-application-state":a},__wpcc.v(__wpcc.B,{componentPromise:b,fallbackComponent:Ta}))},{path:RegExp("^"+a+"(/?)$")})};Xa=function(){return __wpcc.v("main",{class:"router-app"},__wpcc.v("div",{class:"router-parent"},__wpcc.v(__wpcc.E,null,(0,__wpcc.Va)(Wa).map(function(a){var b=__wpcc.p.makeIterator(a);a=b.next().value;b=b.next().value;return Ua(a,b)}))))};Ya=function(a){return new Promise(function(b){return setTimeout(b,a)})};
__wpcc.ab=function(a,b,c,d){c=void 0===c?{}:c;var f,h,k,l,m,n,I;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(u){switch(u.nextAddress){case 1:return f=H({},b||{}),h=H({},Za,c),k=new Request(a,Object.assign({},{method:d,headers:f},h)),u.setCatchFinallyBlocks(2),u.yield($a(k),4);case 4:return l=u.yieldResult,u.yield(l.json(),5);case 5:return m=u.yieldResult,n=m.data||{},(I=m.error||n.error)?u.return({error:I}):u.return(n);case 2:return u.enterCatchBlock(),u.return({error:"Unknown error"})}})};
__wpcc.J=function(a,b,c){b={body:JSON.stringify(b)};c=H({},c);c["content-type"]="application/json";return __wpcc.ab(a,c,b,"post")};K=function(a){return(new URL(a,bb)).href};cb=function(){var a={checkedAuth:!1};"state"in this?Object.defineProperty(this,"state",{value:a,enumerable:!0,configurable:!0,writable:!0}):this.state=a};db=function(){return __wpcc.v(Xa)};
gb=function(){var a,b;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(c){switch(c.nextAddress){case 1:a=db;if(eb.isLoggedIn)return c.return(a);c.setCatchFinallyBlocks(2);return c.yield(__wpcc.fb.checkAuth(),4);case 4:c.leaveTryBlock(3);break;case 2:return b=c.enterCatchBlock(),console.log(b),c.return(Sa);case 3:return c.return(a)}})};__wpcc.ib=function(a){return __wpcc.v(__wpcc.L,Object.assign({},a,{title:hb.Error$TitleDefault}))};
__wpcc.L=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];__wpcc.y.apply(this,[].concat(__wpcc.p.arrayFromIterable(b)));b=Math.random();"__id"in this?Object.defineProperty(this,"__id",{value:b,enumerable:!0,configurable:!0,writable:!0}):this.__id=b};__wpcc.jb=function(a){var b=Math.floor(a/3600);a=a%3600/60;return(0<b?b+" "+(1===b?"hour":"hours"):"")+(0<a?" "+a+" mins":"")};
__wpcc.lb=function(a){return globalThis.URLSearchParams?(new URLSearchParams(a)).toString():""+kb(a).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a[b])}).join("&")};nb=function(a){return __wpcc.v("span",{"data-rich":1},a.data.map(function(a){return mb(a)}))};
mb=function(a){var b=a.type;a=a.value;switch(b){case "sup":case "div":case "sub":return __wpcc.v(b,null,a);case "inline-img":return __wpcc.v("span",{class:"opt-image-container"},__wpcc.v("img",{src:a,class:"opt-img"}));case "img":return __wpcc.v("div",{style:"text-align:center"},__wpcc.v("img",{src:a,class:"opt-img"}));case "underline":case "bold":return __wpcc.v("span",{class:b},a);default:return __wpcc.v("span",null,a)}};ob=function(a){return"object"===typeof a?__wpcc.v(nb,{data:a}):String(a)};
__wpcc.qb=function(a){var b=a.x,c=a.i,d=a.setOption;a=a.answered;return __wpcc.v("div",{class:"question-body"},__wpcc.v("div",{class:"question-text"},"Q.",c+1,__wpcc.v("span",{class:"q-main"},ob(b.question))),__wpcc.v(pb,{options:b.options,onClick:d,questionIndex:c,answered:a,correct:b.correct}))};
pb=function(a){return __wpcc.v("div",null,a.options.map(function(b,c){var d=a.correct===c;return __wpcc.v("div",{class:"option-box"},__wpcc.v("span",{class:"readable-name"},rb[c]),__wpcc.v("div",{onClick:a.onClick,class:"question-choice"+(c===a.answered?" selected":"")+(d?" correct":""),"data-option_index":c,"data-question_index":a.questionIndex},ob(b)))}))};sb=["3","4","5","6","7"];tb=0;
for(;tb<sb.length;tb++)ub=sb[tb],__wpcc.g.rs(sb[tb],"legacy/"+({}[ub]||ub)+"-"+{3:"d99764965da3854d057b",4:"3b9d513e4761ff7753e8",5:"90cd0052c88085a532f3",6:"81027890f8612a357c13",7:"3cca5aae8927e42485b7"}[ub]+".js");var La={key:1,ref:1,children:1},Ma={value:1,checked:1},ja={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"},q={},Ba=[],vb=q.hasOwnProperty,z="assign"in Object?q.constructor.assign:function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)vb.call(c,d)&&(a[d]=c[d])}return a},x=Object.freeze({}),oa={key:1,ref:1},wa="undefined"!=typeof Promise,wb="undefined"!=typeof requestAnimationFrame,xb=setTimeout,yb=wa?Promise.prototype.then.bind(Promise.resolve()):xb,zb={deferImplementation:yb,
scheduleRender:wb?function(a){return requestAnimationFrame(a)}:yb,eagerlyHydrate:!0,beforeHookRender:null},ta=[],ua=[],za={_VNode:1,_listeners:1,onclick:1},Aa={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1},Ea=[];__wpcc.y.prototype.render=function(){return null};
__wpcc.y.prototype.setState=function(a){if(this._oldState=z({},this.state),this._nextState=z({},this.state),"function"==typeof a){a=a(this._nextState,this.props);if(null==a)return;z(this._nextState,a)}else z(this._nextState,a);this.state=this._nextState;this._dirty=!0;1===Ea.push(this)&&zb.scheduleRender(Fa)};__wpcc.y.prototype.forceUpdate=function(a){var b=!1!==a;this.base=Ca(this._VNode,z({},this._VNode),this._VNode._parentDom,b,{depth:this._depth});"function"==typeof a&&a();sa(ta);sa(ua)};
var Ha={_nextSibDomVNode:1,_prevSibDomVNode:1};__wpcc.p.inherits(__wpcc.B,__wpcc.y);__wpcc.B.getDerivedStateFromProps=function(a,b){b=b||{};return b.componentPromise===a.componentPromise||null!=a.componentPromise&&(b.componentPromise=a.componentPromise,b.ready=!1,b.finalComponent=null),b};
__wpcc.B.prototype.render=function(a,b){var c=void 0===a.eager?!0:a.eager,d=void 0===a.loadComponent?!1:a.loadComponent;a=A(a,["eager","loadComponent","componentPromise","fallbackComponent"]);var f=b.ready;b=b.finalComponent;if(!c&&!d||f||this.loadComponent(),f)return __wpcc.v(b,a);c=A(a,["children"]);return null!=this.state.fallbackComponent?__wpcc.v(this.state.fallbackComponent,c):Ab};
__wpcc.B.prototype.loadComponent=function(){var a=this;return this.state.componentPromise().then(function(b){a.setState({ready:!0,finalComponent:b})})};var Ab=__wpcc.v("div",null,"Loading.."),M=[],C={subscribe:function(a){M.includes(a)||M.push(a)},unsubscribe:function(a){for(var b=0;b<M.length;b++)if(M[b]===a)return M.splice(b,1)},emit:function(a,b){for(var c=__wpcc.p.makeIterator(M),d=c.next();!d.done;d=c.next())d=d.value,d(a,b)},unsubscribeAll:function(){M.length=0}};
__wpcc.p.inherits(__wpcc.E,__wpcc.y);__wpcc.E.__emitter=function(){C.emit(__wpcc.E.getPath+__wpcc.E.getQs,{type:"popstate",native:!0})};__wpcc.E.prototype.componentWillMount=function(){C.subscribe(this._routeChangeHandler);window.addEventListener("popstate",__wpcc.E.__emitter)};__wpcc.E.prototype.componentWillUnmount=function(){window.removeEventListener("popstate",__wpcc.E.__emitter);this.props.destroySubscriptionOnUnmount&&C.unsubscribeAll()};
__wpcc.E.prototype.absolute=function(a){return(new URL(a||"",location.protocol+"//"+location.host)).toString()};__wpcc.E.prototype.getCurrentComponent=function(){return this.getPathComponent(__wpcc.E.getPath)||[]};__wpcc.E.prototype._routeChangeHandler=function(){var a=__wpcc.p.makeIterator(this.getCurrentComponent()),b=a.next().value;a=a.next().value;this.setState({component:b,match:a})};
__wpcc.E.prototype._notFoundComponent=function(){return __wpcc.v("div",null,'The Requested URL "'+this.absolute(__wpcc.E.getPath)+'" was not found')};__wpcc.E.prototype.getPathComponent=function(a){for(var b=__wpcc.p.makeIterator(this.state.routes),c=b.next();!c.done;c=b.next()){var d=c.value;c=d.component;if(d=d.regex.exec(a))return[c,d]}return[]};
__wpcc.E.prototype.initComponents=function(a){var b=[];a=__wpcc.p.makeIterator(a);for(var c=a.next();!c.done;c=a.next())c=c.value,null!=c.props&&null!=c.props.path&&b.push({regex:c.props.path,component:c});return b};__wpcc.E.prototype.componentDidMount=function(){};
__wpcc.E.prototype.render=function(){var a,b=A(this.props,["children"]);b=Na({match:this.state.match},b);return null!=this.state.component&&null!=this.state.match?z((a=this.state.component).props,b):a=__wpcc.v(this.state.fallbackComponent,b),a.__self||(a=__wpcc.v(a,b)),__wpcc.v(__wpcc.w,null,a)};__wpcc.p.global.Object.defineProperties(__wpcc.E,{getPath:{configurable:!0,enumerable:!0,get:function(){return location.pathname}},getQs:{configurable:!0,enumerable:!0,get:function(){return location.search}}});var Bb=Qa().Symbol||{},Cb={},N=Cb.constructor,Db=Cb.hasOwnProperty;"function"==typeof Promise&&Promise.prototype.then.bind(Promise.resolve());var H="assign"in N?N.assign:function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Db.call(c,d)&&(a[d]=c[d])}return a};var kb="keys"in N?N.keys:function(a){var b=[],c;for(c in a)Db.call(a,c)&&b.push(c);return b};__wpcc.Va="entries"in N?N.entries:function(a){for(var b=kb(a),c=b.length,d=Array(c);c--;){var f=b[c];d[c]=[f,a[f]]}return d};var Gb="Set"in Qa();var Hb,Ib,Jb;__wpcc.p.initSymbol();if("undefined"!==typeof Symbol){var Kb=function(a,b){var c=a["__@@set"],d=0,f=c.length;__wpcc.p.initSymbol();__wpcc.p.initSymbolIterator();a={};return a[Symbol.iterator]=function(){return this},a.next=function(){if(d<f){var a=c[d++];return{value:b?[a,a]:a,done:!1}}return{value:void 0,done:!0}},a};Hb=function(){return Kb(this,!0)};Ib=function(){return Kb(this,!1)};Jb=function(){return Kb(this,!1)}}else Hb=Jb=Ib=function(){console.warn("no symbol support")};
var Lb={keys:Jb,values:Ib,entries:Hb};var Pb=function Mb(a,b){__wpcc.p.initSymbol();__wpcc.p.initSymbol();if(null!=Mb&&"undefined"!==typeof Symbol&&Mb[Symbol.hasInstance]){__wpcc.p.initSymbol();var d=!!Mb[Symbol.hasInstance](this)}else d=this instanceof Mb;if(!d)throw new TypeError("Cannot call a class as a function");if(!b&&Gb)return new Set(a);this["__@@set"]=[];if(null!=a){if(!a||!a[Bb.iterator])throw Error("value:"+String(a)+" is not iterable");b=a.length;for(d=0;d<b;d++)this.add(a[d])}};
(function(a){a.prototype.add=function(a){this.has(a)||this["__@@set"].push(0===a?0:a);return this};a.prototype.has=function(a){for(var b=this["__@@set"],d=b.length,f=0;f<d;f++){var h=b[f];if(h===a||h!==h&&a!==a)return!0}return!1};a.prototype.delete=function(a){var b=!1;this["__@@set"]=this["__@@set"].filter(function(c){(c=!(c===a||c!==c&&a!==a))||(b=!0);return c});return b};a.prototype.forEach=function(a,c){for(var b=this["__@@set"],f=b.length,h=0;h<f;h++){var k=b[h];c?a.call(c,k,k,this):a(k,k,this)}};
a.prototype.clear=function(){return void(this["__@@set"].length=0)};Object.defineProperty(a.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this["__@@set"].length}});__wpcc.p.initSymbol();"undefined"!==typeof Symbol&&(__wpcc.p.initSymbol(),__wpcc.p.initSymbolIterator(),a.prototype[Symbol.iterator]=Lb.values,__wpcc.p.initSymbol(),a.prototype[Symbol.toStringTag]="Set");H(a.prototype,Lb)})(Pb);__wpcc.p.initSymbol();Pb[Symbol.species]=Pb;var O={userData:null,examBeginTimeStamp:null,$fetchedStringData:{}},Qb;Object.defineProperty(O,"isLoggedIn",{get:function(){return!(!O.userData||!O.userData.scholar)}});Object.defineProperty(O,"examBegan",{get:function(){return O.examBeginTimeStamp?0>O.examBeginTimeStamp-+new Date:!1},set:function(a){return a}});Qb=new Pb;
__wpcc.P={subscribe:function(a){Qb.add(a)},set:function(a,b){O[a]=b;Qb.forEach(function(c){return c(a,b,O)})},unsubscribe:function(a){Qb.delete(a)},getStore:function(){return O},getStrings:function(){return O.$fetchedStringData}};var Ra;Ra=__wpcc.P.getStrings();__wpcc.F={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};var Wa={"/":function(){return __wpcc.g.e(3).then(function(){return __wpcc.Rb}).then(G)},"/profile":function(){return __wpcc.g.e(6).then(function(){return __wpcc.Sb}).then(G)},"/exam":function(){return __wpcc.g.e(5).then(function(){return __wpcc.Tb}).then(G)},"/admin":function(){return __wpcc.g.e(4).then(function(){return __wpcc.Ub}).then(G)},"/report":function(){return __wpcc.g.e(7).then(function(){return __wpcc.Vb}).then(G)}};var Za={credentials:"include"},$a=function(a,b,c,d){b=void 0===b?3:b;return function(){var f=arguments,h;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(k){switch(k.nextAddress){case 1:h=0;case 2:if(!(h<b)){k.jumpTo(3);break}k.setCatchFinallyBlocks(4);return k.yield(Promise.resolve(a.apply(d,[].slice.call(f))),6);case 6:return k.return(k.yieldResult);case 4:k.enterCatchBlock();h++;if(!c){k.jumpTo(2);break}return k.yield(Ya(c),2);case 3:throw Error("function "+(a.name||"")+" failed "+
b+" times");}})}}(fetch,3,100);var bb;bb=location.hostname.includes("localhost")?"http://localhost:5000":"https://dps-exam.herokuapp.com";__wpcc.Q={authenticate:K("/api/auth/login"),getUserDetails:K("/api/auth/get-status"),logout:K("/api/logout"),getAllStudents:K("/api/auth/get-all-students"),resetSubject:K("/api/auth/reset-subject")};__wpcc.Wb={getSubjectInfo:K("/api/exam/get-subject-info"),startTest:K("/api/exam/start-test"),gradeTest:K("/api/exam/grade-test"),quickSave:K("/api/exam/quicksave"),getReport:K("/api/exam/get-report")};cb.prototype.auth=function(a){var b=this,c;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(d){if(1==d.nextAddress)return d.yield(__wpcc.J(__wpcc.Q.authenticate,a),2);c=d.yieldResult;if(null!=c.error)return d.return(c);__wpcc.P.set("userData",c.user_data);b.state.checkedAuth=!0;return d.return(c)})};
cb.prototype.checkAuth=function(){var a=this,b,c;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(d){if(1==d.nextAddress){b=__wpcc.P.getStore().isLoggedIn;if(a.state.checkedAuth||b)return a.state.checkedAuth=!0,d.return(b);a.state.checkedAuth=!0;return d.yield(__wpcc.ab(__wpcc.Q.getUserDetails,void 0,void 0,"get"),2)}c=d.yieldResult;if(!c.error&&c.user_data)return __wpcc.P.set("userData",c.user_data),d.return(c);if("Unknown error"===c.error)throw Error("");return d.return(!1)})};
cb.prototype.logout=function(){__wpcc.P.set("userData",null);return __wpcc.J(__wpcc.Q.logout,{})};__wpcc.fb=new cb;var eb=__wpcc.P.getStore();
H(eb.$fetchedStringData,{Error$TitleDefault:"An error occured",Error$BodyText:"An unexpected error occured",Success$TitleDefault:"Success",Loading$Default:"Loading...",Landing$Welcome:"Welcome",Landing$RequestDetails:"Enter your details",Login$Scholar:"Scholar No.",Login$DateOfBirth:"Date of Birth (DD-MM-YYYY)",Login$login:"Login",Login$InProgressText:"Checking your details",Login$ErrorText:"Can't login",Profile$ClassOf:"Class of",Profile$YourSubjects:"Your Subjects",Profile$ViewReport:"View Report",Logout$logout:"Logout",
Exam$Begin:"Begin Examination",Exam$Invalid:"Invalid Exam",Exam$UnansweredQuestionsLeft:"Unanswered Questions Left",Exam$NoNegativeMarking:"There is no negative marking. Please answer the following questions",Exam$LoadingQuestions:"Loading questions",Exam$TimeUp:"Time up",Exam$TimeUpAnswerSubmitInfo:"Your answers are being submitted (Time Over)",Exam$CalculatingScore:"Calculating your score",Exam$ResultText:"Results",Exam$MaximumMarks:"Maximum Marks: ",Exam$YourScore:"Your score: ",Exam$TimeAllotted:"Time allotted - ",
Exam$TimeLeft:"Time Left - ",Exam$Submit:"Submit",Admin$AreYouSure:"Are You sure?",Admin$AboutToExecuteReset:function(a,b,c){var d={style:{fontWeight:"bold",color:"red"}};return __wpcc.v("div",null,"You are about to reset ",__wpcc.v("span",d,a,"(",b,")"),"'s marks for ",__wpcc.v("span",d,c))},Report$YourReportFor:function(a){return"Report For "+a},Report$CorrectAnswers:"Correct answers"});__wpcc.P.set("$fetchedStringData",eb.$fetchedStringData);
var Xb=__wpcc.v(function(){return __wpcc.v(__wpcc.B,{componentPromise:gb,fallbackComponent:Ta})}),Yb=document.getElementById("app-mount"),Zb=__wpcc.v(__wpcc.w,null,Xb);if(Yb.hasChildNodes())for(var $b;$b=Yb.firstChild;)Yb.removeChild($b);Ca(Zb,null,Yb,!1,{depth:0});sa(ta);sa(ua);var hb=__wpcc.P.getStrings();__wpcc.p.inherits(__wpcc.L,__wpcc.y);__wpcc.L.prototype.componentDidMount=function(){var a=document.getElementById(""+this.__id);a&&a.focus()};
__wpcc.L.prototype.render=function(a){return __wpcc.v(__wpcc.w,null,__wpcc.v("div",{class:"mask",onClick:a.cancel},__wpcc.v("div",{class:"app-popup"},__wpcc.v("div",{class:"heading-text clr app-popup-title"},a.title),__wpcc.v("div",null,a.errorHead),__wpcc.v("div",{class:"err-reasons"},__wpcc.v("div",null,(a.reasons||[]).map(function(a){return __wpcc.v("div",null,a)}))),__wpcc.v("button",{id:this.__id,class:"app-popup-close",onClick:a.close},"OK"))))};__wpcc.ac={hour:"numeric",hour12:!0,minute:"numeric"};
__wpcc.bc="undefined"!==typeof Intl;Qa();var rb={0:"A",1:"B",2:"C",3:"D"};}).call(this || window, (window.__wpcc = window.__wpcc || {}));
