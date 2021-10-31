"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[98064],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,u=m["".concat(l,".").concat(g)]||m[g]||p[g]||r;return n?i.createElement(u,o(o({ref:t},d),{},{components:n})):i.createElement(u,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var i=n(88078),a=n(65844),r=(n(3289),n(75631)),o=["components"],c={id:"cms-navigation-item",title:"CmsNavigationItem"},l=void 0,s={unversionedId:"graphql/objects/cms-navigation-item",id:"graphql/objects/cms-navigation-item",isDocsHomePage:!1,title:"CmsNavigationItem",description:"No description",source:"@site/docs/graphql/objects/cms-navigation-item.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/cms-navigation-item",permalink:"/docs/graphql/objects/cms-navigation-item",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/cms-navigation-item.mdx",tags:[],version:"current",frontMatter:{id:"cms-navigation-item",title:"CmsNavigationItem"},sidebar:"sidebar",previous:{title:"CmsLayout",permalink:"/docs/graphql/objects/cms-layout"},next:{title:"CmsPartial",permalink:"/docs/graphql/objects/cms-partial"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>navigation_items</code> ([CmsNavigationItem])",id:"navigation_items-cmsnavigationitem",children:[],level:4},{value:"<code>navigation_section</code> (CmsNavigationItem)",id:"navigation_section-cmsnavigationitem",children:[],level:4},{value:"<code>page</code> (Page)",id:"page-page",children:[],level:4},{value:"<code>position</code> (Int)",id:"position-int",children:[],level:4},{value:"<code>title</code> (String)",id:"title-string",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4}],level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CmsNavigationItem {\n  id: Int!\n  navigation_items: [CmsNavigationItem]\n  navigation_section: CmsNavigationItem\n  page: Page\n  position: Int\n  title: String\n  transitionalId: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,r.kt)("h4",{id:"navigation_items-cmsnavigationitem"},(0,r.kt)("inlineCode",{parentName:"h4"},"navigation_items")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-navigation-item"},(0,r.kt)("inlineCode",{parentName:"a"},"[CmsNavigationItem]")),")"),(0,r.kt)("h4",{id:"navigation_section-cmsnavigationitem"},(0,r.kt)("inlineCode",{parentName:"h4"},"navigation_section")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-navigation-item"},(0,r.kt)("inlineCode",{parentName:"a"},"CmsNavigationItem")),")"),(0,r.kt)("h4",{id:"page-page"},(0,r.kt)("inlineCode",{parentName:"h4"},"page")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page")),")"),(0,r.kt)("h4",{id:"position-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"title-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"transitionalid-id"},(0,r.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}m.isMDXComponent=!0}}]);