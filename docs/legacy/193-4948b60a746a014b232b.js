(window.webpackJsonpexam_app=window.webpackJsonpexam_app||[]).push([[193],{5193:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});n(2222),n(1249);var r=n(2386),a=n(5804),o=n(77),u=n(3596),i=n(3121);function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=a.h.getStore(),d=a.h.getStrings(),p=function(t){var e,n;function i(){for(var e,n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return s(c(e=t.call.apply(t,[this].concat(i))||this),"_logout",(function(){return(0,u.VN)(o.EA.logout,{}).then((function(){a.h.set("userData",null),(0,r.uX)("/")}))})),e}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var p=i.prototype;return p.componentDidMount=function(){var t=this;if(!l.isLoggedIn)return(0,r.uX)("/");(0,u.A_)(o.WX.getSubjectInfo).then((function(e){var n=e.subjects;t.setState({subjectInfo:n})}))},p.render=function(t,e){return l.userData?(0,r.h)("div",null,(0,r.h)("div",null,d.Profile$ClassOf," '",10===l.userData.grade?"23":"21"),(0,r.h)("div",{class:"prof-data-box"},["name","grade","scholar"].map((function(t){return(0,r.h)(h,{x:t,data:l.userData[t]})}))),(0,r.h)("div",null,(0,r.h)("div",{class:"your-subjects"},d.Profile$YourSubjects),(0,r.h)("div",{class:"subject-info help-box"},["subject","paper date","duration","status"].map((function(t){return(0,r.h)("div",{class:"subject-child bold"},t)}))),(0,r.h)(g,{arr:e.subjectInfo||l.userData.subject_info}),(0,r.h)("button",{onClick:this._logout,class:"submit-exam hoverable",style:{marginTop:"30px"}},d.Logout$logout))):d.Loading$Default},i}(r.wA);function h(t){var e=t.x,n=t.data;return(0,r.h)("div",{class:"prof-container"},(0,r.h)("div",{class:"prof-field"},e),(0,r.h)("div",null,n))}var f=function(t,e){return t>e?1:e>t?-1:0},v=function(t,e){return t.paper_time&&e.paper_time?f(t.paper_time,e.paper_time):f(t,e)},b=(0,r.h)("div",{class:"subject-child place-holder"});function g(t){var e=t.arr;return(0,r.h)("div",{class:"subject-info-container"},(e||[]).sort(v).map((function(t){return(0,r.h)("div",{class:"subject-info"},(0,r.h)("div",{class:"subject-child"},t.subject||b),(0,r.h)("div",{class:"subject-child"},t.paper_time?(0,r.h)(j,{ts:t.paper_time}):b),(0,r.h)("div",{class:"subject-child"},t.paper_time?(0,i.bT)(t.time_allotted):b),(0,r.h)("div",{class:"subject-child"},function(t){var e=t.subject||t,n=(l.userData.testing_info||{})[e];return t.subject&&n&&null!=n.score?(0,r.h)("span",{class:"bold"},"Score "+(n.score||0)):(0,r.h)("div",null,(0,r.h)("button",{class:"next-exam hoverable",onClick:t.subject?m:null,"data-subject":e},t.subject?d.Exam$Begin:d.Loading$Default))}(t)))})))}var m=function(t){return(0,r.OX)("/exam?sub="+t.target.dataset.subject)};function j(t){var e=new Date(1e3*t.ts);return(0,i.uS)(e)}},3121:function(t,e,n){"use strict";n.d(e,{OK:function(){return i},GI:function(){return c},bT:function(){return s},uS:function(){return p}});n(2222),n(1249),n(9601);var r=n(2386);function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=n(5804).h.getStrings();function i(t){return(0,r.h)(c,Object.assign(Object.assign({},t),{},{title:u.Error$TitleDefault}))}var c=function(t){var e,n;function u(){for(var e,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return o(a(e=t.call.apply(t,[this].concat(r))||this),"__id",Math.random()),e}n=t,(e=u).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=u.prototype;return i.componentDidMount=function(){var t=document.getElementById(""+this.__id);t&&t.focus()},i.render=function(t){return(0,r.h)(r.HY,null,(0,r.h)("div",{class:"mask",onClick:t.cancel},(0,r.h)("div",{class:"app-popup"},(0,r.h)("div",{class:"heading-text clr app-popup-title"},t.title),(0,r.h)("div",null,t.errorHead),(0,r.h)("div",{class:"err-reasons"},(0,r.h)("div",null,(t.reasons||[]).map((function(t){return(0,r.h)("div",null,t)})))),(0,r.h)("button",{id:this.__id,class:"app-popup-close",onClick:t.close},"OK"))))},u}(r.wA),s=function(t){var e,n=Math.floor(t/3600),r=t%3600/60;return(n>0?n+" "+(e="hour",1===n?e:e+"s"):"")+(r>0?" "+r+" mins":"")};var l={hour:"numeric",hour12:!0,minute:"numeric"},d="undefined"!=typeof Intl;function p(t){var e,n,r=new Date(t);try{if(d){var a=new Date;return r.getFullYear()!==a.getFullYear()&&(l.year="numeric"),n=a,((e=r).getFullYear()!==n.getFullYear()||e.getMonth()!==n.getMonth()||e.getDate()!==n.getDate())&&(l.month=l.day="numeric"),Intl.DateTimeFormat("en-in",l).format(r).toUpperCase()}}catch(t){return console.log(t)}return r.toLocaleString()}},2222:function(t,e,n){"use strict";var r=n(2109),a=n(7293),o=n(3157),u=n(111),i=n(7908),c=n(7466),s=n(6135),l=n(5417),d=n(1194),p=n(5112),h=n(7392),f=p("isConcatSpreadable"),v=h>=51||!a((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=d("concat"),g=function(t){if(!u(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!v||!b},{concat:function(t){var e,n,r,a,o,u=i(this),d=l(u,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?u:arguments[e],g(o)){if(p+(a=c(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,p++)n in o&&s(d,p,o[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(d,p++,o)}return d.length=p,d}})}}]);