(window.webpackJsonpexam_app=window.webpackJsonpexam_app||[]).push([[873],{873:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>g});var i=s(386),r=s(596),n=s(77),a=s(804),o=s(264),l=s(121);function c(t){const e=t.data;return(0,i.h)("span",{"data-rich":1},e.map(t=>function(t){const e=t.type,s=t.value;switch(e){case"sup":case"div":case"sub":return(0,i.h)(e,null,s);case"inline-img":return(0,i.h)("span",{class:"opt-image-container"},(0,i.h)("img",{src:s,class:"opt-img"}));case"img":return(0,i.h)("div",{style:"text-align:center"},(0,i.h)("img",{src:s,class:"opt-img"}));case"underline":case"bold":return(0,i.h)("span",{class:e},s);case"text":default:return(0,i.h)("span",null,s)}}(t)))}const u={0:"A",1:"B",2:"C",3:"D"},h=t=>"object"==typeof t?(0,i.h)(c,{data:t}):String(t);function m(t){const{x:e,i:s,setOption:r,answered:n}=t;return(0,i.h)("div",{class:"question-body"},(0,i.h)("div",{class:"question-text"},"Q.",s+1,(0,i.h)("span",{class:"q-main"},h(e.question))),(0,i.h)(d,{options:e.options,onClick:r,questionIndex:s,answered:n}))}function d(t){return(0,i.h)("div",null,t.options.map((e,s)=>(0,i.h)("div",{class:"option-box"},(0,i.h)("span",{class:"readable-name"},u[s]),(0,i.h)("div",{onClick:t.onClick,class:"question-choice"+(s===t.answered?" selected":""),"data-option_index":s,"data-question_index":t.questionIndex},h(e)))))}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class v extends i.wA{constructor(...t){super(...t),p(this,"tFix",t=>(1===(t=""+t).length?"0":"")+t),p(this,"__startTicks",()=>this.parseTime())}parseTime(){const t=this.props,e=+new Date,s=t.timeLeft-(e-t.prevTime)/1e3;let i;const r=s,n=Math.floor(r/3600);i=r%3600;const a=Math.floor(i/60);i=Math.round(i%60);const o=i;this.props.setTimeLeft(s,e),this.setState({hours:n,mins:a,sec:o})}componentDidUpdate(){const{hours:t,mins:e,sec:s}=this.state;if(0===t&&0===e&&0===s||[t,e,s].some(t=>t<0))return clearInterval(this.___interval),this.props.timeOver()}componentDidMount(){this.___interval=setInterval(this.__startTicks,1e3)}componentWillUnmount(){clearInterval(this.___interval)}render(t,e){const s=this.tFix;if(!("hours"in e&&"mins"in e&&"sec"in e))return"";const{hours:i,mins:r,sec:n}=e;return[i,r,n].some(t=>t<0)?"":`${s(i)}:${s(r)}:${s(n)}`}}function f(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const w=a.h.getStore(),_=a.h.getStrings();class g extends i.wA{constructor(...t){super(...t),f(this,"state",{isFetching:!1,questions:null,answers:null,timeOver:!1}),f(this,"timeOver",()=>{this.setState({timeOver:!0,forceSubmit:!0,answers:this.state.answers.slice().map(t=>null==t?-1:t)})}),f(this,"timeLeft",(t,e)=>this.setState({timeLeft:t,prevTime:e})),f(this,"_submit",()=>{if(this.state.results||this.state.awaitingScore)return;const t=this.state.answers,e=w.userData.scholar,s=this.state.questions.subject;if(!this.state.forceSubmit){const e=[];if(t.forEach((t,s)=>null==t&&e.push(s+1)),e.length)return this.setState({$AnswerError:e.join(", ")})}this.setState({awaitingScore:!0}),(0,r.VN)(n.WX.gradeTest,{scholar:e,subject:s,answers:t}).then(t=>{if(t.error)return this.setState({error:t.error,awaitingScore:!1,timeOver:!1});a.h.set("userData",t.user_data),this.setState({results:t,awaitingScore:!1,timeOver:!1})})}),f(this,"_answerQuestion",t=>{const e=t.target.dataset,s=+e.question_index;let i=+e.option_index;this.state.answers[s]===i&&(i=null);const a=this.state.answers.slice();a[s]=i,(0,r.VN)(n.WX.quickSave,{subject:this.state.questions.subject,answers:a}),this.setState({answers:a})}),f(this,"_closePopup",()=>this.setState({timeOver:!1})),f(this,"_clearError",()=>this.setState({$AnswerError:null})),f(this,"__closeTest",()=>(0,i.uX)("/profile"))}componentDidUpdate(){!this.state.timeOver||this.state.awaitingScore||this.state.results||this._submit()}componentDidMount(){if(!w.isLoggedIn)return(0,i.uX)("/");const t=new URLSearchParams(i.F0.getQs).get("sub");if(!t)return this.setState({error:_.Exam$Invalid});this.setState({isFetching:!0}),(0,r.VN)(n.WX.startTest,{scholar:w.userData.scholar,subject:t.trim()}).then(t=>{if(t.error)return this.setState({error:t.error,isFetching:!1});let e,s=t.previous_answers||[];s.length&&s.some(t=>null!=t)&&(e=s),this.setState({questions:t,isFetching:!1,prevTime:+new Date,answers:e||Array(t.question_data.length).fill(null),timeLeft:t.time_allotted-(t.now-t.start_time)})})}render(t,e){return e.error?(0,i.h)(l.OK,{reasons:[e.error],close:this.__closeTest}):e.$AnswerError?(0,i.h)(l.GI,{close:this._clearError,title:_.Exam$UnansweredQuestionsLeft,errorHead:_.Exam$NoNegativeMarking,reasons:[e.$AnswerError]}):e.isFetching?(0,i.h)("div",{style:o.Kx},_.Exam$LoadingQuestions):e.timeOver?(0,i.h)(l.GI,{close:this._closePopup,title:_.Exam$TimeUp,errorHead:_.Exam$TimeUpAnswerSubmitInfo}):e.awaitingScore?(0,i.h)("div",{style:o.Kx},_.Exam$CalculatingScore):e.results?(0,i.h)(l.GI,{close:this.__closeTest,title:_.Exam$ResultText,errorHead:(0,i.h)(i.HY,null,(0,i.h)("div",null,_.Exam$MaximumMarks+e.results.total),(0,i.h)("div",null,_.Exam$YourScore)),reasons:[e.results.score]}):e.questions&&(0,i.h)("div",null,(0,i.h)("div",{class:"exam-header"},"class ",e.questions.grade," - ",e.questions.subject," test"),(0,i.h)("div",{class:"total-time"},_.Exam$TimeAllotted,(0,i.h)("span",{class:"bold"},(0,l.bT)(e.questions.time_allotted))),(0,i.h)("span",{class:"t-left"},_.Exam$TimeLeft,(0,i.h)(v,{timeOver:this.timeOver,setTimeLeft:this.timeLeft,timeLeft:e.timeLeft,prevTime:e.prevTime})),(0,i.h)("div",{class:"questions-container"},e.questions.question_data.map((t,s)=>(0,i.h)(m,{x:t,i:s,setOption:e.timeOver?null:this._answerQuestion,answered:e.answers[s]}))),(0,i.h)("button",{class:"submit-exam hoverable",onClick:this._submit},_.Exam$Submit))}}},121:(t,e,s)=>{"use strict";s.d(e,{OK:()=>n,GI:()=>a,bT:()=>o});var i=s(386);const r=s(804).h.getStrings();function n(t){return(0,i.h)(a,{...t,title:r.Error$TitleDefault})}class a extends i.wA{constructor(...t){var e,s,i;super(...t),e=this,s="__id",i=Math.random(),s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i}componentDidMount(){const t=document.getElementById(""+this.__id);t&&t.focus()}render(t){return(0,i.h)(i.HY,null,(0,i.h)("div",{class:"mask"},(0,i.h)("div",{class:"app-popup"},(0,i.h)("div",{class:"heading-text clr app-popup-title"},t.title),(0,i.h)("div",null,t.errorHead),(0,i.h)("div",{class:"err-reasons"},(0,i.h)("div",null,(t.reasons||[]).map(t=>(0,i.h)("div",null,t)))),(0,i.h)("button",{id:this.__id,class:"app-popup-close",onClick:t.close},"OK"))))}}const o=t=>{const e=Math.floor(t/3600),s=t%3600/60;var i,r;return`${""+(e>0?`${e} ${i=e,r="hour",1===i?r:r+"s"}`:"")}${s>0?` ${s} mins`:""}`}}}]);