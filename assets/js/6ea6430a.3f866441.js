"use strict";(self.webpackChunkbeast=self.webpackChunkbeast||[]).push([[33],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8500:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1,slug:"/",title:"Introduction",docId:"introduction"},u="***Beast*** - The Build System",c={unversionedId:"mainDocs/introduction",id:"mainDocs/introduction",title:"Introduction",description:"--\x3e",source:"@site/docs/mainDocs/introduction.md",sourceDirName:"mainDocs",slug:"/",permalink:"/Beast-docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Introduction",docId:"introduction"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/Beast-docs/mainDocs/installation"}},l={},p=[],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"beast---the-build-system"},(0,o.kt)("strong",{parentName:"h1"},(0,o.kt)("em",{parentName:"strong"},"Beast"))," - The Build System"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"intro-logo",src:r(8304).Z,width:"2150",height:"2624"})),(0,o.kt)("p",null,"Beast is a build system designed for the purpose of power,\nspeed and productivity. This build system tries to combine ease\nof use with high efficiency. It is very easy to use syntactically,\nand also provides great build times!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/GauravDawra/Beast/actions?query=workflow%3AMacOS"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/GauravDawra/Beast/actions/workflows/mac_build.yml/badge.svg",alt:"MacOS"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GauravDawra/Beast/actions?query=workflow%3AUbuntu"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/GauravDawra/Beast/actions/workflows/ubuntu_build.yml/badge.svg",alt:"Ubuntu"}))),(0,o.kt)("p",null,"Beast builds projects based on the information provided in a ",(0,o.kt)("em",{parentName:"p"},"beast build file"),". In this build file, the user defines what all items need to be built (",(0,o.kt)("em",{parentName:"p"},"targets"),"), how they should be built (",(0,o.kt)("em",{parentName:"p"},"build rules"),"), and what all targets need to be ready to build a particular target (",(0,o.kt)("em",{parentName:"p"},"dependencies"),"). In this way, Beast works on a comprehensive and easy to use target-dependency model. For more information about the particular aspects of a build file, see ",(0,o.kt)("a",{parentName:"p",href:"/Beast-docs/mainDocs/writingABeastFile"},(0,o.kt)("strong",{parentName:"a"},"Writing a Beast File")),"."),(0,o.kt)("p",null,"Not only does Beast provide you with an easy to understand structure for all your build needs, it comes with a super-easy and intuitive syntax. This causes Beast to be a tool suitable for both highly experienced programmers and beginners."),(0,o.kt)("p",null,"In addition, Beast has a highly optimized build procedure which works well for multiple threads too. Understanding the build procedure can further help you write optimized beast build files. See ",(0,o.kt)("a",{parentName:"p",href:"/Beast-docs/mainDocs/buildProcedure"},(0,o.kt)("strong",{parentName:"a"},"Build procedure")),"."))}m.isMDXComponent=!0},8304:function(e,t,r){t.Z=r.p+"assets/images/favicon-b95071e18f0a75a1e330d333c2dd22d2.png"}}]);