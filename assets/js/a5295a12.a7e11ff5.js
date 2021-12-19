"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[88691],{75631:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(3289);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12889:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(69432),o=t(58703),i=(t(3289),t(75631)),a=["components"],c={id:"cms-content-group",title:"CmsContentGroup"},l=void 0,s={unversionedId:"graphql/objects/cms-content-group",id:"graphql/objects/cms-content-group",title:"CmsContentGroup",description:"No description",source:"@site/docs/graphql/objects/cms-content-group.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/cms-content-group",permalink:"/docs/graphql/objects/cms-content-group",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/cms-content-group.mdx",tags:[],version:"current",frontMatter:{id:"cms-content-group",title:"CmsContentGroup"},sidebar:"sidebar",previous:{title:"ChoiceCount",permalink:"/docs/graphql/objects/choice-count"},next:{title:"CmsFile",permalink:"/docs/graphql/objects/cms-file"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>contents</code> (CmsContent)",id:"contents-cmscontent",children:[],level:4},{value:"<code>current_ability_can_delete</code> (Boolean)",id:"current_ability_can_delete-boolean",children:[],level:4},{value:"<code>current_ability_can_update</code> (Boolean)",id:"current_ability_can_update-boolean",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>permissions</code> (Permission)",id:"permissions-permission",children:[],level:4}],level:3}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CmsContentGroup {\n  contents: [CmsContent!]!\n  current_ability_can_delete: Boolean!\n  current_ability_can_update: Boolean!\n  id: ID!\n  name: String!\n  permissions: [Permission!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"contents-cmscontent"},(0,i.kt)("inlineCode",{parentName:"h4"},"contents")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/cms-content"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsContent")),")"),(0,i.kt)("h4",{id:"current_ability_can_delete-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"current_ability_can_delete")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"current_ability_can_update-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"current_ability_can_update")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"permissions-permission"},(0,i.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/permission"},(0,i.kt)("inlineCode",{parentName:"a"},"Permission")),")"))}u.isMDXComponent=!0}}]);