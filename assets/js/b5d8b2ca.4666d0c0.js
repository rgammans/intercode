"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[65295],{75631:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(3289);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},d),{},{components:t})):n.createElement(m,c({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=s;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},88639:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var n=t(1629),o=t(17322),a=(t(3289),t(75631)),c=["components"],i={id:"cancel-order-payload",title:"CancelOrderPayload"},l=void 0,p={unversionedId:"graphql/objects/cancel-order-payload",id:"graphql/objects/cancel-order-payload",isDocsHomePage:!1,title:"CancelOrderPayload",description:"Autogenerated return type of CancelOrder",source:"@site/docs/graphql/objects/cancel-order-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/cancel-order-payload",permalink:"/docs/graphql/objects/cancel-order-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/cancel-order-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-order-payload",title:"CancelOrderPayload"},sidebar:"sidebar",previous:{title:"AuthorizedApplication",permalink:"/docs/graphql/objects/authorized-application"},next:{title:"ChoiceCount",permalink:"/docs/graphql/objects/choice-count"}},d=[{value:"Fields",id:"fields",children:[]}],u={toc:d};function s(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated return type of CancelOrder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelOrderPayload {\n  clientMutationId: String\n  order: Order!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"order-order"},(0,a.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order"},(0,a.kt)("inlineCode",{parentName:"a"},"Order!")),")"))}s.isMDXComponent=!0}}]);