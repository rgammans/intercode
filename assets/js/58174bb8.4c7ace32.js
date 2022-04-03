"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3526],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(35161),i=n(79675),o=(n(3289),n(75631)),a=["components"],l={id:"create-organization-role-input",title:"CreateOrganizationRoleInput"},p=void 0,u={unversionedId:"graphql/inputs/create-organization-role-input",id:"graphql/inputs/create-organization-role-input",title:"CreateOrganizationRoleInput",description:"Autogenerated input type of CreateOrganizationRole",source:"@site/docs/graphql/inputs/create-organization-role-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-organization-role-input",permalink:"/docs/graphql/inputs/create-organization-role-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-organization-role-input.mdx",tags:[],version:"current",frontMatter:{id:"create-organization-role-input",title:"CreateOrganizationRoleInput"},sidebar:"sidebar",previous:{title:"CreateOrderInput",permalink:"/docs/graphql/inputs/create-order-input"},next:{title:"CreatePageInput",permalink:"/docs/graphql/inputs/create-page-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>organizationId</code> (<code>ID</code>)",id:"organizationid-id",level:4},{value:"<code>organization_role</code> (<code>OrganizationRoleInput</code>)",id:"organization_role-organizationroleinput",level:4},{value:"<code>permissions</code> (<code>PermissionInput</code>)",id:"permissions-permissioninput",level:4},{value:"<code>userIds</code> (<code>ID</code>)",id:"userids-id",level:4}],d={toc:s};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of CreateOrganizationRole"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateOrganizationRoleInput {\n  clientMutationId: String\n  organizationId: ID\n  organization_role: OrganizationRoleInput!\n  permissions: [PermissionInput!]!\n  userIds: [ID!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"organizationid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"organizationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"organization_role-organizationroleinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"organization_role")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/organization-role-input"},(0,o.kt)("inlineCode",{parentName:"a"},"OrganizationRoleInput")),")"),(0,o.kt)("h4",{id:"permissions-permissioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionInput")),")"),(0,o.kt)("h4",{id:"userids-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"userIds")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}g.isMDXComponent=!0}}]);