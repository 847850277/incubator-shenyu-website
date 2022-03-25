"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8024],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82193:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Mqtt Plugin",keywords:["Mqtt"],description:"Mqtt access shenyu gateway"},u=void 0,p={unversionedId:"plugin-center/proxy/mqtt-plugin",id:"version-2.4.2/plugin-center/proxy/mqtt-plugin",isDocsHomePage:!1,title:"Mqtt Plugin",description:"Mqtt access shenyu gateway",source:"@site/versioned_docs/version-2.4.2/plugin-center/proxy/mqtt-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/mqtt-plugin",permalink:"/zh/docs/plugin-center/proxy/mqtt-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/proxy/mqtt-plugin.md",version:"2.4.2",frontMatter:{title:"Mqtt Plugin",keywords:["Mqtt"],description:"Mqtt access shenyu gateway"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"WebSocket\u4ee3\u7406",permalink:"/zh/docs/plugin-center/proxy/websocket-plugin"},next:{title:"Hystrix\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/fault-tolerance/hystrix-plugin"}},c=[{value:"Description",id:"description",children:[]},{value:"Introducing Plugin Support of Mqtt Gateway",id:"introducing-plugin-support-of-mqtt-gateway",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Notice",id:"notice",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After the plugin is used, it will give the ability of mqtt.")),(0,o.kt)("h2",{id:"introducing-plugin-support-of-mqtt-gateway"},"Introducing Plugin Support of Mqtt Gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introducing those dependencies in the pom.xml file of the gateway.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu mqtt plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-mqtt</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"port: MQTT BS port designation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"bossGroupThreadCount: default 1.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"maxPayloadSize: Maximum packet size.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"workerGroupThreadCount: default 12.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"username: default shenyu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"password: default shenyu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"isEncryptPassword: The default is false , whether to encrypt the password.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"encryptMode: encryption mode, currently only MD5 is implemented, the encryption mode can be customized, ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.protocol.mqtt.utils.EncryptUtil")," view the implementation of this encryption class.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"leakDetectorLevel: default DISABLED, resource target detection or detection level."))),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mqtt does not have selector and ruler configurations.")))}d.isMDXComponent=!0}}]);