"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[83306],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||u;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,a=new Array(u);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<u;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28120:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(43830),i=n(32056),u=(n(3289),n(75631)),a=["components"],o={id:"create-multiple-runs-input",title:"CreateMultipleRunsInput"},p=void 0,l={unversionedId:"graphql/inputs/create-multiple-runs-input",id:"graphql/inputs/create-multiple-runs-input",title:"CreateMultipleRunsInput",description:"Autogenerated input type of CreateMultipleRuns",source:"@site/docs/graphql/inputs/create-multiple-runs-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-multiple-runs-input",permalink:"/docs/graphql/inputs/create-multiple-runs-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-multiple-runs-input.mdx",tags:[],version:"current",frontMatter:{id:"create-multiple-runs-input",title:"CreateMultipleRunsInput"},sidebar:"sidebar",previous:{title:"CreateMaximumEventProvidedTicketsOverrideInput",permalink:"/docs/graphql/inputs/create-maximum-event-provided-tickets-override-input"},next:{title:"CreateMySignupInput",permalink:"/docs/graphql/inputs/create-my-signup-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>eventId</code> (<code>ID</code>)",id:"eventid-id",level:4},{value:"<code>runs</code> (<code>RunInput</code>)",id:"runs-runinput",level:4}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Autogenerated input type of CreateMultipleRuns"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateMultipleRunsInput {\n  clientMutationId: String\n  eventId: ID\n  runs: [RunInput!]!\n}\n")),(0,u.kt)("h3",{id:"fields"},"Fields"),(0,u.kt)("h4",{id:"clientmutationid-string"},(0,u.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,u.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,u.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,u.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,u.kt)("h4",{id:"eventid-id"},(0,u.kt)("inlineCode",{parentName:"h4"},"eventId")," (",(0,u.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,u.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,u.kt)("h4",{id:"runs-runinput"},(0,u.kt)("inlineCode",{parentName:"h4"},"runs")," (",(0,u.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/run-input"},(0,u.kt)("inlineCode",{parentName:"a"},"RunInput")),")"))}m.isMDXComponent=!0}}]);