"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[25996],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),v=i,f=s["".concat(p,".").concat(v)]||s[v]||u[v]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return s}});var r=n(69432),i=n(58703),o=(n(3289),n(75631)),a=["components"],c={id:"provide-event-ticket-input",title:"ProvideEventTicketInput"},p=void 0,d={unversionedId:"graphql/inputs/provide-event-ticket-input",id:"graphql/inputs/provide-event-ticket-input",title:"ProvideEventTicketInput",description:"Autogenerated input type of ProvideEventTicket",source:"@site/docs/graphql/inputs/provide-event-ticket-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/provide-event-ticket-input",permalink:"/docs/graphql/inputs/provide-event-ticket-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/provide-event-ticket-input.mdx",tags:[],version:"current",frontMatter:{id:"provide-event-ticket-input",title:"ProvideEventTicketInput"},sidebar:"sidebar",previous:{title:"ProductVariantInput",permalink:"/docs/graphql/inputs/product-variant-input"},next:{title:"RateEventInput",permalink:"/docs/graphql/inputs/rate-event-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>eventId</code> (ID)",id:"eventid-id",children:[],level:4},{value:"<code>ticketTypeId</code> (ID)",id:"tickettypeid-id",children:[],level:4},{value:"<code>userConProfileId</code> (ID)",id:"userconprofileid-id",children:[],level:4}],level:3}],u={toc:l};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of ProvideEventTicket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProvideEventTicketInput {\n  clientMutationId: String\n  eventId: ID\n  ticketTypeId: ID\n  userConProfileId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"eventid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"eventId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"tickettypeid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"ticketTypeId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"userconprofileid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"userConProfileId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);