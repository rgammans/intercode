"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[49015],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||o;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=l;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var i=n(43830),r=n(32056),o=(n(3289),n(75631)),s=["components"],a={id:"update-staff-position-permissions-input",title:"UpdateStaffPositionPermissionsInput"},p=void 0,u={unversionedId:"graphql/inputs/update-staff-position-permissions-input",id:"graphql/inputs/update-staff-position-permissions-input",title:"UpdateStaffPositionPermissionsInput",description:"Autogenerated input type of UpdateStaffPositionPermissions",source:"@site/docs/graphql/inputs/update-staff-position-permissions-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-staff-position-permissions-input",permalink:"/docs/graphql/inputs/update-staff-position-permissions-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-staff-position-permissions-input.mdx",tags:[],version:"current",frontMatter:{id:"update-staff-position-permissions-input",title:"UpdateStaffPositionPermissionsInput"},sidebar:"sidebar",previous:{title:"UpdateStaffPositionInput",permalink:"/docs/graphql/inputs/update-staff-position-input"},next:{title:"UpdateTeamMemberInput",permalink:"/docs/graphql/inputs/update-team-member-input"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>grant_permissions</code> (<code>PermissionInput</code>)",id:"grant_permissions-permissioninput",level:4},{value:"<code>revoke_permissions</code> (<code>PermissionInput</code>)",id:"revoke_permissions-permissioninput",level:4},{value:"<code>staffPositionId</code> (<code>ID</code>)",id:"staffpositionid-id",level:4}],l={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of UpdateStaffPositionPermissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateStaffPositionPermissionsInput {\n  clientMutationId: String\n  grant_permissions: [PermissionInput!]!\n  revoke_permissions: [PermissionInput!]!\n  staffPositionId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"grant_permissions-permissioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"grant_permissions")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionInput")),")"),(0,o.kt)("h4",{id:"revoke_permissions-permissioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"revoke_permissions")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionInput")),")"),(0,o.kt)("h4",{id:"staffpositionid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"staffPositionId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}f.isMDXComponent=!0}}]);