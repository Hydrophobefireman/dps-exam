webpackJsonp([6], function(__wpcc){'use strict';var gc=function(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a},hc=function(a){const {x:b,data:c}=a;return __wpcc.v("div",{class:"prof-container"},__wpcc.v("div",{class:"prof-field"},b),__wpcc.v("div",null,c))},mc=function(a){return __wpcc.v("div",{class:"subject-info-container"},(a.arr||[]).sort(ic).map(a=>{var b=__wpcc.v("div",{class:"subject-child"},a.subject||jc),d=__wpcc.v("div",{class:"subject-child"},a.paper_time?__wpcc.v(kc,
{ts:a.paper_time}):jc),f=__wpcc.v("div",{class:"subject-child"},a.paper_time?__wpcc.$b(a.time_allotted):jc);{const b=a.subject||a,c=(V.userData.testing_info||{})[b];a=a.subject&&c&&null!=c.score?__wpcc.v(__wpcc.Sa,{class:"bold action-btn hoverable view-report",href:`/report/${encodeURIComponent(a.subject)}`},"(",c.score||0,") ",W.Profile$ViewReport):__wpcc.v("div",null,__wpcc.v("button",{class:"next-exam hoverable",onClick:a.subject?lc:null,"data-subject":b},a.subject?W.Exam$Begin:W.Loading$Default))}return __wpcc.v("div",
{class:"subject-info"},b,d,f,__wpcc.v("div",{class:"subject-child"},a))}))},kc=function(a){a:{a=new Date(new Date(1E3*a.ts));try{if(__wpcc.bc){var b=new Date;a.getFullYear()!==b.getFullYear()&&(__wpcc.ac.year="numeric");if(a.getFullYear()!==b.getFullYear()||a.getMonth()!==b.getMonth()||a.getDate()!==b.getDate())__wpcc.ac.month=__wpcc.ac.day="numeric";var c=Intl.DateTimeFormat("en-in",__wpcc.ac).format(a).toUpperCase();break a}}catch(d){c=console.log(d);break a}c=a.toLocaleString()}return c};
const V=__wpcc.P.getStore(),W=__wpcc.P.getStrings();
var nc=class extends __wpcc.C{constructor(...a){super(...a);gc(this,"_logout",()=>__wpcc.I(__wpcc.R.logout,{}).then(()=>{__wpcc.P.set("userData",null);__wpcc.E("/")}))}componentDidMount(){if(!V.isLoggedIn)return __wpcc.E("/");__wpcc.db(__wpcc.S.getSubjectInfo,void 0,void 0,"get").then(a=>{this.setState({subjectInfo:a.subjects})})}render(a,b){return V.userData?__wpcc.v("div",null,__wpcc.v("div",null,W.Profile$ClassOf," '",10===V.userData.grade?"23":"21"),__wpcc.v("div",{class:"prof-data-box"},["name",
"grade","scholar"].map(a=>__wpcc.v(hc,{x:a,data:V.userData[a]}))),__wpcc.v("div",null,__wpcc.v("div",{class:"your-subjects"},W.Profile$YourSubjects),__wpcc.v("div",{class:"subject-info help-box"},["subject","paper date","duration","status"].map(a=>__wpcc.v("div",{class:"subject-child bold"},a))),__wpcc.v(mc,{arr:b.subjectInfo||V.userData.subject_info}),__wpcc.v("button",{onClick:this._logout,class:"submit-exam hoverable",style:{marginTop:"30px"}},W.Logout$logout))):W.Loading$Default}};
const ic=(a,b)=>{a.paper_time&&b.paper_time?(a=a.paper_time,b=b.paper_time,b=a>b?1:b>a?-1:0):b=a>b?1:b>a?-1:0;return b},jc=__wpcc.v("div",{class:"subject-child place-holder"}),lc=a=>__wpcc.Pa(`/exam/${encodeURIComponent(a.target.dataset.subject)}`);__wpcc.Tb={};__wpcc.Tb.default=nc;});
