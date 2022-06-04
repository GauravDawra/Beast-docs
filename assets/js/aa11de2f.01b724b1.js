"use strict";(self.webpackChunkbeast=self.webpackChunkbeast||[]).push([[685],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6391:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={title:"Writing a Beast file",sidebar_position:3},s="Writing a Beast file",d={unversionedId:"mainDocs/writingABeastFile",id:"mainDocs/writingABeastFile",title:"Writing a Beast file",description:"Beast has been made keeping easiness of usage in mind. Writing a beast build file is very easy. The name of a Beast build file is beast.build.",source:"@site/docs/mainDocs/writingABeastFile.md",sourceDirName:"mainDocs",slug:"/mainDocs/writingABeastFile",permalink:"/mainDocs/writingABeastFile",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Writing a Beast file",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/mainDocs/installation"},next:{title:"CLI options",permalink:"/mainDocs/CLIoptions"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Defining build rules for targets",id:"defining-build-rules-for-targets",level:2},{value:"Build commands",id:"build-commands",level:2},{value:"Variables",id:"variables",level:2},{value:"Comments",id:"comments",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-a-beast-file"},"Writing a Beast file"),(0,r.kt)("p",null,"Beast has been made keeping easiness of usage in mind. Writing a beast build file is very easy. The name of a Beast build file is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"beast.build")),".\nThis article walks you through a basic way to write a build file. So let's get started!!!"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Beast builds the targets that you specify in your build file based on the dependencies you specify among various targets. Simply put, it develops internal dependency relationships between various tasks that you need to complete (in this case, tasks means building a target)."),(0,r.kt)("p",null,"These dependencies are specified in the ",(0,r.kt)("em",{parentName:"p"},"beast.build")," file. As we will see, we do this while specifying ",(0,r.kt)("em",{parentName:"p"},"build rules")," for various targets. We can also define several ",(0,r.kt)("em",{parentName:"p"},"variables")," in our beast file that can be changed locally withing several rules. One thing to note here is that beast runs all the commands given to build a specific target on the shell. So proper syntax for the commands in particular should be followed."),(0,r.kt)("h2",{id:"defining-build-rules-for-targets"},"Defining build rules for targets"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"build rule")," for a target is what defines how the particular target will be built, what commands will be carried out while building this target, in what order will they be executed and what other targets should be built (or should be present before building this target)."),(0,r.kt)("p",null,"Let us take a look at an example for a build target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'build A : A.cpp B.o\n    ! g++ A.cpp B.o -o A\n    ! echo "A has been built!!!"\n')),(0,r.kt)("p",null,"There are a number of things to observe in the example. First of all, note the ",(0,r.kt)("em",{parentName:"p"},"build")," keyword. The ",(0,r.kt)("strong",{parentName:"p"},"build")," keyword specifies that we are about to define a build rule for the target that follows. In this case, the name of the target is ",(0,r.kt)("em",{parentName:"p"},"A"),"."),(0,r.kt)("p",null,"Next, note that some file names (target names) follow after a colon (:), ",(0,r.kt)("em",{parentName:"p"},"A.cpp")," and ",(0,r.kt)("em",{parentName:"p"},"B.o"),". These are the dependencies on which the target ",(0,r.kt)("em",{parentName:"p"},"A")," depends. This means, that it is necessary for these dependencies to either exist or to be built before ",(0,r.kt)("em",{parentName:"p"},"A")," can be built. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Build optimization")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Beast only builds a target if any of its dependencies has been updated after the modification of the target, to optimize the build procedure."))),(0,r.kt)("p",null,"Everything inside the build rule should be indented, as you can see above. "),(0,r.kt)("h2",{id:"build-commands"},"Build commands"),(0,r.kt)("p",null,"To specify a build command (which is a shell command), we have to add an exclamantion mark (!) in the beginning of the line as shown above. These can only be defined inside a build rule. "),(0,r.kt)("p",null,"Everything that follows this exclamation mark is considered as a shell command to be executed while building the target. If multiple shell commands are specified in a build rule (like in the example), they will be executed in the order they appear."),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"We can define variables in our beast file. This can be done either in the global scope so that the variables are visible to all the rules or locally inside the build rules. Each variable can either be an ",(0,r.kt)("em",{parentName:"p"},"integer")," or a ",(0,r.kt)("em",{parentName:"p"},"string"),". Variables can be defined like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'a = "hello"\nb = 50\nc = b + 20\n')),(0,r.kt)("p",null,"In the above example, 3 variables are defined. ",(0,r.kt)("em",{parentName:"p"},"a"),' is a string "hello", ',(0,r.kt)("em",{parentName:"p"},"b")," is an integer 50, and ",(0,r.kt)("em",{parentName:"p"},"c")," takes the variable ",(0,r.kt)("em",{parentName:"p"},"b")," and adds 20 to it which makes it an 70."),(0,r.kt)("p",null,"If these lines are present outside of any build rule, in the main global scope, they will be available for use inside any build rule. Similarly, we can also define variables inside a build rule. We just have to indent these variable declarations."),(0,r.kt)("p",null,"Note that only the final value of a variable is visible to everyone. The same goes for inside the build rule. If the value of one of the variables is modified after it's first declaration, only the final modified value is used for all purposes."),(0,r.kt)("p",null,"Now, since we have declared variables, we also need to be able to access them inside build commands. This can be done using the prefix ",(0,r.kt)("em",{parentName:"p"},"$")," (dollar) operator. To access variable ",(0,r.kt)("em",{parentName:"p"},"var")," we use ",(0,r.kt)("em",{parentName:"p"},"$(var)"),". Single letter variables can be accessed without the round brackets (). used An example of variable usage inside a build rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'build A : B\n    var = "hello"\n    a = 5\n    ! echo $(var)\n    ! echo $a\n')),(0,r.kt)("p",null,"Since we might need to use the actual ",(0,r.kt)("em",{parentName:"p"},"$")," character, the ",(0,r.kt)("em",{parentName:"p"},"$")," letter can be used inside the command by escaping it with another ",(0,r.kt)("em",{parentName:"p"},"$")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build A : B\n    ! echo $$var\n")),(0,r.kt)("p",null,"This command will be resolve to ",(0,r.kt)("em",{parentName:"p"},"echo $var")," when being executed."),(0,r.kt)("p",null,"When we try to access the value of a variable that has not be declared, Beast will not replace it with anything. So if ",(0,r.kt)("em",{parentName:"p"},"var")," is not declared in any scope (global or build rule scope), then a ",(0,r.kt)("em",{parentName:"p"},"$(var)")," inside a build command will remain as ",(0,r.kt)("em",{parentName:"p"},"$(var)"),"."),(0,r.kt)("h2",{id:"comments"},"Comments"),(0,r.kt)("p",null,"Comments are statements that will not be read or processed by Beast. As in any programming language, comments can help define purpose of various statements in your code/file."),(0,r.kt)("p",null,"Beast supports single line comments. All comments are preceded by '","#","' (a hash symbol), which denotes that everything following it will be a comment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'a = "hi there" # variable \'a\'\n\n# build rule for A\nbuild A : B\n    ! echo "Building A!!!"\n')),(0,r.kt)("p",null,"The above example has two comments, ",(0,r.kt)("em",{parentName:"p"},"\"variable 'a'\"")," and ",(0,r.kt)("em",{parentName:"p"},'"build rule for A"'),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Depdency definition and comments")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You cannot use comments while defining dependencies for a build rule. For example, you cannot use ",(0,r.kt)("inlineCode",{parentName:"p"},"build A : #B"),". in this case, ",(0,r.kt)("em",{parentName:"p"},"#B")," will be taken as the name of a dependency for target A and will not be considered as a comment."))))}m.isMDXComponent=!0}}]);