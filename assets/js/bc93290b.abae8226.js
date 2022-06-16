"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2549],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,h=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47507:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={sidebar_position:8,title:"Thread Model",keywords:["soul"],description:"thread model"},u=void 0,d={unversionedId:"developer-guide/thread",id:"version-2.3.0(Legacy)/developer-guide/thread",isDocsHomePage:!1,title:"Thread Model",description:"thread model",source:"@site/versioned_docs/version-2.3.0(Legacy)/developer-guide/thread.md",sourceDirName:"developer-guide",slug:"/developer-guide/thread",permalink:"/docs/2.3.0(Legacy)/developer-guide/thread",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0(Legacy)/developer-guide/thread.md",version:"2.3.0(Legacy)",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Thread Model",keywords:["soul"],description:"thread model"},sidebar:"version-2.3.0(Legacy)/tutorialSidebar",previous:{title:"A multilingual HTTP client",permalink:"/docs/2.3.0(Legacy)/developer-guide/developer-soul-client"},next:{title:"Soul Optimize",permalink:"/docs/2.3.0(Legacy)/developer-guide/soul-optimize"}},c=[{value:"Description",id:"description",children:[]},{value:"IO And Work Thread",id:"io-and-work-thread",children:[]},{value:"Business Thread",id:"business-thread",children:[]},{value:"Type Switching",id:"type-switching",children:[]}],s={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This article gives an introduction to thread models in soul and usage in various scenarios.")),(0,o.kt)("h2",{id:"io-and-work-thread"},"IO And Work Thread"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spring-webflux")," is one of dependencies of soul, and it uses Netty thread model in lower layer. ")),(0,o.kt)("h2",{id:"business-thread"},"Business Thread"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use scheduling thread to execute by default."),(0,o.kt)("li",{parentName:"ul"},"A fixed thread pool manages business threads, the number of threads is count in this formula: cpu * 2 + 1.")),(0,o.kt)("h2",{id:"type-switching"},"Type Switching"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reactor.core.scheduler.Schedulers"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Dsoul.scheduler.type=fixed")," is a default config. If set to other value, a flexible thread pool will take place it.",(0,o.kt)("inlineCode",{parentName:"li"},"Schedulers.elastic()"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Dsoul.work.threads = xx")," is for configuring number of threads, the default value calculates in following formula ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu * 2 + 1")," with a minimum of 16 threads.")))}p.isMDXComponent=!0}}]);