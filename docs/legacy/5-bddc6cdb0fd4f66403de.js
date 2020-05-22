webpackJsonp([5], function(__wpcc){'use strict';var vc=function(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a},U=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];__wpcc.y.apply(this,[].concat(__wpcc.p.arrayFromIterable(b)));var d=this;vc(this,"tFix",function(a){a=""+a;return(1===a.length?"0":"")+a});vc(this,"__startTicks",function(){return d.parseTime()})},V=function(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):
a[b]=c;return a},xc=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];__wpcc.y.apply(this,[].concat(__wpcc.p.arrayFromIterable(b)));var d=this;V(this,"state",{isFetching:!1,questions:null,answers:null,timeOver:!1});V(this,"timeOver",function(){d.setState({timeOver:!0,forceSubmit:!0,answers:d.state.answers.slice().map(function(a){return null==a?-1:a})})});V(this,"timeLeft",function(a,b){return d.setState({timeLeft:a,prevTime:b})});V(this,"_submit",function(){if(!d.state.results&&
!d.state.awaitingScore){var a=d.state.answers,b=wc.userData.scholar,c=d.state.questions.subject;if(!d.state.forceSubmit){var l=[];a.forEach(function(a,b){return null==a&&l.push(b+1)});if(l.length)return d.setState({$AnswerError:l.join(", ")})}d.setState({awaitingScore:!0});__wpcc.I(__wpcc.cc.gradeTest,{scholar:b,subject:c,answers:a}).then(function(a){if(a.error)return d.setState({error:a.error,awaitingScore:!1,timeOver:!1});__wpcc.O.set("userData",a.user_data);d.setState({results:a,awaitingScore:!1,
timeOver:!1})})}});V(this,"_answerQuestion",function(a){var b=a.target.dataset;a=+b.question_index;b=+b.option_index;d.state.answers[a]===b&&(b=null);var c=d.state.answers.slice();c[a]=b;__wpcc.I(__wpcc.cc.quickSave,{subject:d.state.questions.subject,answers:c});d.setState({answers:c})});V(this,"_closePopup",function(){return d.setState({timeOver:!1})});V(this,"_clearError",function(){return d.setState({$AnswerError:null})});V(this,"__closeTest",function(){return __wpcc.C("/profile")})};
__wpcc.p.inherits(U,__wpcc.y);U.prototype.parseTime=function(){var a=this.props,b=+new Date;a=a.timeLeft-(b-a.prevTime)/1E3;var c=Math.floor(a/3600);var d=a%3600;var e=Math.floor(d/60);d=Math.round(d%60);this.props.setTimeLeft(a,b);this.setState({hours:c,mins:e,sec:d})};U.prototype.componentDidUpdate=function(){var a=this.state,b=a.hours,c=a.mins;a=a.sec;if(0===b&&0===c&&0===a||[b,c,a].some(function(a){return 0>a}))return clearInterval(this.___interval),this.props.timeOver()};
U.prototype.componentDidMount=function(){this.___interval=setInterval(this.__startTicks,1E3)};U.prototype.componentWillUnmount=function(){clearInterval(this.___interval)};U.prototype.render=function(a,b){a=this.tFix;if(!("hours"in b&&"mins"in b&&"sec"in b))return"";var c=b.hours,d=b.mins;b=b.sec;return[c,d,b].some(function(a){return 0>a})?"":a(c)+":"+a(d)+":"+a(b)};var wc=__wpcc.O.getStore(),W=__wpcc.O.getStrings();__wpcc.p.inherits(xc,__wpcc.y);xc.prototype.componentDidUpdate=function(){!this.state.timeOver||this.state.awaitingScore||this.state.results||this._submit()};
xc.prototype.componentDidMount=function(){var a=this;if(!wc.isLoggedIn)return __wpcc.C("/");var b=__wpcc.E.getCurrentParams("/exam/:sub").sub.trim();if(!b)return this.setState({error:W.Exam$Invalid});this.setState({isFetching:!0});__wpcc.I(__wpcc.cc.startTest,{scholar:wc.userData.scholar,subject:b.trim()}).then(function(b){if(b.error)return a.setState({error:b.error,isFetching:!1});var c=b.previous_answers||[],e;c.length&&c.some(function(a){return null!=a})&&(e=c);a.setState({questions:b,isFetching:!1,
prevTime:+new Date,answers:e||Array(b.question_data.length).fill(null),timeLeft:b.time_allotted-(b.now-b.start_time)})})};
xc.prototype.render=function(a,b){var c=this;return b.error?__wpcc.v(__wpcc.qb,{reasons:[b.error],close:this.__closeTest}):b.$AnswerError?__wpcc.v(__wpcc.K,{close:this._clearError,title:W.Exam$UnansweredQuestionsLeft,errorHead:W.Exam$NoNegativeMarking,reasons:[b.$AnswerError]}):b.isFetching?__wpcc.v("div",{style:__wpcc.F},W.Exam$LoadingQuestions):b.timeOver?__wpcc.v(__wpcc.K,{close:this._closePopup,title:W.Exam$TimeUp,errorHead:W.Exam$TimeUpAnswerSubmitInfo}):b.awaitingScore?__wpcc.v("div",{style:__wpcc.F},
W.Exam$CalculatingScore):b.results?__wpcc.v(__wpcc.K,{close:this.__closeTest,title:W.Exam$ResultText,errorHead:__wpcc.v(__wpcc.w,null,__wpcc.v("div",null,W.Exam$MaximumMarks+b.results.total),__wpcc.v("div",null,W.Exam$YourScore)),reasons:[b.results.score]}):b.questions&&__wpcc.v("div",null,__wpcc.v("div",{class:"exam-header"},"class ",b.questions.grade," - ",b.questions.subject," test"),__wpcc.v("div",{class:"total-time"},W.Exam$TimeAllotted,__wpcc.v("span",{class:"bold"},__wpcc.rb(b.questions.time_allotted))),
__wpcc.v("span",{class:"t-left"},W.Exam$TimeLeft,__wpcc.v(U,{timeOver:this.timeOver,setTimeLeft:this.timeLeft,timeLeft:b.timeLeft,prevTime:b.prevTime})),__wpcc.v("div",{class:"questions-container"},b.questions.question_data.map(function(a,e){return __wpcc.v(__wpcc.yb,{x:a,i:e,setOption:b.timeOver?null:c._answerQuestion,answered:b.answers[e]})})),__wpcc.v("button",{class:"submit-exam hoverable",onClick:this._submit},W.Exam$Submit))};__wpcc.$b={};__wpcc.$b.default=xc;});