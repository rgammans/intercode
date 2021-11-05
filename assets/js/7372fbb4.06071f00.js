"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[40219],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var i=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,y=s["".concat(o,".").concat(f)]||s[f]||d[f]||a;return n?i.createElement(y,p(p({ref:t},l),{},{components:n})):i.createElement(y,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var u=2;u<a;u++)p[u]=n[u];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88537:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var i=n(88078),r=n(65844),a=(n(3289),n(75631)),p=["components"],c={id:"update-ticket-type-input",title:"UpdateTicketTypeInput"},o=void 0,u={unversionedId:"graphql/inputs/update-ticket-type-input",id:"graphql/inputs/update-ticket-type-input",isDocsHomePage:!1,title:"UpdateTicketTypeInput",description:"Autogenerated input type of UpdateTicketType",source:"@site/docs/graphql/inputs/update-ticket-type-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-ticket-type-input",permalink:"/docs/graphql/inputs/update-ticket-type-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-ticket-type-input.mdx",tags:[],version:"current",frontMatter:{id:"update-ticket-type-input",title:"UpdateTicketTypeInput"},sidebar:"sidebar",previous:{title:"UpdateTicketInput",permalink:"/docs/graphql/inputs/update-ticket-input"},next:{title:"UpdateUserActivityAlertInput",permalink:"/docs/graphql/inputs/update-user-activity-alert-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>ticket_type</code> (TicketTypeInput!)",id:"ticket_type-tickettypeinput",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4}],level:3}],d={toc:l};function s(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of UpdateTicketType"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateTicketTypeInput {\n  clientMutationId: String\n  id: Int\n  ticket_type: TicketTypeInput!\n  transitionalId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"ticket_type-tickettypeinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"ticket_type")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/ticket-type-input"},(0,a.kt)("inlineCode",{parentName:"a"},"TicketTypeInput!")),")"),(0,a.kt)("h4",{id:"transitionalid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);