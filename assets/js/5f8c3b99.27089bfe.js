"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[84904],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,u=m["".concat(d,".").concat(h)]||m[h]||s[h]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(88078),a=n(65844),i=(n(3289),n(75631)),o=["components"],l={id:"event-category",title:"EventCategory"},d=void 0,p={unversionedId:"graphql/objects/event-category",id:"graphql/objects/event-category",isDocsHomePage:!1,title:"EventCategory",description:"No description",source:"@site/docs/graphql/objects/event-category.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/event-category",permalink:"/docs/graphql/objects/event-category",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/event-category.mdx",tags:[],version:"current",frontMatter:{id:"event-category",title:"EventCategory"},sidebar:"sidebar",previous:{title:"EmailRoutesPagination",permalink:"/docs/graphql/objects/email-routes-pagination"},next:{title:"EventProposal",permalink:"/docs/graphql/objects/event-proposal"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>can_provide_tickets</code> (Boolean!)",id:"can_provide_tickets-boolean",children:[],level:4},{value:"<code>convention</code> (Convention!)",id:"convention-convention",children:[],level:4},{value:"<code>default_color</code> (String)",id:"default_color-string",children:[],level:4},{value:"<code>department</code> (Department)",id:"department-department",children:[],level:4},{value:"<code>event_form</code> (Form!)",id:"event_form-form",children:[],level:4},{value:"<code>event_proposal_form</code> (Form)",id:"event_proposal_form-form",children:[],level:4},{value:"<code>events_paginated</code> (EventsPagination!)",id:"events_paginated-eventspagination",children:[],level:4},{value:"<code>full_color</code> (String)",id:"full_color-string",children:[],level:4},{value:"<code>id</code> (ID!)",id:"id-id",children:[],level:4},{value:"<code>name</code> (String!)",id:"name-string",children:[],level:4},{value:"<code>proposable</code> (Boolean!)",id:"proposable-boolean",children:[],level:4},{value:"<code>proposal_description</code> (String)",id:"proposal_description-string",children:[],level:4},{value:"<code>scheduling_ui</code> (SchedulingUi!)",id:"scheduling_ui-schedulingui",children:[],level:4},{value:"<code>signed_up_color</code> (String)",id:"signed_up_color-string",children:[],level:4},{value:"<code>teamMemberNamePlural</code> (String!)",id:"teammembernameplural-string",children:[],level:4},{value:"<code>team_member_name</code> (String!)",id:"team_member_name-string",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4}],level:3}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type EventCategory {\n  can_provide_tickets: Boolean!\n  convention: Convention!\n  default_color: String\n  department: Department\n  event_form: Form!\n  event_proposal_form: Form\n  events_paginated(\n    filters: EventFiltersInput\n    page: Int\n    per_page: Int\n    sort: [SortInput!]\n  ): EventsPagination!\n  full_color: String\n  id: ID!\n  name: String!\n  proposable: Boolean!\n  proposal_description: String\n  scheduling_ui: SchedulingUi!\n  signed_up_color: String\n  teamMemberNamePlural: String!\n  team_member_name: String!\n  transitionalId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"can_provide_tickets-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"can_provide_tickets")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"convention-convention"},(0,i.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention!")),")"),(0,i.kt)("h4",{id:"default_color-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"default_color")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"department-department"},(0,i.kt)("inlineCode",{parentName:"h4"},"department")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/department"},(0,i.kt)("inlineCode",{parentName:"a"},"Department")),")"),(0,i.kt)("h4",{id:"event_form-form"},(0,i.kt)("inlineCode",{parentName:"h4"},"event_form")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form"},(0,i.kt)("inlineCode",{parentName:"a"},"Form!")),")"),(0,i.kt)("h4",{id:"event_proposal_form-form"},(0,i.kt)("inlineCode",{parentName:"h4"},"event_proposal_form")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form"},(0,i.kt)("inlineCode",{parentName:"a"},"Form")),")"),(0,i.kt)("h4",{id:"events_paginated-eventspagination"},(0,i.kt)("inlineCode",{parentName:"h4"},"events_paginated")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/events-pagination"},(0,i.kt)("inlineCode",{parentName:"a"},"EventsPagination!")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"filters-eventfiltersinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"filters")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/inputs/event-filters-input"},(0,i.kt)("inlineCode",{parentName:"a"},"EventFiltersInput")),")"))),(0,i.kt)("p",null,"Filters to restrict what items will appear in the result set."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"page-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"The page number to return from the result set. Page numbers start with 1."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"per_page-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"per_page")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"The number of items to return per page. Defaults to 20, can go up to 200."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sort-sortinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/inputs/sort-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[SortInput!]")),")"))),(0,i.kt)("p",null,"A set of fields to use for ordering the result set. The second field is used as a\ntiebreaker for the first, the third field is used as a tiebreaker for the first two,\nand so on. If the sort argument is missing or empty, the order of items will be left\nup to the database (and may be unpredictable)."),(0,i.kt)("h4",{id:"full_color-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"full_color")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"proposable-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"proposable")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"proposal_description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"proposal_description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"scheduling_ui-schedulingui"},(0,i.kt)("inlineCode",{parentName:"h4"},"scheduling_ui")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/scheduling-ui"},(0,i.kt)("inlineCode",{parentName:"a"},"SchedulingUi!")),")"),(0,i.kt)("h4",{id:"signed_up_color-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"signed_up_color")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"teammembernameplural-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"teamMemberNamePlural")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"team_member_name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"team_member_name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"transitionalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs have transitioned to the ID type. Please switch back to the id field so that we can remove this temporary one."))}m.isMDXComponent=!0}}]);