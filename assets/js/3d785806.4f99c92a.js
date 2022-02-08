"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70263],{75631:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(3289);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,p(p({ref:e},c),{},{components:n})):r.createElement(f,p({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,p=new Array(a);p[0]=s;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:i,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89411:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(14002),i=n(89922),a=(n(3289),n(75631)),p=["components"],o={id:"update-cms-partial-input",title:"UpdateCmsPartialInput"},l=void 0,u={unversionedId:"graphql/inputs/update-cms-partial-input",id:"graphql/inputs/update-cms-partial-input",title:"UpdateCmsPartialInput",description:"Autogenerated input type of UpdateCmsPartial",source:"@site/docs/graphql/inputs/update-cms-partial-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-partial-input",permalink:"/docs/graphql/inputs/update-cms-partial-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-partial-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-partial-input",title:"UpdateCmsPartialInput"},sidebar:"sidebar",previous:{title:"UpdateCmsNavigationItemInput",permalink:"/docs/graphql/inputs/update-cms-navigation-item-input"},next:{title:"UpdateConventionInput",permalink:"/docs/graphql/inputs/update-convention-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>cms_partial</code> (CmsPartialInput)",id:"cms_partial-cmspartialinput",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4}],level:3}],d={toc:c};function s(t){var e=t.components,n=(0,i.Z)(t,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of UpdateCmsPartial"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCmsPartialInput {\n  clientMutationId: String\n  cms_partial: CmsPartialInput!\n  id: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"cms_partial-cmspartialinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"cms_partial")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-partial-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsPartialInput")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);