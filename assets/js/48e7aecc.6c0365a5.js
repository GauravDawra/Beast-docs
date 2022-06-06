"use strict";(self.webpackChunkbeast=self.webpackChunkbeast||[]).push([[863],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5792:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Installation",p={unversionedId:"mainDocs/installation",id:"mainDocs/installation",title:"Installation",description:"Installing Beast is super-easy. You can either download your system binaries directly or you can compile it from source yourself.",source:"@site/docs/mainDocs/installation.md",sourceDirName:"mainDocs",slug:"/mainDocs/installation",permalink:"/Beast-docs/mainDocs/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Beast-docs/"},next:{title:"Writing a Beast file",permalink:"/Beast-docs/mainDocs/writingABeastFile"}},c={},m=[{value:"Pre-compiled binaries",id:"pre-compiled-binaries",level:2},{value:"Compiling from source",id:"compiling-from-source",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Installing Beast is super-easy. You can either download your ",(0,o.kt)("em",{parentName:"p"},"system binaries")," directly or you can compile it from source yourself. "),(0,o.kt)("h2",{id:"pre-compiled-binaries"},"Pre-compiled binaries"),(0,o.kt)("p",null,"You can directly download your system specific binaries from the release section on github."),(0,o.kt)("p",null,"Once you have downloaded the binaries, make sure that the location of this executable is present in the ",(0,o.kt)("em",{parentName:"p"},"PATH")," environment variable. ",(0,o.kt)("em",{parentName:"p"},"/usr/local/bin")," is the preferred position to place the ",(0,o.kt)("em",{parentName:"p"},"beast")," executable."),(0,o.kt)("h2",{id:"compiling-from-source"},"Compiling from source"),(0,o.kt)("p",null,"For compiling the souce, you would require:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"make"),(0,o.kt)("li",{parentName:"ul"},"GNU G++ (>= 10.0) or Clang"),(0,o.kt)("li",{parentName:"ul"},"flex"),(0,o.kt)("li",{parentName:"ul"},"bison")),(0,o.kt)("p",null,"Note: flex and bison are required only if the ",(0,o.kt)("em",{parentName:"p"},"parser.cpp/hpp")," and ",(0,o.kt)("em",{parentName:"p"},"scanner.cpp/h")," files are not present in your source code or is outdated."),(0,o.kt)("p",null,"Follow these steps to compile:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the github Beast repository with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/GauravDawra/Beast Beast --recursive\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"submodule dependencies")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you use the ",(0,o.kt)("em",{parentName:"p"},"--recursive")," flag since the code has some submodule dependencies")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move into the ",(0,o.kt)("em",{parentName:"p"},"Beast")," directory using "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd Beast\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now we will compile the source code using ",(0,o.kt)("em",{parentName:"p"},"make"),". If your ",(0,o.kt)("em",{parentName:"p"},"g++")," points to one of the suitable compilers listed above the simply run "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"make MODE=RELEASE \n")),(0,o.kt)("p",{parentName:"li"},"Otherwise, you should point ",(0,o.kt)("em",{parentName:"p"},"CXX")," environment variable to a suitable compiler and then run the above command. Your command will then look like: ",(0,o.kt)("inlineCode",{parentName:"p"},"CXX=<path_to_compiler> make MODE=RELEASE"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An executable named ",(0,o.kt)("em",{parentName:"p"},"beast")," should then appear in rhe main working directory if the compilation was successful. To add it to the $PATH at ",(0,o.kt)("em",{parentName:"p"},"/usr/local/bin"),", run "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"make install\n")),(0,o.kt)("p",{parentName:"li"},"This is a root action so you will have to enter your password for this step. If you don't want to install this to your /usr/local/bin, you can directly use the ",(0,o.kt)("em",{parentName:"p"},"beast")," binary."))))}d.isMDXComponent=!0}}]);