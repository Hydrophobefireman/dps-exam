webpackJsonp([6], function(__wpcc){'use strict';var mc=function(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a},nc=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];__wpcc.y.apply(this,[].concat(__wpcc.q.arrayFromIterable(b)));mc(this,"_logout",function(){return __wpcc.I(__wpcc.P.logout,{}).then(function(){__wpcc.O.set("userData",null);__wpcc.D("/")})})},oc=function(a){var b=a.data;return __wpcc.v("div",{class:"prof-container"},__wpcc.v("div",{class:"prof-field"},
a.x),__wpcc.v("div",null,b))},pc=function(a,b){a.paper_time&&b.paper_time?(a=a.paper_time,b=b.paper_time,b=a>b?1:b>a?-1:0):b=a>b?1:b>a?-1:0;return b},tc=function(a){return __wpcc.v("div",{class:"subject-info-container"},(a.arr||[]).sort(pc).map(function(a){var b=__wpcc.v("div",{class:"subject-child"},a.subject||qc),d=__wpcc.v("div",{class:"subject-child"},a.paper_time?__wpcc.v(rc,{ts:a.paper_time}):qc),f=__wpcc.v("div",{class:"subject-child"},a.paper_time?__wpcc.rb(a.time_allotted):qc);var h=a.subject||
a,k=(T.userData.testing_info||{})[h];a=a.subject&&k&&null!=k.score?__wpcc.v(__wpcc.Wa,{class:"bold action-btn hoverable view-report",href:"/report/"+encodeURIComponent(a.subject)},"(",k.score||0,") ",U.Profile$ViewReport):__wpcc.v("div",null,__wpcc.v("button",{class:"next-exam hoverable",onClick:a.subject?sc:null,"data-subject":h},a.subject?U.Exam$Begin:U.Loading$Default));return __wpcc.v("div",{class:"subject-info"},b,d,f,__wpcc.v("div",{class:"subject-child"},a))}))},sc=function(a){return __wpcc.Ta("/exam/"+
encodeURIComponent(a.target.dataset.subject))},rc=function(a){a:{a=new Date(new Date(1E3*a.ts));try{if(__wpcc.hc){var b=new Date;a.getFullYear()!==b.getFullYear()&&(__wpcc.gc.year="numeric");if(a.getFullYear()!==b.getFullYear()||a.getMonth()!==b.getMonth()||a.getDate()!==b.getDate())__wpcc.gc.month=__wpcc.gc.day="numeric";var c=Intl.DateTimeFormat("en-in",__wpcc.gc).format(a).toUpperCase();break a}}catch(d){c=console.log(d);break a}c=a.toLocaleString()}return c},T=__wpcc.O.getStore(),U=__wpcc.O.getStrings(),
qc;__wpcc.q.inherits(nc,__wpcc.y);nc.prototype.componentDidMount=function(){var a=this;if(!T.isLoggedIn)return __wpcc.D("/");__wpcc.ib(__wpcc.Q.getSubjectInfo,void 0,void 0,"get").then(function(b){a.setState({subjectInfo:b.subjects})})};
nc.prototype.render=function(a,b){return T.userData?__wpcc.v("div",null,__wpcc.v("div",null,U.Profile$ClassOf," '",10===T.userData.grade?"23":"21"),__wpcc.v("div",{class:"prof-data-box"},["name","grade","scholar"].map(function(a){return __wpcc.v(oc,{x:a,data:T.userData[a]})})),__wpcc.v("div",null,__wpcc.v("div",{class:"your-subjects"},U.Profile$YourSubjects),__wpcc.v("div",{class:"subject-info help-box"},["subject","paper date","duration","status"].map(function(a){return __wpcc.v("div",{class:"subject-child bold"},
a)})),__wpcc.v(tc,{arr:b.subjectInfo||T.userData.subject_info}),__wpcc.v("button",{onClick:this._logout,class:"submit-exam hoverable",style:{marginTop:"30px"}},U.Logout$logout))):U.Loading$Default};qc=__wpcc.v("div",{class:"subject-child place-holder"});__wpcc.Zb={};__wpcc.Zb.default=nc;});
