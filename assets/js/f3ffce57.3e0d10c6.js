"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3730],{75631:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(3289);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84369:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(35161),o=t(79675),a=(t(3289),t(75631)),i=["components"],c={id:"organization",title:"Organization"},l=void 0,s={unversionedId:"graphql/objects/organization",id:"graphql/objects/organization",title:"Organization",description:"No description",source:"@site/docs/graphql/objects/organization.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/organization",permalink:"/docs/graphql/objects/organization",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/organization.mdx",tags:[],version:"current",frontMatter:{id:"organization",title:"Organization"},sidebar:"sidebar",previous:{title:"OrganizationRole",permalink:"/docs/graphql/objects/organization-role"},next:{title:"Page",permalink:"/docs/graphql/objects/page"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>conventions</code> (<code>Convention</code>)",id:"conventions-convention",level:4},{value:"<code>current_ability_can_manage_access</code> (<code>Boolean</code>)",id:"current_ability_can_manage_access-boolean",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>organization_roles</code> (<code>OrganizationRole</code>)",id:"organization_roles-organizationrole",level:4}],u={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Organization {\n  conventions: [Convention!]!\n  current_ability_can_manage_access: Boolean!\n  id: ID!\n  name: String!\n  organization_roles: [OrganizationRole!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"conventions-convention"},(0,a.kt)("inlineCode",{parentName:"h4"},"conventions")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,a.kt)("inlineCode",{parentName:"a"},"Convention")),")"),(0,a.kt)("h4",{id:"current_ability_can_manage_access-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"current_ability_can_manage_access")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"organization_roles-organizationrole"},(0,a.kt)("inlineCode",{parentName:"h4"},"organization_roles")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/organization-role"},(0,a.kt)("inlineCode",{parentName:"a"},"OrganizationRole")),")"))}g.isMDXComponent=!0}}]);