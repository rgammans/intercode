"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24611],{75631:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return u}});var t=n(3289);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?t.createElement(f,s(s({ref:r},d),{},{components:n})):t.createElement(f,s({ref:r},d))}));function u(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91907:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var t=n(14002),i=n(89922),o=(n(3289),n(75631)),s=["components"],a={id:"permission",title:"Permission"},l=void 0,c={unversionedId:"graphql/objects/permission",id:"graphql/objects/permission",title:"Permission",description:"No description",source:"@site/docs/graphql/objects/permission.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/permission",permalink:"/docs/graphql/objects/permission",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/permission.mdx",tags:[],version:"current",frontMatter:{id:"permission",title:"Permission"},sidebar:"sidebar",previous:{title:"Page",permalink:"/docs/graphql/objects/page"},next:{title:"PricingStructure",permalink:"/docs/graphql/objects/pricing-structure"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>model</code> (PermissionedModel)",id:"model-permissionedmodel",children:[],level:4},{value:"<code>permission</code> (String)",id:"permission-string",children:[],level:4},{value:"<code>role</code> (PermissionedRole)",id:"role-permissionedrole",children:[],level:4}],level:3}],p={toc:d};function m(e){var r=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Permission {\n  id: ID!\n  model: PermissionedModel!\n  permission: String!\n  role: PermissionedRole!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"model-permissionedmodel"},(0,o.kt)("inlineCode",{parentName:"h4"},"model")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/permissioned-model"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionedModel")),")"),(0,o.kt)("h4",{id:"permission-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"permission")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"role-permissionedrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/permissioned-role"},(0,o.kt)("inlineCode",{parentName:"a"},"PermissionedRole")),")"))}m.isMDXComponent=!0}}]);