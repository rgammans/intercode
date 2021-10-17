"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3526],{75631:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24898:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(1629),i=t(17322),a=(t(3289),t(75631)),o=["components"],l={id:"create-organization-role-input",title:"CreateOrganizationRoleInput"},p=void 0,s={unversionedId:"graphql/inputs/create-organization-role-input",id:"graphql/inputs/create-organization-role-input",isDocsHomePage:!1,title:"CreateOrganizationRoleInput",description:"Autogenerated input type of CreateOrganizationRole",source:"@site/docs/graphql/inputs/create-organization-role-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-organization-role-input",permalink:"/docs/graphql/inputs/create-organization-role-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-organization-role-input.mdx",tags:[],version:"current",frontMatter:{id:"create-organization-role-input",title:"CreateOrganizationRoleInput"},sidebar:"sidebar",previous:{title:"CreateOrderInput",permalink:"/docs/graphql/inputs/create-order-input"},next:{title:"CreatePageInput",permalink:"/docs/graphql/inputs/create-page-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>organization_id</code> (Int)",id:"organization_id-int",children:[],level:4},{value:"<code>organization_role</code> (OrganizationRoleInput!)",id:"organization_role-organizationroleinput",children:[],level:4},{value:"<code>permissions</code> ([PermissionInput!]!)",id:"permissions-permissioninput",children:[],level:4},{value:"<code>transitionalOrganizationId</code> (ID)",id:"transitionalorganizationid-id",children:[],level:4},{value:"<code>transitionalUserIds</code> ([ID!])",id:"transitionaluserids-id",children:[],level:4},{value:"<code>user_ids</code> ([Int!])",id:"user_ids-int",children:[],level:4}],level:3}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateOrganizationRole"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateOrganizationRoleInput {\n  clientMutationId: String\n  organization_id: Int\n  organization_role: OrganizationRoleInput!\n  permissions: [PermissionInput!]!\n  transitionalOrganizationId: ID\n  transitionalUserIds: [ID!]\n  user_ids: [Int!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"organization_id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"organization_id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"organization_role-organizationroleinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"organization_role")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/organization-role-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OrganizationRoleInput!")),")"),(0,a.kt)("h4",{id:"permissions-permissioninput"},(0,a.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[PermissionInput!]!")),")"),(0,a.kt)("h4",{id:"transitionalorganizationid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalOrganizationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"transitionaluserids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalUserIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"),(0,a.kt)("h4",{id:"user_ids-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"user_ids")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"[Int!]")),")"))}u.isMDXComponent=!0}}]);