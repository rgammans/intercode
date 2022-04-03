"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[39996],{75631:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(3289);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},28765:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=t(35161),r=t(79675),o=(t(3289),t(75631)),i=["components"],c={id:"conventions-pagination",title:"ConventionsPagination"},l=void 0,s={unversionedId:"graphql/objects/conventions-pagination",id:"graphql/objects/conventions-pagination",title:"ConventionsPagination",description:"No description",source:"@site/docs/graphql/objects/conventions-pagination.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/conventions-pagination",permalink:"/docs/graphql/objects/conventions-pagination",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/conventions-pagination.mdx",tags:[],version:"current",frontMatter:{id:"conventions-pagination",title:"ConventionsPagination"},sidebar:"sidebar",previous:{title:"Convention",permalink:"/docs/graphql/objects/convention"},next:{title:"ConvertTicketToEventProvidedPayload",permalink:"/docs/graphql/objects/convert-ticket-to-event-provided-payload"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>current_page</code> (<code>Int</code>)",id:"current_page-int",level:4},{value:"<code>entries</code> (<code>Convention</code>)",id:"entries-convention",level:4},{value:"<code>per_page</code> (<code>Int</code>)",id:"per_page-int",level:4},{value:"<code>total_entries</code> (<code>Int</code>)",id:"total_entries-int",level:4},{value:"<code>total_pages</code> (<code>Int</code>)",id:"total_pages-int",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>PaginationInterface</code>",id:"paginationinterface",level:4}],u={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ConventionsPagination implements PaginationInterface {\n  current_page: Int!\n  entries: [Convention!]!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"current_page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"current_page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The number of the page currently being returned in this query"),(0,o.kt)("h4",{id:"entries-convention"},(0,o.kt)("inlineCode",{parentName:"h4"},"entries")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,o.kt)("inlineCode",{parentName:"a"},"Convention")),")"),(0,o.kt)("h4",{id:"per_page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The number of items per page currently being returned in this query"),(0,o.kt)("h4",{id:"total_entries-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_entries")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,o.kt)("h4",{id:"total_pages-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_pages")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The total number of pages in the paginated list"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paginationinterface"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/pagination-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"PaginationInterface"))),(0,o.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,o.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,o.kt)("p",null,"Offset-based pagination is different from\n",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."))}f.isMDXComponent=!0}}]);