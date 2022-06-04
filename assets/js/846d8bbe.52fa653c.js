"use strict";(self.webpackChunkbeast=self.webpackChunkbeast||[]).push([[530],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6237:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Beast quickstart",docId:"beast-quickstart",sidebar_position:3},s=void 0,u={unversionedId:"quickStart/beast-quickstart",id:"quickStart/beast-quickstart",title:"Beast quickstart",description:"We will build this sample project with the help of Beast. A Beast build file has already been provided with this repository.",source:"@site/docs/quickStart/beast-quickstart.md",sourceDirName:"quickStart",slug:"/quickStart/beast-quickstart",permalink:"/quickStart/beast-quickstart",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Beast quickstart",docId:"beast-quickstart",sidebar_position:3},sidebar:"quickstart",previous:{title:"Testing beast",permalink:"/quickStart/test-beast"}},p={},c=[{value:"Step 1: Clone the repository",id:"step-1-clone-the-repository",level:2},{value:"Step 2: Open the folder",id:"step-2-open-the-folder",level:2},{value:"Step 3: Building via <em>Beast</em>",id:"step-3-building-via-beast",level:2},{value:"Step 4: Running the executable",id:"step-4-running-the-executable",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will build this sample project with the help of Beast. A Beast build file has already been provided with this repository.\nMake sure that Beast has already been installed before moving forward. See ",(0,i.kt)("a",{parentName:"p",href:"/mainDocs/installation"},"Installation"),"."),(0,i.kt)("p",null,"Follow these steps to build the repository:"),(0,i.kt)("h2",{id:"step-1-clone-the-repository"},"Step 1: Clone the repository"),(0,i.kt)("p",null,"First we will clone this repository locally to test out Beast. To do this, open a terminal and type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/GauravDawra/Beast-quickstart.git beast-quickstart\n")),(0,i.kt)("p",null,"This will clone the repository in a ",(0,i.kt)("em",{parentName:"p"},"beast-quickstart")," folder."),(0,i.kt)("h2",{id:"step-2-open-the-folder"},"Step 2: Open the folder"),(0,i.kt)("p",null,"Next, navigate to the cloned repository by typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd beast-quickstart\n")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("em",{parentName:"p"},"beast.build")," file to check out it's contents. For the purpose of this tutorial, it is not important to understand what this beast file does. You can check out the ",(0,i.kt)("em",{parentName:"p"},"Writing a Beast file")," page in the documentation."),(0,i.kt)("p",null,"Broadly speaking, this build file defines 2 targets: ",(0,i.kt)("em",{parentName:"p"},"main"),": our final executable, and ",(0,i.kt)("em",{parentName:"p"},"util.o"),": an object file for utility functions. The executable is dependent on the object file."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"use tabs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remember to use tabs inside the build rules when giving commands, and not just spaces. If the shell commands inside the build rules, commands followed '!' (exclamation mark), are indented using spaces instead of a tab, make sure to convert these spaces into a single tab indent."))),(0,i.kt)("h2",{id:"step-3-building-via-beast"},"Step 3: Building via ",(0,i.kt)("em",{parentName:"h2"},"Beast")),(0,i.kt)("p",null,"Now that we have setup everything, we are ready to build our project. To start the build, simply run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"beast\n")),(0,i.kt)("p",null,"This will start your build process and will also tell you which target is being currently built. Once the build is complete, you will see two new files in ",(0,i.kt)("em",{parentName:"p"},"beast-quickstart")," (current) folder, ",(0,i.kt)("em",{parentName:"p"},"main")," and ",(0,i.kt)("em",{parentName:"p"},"util.o"),"."),(0,i.kt)("h2",{id:"step-4-running-the-executable"},"Step 4: Running the executable"),(0,i.kt)("p",null,"To run the newly created executable, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./main\n")),(0,i.kt)("p",null,"Great!!! You have completed the quickstart tutorial for Beast. Move on the documentation for learning more about Beast files and Beast to start creating your own projects!!"))}m.isMDXComponent=!0}}]);