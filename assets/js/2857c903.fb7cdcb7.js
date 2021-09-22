"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[12424],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,y=d["".concat(o,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(y,p(p({ref:t},l),{},{components:n})):r.createElement(y,p({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51565:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(1629),i=n(17322),a=(n(3289),n(75631)),p=["components"],c={id:"create-ticket-type-input",title:"CreateTicketTypeInput"},o=void 0,u={unversionedId:"graphql/inputs/create-ticket-type-input",id:"graphql/inputs/create-ticket-type-input",isDocsHomePage:!1,title:"CreateTicketTypeInput",description:"Autogenerated input type of CreateTicketType",source:"@site/docs/graphql/inputs/create-ticket-type-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-ticket-type-input",permalink:"/docs/graphql/inputs/create-ticket-type-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-ticket-type-input.mdx",tags:[],version:"current",frontMatter:{id:"create-ticket-type-input",title:"CreateTicketTypeInput"},sidebar:"sidebar",previous:{title:"CreateTicketInput",permalink:"/docs/graphql/inputs/create-ticket-input"},next:{title:"CreateUserActivityAlertInput",permalink:"/docs/graphql/inputs/create-user-activity-alert-input"}},l=[{value:"Fields",id:"fields",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateTicketType"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateTicketTypeInput {\n  clientMutationId: String\n  ticket_type: TicketTypeInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"ticket_type-tickettypeinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"ticket_type")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/ticket-type-input"},(0,a.kt)("inlineCode",{parentName:"a"},"TicketTypeInput!")),")"))}d.isMDXComponent=!0}}]);