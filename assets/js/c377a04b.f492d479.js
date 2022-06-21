"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[971],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,s(s({ref:e},u),{},{components:n})):r.createElement(d,s({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:1,slug:"/"},l="Welcome",p={unversionedId:"index",id:"index",title:"Welcome",description:"nestjs-i18n - made easy",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/quick-start"}},u={},c=[{value:"Features",id:"features",level:2},{value:"Getting started",id:"getting-started",level:2}],m={toc:c};function g(t){var e=t.components,n=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome"},"Welcome"),(0,i.kt)("head",null,(0,i.kt)("title",null,"nestjs-i18n - made easy")),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{href:"#"},(0,i.kt)("img",{src:"https://nestjs-i18n.com/img/logo.svg",width:"600",alt:"nestjs-i18n Logo"}))),(0,i.kt)("p",{align:"center"},"The i18n library for ",(0,i.kt)("a",{href:"https://nestjs.com",target:"_blank"},"nestjs"),". It makes working with languages in your nestjs project easy. Everything is made to be highly configurable. You can write and plug-in your own language resolvers or loaders.",(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/nestjs-i18n",target:"_blank"},(0,i.kt)("img",{alt:"npm version",src:"https://img.shields.io/npm/v/nestjs-i18n"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/nestjs-i18n",target:"_blank"},(0,i.kt)("img",{alt:"NPM",src:"https://img.shields.io/npm/l/nestjs-i18n"})),(0,i.kt)("a",{href:"https://github.com/toonvanstrijp/nestjs-i18n/actions/workflows/test.yaml",target:"_blank"},(0,i.kt)("img",{src:"https://github.com/toonvanstrijp/nestjs-i18n/actions/workflows/test.yaml/badge.svg?branch=main"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/nestjs-i18n",target:"_blank"},(0,i.kt)("img",{alt:"npm downloads",src:"https://img.shields.io/npm/dm/nestjs-i18n"})),(0,i.kt)("a",{href:"https://coveralls.io/github/toonvanstrijp/nestjs-i18n?branch=main",target:"_blank"},(0,i.kt)("img",{alt:"coverage",src:"https://coveralls.io/repos/github/toonvanstrijp/nestjs-i18n/badge.svg?branch=main"})))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nestjs-i18n")," comes with a bunch of tools to help add multiple language support to your project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Variable formatting")," (",(0,i.kt)("a",{parentName:"li",href:"/guides/formatting"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nested")," translations (",(0,i.kt)("a",{parentName:"li",href:"/guides/nested"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fallback")," languages (",(0,i.kt)("a",{parentName:"li",href:"/guides/fallback-languages"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Live")," reloading \ud83c\udf89"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Plurals")," support (",(0,i.kt)("a",{parentName:"li",href:"/guides/plurals"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GraphQL")," support (",(0,i.kt)("a",{parentName:"li",href:"/guides/graphql"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gRPC")," support (",(0,i.kt)("a",{parentName:"li",href:"/guides/grpc"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DTO")," validation (",(0,i.kt)("a",{parentName:"li",href:"/guides/dto-validation"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},"View engine support (",(0,i.kt)("a",{parentName:"li",href:"guides/view_engines/handlebars"},(0,i.kt)("strong",{parentName:"a"},"hbs"))," or ",(0,i.kt)("a",{parentName:"li",href:"guides/view_engines/pug"},(0,i.kt)("strong",{parentName:"a"},"pug"))," or ",(0,i.kt)("a",{parentName:"li",href:"guides/view_engines/ejs"},(0,i.kt)("strong",{parentName:"a"},"ejs")),")"),(0,i.kt)("li",{parentName:"ul"},"Custom resolvers"),(0,i.kt)("li",{parentName:"ul"},"Custom loaders"),(0,i.kt)("li",{parentName:"ul"},"Custom formatters")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"To get started follow the ",(0,i.kt)("a",{parentName:"p",href:"/quick-start"},"quickstart"),". "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Missing something? Feel free to create a pull request or issue on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/toonvanstrijp/nestjs-i18n"},"github"),"."))))}g.isMDXComponent=!0}}]);