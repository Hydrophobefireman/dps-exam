(function(__wpcc){'use strict';var ia,ha,u,r,ka,la,ma,na,pa,qa,sa,va,ra,xa,ya,Da,Fa,Ga,Ia,Ja,Ka,Ca,Oa,Qa,Pa,Sa,Ua,Va,Xa,Za,$a,G,bb,eb,fb,J,kb,lb,ob,vb,ub,wb,xb,Ab,Bb,Cb;ia=function(a,b,c){if(!(null==a||a instanceof Text||b===c)){null==a._listeners&&(a._listeners={});null==b&&(b=q);null==c&&(c=q);for(var d in c)null==b[d]&&(delete a._listeners[d],a.removeEventListener(d,ha));for(var e in b){d=b[e];var h=c[e];null!=d&&h!==d&&(null==h&&a.addEventListener(e,ha),a._listeners[e]=d)}}};
ha=function(a){return this._listeners[a.type].call(this,a)};u=function(a,b,c){r(a,b,c,"_renders");r(a,b,c,"_renderedBy")};r=function(a,b,c,d){for(var e=ja[b];a;)e&&(a[e]=null),a[b]=c,a=a[d]};ka=function(a,b,c){return b in a?a[b]=null==c?"":c:null==c?a.removeAttribute(b):a.setAttribute(b,c)};la=function(a,b){null!=b&&r(a,"_parentDom",b,"_renderedBy")};
ma=function(a,b,c){return function m(a,b,c,l){if(!a)return b;for(var e=0;e<a.length;e++){var h=a[e];Array.isArray(h)?m(h,b,c,l):l&&null==h||b.push(c?c(h):h)}return b}(a,[],b,c)};na=function(a){return"o"===a[0]&&"n"===a[1]};
__wpcc.v=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];if(null==a||"boolean"==typeof a)return null;null==b&&(b=q);e=b.ref;var h=b.key,k="string"==typeof a?{}:null,l,m=b,t={},D=null!=k,n;for(n in m)null==oa[n]&&(t[n]=m[n],D&&na(n)&&(k[n.substr(2).toLowerCase()]=m[n]));return b=t,d.length&&null==b.children&&(l=ma(d)),null!=b.children&&(l=ma([b.children])),b.children=l,pa(a,b,k,h,e)};
pa=function(a,b,c,d,e){a={type:"string"==typeof a?a.toLowerCase():a,props:b,events:c,key:d,ref:e,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return a.__self=a,a};__wpcc.w=function(){};
qa=function(a){return null==a||"boolean"==typeof a?__wpcc.v(x):"string"==typeof a||"number"==typeof a?pa(null,String(a)):Array.isArray(a)?__wpcc.v(__wpcc.w,null,a):null!=a._dom?pa(a.type,a.props,a.events,a.key,null):a};sa=function(a){for(var b;b=a.pop();)ra(b)};va=function(a){var b=a.name;return"componentDidMount"===b?ta.push(a):"componentDidUpdate"===b?ua.push(a):void ra(a)};
ra=function(a){var b=a.args,c=a.bind;a=a.name;c._lastLifeCycleMethod=a;var d=c[a],e=!!c.componentDidCatch;if(wa)Promise.resolve().then(function(){return d&&d.apply(c,b)}).catch(function(a){if(e)return c.componentDidCatch(a);throw a;});else try{d.apply(c,b)}catch(h){if(e)return c.componentDidCatch(h);throw h;}};
xa=function(a,b){if(null!=a&&a!==q){xa(a._renders,b);var c=a._component;b||null==c||(c.setState=__wpcc.w,c._VNode=null,va({name:"componentWillUnmount",bind:c}));var d=a._children;if(d)for(;d.length;)c=d.pop(),xa(c,b);!function(a,b){if(!b&&"function"!=typeof a.type){var c=a._dom;null!=c&&(a.type!==x&&ia(c,null,a.events),ya(za,c),function(a){if(null!=a){var b=a.parentNode;b&&b.removeChild(a)}}(c))}!function(a,b){if(null!=a){if(!b){b=a._nextSibDomVNode;if(null!=b){var c=b._dom;c=c&&c.previousSibling;
u(b,"_prevSibDomVNode",c&&c._VNode)}b=a._prevSibDomVNode;null!=b&&(c=(c=b._dom)&&c.nextSibling,u(b,"_nextSibDomVNode",c&&c._VNode))}ya(Aa,a)}}(a,b)}(a,b)}};ya=function(a,b){if(null!=b)for(var c in a)b[c]=null};
Da=function(a,b,c,d){var e=a._children||Ba,h=(b||q)._children||Ba,k=a.type===__wpcc.w;b=e.length;for(var l=Math.max(b,h.length),m=0;m<l;m++){var t=e[m]||(m<b?__wpcc.v(x):null),D=h[m]||q;if(null==D._nextSibDomVNode){var n=k?a._nextSibDomVNode:null;null!=n&&r(t,"_nextSibDomVNode",n,"_renderedBy")}Ca(t,D,c,null,d);k&&null!=t&&(D=m,t=t&&(t._dom||t._FragmentDomNodeChildren),n=a._FragmentDomNodeChildren,null==n&&(n=[],r(a,"_FragmentDomNodeChildren",n,"_renderedBy")),n[D]=t)}k&&b&&(c=a._children,r(a,"_nextSibDomVNode",
c[b-1]._nextSibDomVNode,"_renderedBy"),r(a,"_prevSibDomVNode",c[0]._prevSibDomVNode,"_renderedBy"))};__wpcc.y=function(a){this.state={};this.props=a};Fa=function(){var a;for(Ea.sort(function(a,c){return a._depth-c._depth});a=Ea.pop();)a._dirty&&(a._dirty=!1,a.forceUpdate(!1))};Ga=function(a){return"function"==typeof a&&a!==__wpcc.w};Ia=function(a,b){if(b._renders=a,a){a._renderedBy=b;for(var c in Ha)a[c]=b[c]}};Ja=function(a){return this.constructor(a)};
Ka=function(a,b,c){var d=z({},a.state||q,a._nextState||q);b=b.getDerivedStateFromProps;(c=null!=b?z({},b(c.props,d)):null)&&z(d,c);a._nextState=d};
Ca=function(a,b,c,d,e){if("boolean"==typeof a&&(a=null),null==b&&(b=q),null==a)return void xa(b);if(a===q||!((h=a)&&h.__self===h||(console.warn("component not of expected type =>",h),0)))return null;var h;if(b===a)return a._dom;!function(a,b){if(b!==q&&null!=a&&null!=b){var c=b._prevSibDomVNode;null==a._prevSibDomVNode&&null!=c&&(u(a,"_prevSibDomVNode",c),u(c,"_nextSibDomVNode",a));b=b._nextSibDomVNode;null==a._nextSibDomVNode&&null!=b&&(u(a,"_nextSibDomVNode",b),u(b,"_prevSibDomVNode",a))}}(a,b);
h=b.type;var k=a.type,l=Ga(k);k===h&&l&&(a._component=b._component);k!==h&&(xa(b),b=q);l=a;return"string"!=typeof a.props&&k!==x&&(a=function(a,b,c,d){var e;return null!=a&&Ga(e=a.type)?(b=b||q,function(a){a=a.prototype;return!(!a||!a.render)}(e)?function(a,b,c,d){var e=a.type,h=a._component;if(null!=h){if(null!=h.shouldComponentUpdate&&!c&&!1===h.shouldComponentUpdate(a.props,h._nextState||h.state))return q;Ka(h,e,a);va({bind:h,name:"componentWillUpdate",args:[a.props,h._nextState]});c="componentDidUpdate"}else c=
"componentDidMount",h=new e(a.props),a._component=h,Ka(h,e,a),va({bind:h,name:"componentWillMount"}),h._depth=++d.depth;h._VNode=a;d=h._oldState;b=b.props;h.state=h._nextState;h._oldState=null;h._nextState=null;h.props=a.props;e=qa(h.render(h.props,h.state));return va({bind:h,name:c,args:"componentDidUpdate"===c?[b,d]:[]}),Ia(e,a),e}(a,b,c,d):function(a,b){var c,d=a.type,e;return a._component?e=a._component:(e=new __wpcc.y(a.props),a._component=e,e.render=Ja,e.constructor=d,e.props=a.props),c=qa(e.render(a.props)),
e._depth=++b.depth,Ia(c,a),c}(a,d)):a}(a,b,d,e)),Ga(b.type)&&(b=b._renders),a!==l?Ca(a,b,c,d,e):(a._children=function(a){var b=a.props.children;return null==b&&a.type!==__wpcc.w?[]:ma([b],qa)}(a),h=b.type,k=a.type,la(a,c),k===__wpcc.w?Da(a,b,c,e):(h!==k&&(b=null),function(a,b,c){var d=(b=b||q)===q;var e=b._dom;e=a.type!==b.type||null==e?function(a){if("string"==typeof a.props)return document.createTextNode("");a=a.type;return a===x?document.createComment("$"):document.createElement(a)}(a):e;e._VNode=
a;(function(a,b,c){if(b.type!==x){if(c=c||q,"string"==typeof b.props)return function(a,b,c){return b===c||(a.nodeValue=b)}(a,b.props,c.props);var d=c.props||q,e=b.props;null!=d&&function(a,b,c){for(var d in b)na(d)||d in La||null==c[d]&&ka(a,d,null)}(a,d,e);(function(a,b,c){for(var d in c)if(!(na(d)||d in La)){var e=c[d],h=Ma[d]?a[d]:b[d];if(e!==h)if(d="class"===d?"className":d,"className"!==d)if("style"!==d)ka(a,d,e);else{var k=void 0,l=void 0;h=h||"";var m=a.style;if("string"==typeof e)m.cssText=
e;else{var n="string"==typeof h;if(n)m.cssText="";else for(l in h)null==e[l]&&(m[l]="");for(k in e)l=e[k],(n||l!==h[k])&&(m[k]=l)}}else k=a,l=e,e=h,h=Array.isArray,h(l)&&(l=l.join(" ").trim()),h(e)&&(e=e.join(" ").trim()),l!==e&&ka(k,"className",l)}})(a,d,e);ia(a,b.events,c.events)}})(e,a,d?null:b);u(a,"_dom",e);(function Vb(a,b){a&&(null!=a._component?a._component.base=b:Vb(a._renderedBy,b))})(a,e);d&&function(a,b){var c=function(a){if(a){var b=a._dom;return b?b:(a=a._FragmentDomNodeChildren)?function Wb(a){for(var b=
0;b<a.length;b++){var c=a[b];if(Array.isArray(c)){if(c=Wb(c))return c}else if(c)return c}}(a):void 0}}(a._nextSibDomVNode),d=a._dom;d&&(function(a,b,c){var d,e=!0;b&&b!==a&&(e=!1,d=b);!e&&d?c.insertBefore(a,d):c.appendChild(a)}(d,c,b),function(a){var b=a._dom;null==a._parentDom&&la(a,b.parentNode);var c=a._nextSibDomVNode;if(null==c){var d=b.nextSibling;null!=d&&(c=d._VNode)}u(c,"_prevSibDomVNode",a);u(a,"_nextSibDomVNode",c);c=a._prevSibDomVNode;null==c&&(b=b.previousSibling,null!=b&&(c=b._VNode));
u(c,"_nextSibDomVNode",a);u(a,"_prevSibDomVNode",c)}(a))}(a,c)}(a,b,c),Da(a,b,a._dom,e)),a._dom)};Oa=function(a,b){return null==a||-1<Na.indexOf(typeof a)||a.__self?a:__wpcc.v(a,b)};__wpcc.A=function(){__wpcc.y.apply(this,arguments)};Qa=function(a,b,c){var d=Object.getOwnPropertyDescriptor(a,c).get.bind(a);Object.defineProperty(a,b,{get:function(){return Pa(b," has been deprecated."+(c?" Use '"+c+"' instead":"")),d()}})};
Pa=function(){var a=["[DeprecationWarning]"].concat(Ba.slice.call(arguments));console.warn.apply(console,a)};Sa=function(a){return 1===a.length?a:a.replace(Ra,"")};__wpcc.Ta=function(a){window.history.pushState(null,"",a);B.emit(a,{type:"load",native:!1})};__wpcc.C=function(a){window.history.replaceState(null,"",a);B.emit(a,{type:"redirect",native:!1})};__wpcc.E=function(a){__wpcc.y.call(this,a);this.state={};this._routeChangeHandler=this._routeChangeHandler.bind(this)};
Ua=function(a){if(null!=a.regex)return a;a=Sa(a);var b={},c=0;return{regex:(d=a.split("/").map(function(a){return":"===a[0]?(b[++c]=a.substr(1),"([^?\\/]+)"):a}).join("/"),RegExp("^"+d+"(/?)$")),params:b};var d};Va=function(a){a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||(a.stopImmediatePropagation&&a.stopImmediatePropagation(),a.stopPropagation&&a.stopPropagation(),a.preventDefault(),a=new URL(this.href,location.href),__wpcc.Ta(a.pathname+a.search+a.hash))};
__wpcc.Wa=function(a){return null!=a.href&&(a.onClick=Va),__wpcc.v("a",a)};Xa=function(){if("object"===typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0});var a=___this.globalThis=___this;delete Object.prototype.___this;return a};Za=function(){return __wpcc.v("div",{style:__wpcc.F},Ya.Error$BodyText)};$a=function(){return __wpcc.v("div",{style:__wpcc.F},Ya.Loading$Default)};G=function(a){return a.default};
bb=function(a,b){return __wpcc.v(ab,{match:a,component:function(){return __wpcc.v("section",{"data-application-state":a},__wpcc.v(__wpcc.A,{componentPromise:b,fallbackComponent:$a}))}})};eb=function(){return __wpcc.v("main",{class:"router-app"},__wpcc.v("div",{class:"router-parent"},__wpcc.v(__wpcc.E,null,(0,__wpcc.cb)(db).map(function(a){var b=__wpcc.p.makeIterator(a);a=b.next().value;b=b.next().value;return bb(a,b)}))))};fb=function(a){return new Promise(function(b){return setTimeout(b,a)})};
__wpcc.ib=function(a,b,c,d){c=void 0===c?{}:c;var e,h,k,l,m,t,D;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(n){switch(n.nextAddress){case 1:return e=H({},b||{}),h=H({},gb,c),k=new Request(a,Object.assign({},{method:d,headers:e},h)),n.setCatchFinallyBlocks(2),n.yield(hb(k),4);case 4:return l=n.yieldResult,n.yield(l.json(),5);case 5:return m=n.yieldResult,t=m.data||{},(D=m.error||t.error)?n.return({error:D}):n.return(t);case 2:return n.enterCatchBlock(),n.return({error:"Unknown error"})}})};
__wpcc.I=function(a,b,c){b={body:JSON.stringify(b)};c=H({},c);c["content-type"]="application/json";return __wpcc.ib(a,c,b,"post")};J=function(a){return(new URL(a,jb)).href};kb=function(){var a={checkedAuth:!1};"state"in this?Object.defineProperty(this,"state",{value:a,enumerable:!0,configurable:!0,writable:!0}):this.state=a};lb=function(){return __wpcc.v(eb)};
ob=function(){var a,b;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(c){switch(c.nextAddress){case 1:a=lb;if(mb.isLoggedIn)return c.return(a);c.setCatchFinallyBlocks(2);return c.yield(__wpcc.nb.checkAuth(),4);case 4:c.leaveTryBlock(3);break;case 2:return b=c.enterCatchBlock(),console.log(b),c.return(Za);case 3:return c.return(a)}})};__wpcc.qb=function(a){return __wpcc.v(__wpcc.K,Object.assign({},a,{title:pb.Error$TitleDefault}))};
__wpcc.K=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];__wpcc.y.apply(this,[].concat(__wpcc.p.arrayFromIterable(b)));b=Math.random();"__id"in this?Object.defineProperty(this,"__id",{value:b,enumerable:!0,configurable:!0,writable:!0}):this.__id=b};__wpcc.rb=function(a){var b=Math.floor(a/3600);a=a%3600/60;return(0<b?b+" "+(1===b?"hour":"hours"):"")+(0<a?" "+a+" mins":"")};
__wpcc.tb=function(a){return globalThis.URLSearchParams?(new URLSearchParams(a)).toString():""+sb(a).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a[b])}).join("&")};vb=function(a){return __wpcc.v("span",{"data-rich":1},a.data.map(function(a){return ub(a)}))};
ub=function(a){var b=a.type;a=a.value;switch(b){case "sup":case "div":case "sub":return __wpcc.v(b,null,a);case "inline-img":return __wpcc.v("span",{class:"opt-image-container"},__wpcc.v("img",{src:a,class:"opt-img"}));case "img":return __wpcc.v("div",{style:"text-align: center;pointer-events: none;display: inline-block;"},__wpcc.v("img",{src:a,class:"opt-img"}));case "underline":case "bold":return __wpcc.v("span",{class:b},a);default:return __wpcc.v("span",null,a)}};
wb=function(a){return"object"===typeof a?__wpcc.v(vb,{data:a}):String(a)};__wpcc.yb=function(a){var b=a.x,c=a.i,d=a.setOption;a=a.answered;return __wpcc.v("div",{class:"question-body"},__wpcc.v("div",{class:"question-text"},"Q.",c+1,__wpcc.v("span",{class:"q-main"},wb(b.question))),__wpcc.v(xb,{options:b.options,onClick:d,questionIndex:c,answered:a,correct:b.correct}))};
xb=function(a){return __wpcc.v("div",null,a.options.map(function(b,c){var d=a.correct===c;return __wpcc.v("div",{class:"option-box"},__wpcc.v("span",{class:"readable-name"},zb[c]),__wpcc.v("div",{onClick:a.onClick,class:"question-choice"+(c===a.answered?" selected":"")+(d?" correct":""),"data-option_index":c,"data-question_index":a.questionIndex},wb(b)))}))};Ab=["3","4","5","6","7"];Bb=0;
for(;Bb<Ab.length;Bb++)Cb=Ab[Bb],__wpcc.g.rs(Ab[Bb],"legacy/"+({}[Cb]||Cb)+"-"+{3:"a222b66e95df14d66f23",4:"df1a1275a49a8b585a8f",5:"bddc6cdb0fd4f66403de",6:"b49cfa1ce3e15055f80c",7:"fcbbc974b0a872f97ffe"}[Cb]+".js");var La={key:1,ref:1,children:1},Ma={value:1,checked:1},ja={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"},q={},Ba=[],Db=q.hasOwnProperty,z="assign"in Object?q.constructor.assign:function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Db.call(c,d)&&(a[d]=c[d])}return a},x=Object.freeze({}),oa={key:1,ref:1},wa="undefined"!=typeof Promise,Eb="undefined"!=typeof requestAnimationFrame,Fb=setTimeout,Gb=wa?Promise.prototype.then.bind(Promise.resolve()):Fb,Hb={deferImplementation:Gb,
scheduleRender:Eb?function(a){return requestAnimationFrame(a)}:Gb,eagerlyHydrate:!0,beforeHookRender:null},ta=[],ua=[],za={_VNode:1,_listeners:1,onclick:1},Aa={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1},Ea=[];__wpcc.y.prototype.render=function(){return null};
__wpcc.y.prototype.setState=function(a){if(this._oldState=z({},this.state),this._nextState=z({},this.state),"function"==typeof a){a=a(this._nextState,this.props);if(null==a)return;z(this._nextState,a)}else z(this._nextState,a);this.state=this._nextState;this._dirty=!0;1===Ea.push(this)&&Hb.scheduleRender(Fa)};__wpcc.y.prototype.forceUpdate=function(a){var b=!1!==a;this.base=Ca(this._VNode,z({},this._VNode),this._VNode._parentDom,b,{depth:this._depth});"function"==typeof a&&a();sa(ta);sa(ua)};
var Ha={_nextSibDomVNode:1,_prevSibDomVNode:1},Na=["boolean","string","number"];__wpcc.p.inherits(__wpcc.A,__wpcc.y);__wpcc.A.prototype.componentDidMount=function(){this._init()};__wpcc.A.prototype.componentDidUpdate=function(a){(a&&(a.promise||a.componentPromise))!==(this.props.promise||this.props.componentPromise)&&this._init()};
__wpcc.A.prototype._init=function(){var a=this;this.setState({inProgress:!0});(this.props.promise||this.props.componentPromise)().then(function(b){a.setState({render:b,inProgress:!1})}).catch(function(){return a.setState({error:!0,inProgress:!1})})};
__wpcc.A.prototype.render=function(a,b){if(b.inProgress)a=Oa(a.fallback||a.fallbackComponent)||"Loading";else if(b.error)a=Oa(a.errorComponent)||"An Error Occured";else{b=b.render;var c=["fallback","fallbackComponent","promise","componentPromise"];c=ma([c]);var d={},e;for(e in a)-1===c.indexOf(e)&&(d[e]=a[e]);a=Oa(b,d)}return a};
var Ra=/\/+$/,L=[],B={subscribe:function(a){L.includes(a)||L.push(a)},unsubscribe:function(a){for(var b=0;b<L.length;b++)if(L[b]===a)return L.splice(b,1)},emit:function(a,b){for(var c=__wpcc.p.makeIterator(L),d=c.next();!d.done;d=c.next())d=d.value,d(a,b)},unsubscribeAll:function(){L.length=0}};__wpcc.p.inherits(__wpcc.E,__wpcc.y);__wpcc.E.__emitter=function(){B.emit(__wpcc.E.path+__wpcc.E.qs,{type:"popstate",native:!0})};
__wpcc.E._getParams=function(a,b){var c={},d;for(d in a)c[a[d]]=decodeURIComponent(b[d]);return c};__wpcc.E.getCurrentParams=function(a){var b=(a=Ua(a)).params;a=a.regex.exec(__wpcc.E.path);return __wpcc.E._getParams(b,a)};__wpcc.E.prototype.componentDidMount=function(){B.subscribe(this._routeChangeHandler);window.addEventListener("popstate",__wpcc.E.__emitter);this._routeChangeHandler(null)};
__wpcc.E.prototype.componentWillUnmount=function(){window.removeEventListener("popstate",__wpcc.E.__emitter);B.unsubscribe(this._routeChangeHandler)};__wpcc.E.prototype._notFoundComponent=function(){return __wpcc.v("div",null,'The Requested URL "'+__wpcc.E.path+'" was not found')};
__wpcc.E.prototype._routeChangeHandler=function(){var a=Sa(__wpcc.E.path),b=[];this.props.children.forEach(function(c){var d=Ua(c.props.match),e=d.regex.exec(a);if(e){var h=c.props;d=__wpcc.E._getParams(d.params,e);b.push(Oa(h.component,z({},c.props,{params:d})))}});b.length||(b=__wpcc.v(this.props.fallbackComponent||this._notFoundComponent));this.setState({child:b})};__wpcc.E.prototype.render=function(a,b){return __wpcc.v(__wpcc.w,null,b.child)};
__wpcc.p.global.Object.defineProperties(__wpcc.E,{path:{configurable:!0,enumerable:!0,get:function(){return location.pathname}},qs:{configurable:!0,enumerable:!0,get:function(){return location.search}},searchParams:{configurable:!0,enumerable:!0,get:function(){return new URLSearchParams(__wpcc.E.qs)}}});Qa(__wpcc.E,"getPath","path");Qa(__wpcc.E,"getQs","qs");var ab={};var Ib=Xa().Symbol||{},Jb={},M=Jb.constructor,Kb=Jb.hasOwnProperty;"function"==typeof Promise&&Promise.prototype.then.bind(Promise.resolve());var H="assign"in M?M.assign:function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Kb.call(c,d)&&(a[d]=c[d])}return a};var sb="keys"in M?M.keys:function(a){var b=[],c;for(c in a)Kb.call(a,c)&&b.push(c);return b};__wpcc.cb="entries"in M?M.entries:function(a){for(var b=sb(a),c=b.length,d=Array(c);c--;){var e=b[c];d[c]=[e,a[e]]}return d};var Lb="Set"in Xa();var Ob,Pb,Qb;if("undefined"!==typeof Symbol){var Rb=function(a,b){var c=a["__@@set"],d=0,e=c.length;a={};return a[Symbol.iterator]=function(){return this},a.next=function(){if(d<e){var a=c[d++];return{value:b?[a,a]:a,done:!1}}return{value:void 0,done:!0}},a};Ob=function(){return Rb(this,!0)};Pb=function(){return Rb(this,!1)};Qb=function(){return Rb(this,!1)}}else Ob=Qb=Pb=function(){console.warn("no symbol support")};var Sb={keys:Qb,values:Pb,entries:Ob};var Ub=function Tb(a,b){var d=null!=Tb&&"undefined"!==typeof Symbol&&Tb[Symbol.hasInstance]?!!Tb[Symbol.hasInstance](this):this instanceof Tb;if(!d)throw new TypeError("Cannot call a class as a function");if(!b&&Lb)return new Set(a);this["__@@set"]=[];if(null!=a){if(!a||!a[Ib.iterator])throw Error("value:"+String(a)+" is not iterable");b=a.length;for(d=0;d<b;d++)this.add(a[d])}};
(function(a){a.prototype.add=function(a){this.has(a)||this["__@@set"].push(0===a?0:a);return this};a.prototype.has=function(a){for(var b=this["__@@set"],d=b.length,e=0;e<d;e++){var h=b[e];if(h===a||h!==h&&a!==a)return!0}return!1};a.prototype.delete=function(a){var b=!1;this["__@@set"]=this["__@@set"].filter(function(c){(c=!(c===a||c!==c&&a!==a))||(b=!0);return c});return b};a.prototype.forEach=function(a,c){for(var b=this["__@@set"],e=b.length,h=0;h<e;h++){var k=b[h];c?a.call(c,k,k,this):a(k,k,this)}};
a.prototype.clear=function(){return void(this["__@@set"].length=0)};Object.defineProperty(a.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this["__@@set"].length}});"undefined"!==typeof Symbol&&(a.prototype[Symbol.iterator]=Sb.values,a.prototype[Symbol.toStringTag]="Set");H(a.prototype,Sb)})(Ub);Ub[Symbol.species]=Ub;var N={userData:null,examBeginTimeStamp:null,$fetchedStringData:{}},Xb;Object.defineProperty(N,"isLoggedIn",{get:function(){return!(!N.userData||!N.userData.scholar)}});Object.defineProperty(N,"examBegan",{get:function(){return N.examBeginTimeStamp?0>N.examBeginTimeStamp-+new Date:!1},set:function(a){return a}});Xb=new Ub;
__wpcc.O={subscribe:function(a){Xb.add(a)},set:function(a,b){N[a]=b;Xb.forEach(function(c){return c(a,b,N)})},unsubscribe:function(a){Xb.delete(a)},getStore:function(){return N},getStrings:function(){return N.$fetchedStringData}};var Ya;Ya=__wpcc.O.getStrings();__wpcc.F={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};var db={"/":function(){return __wpcc.g.e(3).then(function(){return __wpcc.Yb}).then(G)},"/profile":function(){return __wpcc.g.e(7).then(function(){return __wpcc.Zb}).then(G)},"/exam/:sub":function(){return __wpcc.g.e(5).then(function(){return __wpcc.$b}).then(G)},"/admin":function(){return __wpcc.g.e(4).then(function(){return __wpcc.ac}).then(G)},"/report/:sub":function(){return __wpcc.g.e(6).then(function(){return __wpcc.bc}).then(G)}};var gb={credentials:"include"},hb=function(a,b,c,d){b=void 0===b?3:b;return function(){var e=arguments,h;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(k){switch(k.nextAddress){case 1:h=0;case 2:if(!(h<b)){k.jumpTo(3);break}k.setCatchFinallyBlocks(4);return k.yield(Promise.resolve(a.apply(d,[].slice.call(e))),6);case 6:return k.return(k.yieldResult);case 4:k.enterCatchBlock();h++;if(!c){k.jumpTo(2);break}return k.yield(fb(c),2);case 3:throw Error("function "+(a.name||"")+" failed "+
b+" times");}})}}(fetch,3,100);var jb;jb=location.hostname.includes("localhost")?"http://localhost:5000":"https://dps-exam.herokuapp.com";__wpcc.P={authenticate:J("/api/auth/login"),getUserDetails:J("/api/auth/get-status"),logout:J("/api/logout"),getAllStudents:J("/api/auth/get-all-students"),resetSubject:J("/api/auth/reset-subject")};__wpcc.cc={getSubjectInfo:J("/api/exam/get-subject-info"),startTest:J("/api/exam/start-test"),gradeTest:J("/api/exam/grade-test"),quickSave:J("/api/exam/quicksave"),getReport:J("/api/exam/get-report")};kb.prototype.auth=function(a){var b=this,c;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(d){if(1==d.nextAddress)return d.yield(__wpcc.I(__wpcc.P.authenticate,a),2);c=d.yieldResult;if(null!=c.error)return d.return(c);__wpcc.O.set("userData",c.user_data);b.state.checkedAuth=!0;return d.return(c)})};
kb.prototype.checkAuth=function(){var a=this,b,c;return __wpcc.p.asyncExecutePromiseGeneratorProgram(function(d){if(1==d.nextAddress){b=__wpcc.O.getStore().isLoggedIn;if(a.state.checkedAuth||b)return a.state.checkedAuth=!0,d.return(b);a.state.checkedAuth=!0;return d.yield(__wpcc.ib(__wpcc.P.getUserDetails,void 0,void 0,"get"),2)}c=d.yieldResult;if(!c.error&&c.user_data)return __wpcc.O.set("userData",c.user_data),d.return(c);if("Unknown error"===c.error)throw Error("");return d.return(!1)})};
kb.prototype.logout=function(){__wpcc.O.set("userData",null);return __wpcc.I(__wpcc.P.logout,{})};__wpcc.nb=new kb;var mb=__wpcc.O.getStore();
H(mb.$fetchedStringData,{Error$TitleDefault:"An error occured",Error$BodyText:"An unexpected error occured",Success$TitleDefault:"Success",Loading$Default:"Loading...",Landing$Welcome:"Welcome",Landing$RequestDetails:"Enter your details",Login$Scholar:"Scholar No.",Login$DateOfBirth:"Date of Birth (DD-MM-YYYY)",Login$login:"Login",Login$InProgressText:"Checking your details",Login$ErrorText:"Can't login",Profile$ClassOf:"Class of",Profile$YourSubjects:"Your Subjects",Profile$ViewReport:"View Report",Logout$logout:"Logout",
Exam$Begin:"Begin Examination",Exam$Invalid:"Invalid Exam",Exam$UnansweredQuestionsLeft:"Unanswered Questions Left",Exam$NoNegativeMarking:"There is no negative marking. Please answer the following questions",Exam$LoadingQuestions:"Loading questions",Exam$TimeUp:"Time up",Exam$TimeUpAnswerSubmitInfo:"Your answers are being submitted (Time Over)",Exam$CalculatingScore:"Calculating your score",Exam$ResultText:"Results",Exam$MaximumMarks:"Maximum Marks: ",Exam$YourScore:"Your score: ",Exam$TimeAllotted:"Time allotted - ",
Exam$TimeLeft:"Time Left - ",Exam$Submit:"Submit",Admin$AreYouSure:"Are You sure?",Admin$AboutToExecuteReset:function(a,b,c){var d={style:{fontWeight:"bold",color:"red"}};return __wpcc.v("div",null,"You are about to reset ",__wpcc.v("span",d,a,"(",b,")"),"'s marks for ",__wpcc.v("span",d,c))},Report$YourReportFor:function(a){return"Report For "+a},Report$CorrectAnswers:"Correct answers"});__wpcc.O.set("$fetchedStringData",mb.$fetchedStringData);
var dc=__wpcc.v(function(){return __wpcc.v(__wpcc.A,{componentPromise:ob,fallbackComponent:$a})}),ec=document.getElementById("app-mount"),fc=__wpcc.v(__wpcc.w,null,dc);if(ec.hasChildNodes())for(var gc;gc=ec.firstChild;)ec.removeChild(gc);Ca(fc,null,ec,!1,{depth:0});sa(ta);sa(ua);var pb=__wpcc.O.getStrings();__wpcc.p.inherits(__wpcc.K,__wpcc.y);__wpcc.K.prototype.componentDidMount=function(){var a=document.getElementById(""+this.__id);a&&a.focus()};
__wpcc.K.prototype.render=function(a){return __wpcc.v(__wpcc.w,null,__wpcc.v("div",{class:"mask",onClick:a.cancel},__wpcc.v("div",{class:"app-popup"},__wpcc.v("div",{class:"heading-text clr app-popup-title"},a.title),__wpcc.v("div",null,a.errorHead),__wpcc.v("div",{class:"err-reasons"},__wpcc.v("div",null,(a.reasons||[]).map(function(a){return __wpcc.v("div",null,a)}))),__wpcc.v("button",{id:this.__id,class:"app-popup-close",onClick:a.close},"OK"))))};__wpcc.hc={hour:"numeric",hour12:!0,minute:"numeric"};
__wpcc.ic="undefined"!==typeof Intl;Xa();var zb={0:"A",1:"B",2:"C",3:"D"};}).call(this || window, (window.__wpcc = window.__wpcc || {}));