"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[16648],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(n),m=i,v=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2544:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(1629),i=n(17322),a=(n(3289),n(75631)),o=["components"],d={id:"create-maximum-event-provided-tickets-override-input",title:"CreateMaximumEventProvidedTicketsOverrideInput"},c=void 0,l={unversionedId:"graphql/inputs/create-maximum-event-provided-tickets-override-input",id:"graphql/inputs/create-maximum-event-provided-tickets-override-input",isDocsHomePage:!1,title:"CreateMaximumEventProvidedTicketsOverrideInput",description:"Autogenerated input type of CreateMaximumEventProvidedTicketsOverride",source:"@site/docs/graphql/inputs/create-maximum-event-provided-tickets-override-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-maximum-event-provided-tickets-override-input",permalink:"/docs/graphql/inputs/create-maximum-event-provided-tickets-override-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-maximum-event-provided-tickets-override-input.mdx",tags:[],version:"current",frontMatter:{id:"create-maximum-event-provided-tickets-override-input",title:"CreateMaximumEventProvidedTicketsOverrideInput"},sidebar:"sidebar",previous:{title:"CreateFormWithJSONInput",permalink:"/docs/graphql/inputs/create-form-with-json-input"},next:{title:"CreateMultipleRunsInput",permalink:"/docs/graphql/inputs/create-multiple-runs-input"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>event_id</code> (Int)",id:"event_id-int",children:[],level:4},{value:"<code>override_value</code> (Int!)",id:"override_value-int",children:[],level:4},{value:"<code>ticket_type_id</code> (Int)",id:"ticket_type_id-int",children:[],level:4},{value:"<code>transitionalEventId</code> (ID)",id:"transitionaleventid-id",children:[],level:4},{value:"<code>transitionalTicketTypeId</code> (ID)",id:"transitionaltickettypeid-id",children:[],level:4}],level:3}],u={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateMaximumEventProvidedTicketsOverride"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateMaximumEventProvidedTicketsOverrideInput {\n  clientMutationId: String\n  event_id: Int\n  override_value: Int!\n  ticket_type_id: Int\n  transitionalEventId: ID\n  transitionalTicketTypeId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"event_id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"event_id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"override_value-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"override_value")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h4",{id:"ticket_type_id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"ticket_type_id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"transitionaleventid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalEventId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"transitionaltickettypeid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalTicketTypeId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);