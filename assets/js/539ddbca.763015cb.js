"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[12324],{75631:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(3289);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(g,o(o({ref:n},p),{},{components:r})):t.createElement(g,o({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},65932:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var t=r(88078),i=r(65844),a=(r(3289),r(75631)),o=["components"],l={id:"user",title:"User"},s=void 0,c={unversionedId:"graphql/objects/user",id:"graphql/objects/user",isDocsHomePage:!1,title:"User",description:"No description",source:"@site/docs/graphql/objects/user.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/user",permalink:"/docs/graphql/objects/user",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/user.mdx",tags:[],version:"current",frontMatter:{id:"user",title:"User"},sidebar:"sidebar",previous:{title:"UserConProfilesPagination",permalink:"/docs/graphql/objects/user-con-profiles-pagination"},next:{title:"UsersPagination",permalink:"/docs/graphql/objects/users-pagination"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>email</code> (String)",id:"email-string",children:[],level:4},{value:"<code>event_proposals</code> ([EventProposal!]!)",id:"event_proposals-eventproposal",children:[],level:4},{value:"<code>first_name</code> (String)",id:"first_name-string",children:[],level:4},{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>last_name</code> (String)",id:"last_name-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>name_inverted</code> (String)",id:"name_inverted-string",children:[],level:4},{value:"<code>privileges</code> ([String!])",id:"privileges-string",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4},{value:"<code>user_con_profiles</code> ([UserConProfile!]!)",id:"user_con_profiles-userconprofile",children:[],level:4}],level:3}],d={toc:p};function u(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  email: String\n  event_proposals: [EventProposal!]!\n  first_name: String\n  id: Int!\n  last_name: String\n  name: String\n  name_inverted: String\n  privileges: [String!]\n  transitionalId: ID!\n  user_con_profiles: [UserConProfile!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"event_proposals-eventproposal"},(0,a.kt)("inlineCode",{parentName:"h4"},"event_proposals")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event-proposal"},(0,a.kt)("inlineCode",{parentName:"a"},"[EventProposal!]!")),")"),(0,a.kt)("h4",{id:"first_name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"first_name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,a.kt)("h4",{id:"last_name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"last_name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name_inverted-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name_inverted")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"privileges-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"privileges")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,a.kt)("h4",{id:"transitionalid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"user_con_profiles-userconprofile"},(0,a.kt)("inlineCode",{parentName:"h4"},"user_con_profiles")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,a.kt)("inlineCode",{parentName:"a"},"[UserConProfile!]!")),")"))}u.isMDXComponent=!0}}]);