"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[75163],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(1629),i=n(17322),o=(n(3289),n(75631)),a=["components"],s={id:"conventions-paginated",title:"conventions_paginated"},p=void 0,l={unversionedId:"graphql/queries/conventions-paginated",id:"graphql/queries/conventions-paginated",isDocsHomePage:!1,title:"conventions_paginated",description:"Returns a paginated list of conventions. See PaginationInterface for details on how to use",source:"@site/docs/graphql/queries/conventions-paginated.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/conventions-paginated",permalink:"/docs/graphql/queries/conventions-paginated",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/conventions-paginated.mdx",tags:[],version:"current",frontMatter:{id:"conventions-paginated",title:"conventions_paginated"},sidebar:"sidebar",previous:{title:"convention",permalink:"/docs/graphql/queries/convention"},next:{title:"conventions",permalink:"/docs/graphql/queries/conventions"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns a paginated list of conventions. See PaginationInterface for details on how to use\npaginated lists, and ConventionFiltersInput for filters you can use here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"conventions_paginated(\n  filters: ConventionFiltersInput\n  page: Int\n  per_page: Int\n  sort: [SortInput!]\n): ConventionsPagination!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"filters-conventionfiltersinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"filters")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/convention-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ConventionFiltersInput")),")"),(0,o.kt)("p",null,"Filters to restrict what items will appear in the result set."),(0,o.kt)("h4",{id:"page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The page number to return from the result set. Page numbers start with 1."),(0,o.kt)("h4",{id:"per_page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The number of items to return per page. Defaults to 20, can go up to 200."),(0,o.kt)("h4",{id:"sort-sortinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/sort-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[SortInput!]")),")"),(0,o.kt)("p",null,"A set of fields to use for ordering the result set. The second field is used as a\ntiebreaker for the first, the third field is used as a tiebreaker for the first two,\nand so on. If the sort argument is missing or empty, the order of items will be left\nup to the database (and may be unpredictable)."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"conventionspagination"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/conventions-pagination"},(0,o.kt)("inlineCode",{parentName:"a"},"ConventionsPagination"))))}d.isMDXComponent=!0}}]);