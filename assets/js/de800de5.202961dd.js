"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[37158],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,v=u["".concat(d,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87361:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(14002),o=n(89922),a=(n(3289),n(75631)),i=["components"],c={id:"ticket",title:"Ticket"},d=void 0,l={unversionedId:"graphql/objects/ticket",id:"graphql/objects/ticket",title:"Ticket",description:"No description",source:"@site/docs/graphql/objects/ticket.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/ticket",permalink:"/docs/graphql/objects/ticket",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/ticket.mdx",tags:[],version:"current",frontMatter:{id:"ticket",title:"Ticket"},sidebar:"sidebar",previous:{title:"TicketType",permalink:"/docs/graphql/objects/ticket-type"},next:{title:"TimespanWithMoneyValue",permalink:"/docs/graphql/objects/timespan-with-money-value"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>convention</code> (<code>Convention</code>)",id:"convention-convention",level:4},{value:"<code>created_at</code> (<code>Date</code>)",id:"created_at-date",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>order_entry</code> (<code>OrderEntry</code>)",id:"order_entry-orderentry",level:4},{value:"<code>provided_by_event</code> (<code>Event</code>)",id:"provided_by_event-event",level:4},{value:"<code>ticket_type</code> (<code>TicketType</code>)",id:"ticket_type-tickettype",level:4},{value:"<code>updated_at</code> (<code>Date</code>)",id:"updated_at-date",level:4},{value:"<code>user_con_profile</code> (<code>UserConProfile</code>)",id:"user_con_profile-userconprofile",level:4}],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Ticket {\n  convention: Convention!\n  created_at: Date!\n  id: ID!\n  order_entry: OrderEntry\n  provided_by_event: Event\n  ticket_type: TicketType!\n  updated_at: Date!\n  user_con_profile: UserConProfile!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"convention-convention"},(0,a.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,a.kt)("inlineCode",{parentName:"a"},"Convention")),")"),(0,a.kt)("h4",{id:"created_at-date"},(0,a.kt)("inlineCode",{parentName:"h4"},"created_at")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"order_entry-orderentry"},(0,a.kt)("inlineCode",{parentName:"h4"},"order_entry")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-entry"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderEntry")),")"),(0,a.kt)("h4",{id:"provided_by_event-event"},(0,a.kt)("inlineCode",{parentName:"h4"},"provided_by_event")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),")"),(0,a.kt)("h4",{id:"ticket_type-tickettype"},(0,a.kt)("inlineCode",{parentName:"h4"},"ticket_type")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket-type"},(0,a.kt)("inlineCode",{parentName:"a"},"TicketType")),")"),(0,a.kt)("h4",{id:"updated_at-date"},(0,a.kt)("inlineCode",{parentName:"h4"},"updated_at")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,a.kt)("h4",{id:"user_con_profile-userconprofile"},(0,a.kt)("inlineCode",{parentName:"h4"},"user_con_profile")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,a.kt)("inlineCode",{parentName:"a"},"UserConProfile")),")"))}f.isMDXComponent=!0}}]);