"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[19765],{75631:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var i=n(3289);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=i.createContext({}),u=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=u(t.components);return i.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return n?i.createElement(g,o(o({ref:e},l),{},{components:n})):i.createElement(g,o({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=s;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16441:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var i=n(1629),a=n(17322),r=(n(3289),n(75631)),o=["components"],p={id:"update-cms-navigation-item-input",title:"UpdateCmsNavigationItemInput"},c=void 0,u={unversionedId:"graphql/inputs/update-cms-navigation-item-input",id:"graphql/inputs/update-cms-navigation-item-input",isDocsHomePage:!1,title:"UpdateCmsNavigationItemInput",description:"Autogenerated input type of UpdateCmsNavigationItem",source:"@site/docs/graphql/inputs/update-cms-navigation-item-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-navigation-item-input",permalink:"/docs/graphql/inputs/update-cms-navigation-item-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-navigation-item-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-navigation-item-input",title:"UpdateCmsNavigationItemInput"},sidebar:"sidebar",previous:{title:"UpdateCmsLayoutInput",permalink:"/docs/graphql/inputs/update-cms-layout-input"},next:{title:"UpdateCmsPartialInput",permalink:"/docs/graphql/inputs/update-cms-partial-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>cms_navigation_item</code> (CmsNavigationItemInput)",id:"cms_navigation_item-cmsnavigationiteminput",children:[],level:4},{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4}],level:3}],d={toc:l};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated input type of UpdateCmsNavigationItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCmsNavigationItemInput {\n  clientMutationId: String\n  cms_navigation_item: CmsNavigationItemInput\n  id: Int\n  transitionalId: ID\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"clientmutationid-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,r.kt)("h4",{id:"cms_navigation_item-cmsnavigationiteminput"},(0,r.kt)("inlineCode",{parentName:"h4"},"cms_navigation_item")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-navigation-item-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CmsNavigationItemInput")),")"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"transitionalid-id"},(0,r.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);