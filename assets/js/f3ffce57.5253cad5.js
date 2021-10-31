"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3730],{75631:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(3289);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13652:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(88078),a=t(65844),o=(t(3289),t(75631)),i=["components"],l={id:"organization",title:"Organization"},c=void 0,s={unversionedId:"graphql/objects/organization",id:"graphql/objects/organization",isDocsHomePage:!1,title:"Organization",description:"No description",source:"@site/docs/graphql/objects/organization.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/organization",permalink:"/docs/graphql/objects/organization",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/organization.mdx",tags:[],version:"current",frontMatter:{id:"organization",title:"Organization"},sidebar:"sidebar",previous:{title:"OrganizationRole",permalink:"/docs/graphql/objects/organization-role"},next:{title:"PageInfo",permalink:"/docs/graphql/objects/page-info"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>conventions</code> ([Convention!]!)",id:"conventions-convention",children:[],level:4},{value:"<code>current_ability_can_manage_access</code> (Boolean!)",id:"current_ability_can_manage_access-boolean",children:[],level:4},{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>name</code> (String!)",id:"name-string",children:[],level:4},{value:"<code>organization_roles</code> ([OrganizationRole!]!)",id:"organization_roles-organizationrole",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4}],level:3}],p={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Organization {\n  conventions: [Convention!]!\n  current_ability_can_manage_access: Boolean!\n  id: Int!\n  name: String!\n  organization_roles: [OrganizationRole!]!\n  transitionalId: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"conventions-convention"},(0,o.kt)("inlineCode",{parentName:"h4"},"conventions")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,o.kt)("inlineCode",{parentName:"a"},"[Convention!]!")),")"),(0,o.kt)("h4",{id:"current_ability_can_manage_access-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"current_ability_can_manage_access")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,o.kt)("h4",{id:"name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"organization_roles-organizationrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"organization_roles")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/organization-role"},(0,o.kt)("inlineCode",{parentName:"a"},"[OrganizationRole!]!")),")"),(0,o.kt)("h4",{id:"transitionalid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}u.isMDXComponent=!0}}]);