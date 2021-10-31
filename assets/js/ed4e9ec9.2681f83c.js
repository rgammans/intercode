"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[43311],{75631:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(3289);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||r;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37626:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=t(88078),a=t(65844),r=(t(3289),t(75631)),o=["components"],l={id:"ticket-type",title:"TicketType"},c=void 0,d={unversionedId:"graphql/objects/ticket-type",id:"graphql/objects/ticket-type",isDocsHomePage:!1,title:"TicketType",description:"No description",source:"@site/docs/graphql/objects/ticket-type.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/ticket-type",permalink:"/docs/graphql/objects/ticket-type",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/ticket-type.mdx",tags:[],version:"current",frontMatter:{id:"ticket-type",title:"TicketType"},sidebar:"sidebar",previous:{title:"TicketCountByTypeAndPaymentAmount",permalink:"/docs/graphql/objects/ticket-count-by-type-and-payment-amount"},next:{title:"Ticket",permalink:"/docs/graphql/objects/ticket"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>allows_event_signups</code> (Boolean!)",id:"allows_event_signups-boolean",children:[],level:4},{value:"<code>convention</code> (Convention!)",id:"convention-convention",children:[],level:4},{value:"<code>counts_towards_convention_maximum</code> (Boolean!)",id:"counts_towards_convention_maximum-boolean",children:[],level:4},{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>maximum_event_provided_tickets</code> (Int!)",id:"maximum_event_provided_tickets-int",children:[],level:4},{value:"<code>name</code> (String!)",id:"name-string",children:[],level:4},{value:"<code>pricing_schedule</code> (ScheduledMoneyValue!)",id:"pricing_schedule-scheduledmoneyvalue",children:[],level:4},{value:"<code>providing_products</code> ([Product!]!)",id:"providing_products-product",children:[],level:4},{value:"<code>publicly_available</code> (Boolean!)",id:"publicly_available-boolean",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4}],level:3}],s={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type TicketType {\n  allows_event_signups: Boolean!\n  convention: Convention!\n  counts_towards_convention_maximum: Boolean!\n  description: String\n  id: Int!\n  maximum_event_provided_tickets(event_id: Int, transitionalEventId: ID): Int!\n  name: String!\n  pricing_schedule: ScheduledMoneyValue!\n  providing_products: [Product!]!\n  publicly_available: Boolean!\n  transitionalId: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"allows_event_signups-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"allows_event_signups")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,r.kt)("h4",{id:"convention-convention"},(0,r.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,r.kt)("inlineCode",{parentName:"a"},"Convention!")),")"),(0,r.kt)("h4",{id:"counts_towards_convention_maximum-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"counts_towards_convention_maximum")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,r.kt)("h4",{id:"description-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,r.kt)("h4",{id:"maximum_event_provided_tickets-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"maximum_event_provided_tickets")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"event_id-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"event_id")," (",(0,r.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"transitionaleventid-id"},(0,r.kt)("inlineCode",{parentName:"h5"},"transitionalEventId")," (",(0,r.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,r.kt)("h4",{id:"name-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,r.kt)("h4",{id:"pricing_schedule-scheduledmoneyvalue"},(0,r.kt)("inlineCode",{parentName:"h4"},"pricing_schedule")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/scheduled-money-value"},(0,r.kt)("inlineCode",{parentName:"a"},"ScheduledMoneyValue!")),")"),(0,r.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Tickets are now provided through products"),(0,r.kt)("h4",{id:"providing_products-product"},(0,r.kt)("inlineCode",{parentName:"h4"},"providing_products")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,r.kt)("inlineCode",{parentName:"a"},"[Product!]!")),")"),(0,r.kt)("h4",{id:"publicly_available-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"publicly_available")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,r.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Tickets are now provided through products"),(0,r.kt)("h4",{id:"transitionalid-id"},(0,r.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}u.isMDXComponent=!0}}]);