(window.webpackJsonpexam_app=window.webpackJsonpexam_app||[]).push([[23],{23:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>S});var n=s(386),a=s(77),i=s(804),r=s(596),l=s(264),o=s(212),u=s(121);function h(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const c=i.h.getStrings(),d=window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout,p=/\s/g,m=t=>(t+"").replace(p,"").toLowerCase(),v=(t,e)=>m(t).includes(m(e));class b extends n.wA{constructor(...t){super(...t),h(this,"state",{showCount:100,value:""}),h(this,"increment",()=>this.setState(t=>({showCount:t.showCount+100}))),h(this,"setFilter",t=>{const e=t.target.value;d(()=>this.setState({value:e,showCount:100}))}),h(this,"expandStudentDetails",t=>this.setState(e=>{const s=e.expandScholar,n=+t.target.dataset.student_scholar;return{expandScholar:s===n?-1:n}})),h(this,"resetScores",(t,e)=>()=>{this.state.isResetting||(this.setState({isResetting:!0}),(0,r.VN)(a.EA.resetSubject,{token:this.props.token,scholar:t,subject:e}).then(t=>this.setState({data:t,value:"",expandScholar:null,isResetting:!1})))}),h(this,"_applyGradeFilter",t=>this.setState(e=>{let s=+t.target.dataset.class;return s===e.filterGrade&&(s=null),{filterGrade:+s,showCount:100}}))}applyFilter(t){const e=(this.state.value||"").trim();return e||this.state.filterGrade?t.filter(t=>{if(this.state.filterGrade&&t.grade!==this.state.filterGrade)return!1;const{scholar:s,name:n}=t;return v(s,e)||v(n,e)}):t}componentDidMount(){this.setState({data:this.props.data})}getStudents(){const t=this.state.data;if(!t)return;const e=this.applyFilter(t),s=Math.min(this.state.showCount,e.length),a=Array(s),i=this.state.expandScholar;for(let t=0;t<s;t++){const s=e[t];a[t]=(0,n.h)("div",null,(0,n.h)("div",{onClick:this.expandStudentDetails,class:"student-item","data-student_scholar":s.scholar},(0,n.h)("div",{class:"schlr"},s.scholar),(0,n.h)("div",{class:"student-name"},e[t].name),(0,n.h)("div",{class:"more-info"})),i===s.scholar&&(0,n.h)(f,{student:s,index:t,shouldExpand:!0,resetScores:this.resetScores}))}return a}render(t,e){return(0,n.h)("div",null,(0,n.h)("input",{class:"form-inx",placeholder:"Search",onInput:this.setFilter,value:e.value}),(0,n.h)("div",{class:"filter-by-class"},(0,n.h)("button",{class:"filter-button hoverable","data-class":10,onClick:this._applyGradeFilter},"Class 10"),(0,n.h)("button",{class:"filter-button hoverable","data-class":12,onClick:this._applyGradeFilter},"Class 12")),(0,n.h)("div",null,"Currently showing ",e.filterGrade?"Class "+e.filterGrade:"All"," students"),(0,n.h)("div",null,this.getStudents()),e.data&&e.showCount<e.data.length&&(0,n.h)("button",{class:"show-more hoverable",onClick:this.increment},"Load More"))}}class f extends n.wA{constructor(...t){super(...t),h(this,"state",{waitingForResetConfirmation:!1,subjectReset:null}),h(this,"_confirmReset",t=>this.setState({waitingForResetConfirmation:!0,subjectReset:t.target.dataset.subject})),h(this,"_cancel",this.setState({waitingForResetConfirmation:!1,subjectReset:null}))}render(t,e){const s=t.student;return e.waitingForResetConfirmation?(0,n.h)(u.GI,{cancel:this._cancel,title:"Are you sure?",errorHead:c.Admin$AboutToExecuteReset(s.name,s.scholar,e.subjectReset),close:this.props.resetScores(s.scholar,e.subjectReset)}):(0,n.h)("div",{class:"student-details"+(t.shouldExpand?" show-data":"")},(0,n.h)("div",{class:"student-details-table-like"},(0,n.h)("div",{class:"info-field"},(0,n.h)("div",{class:"bold"},"Class"),(0,n.h)("span"),(0,n.h)("div",null,s.grade)),(0,n.h)("div",{style:{fontWeight:"bold"}},"Results:"),(0,o.Z)(s.testing_info||{}).map(([t,e])=>(0,n.h)("div",{class:"info-field"},(0,n.h)("div",{class:"bold"},t),(0,n.h)("div",null,e.score),(0,n.h)("div",{onClick:this._confirmReset,class:"reset-score hoverable","data-subject":t},"Reset")))))}}function g(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const w=i.h.getStrings();class S extends n.wA{constructor(...t){super(...t),g(this,"state",{value:"",submittedToken:!1}),g(this,"handleSubmit",()=>this.setState({submittedToken:!0})),g(this,"handleInput",t=>this.setState({value:(t.target.value||"").trim()}))}render(t,e){return this.state.submittedToken?(0,n.h)(n.gr,{componentPromise:()=>async function(t){const e=await(0,r.VN)(a.EA.getAllStudents,{token:t});return e.error?()=>(0,n.h)("div",null,e.error):()=>(0,n.h)(b,{data:e,token:t})}(e.value),fallbackComponent:()=>w.Loading$Default}):(0,n.h)("div",{style:{...l.Kx,flexDirection:"column"}},(0,n.h)("div",null,"Admin Dashboard"),(0,n.h)("form",{style:{width:"60%"},action:"javascript:",onSubmit:this.handleSubmit},(0,n.h)("input",{class:"form-inx",value:e.value,onInput:this.handleInput,placeholder:"Password",type:"password"}),(0,n.h)("div",null,(0,n.h)("button",{class:"action-btn",style:{marginTop:"1rem",visibility:e.value?"visible":"hidden"}},w.Login$login))))}}},121:(t,e,s)=>{"use strict";s.d(e,{OK:()=>i,GI:()=>r,bT:()=>l,uS:()=>h});var n=s(386);const a=s(804).h.getStrings();function i(t){return(0,n.h)(r,{...t,title:a.Error$TitleDefault})}class r extends n.wA{constructor(...t){var e,s,n;super(...t),e=this,s="__id",n=Math.random(),s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n}componentDidMount(){const t=document.getElementById(""+this.__id);t&&t.focus()}render(t){return(0,n.h)(n.HY,null,(0,n.h)("div",{class:"mask",onClick:t.cancel},(0,n.h)("div",{class:"app-popup"},(0,n.h)("div",{class:"heading-text clr app-popup-title"},t.title),(0,n.h)("div",null,t.errorHead),(0,n.h)("div",{class:"err-reasons"},(0,n.h)("div",null,(t.reasons||[]).map(t=>(0,n.h)("div",null,t)))),(0,n.h)("button",{id:this.__id,class:"app-popup-close",onClick:t.close},"OK"))))}}const l=t=>{const e=Math.floor(t/3600),s=t%3600/60;var n,a;return`${""+(e>0?`${e} ${n=e,a="hour",1===n?a:a+"s"}`:"")}${s>0?` ${s} mins`:""}`};const o={hour:"numeric",hour12:!0,minute:"numeric"},u="undefined"!=typeof Intl;function h(t){const e=new Date(t);try{if(u){const t=new Date;return e.getFullYear()!==t.getFullYear()&&(o.year="numeric"),n=t,((s=e).getFullYear()!==n.getFullYear()||s.getMonth()!==n.getMonth()||s.getDate()!==n.getDate())&&(o.month=o.day="numeric"),Intl.DateTimeFormat("en-in",o).format(e).toUpperCase()}}catch(t){return console.log(t)}var s,n;return e.toLocaleString()}}}]);