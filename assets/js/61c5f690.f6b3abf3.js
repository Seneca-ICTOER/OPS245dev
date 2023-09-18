"use strict";(self.webpackChunkOPS245=self.webpackChunkOPS245||[]).push([[134],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var r=n(3117),i=(n(7294),n(3905));const s={id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"TBD"},o="Assignment 2",a={unversionedId:"B-Assignments/assignment2",id:"B-Assignments/assignment2",title:"Assignment 2",description:"TBD",source:"@site/docs/B-Assignments/assignment2.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment2",permalink:"/OPS245/B-Assignments/assignment2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS245/tree/main/docs/B-Assignments/assignment2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 1",permalink:"/OPS245/B-Assignments/assignment1"},next:{title:"Tips",permalink:"/OPS245/C-ExtraResources/tips"}},u={},l=[{value:"Instructions",id:"instructions",level:2},{value:"Due Date",id:"due-date",level:3},{value:"Submission",id:"submission",level:3},{value:"Marking",id:"marking",level:3},{value:"Questions &amp; Clarifications",id:"questions--clarifications",level:3}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assignment-2"},"Assignment 2"),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"You will have received your instructions by email. If you have not done so, contact your professor immediately."),(0,i.kt)("h3",{id:"due-date"},"Due Date"),(0,i.kt)("p",null,"This assignment is due by midnight on April 12th."),(0,i.kt)("h3",{id:"submission"},"Submission"),(0,i.kt)("p",null,"Run ",(0,i.kt)("a",{parentName:"p",href:"https://ict.senecacollege.ca/~peter.callaghan/ops245/labs/checka2.bash"},"this script")," on your c7host machine. It will generate output for you to upload to blackboard. Make sure you also upload your script."),(0,i.kt)("h3",{id:"marking"},"Marking"),(0,i.kt)("p",null,"Shortly before the due date, a rubric will be posted here. The assignment is worth 15% of your final mark."),(0,i.kt)("h3",{id:"questions--clarifications"},"Questions & Clarifications"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You must install the system-storage-manager package on your assignment VM."),(0,i.kt)("li",{parentName:"ol"},"The root user on your c7host must also be able to ssh to your assignment VM."),(0,i.kt)("li",{parentName:"ol"},"Seneca's email server might add extra text to any ip addresses in your instructions. It starts with ",(0,i.kt)("a",{parentName:"li",href:"https://protect-us.mimecast.com/"},"https://protect-us.mimecast.com/"),", then a string of random characters, then /domain=. Ignore that, and only use the ip addresses."),(0,i.kt)("li",{parentName:"ol"},"Your c7host must be able to ssh to your assignment machine."),(0,i.kt)("li",{parentName:"ol"},"If your assignment VM does not have the interface name given in the assignment instructions, use the interface you have."),(0,i.kt)("li",{parentName:"ol"},"Your iptables rules must persist past the machine rebooting."),(0,i.kt)("li",{parentName:"ol"},"Hint: The vgextend command can only add physical volumes to a pre-existing volume group. You need a different command to create a new volume group.")))}m.isMDXComponent=!0}}]);