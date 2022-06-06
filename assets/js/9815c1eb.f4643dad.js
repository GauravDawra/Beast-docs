"use strict";(self.webpackChunkbeast=self.webpackChunkbeast||[]).push([[649],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Testing beast",docId:"test-beast",sidebar_position:2},l=void 0,p={unversionedId:"quickStart/test-beast",id:"quickStart/test-beast",title:"Testing beast",description:"Once you have installed Beast on your system (see Installation), you are now ready to get started with Beast.",source:"@site/docs/quickStart/test-beast.md",sourceDirName:"quickStart",slug:"/quickStart/test-beast",permalink:"/Beast-docs/quickStart/test-beast",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Testing beast",docId:"test-beast",sidebar_position:2},sidebar:"quickstart",previous:{title:"Overview",permalink:"/Beast-docs/quickstart"},next:{title:"Beast quickstart",permalink:"/Beast-docs/quickStart/beast-quickstart"}},u={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you have installed ",(0,i.kt)("em",{parentName:"p"},"Beast")," on your system (see ",(0,i.kt)("a",{parentName:"p",href:"/Beast-docs/mainDocs/installation"},"Installation"),"), you are now ready to get started with Beast."),(0,i.kt)("p",null,"This tutorial will give you a basic overview of how to start using beast with the help of a basic beast build file. So let's get cracking:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow the steps provided in ",(0,i.kt)("a",{parentName:"p",href:"/Beast-docs/mainDocs/installation"},"Installation")," to install ",(0,i.kt)("em",{parentName:"p"},"Beast")," on your system. Once ready, run ",(0,i.kt)("inlineCode",{parentName:"p"},"beast -h")," to see the help section for using ",(0,i.kt)("inlineCode",{parentName:"p"},"beast")," CLI. If no errors occurred, you are ready to use ",(0,i.kt)("em",{parentName:"p"},"beast"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an empty folder named ",(0,i.kt)("em",{parentName:"p"},"beast-test")," using the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir beast-test")," and navigate to this directory using the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd beast-test"),"."),(0,i.kt)("p",{parentName:"li"},"We will run our test in this directory")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an empty file named ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"beast.build")),". This will be our ",(0,i.kt)("em",{parentName:"p"},"beast build file"),". Here we will define how we want to build our project. For now, populate the beast build file like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'build B : A\n    ! echo "Building B after A!!!"\nbuild A :\n    ! echo "Building A!!!"\nbuild C : A\n    ! echo "Building C after A!!!"\n')),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"use tabs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remember to use tabs inside the build rules when giving commands, and not just spaces. Copying and pasting build file content from above might convert tabs to spaces. Make sure to replace those spaces with a tab indent.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now run ",(0,i.kt)("inlineCode",{parentName:"p"},"beast")," command. This will execute the commands you provided in the above file in a suitable order. The output would be something like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"beast: Building rule A\nBuilding A!!!\nbeast: Building rule B\nBuilding B after A!!!\nbeast: Building rule C\nBuilding C after A!!!\n")))),(0,i.kt)("p",null,"You defined 3 targets above, ",(0,i.kt)("em",{parentName:"p"},"A"),", ",(0,i.kt)("em",{parentName:"p"},"B")," and ",(0,i.kt)("em",{parentName:"p"},"C"),". All of them have been built. You are ready to get started!!!"))}m.isMDXComponent=!0}}]);