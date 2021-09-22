"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[88894],{75631:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(3289);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:e},l),{},{components:n})):r.createElement(f,o({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},662:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(1629),a=n(17322),i=(n(3289),n(75631)),o=["components"],u={id:"update-cms-layout-input",title:"UpdateCmsLayoutInput"},p=void 0,c={unversionedId:"graphql/inputs/update-cms-layout-input",id:"graphql/inputs/update-cms-layout-input",isDocsHomePage:!1,title:"UpdateCmsLayoutInput",description:"Autogenerated input type of UpdateCmsLayout",source:"@site/docs/graphql/inputs/update-cms-layout-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-layout-input",permalink:"/docs/graphql/inputs/update-cms-layout-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-layout-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-layout-input",title:"UpdateCmsLayoutInput"},sidebar:"sidebar",previous:{title:"UpdateCmsGraphqlQueryInput",permalink:"/docs/graphql/inputs/update-cms-graphql-query-input"},next:{title:"UpdateCmsNavigationItemInput",permalink:"/docs/graphql/inputs/update-cms-navigation-item-input"}},l=[{value:"Fields",id:"fields",children:[]}],s={toc:l};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of UpdateCmsLayout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCmsLayoutInput {\n  clientMutationId: String\n  cms_layout: CmsLayoutInput!\n  id: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"cms_layout-cmslayoutinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"cms_layout")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-layout-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsLayoutInput!")),")"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"))}d.isMDXComponent=!0}}]);