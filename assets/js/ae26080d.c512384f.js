"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[99685],{75631:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(3289);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1582:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(14002),i=n(89922),a=(n(3289),n(75631)),o=["components"],c={id:"sort-cms-navigation-items-payload",title:"SortCmsNavigationItemsPayload"},s=void 0,l={unversionedId:"graphql/objects/sort-cms-navigation-items-payload",id:"graphql/objects/sort-cms-navigation-items-payload",title:"SortCmsNavigationItemsPayload",description:"Autogenerated return type of SortCmsNavigationItems",source:"@site/docs/graphql/objects/sort-cms-navigation-items-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/sort-cms-navigation-items-payload",permalink:"/docs/graphql/objects/sort-cms-navigation-items-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/sort-cms-navigation-items-payload.mdx",tags:[],version:"current",frontMatter:{id:"sort-cms-navigation-items-payload",title:"SortCmsNavigationItemsPayload"},sidebar:"sidebar",previous:{title:"SignupsPagination",permalink:"/docs/graphql/objects/signups-pagination"},next:{title:"StaffPosition",permalink:"/docs/graphql/objects/staff-position"}},p={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>navigation_items</code> (<code>CmsNavigationItem</code>)",id:"navigation_items-cmsnavigationitem",level:4}],u={toc:m};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated return type of SortCmsNavigationItems"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SortCmsNavigationItemsPayload {\n  clientMutationId: String\n  navigation_items: [CmsNavigationItem!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"navigation_items-cmsnavigationitem"},(0,a.kt)("inlineCode",{parentName:"h4"},"navigation_items")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-navigation-item"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsNavigationItem")),")"))}d.isMDXComponent=!0}}]);