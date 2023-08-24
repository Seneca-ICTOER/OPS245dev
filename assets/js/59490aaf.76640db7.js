"use strict";(self.webpackChunkOPS245=self.webpackChunkOPS245||[]).push([[396],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const i={id:"bash-shell-reference-guide",title:"Bash Shell Reference Guide",sidebar_position:4,description:"TBD"},l="Bash Shell Reference Guide",o={unversionedId:"C-ExtraResources/bash-shell-reference-guide",id:"C-ExtraResources/bash-shell-reference-guide",title:"Bash Shell Reference Guide",description:"TBD",source:"@site/docs/C-ExtraResources/bash-shell-reference-guide.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/bash-shell-reference-guide",permalink:"/OPS245dev/C-ExtraResources/bash-shell-reference-guide",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS245dev/tree/main/docs/C-ExtraResources/bash-shell-reference-guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"bash-shell-reference-guide",title:"Bash Shell Reference Guide",sidebar_position:4,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Bash Shell Tips",permalink:"/OPS245dev/C-ExtraResources/bash-shell-tips"},next:{title:"Python Scripting Tips",permalink:"/OPS245dev/C-ExtraResources/python-scripting-tips"}},s={},u=[{value:"Variables",id:"variables",level:2},{value:"Environment",id:"environment",level:3},{value:"User-defined",id:"user-defined",level:3},{value:"Command Substitution",id:"command-substitution",level:2},{value:"if / elif / else statements",id:"if--elif--else-statements",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bash-shell-reference-guide"},"Bash Shell Reference Guide"),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"environment"},"Environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'System-wide or "global" variable'),(0,a.kt)("li",{parentName:"ul"},"Usually appear in UPPERCASE letters"),(0,a.kt)("li",{parentName:"ul"},"Can view with command: ",(0,a.kt)("inlineCode",{parentName:"li"},"set | more")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$")," in front to expand variable to value"),(0,a.kt)("li",{parentName:"ul"},"Examples: ",(0,a.kt)("strong",{parentName:"li"},"USER"),", ",(0,a.kt)("strong",{parentName:"li"},"PATH"),", ",(0,a.kt)("strong",{parentName:"li"},"HOME"),", ",(0,a.kt)("strong",{parentName:"li"},"SHELL"))),(0,a.kt)("h3",{id:"user-defined"},"User-defined"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Variable created by user (command line, scripting)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Examples:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'myVar="my value"; readonly myVar; export myVar')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'read -p "enter value: " myVar'))))),(0,a.kt)("h2",{id:"command-substitution"},"Command Substitution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Useful method to expand output from a command to be used as an argument for another command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Examples:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file $(ls)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set $(ls);echo $#;echo $*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'echo "hostname: $(hostname)"'))))),(0,a.kt)("h2",{id:"if--elif--else-statements"},"if / elif / else statements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a command runs (even pipeline command like to grep to match) will be true (0); otherwise, false (non-zero), thus can use with logic statements."),(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if echo $myVar | grep "match"\nthen\necho "Match"\nfi\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"test")," command is used to test conditions. Square brackets ",(0,a.kt)("strong",{parentName:"li"},"["," ","]")," is short-cut for test command (args contained inside with spaces). The ",(0,a.kt)("strong",{parentName:"li"},"exit")," command can be used to terminate the shell script with a false value."),(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if [ $USER = "root" ]\nthen\n echo "You must be root"\n exit1\nfi\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For numberic comparison, use the ",(0,a.kt)("strong",{parentName:"li"},"test options"),": ",(0,a.kt)("strong",{parentName:"li"},"-gt,-ge, -lt, -le, -eq, -ne")),(0,a.kt)("li",{parentName:"ul"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if [ $grade -gt 79 ]\nthen\n echo "You get Good Mark"\nelif [ $grade -gt 49 ]\nthen\n echo "You pass"\nelse\n echo "You fail"\nfi\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For testing for file information, you can use ",(0,a.kt)("strong",{parentName:"li"},"-d")," to test if directory pathname exists, and ",(0,a.kt)("strong",{parentName:"li"},"-f")," if the file pathname exists. You can use ",(0,a.kt)("strong",{parentName:"li"},"!")," for negation."),(0,a.kt)("li",{parentName:"ul"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if [ -d directory-pathname ]\nthen\necho "directory exists"\nfi\n\nif [ ! - f file-pathname ]\nthen\necho "File does not exist"\nfi\n')))}p.isMDXComponent=!0}}]);