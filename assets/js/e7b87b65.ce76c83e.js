"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[19765],{75631:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var i=n(3289);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),s=c(n),d=r,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?i.createElement(g,o(o({ref:e},l),{},{components:n})):i.createElement(g,o({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20715:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var i=n(50753),r=n(61242),a=(n(3289),n(75631)),o=["components"],p={id:"update-cms-navigation-item-input",title:"UpdateCmsNavigationItemInput"},u=void 0,c={unversionedId:"graphql/inputs/update-cms-navigation-item-input",id:"graphql/inputs/update-cms-navigation-item-input",isDocsHomePage:!1,title:"UpdateCmsNavigationItemInput",description:"Autogenerated input type of UpdateCmsNavigationItem",source:"@site/docs/graphql/inputs/update-cms-navigation-item-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-navigation-item-input",permalink:"/docs/graphql/inputs/update-cms-navigation-item-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-navigation-item-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-navigation-item-input",title:"UpdateCmsNavigationItemInput"},sidebar:"sidebar",previous:{title:"UpdateCmsLayoutInput",permalink:"/docs/graphql/inputs/update-cms-layout-input"},next:{title:"UpdateCmsPartialInput",permalink:"/docs/graphql/inputs/update-cms-partial-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>cms_navigation_item</code> (CmsNavigationItemInput)",id:"cms_navigation_item-cmsnavigationiteminput",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4}],level:3}],m={toc:l};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of UpdateCmsNavigationItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCmsNavigationItemInput {\n  clientMutationId: String\n  cms_navigation_item: CmsNavigationItemInput\n  id: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"cms_navigation_item-cmsnavigationiteminput"},(0,a.kt)("inlineCode",{parentName:"h4"},"cms_navigation_item")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-navigation-item-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsNavigationItemInput")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);