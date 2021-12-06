"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[79992],{75631:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),s=i,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61401:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(50753),i=r(61242),a=(r(3289),r(75631)),o=["components"],p={id:"create-team-member-input",title:"CreateTeamMemberInput"},c=void 0,l={unversionedId:"graphql/inputs/create-team-member-input",id:"graphql/inputs/create-team-member-input",isDocsHomePage:!1,title:"CreateTeamMemberInput",description:"Autogenerated input type of CreateTeamMember",source:"@site/docs/graphql/inputs/create-team-member-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-team-member-input",permalink:"/docs/graphql/inputs/create-team-member-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-team-member-input.mdx",tags:[],version:"current",frontMatter:{id:"create-team-member-input",title:"CreateTeamMemberInput"},sidebar:"sidebar",previous:{title:"CreateStaffPositionInput",permalink:"/docs/graphql/inputs/create-staff-position-input"},next:{title:"CreateTicketInput",permalink:"/docs/graphql/inputs/create-ticket-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>eventId</code> (ID)",id:"eventid-id",children:[],level:4},{value:"<code>provideTicketTypeId</code> (ID)",id:"providetickettypeid-id",children:[],level:4},{value:"<code>team_member</code> (TeamMemberInput)",id:"team_member-teammemberinput",children:[],level:4},{value:"<code>userConProfileId</code> (ID)",id:"userconprofileid-id",children:[],level:4}],level:3}],d={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateTeamMember"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateTeamMemberInput {\n  clientMutationId: String\n  eventId: ID\n  provideTicketTypeId: ID\n  team_member: TeamMemberInput!\n  userConProfileId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"eventid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"eventId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"providetickettypeid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"provideTicketTypeId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"team_member-teammemberinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"team_member")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/team-member-input"},(0,a.kt)("inlineCode",{parentName:"a"},"TeamMemberInput")),")"),(0,a.kt)("h4",{id:"userconprofileid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"userConProfileId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}m.isMDXComponent=!0}}]);