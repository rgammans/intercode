"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[40219],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),y=i,f=s["".concat(o,".").concat(y)]||s[y]||d[y]||p;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<p;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88537:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var r=n(50753),i=n(61242),p=(n(3289),n(75631)),a=["components"],c={id:"update-ticket-type-input",title:"UpdateTicketTypeInput"},o=void 0,u={unversionedId:"graphql/inputs/update-ticket-type-input",id:"graphql/inputs/update-ticket-type-input",isDocsHomePage:!1,title:"UpdateTicketTypeInput",description:"Autogenerated input type of UpdateTicketType",source:"@site/docs/graphql/inputs/update-ticket-type-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-ticket-type-input",permalink:"/docs/graphql/inputs/update-ticket-type-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-ticket-type-input.mdx",tags:[],version:"current",frontMatter:{id:"update-ticket-type-input",title:"UpdateTicketTypeInput"},sidebar:"sidebar",previous:{title:"UpdateTicketInput",permalink:"/docs/graphql/inputs/update-ticket-input"},next:{title:"UpdateUserActivityAlertInput",permalink:"/docs/graphql/inputs/update-user-activity-alert-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>ticket_type</code> (TicketTypeInput)",id:"ticket_type-tickettypeinput",children:[],level:4}],level:3}],d={toc:l};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Autogenerated input type of UpdateTicketType"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateTicketTypeInput {\n  clientMutationId: String\n  id: ID\n  ticket_type: TicketTypeInput!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"clientmutationid-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,p.kt)("h4",{id:"id-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"ticket_type-tickettypeinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"ticket_type")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/ticket-type-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TicketTypeInput")),")"))}s.isMDXComponent=!0}}]);