"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[92589],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?i.createElement(g,o(o({ref:t},l),{},{components:n})):i.createElement(g,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8044:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var i=n(1629),r=n(17322),a=(n(3289),n(75631)),o=["components"],c={id:"create-cms-navigation-item-input",title:"CreateCmsNavigationItemInput"},u=void 0,p={unversionedId:"graphql/inputs/create-cms-navigation-item-input",id:"graphql/inputs/create-cms-navigation-item-input",isDocsHomePage:!1,title:"CreateCmsNavigationItemInput",description:"Autogenerated input type of CreateCmsNavigationItem",source:"@site/docs/graphql/inputs/create-cms-navigation-item-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-cms-navigation-item-input",permalink:"/docs/graphql/inputs/create-cms-navigation-item-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-cms-navigation-item-input.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-navigation-item-input",title:"CreateCmsNavigationItemInput"},sidebar:"sidebar",previous:{title:"CreateCmsLayoutInput",permalink:"/docs/graphql/inputs/create-cms-layout-input"},next:{title:"CreateCmsPartialInput",permalink:"/docs/graphql/inputs/create-cms-partial-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>cms_navigation_item</code> (CmsNavigationItemInput!)",id:"cms_navigation_item-cmsnavigationiteminput",children:[],level:4}],level:3}],m={toc:l};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateCmsNavigationItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateCmsNavigationItemInput {\n  clientMutationId: String\n  cms_navigation_item: CmsNavigationItemInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"cms_navigation_item-cmsnavigationiteminput"},(0,a.kt)("inlineCode",{parentName:"h4"},"cms_navigation_item")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-navigation-item-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsNavigationItemInput!")),")"))}s.isMDXComponent=!0}}]);