"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[1341],{75631:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,g=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74493:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(69432),a=r(58703),i=(r(3289),r(75631)),s=["components"],o={id:"users-paginated",title:"users_paginated"},l=void 0,u={unversionedId:"graphql/queries/users-paginated",id:"graphql/queries/users-paginated",title:"users_paginated",description:"Returns a paginated list of users. See PaginationInterface for details on how to use",source:"@site/docs/graphql/queries/users-paginated.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/users-paginated",permalink:"/docs/graphql/queries/users-paginated",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/users-paginated.mdx",tags:[],version:"current",frontMatter:{id:"users-paginated",title:"users_paginated"},sidebar:"sidebar",previous:{title:"user",permalink:"/docs/graphql/queries/user"},next:{title:"users",permalink:"/docs/graphql/queries/users"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>filters</code> (UserFiltersInput)",id:"filters-userfiltersinput",children:[],level:4},{value:"<code>page</code> (Int)",id:"page-int",children:[],level:4},{value:"<code>per_page</code> (Int)",id:"per_page-int",children:[],level:4},{value:"<code>sort</code> (SortInput)",id:"sort-sortinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"UsersPagination",id:"userspagination",children:[],level:4}],level:3}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns a paginated list of users. See PaginationInterface for details on how to use\npaginated lists, and UserFiltersInput for filters you can use here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"users_paginated(\n  filters: UserFiltersInput\n  page: Int\n  per_page: Int\n  sort: [SortInput!]\n): UsersPagination!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"filters-userfiltersinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"filters")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/user-filters-input"},(0,i.kt)("inlineCode",{parentName:"a"},"UserFiltersInput")),")"),(0,i.kt)("p",null,"Filters to restrict what items will appear in the result set."),(0,i.kt)("h4",{id:"page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The page number to return from the result set. Page numbers start with 1."),(0,i.kt)("h4",{id:"per_page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The number of items to return per page. Defaults to 20, can go up to 200."),(0,i.kt)("h4",{id:"sort-sortinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/sort-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SortInput")),")"),(0,i.kt)("p",null,"A set of fields to use for ordering the result set. The second field is used as a\ntiebreaker for the first, the third field is used as a tiebreaker for the first two,\nand so on. If the sort argument is missing or empty, the order of items will be left\nup to the database (and may be unpredictable)."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"userspagination"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/users-pagination"},(0,i.kt)("inlineCode",{parentName:"a"},"UsersPagination"))))}d.isMDXComponent=!0}}]);