"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[10002],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},29365:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(35161),i=n(79675),a=(n(3289),n(75631)),c=["components"],o={id:"create-ticket-input",title:"CreateTicketInput"},u=void 0,p={unversionedId:"graphql/inputs/create-ticket-input",id:"graphql/inputs/create-ticket-input",title:"CreateTicketInput",description:"Autogenerated input type of CreateTicket",source:"@site/docs/graphql/inputs/create-ticket-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-ticket-input",permalink:"/docs/graphql/inputs/create-ticket-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-ticket-input.mdx",tags:[],version:"current",frontMatter:{id:"create-ticket-input",title:"CreateTicketInput"},sidebar:"sidebar",previous:{title:"CreateTeamMemberInput",permalink:"/docs/graphql/inputs/create-team-member-input"},next:{title:"CreateTicketTypeInput",permalink:"/docs/graphql/inputs/create-ticket-type-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>ticket</code> (<code>TicketInput</code>)",id:"ticket-ticketinput",level:4},{value:"<code>userConProfileId</code> (<code>ID</code>)",id:"userconprofileid-id",level:4}],s={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateTicket"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateTicketInput {\n  clientMutationId: String\n  ticket: TicketInput!\n  userConProfileId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"ticket-ticketinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"ticket")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/ticket-input"},(0,a.kt)("inlineCode",{parentName:"a"},"TicketInput")),")"),(0,a.kt)("h4",{id:"userconprofileid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"userConProfileId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}f.isMDXComponent=!0}}]);