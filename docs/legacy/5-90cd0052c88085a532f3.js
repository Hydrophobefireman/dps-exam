webpackJsonp([5], function(__wpcc){'use strict';var oc=function(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a},V=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];__wpcc.y.apply(this,[].concat(__wpcc.p.arrayFromIterable(b)));var d=this;oc(this,"tFix",function(a){a=""+a;return(1===a.length?"0":"")+a});oc(this,"__startTicks",function(){return d.parseTime()})},W=function(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):
a[b]=c;return a},qc=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];__wpcc.y.apply(this,[].concat(__wpcc.p.arrayFromIterable(b)));var d=this;W(this,"state",{isFetching:!1,questions:null,answers:null,timeOver:!1});W(this,"timeOver",function(){d.setState({timeOver:!0,forceSubmit:!0,answers:d.state.answers.slice().map(function(a){return null==a?-1:a})})});W(this,"timeLeft",function(a,b){return d.setState({timeLeft:a,prevTime:b})});W(this,"_submit",function(){if(!d.state.results&&
!d.state.awaitingScore){var a=d.state.answers,b=pc.userData.scholar,c=d.state.questions.subject;if(!d.state.forceSubmit){var l=[];a.forEach(function(a,b){return null==a&&l.push(b+1)});if(l.length)return d.setState({$AnswerError:l.join(", ")})}d.setState({awaitingScore:!0});__wpcc.J(__wpcc.Wb.gradeTest,{scholar:b,subject:c,answers:a}).then(function(a){if(a.error)return d.setState({error:a.error,awaitingScore:!1,timeOver:!1});__wpcc.P.set("userData",a.user_data);d.setState({results:a,awaitingScore:!1,
timeOver:!1})})}});W(this,"_answerQuestion",function(a){var b=a.target.dataset;a=+b.question_index;b=+b.option_index;d.state.answers[a]===b&&(b=null);var c=d.state.answers.slice();c[a]=b;__wpcc.J(__wpcc.Wb.quickSave,{subject:d.state.questions.subject,answers:c});d.setState({answers:c})});W(this,"_closePopup",function(){return d.setState({timeOver:!1})});W(this,"_clearError",function(){return d.setState({$AnswerError:null})});W(this,"__closeTest",function(){return __wpcc.D("/profile")})};
__wpcc.p.inherits(V,__wpcc.y);V.prototype.parseTime=function(){var a=this.props,b=+new Date;a=a.timeLeft-(b-a.prevTime)/1E3;var c=Math.floor(a/3600);var d=a%3600;var f=Math.floor(d/60);d=Math.round(d%60);this.props.setTimeLeft(a,b);this.setState({hours:c,mins:f,sec:d})};V.prototype.componentDidUpdate=function(){var a=this.state,b=a.hours,c=a.mins;a=a.sec;if(0===b&&0===c&&0===a||[b,c,a].some(function(a){return 0>a}))return clearInterval(this.___interval),this.props.timeOver()};
V.prototype.componentDidMount=function(){this.___interval=setInterval(this.__startTicks,1E3)};V.prototype.componentWillUnmount=function(){clearInterval(this.___interval)};V.prototype.render=function(a,b){a=this.tFix;if(!("hours"in b&&"mins"in b&&"sec"in b))return"";var c=b.hours,d=b.mins;b=b.sec;return[c,d,b].some(function(a){return 0>a})?"":a(c)+":"+a(d)+":"+a(b)};var pc=__wpcc.P.getStore(),X=__wpcc.P.getStrings();__wpcc.p.inherits(qc,__wpcc.y);qc.prototype.componentDidUpdate=function(){!this.state.timeOver||this.state.awaitingScore||this.state.results||this._submit()};
qc.prototype.componentDidMount=function(){var a=this;if(!pc.isLoggedIn)return __wpcc.D("/");var b=(new URLSearchParams(__wpcc.E.getQs)).get("sub");if(!b)return this.setState({error:X.Exam$Invalid});this.setState({isFetching:!0});__wpcc.J(__wpcc.Wb.startTest,{scholar:pc.userData.scholar,subject:b.trim()}).then(function(b){if(b.error)return a.setState({error:b.error,isFetching:!1});var c=b.previous_answers||[],f;c.length&&c.some(function(a){return null!=a})&&(f=c);a.setState({questions:b,isFetching:!1,
prevTime:+new Date,answers:f||Array(b.question_data.length).fill(null),timeLeft:b.time_allotted-(b.now-b.start_time)})})};
qc.prototype.render=function(a,b){var c=this;return b.error?__wpcc.v(__wpcc.ib,{reasons:[b.error],close:this.__closeTest}):b.$AnswerError?__wpcc.v(__wpcc.L,{close:this._clearError,title:X.Exam$UnansweredQuestionsLeft,errorHead:X.Exam$NoNegativeMarking,reasons:[b.$AnswerError]}):b.isFetching?__wpcc.v("div",{style:__wpcc.F},X.Exam$LoadingQuestions):b.timeOver?__wpcc.v(__wpcc.L,{close:this._closePopup,title:X.Exam$TimeUp,errorHead:X.Exam$TimeUpAnswerSubmitInfo}):b.awaitingScore?__wpcc.v("div",{style:__wpcc.F},
X.Exam$CalculatingScore):b.results?__wpcc.v(__wpcc.L,{close:this.__closeTest,title:X.Exam$ResultText,errorHead:__wpcc.v(__wpcc.w,null,__wpcc.v("div",null,X.Exam$MaximumMarks+b.results.total),__wpcc.v("div",null,X.Exam$YourScore)),reasons:[b.results.score]}):b.questions&&__wpcc.v("div",null,__wpcc.v("div",{class:"exam-header"},"class ",b.questions.grade," - ",b.questions.subject," test"),__wpcc.v("div",{class:"total-time"},X.Exam$TimeAllotted,__wpcc.v("span",{class:"bold"},__wpcc.jb(b.questions.time_allotted))),
__wpcc.v("span",{class:"t-left"},X.Exam$TimeLeft,__wpcc.v(V,{timeOver:this.timeOver,setTimeLeft:this.timeLeft,timeLeft:b.timeLeft,prevTime:b.prevTime})),__wpcc.v("div",{class:"questions-container"},b.questions.question_data.map(function(a,f){return __wpcc.v(__wpcc.qb,{x:a,i:f,setOption:b.timeOver?null:c._answerQuestion,answered:b.answers[f]})})),__wpcc.v("button",{class:"submit-exam hoverable",onClick:this._submit},X.Exam$Submit))};__wpcc.Tb={};__wpcc.Tb.default=qc;});