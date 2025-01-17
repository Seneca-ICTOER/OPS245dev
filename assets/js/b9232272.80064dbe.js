"use strict";(self.webpackChunkOPS245=self.webpackChunkOPS245||[]).push([[620],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8057:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const l={id:"assignment1",title:"Assignment 1",sidebar_position:1,description:"TBD"},i="Assignment 1",o={unversionedId:"B-Assignments/assignment1",id:"B-Assignments/assignment1",title:"Assignment 1",description:"TBD",source:"@site/docs/B-Assignments/assignment1.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment1",permalink:"/OPS245/B-Assignments/assignment1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS245/tree/main/docs/B-Assignments/assignment1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"assignment1",title:"Assignment 1",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Lab 1 - VMware Version (old)",permalink:"/OPS245/A-Labs/lab1-vmware"},next:{title:"Assignment 2",permalink:"/OPS245/B-Assignments/assignment2"}},s={},u=[{value:"Create a new virtual machine",id:"create-a-new-virtual-machine",level:2},{value:"Package Management",id:"package-management",level:2},{value:"Alternate Software Installation",id:"alternate-software-installation",level:2},{value:"Install a Second Linux Distribution as a Virtual Machine",id:"install-a-second-linux-distribution-as-a-virtual-machine",level:2},{value:"Submission",id:"submission",level:2},{value:"Rubric",id:"rubric",level:2}],m={toc:u};function p(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment-1"},"Assignment 1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"caution",src:n(9399).Z,width:"64",height:"64"})),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Do NOT start working on this assignment unless specifically told to do so by your Professor!!"))),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"This assignment is currently out of date"),(0,r.kt)("li",{parentName:"ul"},"Your Professor may choose to use a different assignment"))),(0,r.kt)("p",null,"The purpose of OPS245 assignments is to showcase your abilities in the course thus far, and conduct a bit of independent research. Some of what you'll be asked to complete will be familiar to you, while other parts will require you to think a bit and do some light Googling. It's expected you won't have all the answers right away, but you can find them. ",(0,r.kt)("strong",{parentName:"p"},"As a result, unlike labs, your professor cannot provide any help or troubleshooting for your assignment.")),(0,r.kt)("p",null,"This assignment will be completed inside your local c7host virtual machine using additional KVM/QEMU nested VMs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight"),": 15% of your overall grade"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due Date"),": Refer to your section's Blackboard announcements."),(0,r.kt)("h2",{id:"create-a-new-virtual-machine"},"Create a new virtual machine"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install a new CentOS Minimal VM. (Do ",(0,r.kt)("strong",{parentName:"li"},"not")," install the GUI version.)"),(0,r.kt)("li",{parentName:"ol"},"The virtual machine name and the internal hostname for the machine must be your Seneca username. (Example: cjohnson30)"),(0,r.kt)("li",{parentName:"ol"},"The regular user created during installation must also be your Seneca username."),(0,r.kt)("li",{parentName:"ol"},"Ensure LVM is used in your installation partitioning.")),(0,r.kt)("p",null,"The rest of this assignment should be done after the installation is completed successfully."),(0,r.kt)("h2",{id:"package-management"},"Package Management"),(0,r.kt)("p",null,"Research the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yum")," commands to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify the integrity of a package using ",(0,r.kt)("inlineCode",{parentName:"li"},"rpm")," to see if any of its files have been altered since installation. (you will be asked to demonstrate this when your assignment is marked, it doesn't matter which package you choose)"),(0,r.kt)("li",{parentName:"ol"},"Demonstrate the install, run, and removal of any rpm package. This means during the demonstration you will show the download, install, and run of any rpm-based package, after doing so show the removal of that package proving that previously installed rpm package is no longer available after removal."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("a",{parentName:"li",href:"https://fedoraproject.org/wiki/EPEL"},"EPEL")," repository to the yum configuration.")),(0,r.kt)("h2",{id:"alternate-software-installation"},"Alternate Software Installation"),(0,r.kt)("p",null,"Review the ",(0,r.kt)("inlineCode",{parentName:"p"},"yum group*")," commands and use them to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find and install the Cinnamon desktop environment. Feel free to use the power of Google."),(0,r.kt)("li",{parentName:"ol"},"Do the rest of the assignment (including the assignment submission) while running Cinnamon. (Hint: Think about default targets.)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OPS245/A-Labs/lab3"},"Lab 3")," contains practice in compiling source code. It is recommended you refer to these procedures for compiling and installing software from source code and use them to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and extract the source code for ISO Master."),(0,r.kt)("li",{parentName:"ol"},"Compile and install it (you will need gtk2-devel installed)."),(0,r.kt)("li",{parentName:"ol"},"Run it and have a look at the ",(0,r.kt)("em",{parentName:"li"},"Help/About")," dialog box. ",(0,r.kt)("strong",{parentName:"li"},"You will have to change the contents of that box"),"."),(0,r.kt)("li",{parentName:"ol"},'Edit the file about.c in the source you use earlier, and change "An application for editing ISO9660 images based on the bkisofs access library and the GTK2 GUI toolkit." to "An application used by YOURNAME for OPS245 Assignment 1".'),(0,r.kt)("li",{parentName:"ol"},"Compile and install the application again, exactly the same way you did the first time. Your change should be simple enough that complicated bugs are unlikely."),(0,r.kt)("li",{parentName:"ol"},"Check that your changes appear in the application.")),(0,r.kt)("h2",{id:"install-a-second-linux-distribution-as-a-virtual-machine"},"Install a Second Linux Distribution as a Virtual Machine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create another virtual machine."),(0,r.kt)("li",{parentName:"ul"},"The virtual machine name and the hostname for the machine must be your learn user ID followed by ",(0,r.kt)("strong",{parentName:"li"},"-mint"),". For example asmith15-mint"),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("strong",{parentName:"li"},"Linux Mint")," as the OS for the new virtual machine (VMWare).")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"Submit screenshots that show you've completed the work."),(0,r.kt)("h2",{id:"rubric"},"Rubric"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task"),(0,r.kt)("th",{parentName:"tr",align:null},"Maximum mark"),(0,r.kt)("th",{parentName:"tr",align:null},"Actual mark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New CentOS VM installed (Seneca username)"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Correct hostname (Seneca username)"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Using LVM (run lsblk to check)"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add, run, and removal of a rpm package"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Adding EPEL to list of available repositories"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPM integrity verification command"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Command to display repository information"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Using Cinnamon"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified ISO Master about dialog box"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Second VM installed and running Linux Mint"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Second VM using proper hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Screenshots clearly show you've completed the work"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Total")),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},9399:function(t,e){e.Z="data:image/png;base64,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"}}]);