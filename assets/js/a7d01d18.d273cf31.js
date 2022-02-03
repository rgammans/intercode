"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24635],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),v=o,f=s["".concat(d,".").concat(v)]||s[v]||u[v]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84297:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(236),o=n(86460),i=(n(3289),n(75631)),a=["components"],c={id:"convert-ticket-to-event-provided-payload",title:"ConvertTicketToEventProvidedPayload"},d=void 0,l={unversionedId:"graphql/objects/convert-ticket-to-event-provided-payload",id:"graphql/objects/convert-ticket-to-event-provided-payload",title:"ConvertTicketToEventProvidedPayload",description:"Autogenerated return type of ConvertTicketToEventProvided",source:"@site/docs/graphql/objects/convert-ticket-to-event-provided-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/convert-ticket-to-event-provided-payload",permalink:"/docs/graphql/objects/convert-ticket-to-event-provided-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/convert-ticket-to-event-provided-payload.mdx",tags:[],version:"current",frontMatter:{id:"convert-ticket-to-event-provided-payload",title:"ConvertTicketToEventProvidedPayload"},sidebar:"sidebar",previous:{title:"ConventionsPagination",permalink:"/docs/graphql/objects/conventions-pagination"},next:{title:"CouponApplication",permalink:"/docs/graphql/objects/coupon-application"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>deleted_ticket</code> (Ticket)",id:"deleted_ticket-ticket",children:[],level:4},{value:"<code>refund_status</code> (RefundStatus)",id:"refund_status-refundstatus",children:[],level:4},{value:"<code>ticket</code> (Ticket)",id:"ticket-ticket",children:[],level:4}],level:3}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated return type of ConvertTicketToEventProvided"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ConvertTicketToEventProvidedPayload {\n  clientMutationId: String\n  deleted_ticket: Ticket!\n  refund_status: RefundStatus!\n  ticket: Ticket!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"deleted_ticket-ticket"},(0,i.kt)("inlineCode",{parentName:"h4"},"deleted_ticket")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket"},(0,i.kt)("inlineCode",{parentName:"a"},"Ticket")),")"),(0,i.kt)("p",null,"The ticket we deleted in order to provide a new ticket"),(0,i.kt)("h4",{id:"refund_status-refundstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"refund_status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/refund-status"},(0,i.kt)("inlineCode",{parentName:"a"},"RefundStatus")),")"),(0,i.kt)("h4",{id:"ticket-ticket"},(0,i.kt)("inlineCode",{parentName:"h4"},"ticket")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket"},(0,i.kt)("inlineCode",{parentName:"a"},"Ticket")),")"),(0,i.kt)("p",null,"The new ticket we just provided"))}s.isMDXComponent=!0}}]);