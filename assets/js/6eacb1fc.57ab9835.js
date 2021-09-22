"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24611],{75631:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return u}});var t=n(3289);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?t.createElement(f,a(a({ref:r},p),{},{components:n})):t.createElement(f,a({ref:r},p))}));function u(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27214:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var t=n(1629),i=n(17322),o=(n(3289),n(75631)),a=["components"],s={id:"permission",title:"Permission"},c=void 0,l={unversionedId:"graphql/objects/permission",id:"graphql/objects/permission",isDocsHomePage:!1,title:"Permission",description:"No description",source:"@site/docs/graphql/objects/permission.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/permission",permalink:"/docs/graphql/objects/permission",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/permission.mdx",tags:[],version:"current",frontMatter:{id:"permission",title:"Permission"},sidebar:"sidebar",previous:{title:"Page",permalink:"/docs/graphql/objects/page"},next:{title:"PricingStructure",permalink:"/docs/graphql/objects/pricing-structure"}},p=[{value:"Fields",id:"fields",children:[]}],d={toc:p};function m(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Permission {\n  id: Int!\n  model: PermissionedModel!\n  permission: String!\n  role: PermissionedRole!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("h4",{id:"model-permissionedmodel"},(0,o.kt)("inlineCode",{parentName:"h4"},"model")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/permissioned-model"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionedModel!")),")"),(0,o.kt)("h4",{id:"permission-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"permission")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"role-permissionedrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/permissioned-role"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionedRole!")),")"))}m.isMDXComponent=!0}}]);