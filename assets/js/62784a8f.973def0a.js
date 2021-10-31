"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[97918],{75631:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(h,a(a({ref:n},s),{},{components:t})):r.createElement(h,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44201:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(88078),i=t(65844),o=(t(3289),t(75631)),a=["components"],l={id:"permission-input",title:"PermissionInput"},d=void 0,p={unversionedId:"graphql/inputs/permission-input",id:"graphql/inputs/permission-input",isDocsHomePage:!1,title:"PermissionInput",description:"No description",source:"@site/docs/graphql/inputs/permission-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/permission-input",permalink:"/docs/graphql/inputs/permission-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/permission-input.mdx",tags:[],version:"current",frontMatter:{id:"permission-input",title:"PermissionInput"},sidebar:"sidebar",previous:{title:"PageInput",permalink:"/docs/graphql/inputs/page-input"},next:{title:"PricingStructureInput",permalink:"/docs/graphql/inputs/pricing-structure-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>model_id</code> (Int)",id:"model_id-int",children:[],level:4},{value:"<code>model_type</code> (PermissionedModelTypeIndicator)",id:"model_type-permissionedmodeltypeindicator",children:[],level:4},{value:"<code>permission</code> (String!)",id:"permission-string",children:[],level:4},{value:"<code>role_id</code> (Int)",id:"role_id-int",children:[],level:4},{value:"<code>role_type</code> (PermissionedRoleTypeIndicator)",id:"role_type-permissionedroletypeindicator",children:[],level:4},{value:"<code>transitionalModelId</code> (ID)",id:"transitionalmodelid-id",children:[],level:4},{value:"<code>transitionalRoleId</code> (ID)",id:"transitionalroleid-id",children:[],level:4}],level:3}],c={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PermissionInput {\n  model_id: Int\n  model_type: PermissionedModelTypeIndicator\n  permission: String!\n  role_id: Int\n  role_type: PermissionedRoleTypeIndicator\n  transitionalModelId: ID\n  transitionalRoleId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"model_id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"model_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"model_type-permissionedmodeltypeindicator"},(0,o.kt)("inlineCode",{parentName:"h4"},"model_type")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/permissioned-model-type-indicator"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionedModelTypeIndicator")),")"),(0,o.kt)("h4",{id:"permission-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"permission")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"role_id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"role_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"role_type-permissionedroletypeindicator"},(0,o.kt)("inlineCode",{parentName:"h4"},"role_type")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/permissioned-role-type-indicator"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionedRoleTypeIndicator")),")"),(0,o.kt)("h4",{id:"transitionalmodelid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalModelId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"transitionalroleid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalRoleId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0}}]);