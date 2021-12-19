"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[53511],{75631:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(69432),r=n(58703),o=(n(3289),n(75631)),i=["components"],p={id:"coupons-pagination",title:"CouponsPagination"},c=void 0,l={unversionedId:"graphql/objects/coupons-pagination",id:"graphql/objects/coupons-pagination",title:"CouponsPagination",description:"No description",source:"@site/docs/graphql/objects/coupons-pagination.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/coupons-pagination",permalink:"/docs/graphql/objects/coupons-pagination",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/coupons-pagination.mdx",tags:[],version:"current",frontMatter:{id:"coupons-pagination",title:"CouponsPagination"},sidebar:"sidebar",previous:{title:"Coupon",permalink:"/docs/graphql/objects/coupon"},next:{title:"CreateCmsContentGroupPayload",permalink:"/docs/graphql/objects/create-cms-content-group-payload"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>current_page</code> (Int)",id:"current_page-int",children:[],level:4},{value:"<code>entries</code> (Coupon)",id:"entries-coupon",children:[],level:4},{value:"<code>per_page</code> (Int)",id:"per_page-int",children:[],level:4},{value:"<code>total_entries</code> (Int)",id:"total_entries-int",children:[],level:4},{value:"<code>total_pages</code> (Int)",id:"total_pages-int",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"PaginationInterface",id:"paginationinterface",children:[],level:4}],level:3}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CouponsPagination implements PaginationInterface {\n  current_page: Int!\n  entries: [Coupon!]!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"current_page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"current_page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The number of the page currently being returned in this query"),(0,o.kt)("h4",{id:"entries-coupon"},(0,o.kt)("inlineCode",{parentName:"h4"},"entries")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/coupon"},(0,o.kt)("inlineCode",{parentName:"a"},"Coupon")),")"),(0,o.kt)("h4",{id:"per_page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The number of items per page currently being returned in this query"),(0,o.kt)("h4",{id:"total_entries-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_entries")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,o.kt)("h4",{id:"total_pages-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_pages")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The total number of pages in the paginated list"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paginationinterface"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/pagination-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"PaginationInterface"))),(0,o.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,o.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,o.kt)("p",null,"Offset-based pagination is different from\n",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."))}d.isMDXComponent=!0}}]);