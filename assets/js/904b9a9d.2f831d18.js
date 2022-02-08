"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[40458],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7615:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(14002),i=n(89922),a=(n(3289),n(75631)),o=["components"],l={id:"user-con-profile-filters-input",title:"UserConProfileFiltersInput"},s=void 0,p={unversionedId:"graphql/inputs/user-con-profile-filters-input",id:"graphql/inputs/user-con-profile-filters-input",title:"UserConProfileFiltersInput",description:"No description",source:"@site/docs/graphql/inputs/user-con-profile-filters-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/user-con-profile-filters-input",permalink:"/docs/graphql/inputs/user-con-profile-filters-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/user-con-profile-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"user-con-profile-filters-input",title:"UserConProfileFiltersInput"},sidebar:"sidebar",previous:{title:"UserActivityAlertInput",permalink:"/docs/graphql/inputs/user-activity-alert-input"},next:{title:"UserConProfileInput",permalink:"/docs/graphql/inputs/user-con-profile-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>attending</code> (Boolean)",id:"attending-boolean",children:[],level:4},{value:"<code>email</code> (String)",id:"email-string",children:[],level:4},{value:"<code>first_name</code> (String)",id:"first_name-string",children:[],level:4},{value:"<code>is_team_member</code> (Boolean)",id:"is_team_member-boolean",children:[],level:4},{value:"<code>last_name</code> (String)",id:"last_name-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>payment_amount</code> (Float)",id:"payment_amount-float",children:[],level:4},{value:"<code>privileges</code> (String)",id:"privileges-string",children:[],level:4},{value:"<code>ticket</code> (String)",id:"ticket-string",children:[],level:4},{value:"<code>ticket_type</code> (String)",id:"ticket_type-string",children:[],level:4}],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserConProfileFiltersInput {\n  attending: Boolean\n  email: String\n  first_name: String\n  is_team_member: Boolean\n  last_name: String\n  name: String\n  payment_amount: Float\n  privileges: [String!]\n  ticket: [String!]\n  ticket_type: [String!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"attending-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"attending")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"first_name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"first_name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"is_team_member-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"is_team_member")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"last_name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"last_name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"payment_amount-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"payment_amount")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"privileges-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"privileges")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"DEPRECATED. Privileges are deprecated in favor of permissions and staff positions"),(0,a.kt)("h4",{id:"ticket-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ticket")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ticket_type-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ticket_type")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);