"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[45395],{75631:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,v=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return t?r.createElement(v,a(a({ref:n},d),{},{components:t})):r.createElement(v,a({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80859:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=t(88078),i=t(65844),o=(t(3289),t(75631)),a=["components"],c={id:"convention-by-id",title:"conventionById"},l=void 0,u={unversionedId:"graphql/queries/convention-by-id",id:"graphql/queries/convention-by-id",isDocsHomePage:!1,title:"conventionById",description:"Finds a convention by ID. If a matching one can't be found, the request will error out.",source:"@site/docs/graphql/queries/convention-by-id.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/convention-by-id",permalink:"/docs/graphql/queries/convention-by-id",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/convention-by-id.mdx",tags:[],version:"current",frontMatter:{id:"convention-by-id",title:"conventionById"},sidebar:"sidebar",previous:{title:"conventionByDomain",permalink:"/docs/graphql/queries/convention-by-domain"},next:{title:"conventionByRequestHostIfPresent",permalink:"/docs/graphql/queries/convention-by-request-host-if-present"}},d=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Convention",id:"convention",children:[],level:4}],level:3}],s={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Finds a convention by ID. If a matching one can't be found, the request will error out."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"conventionById(\n  id: Int\n  transitionalId: ID\n): Convention!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"transitionalid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"convention"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,o.kt)("inlineCode",{parentName:"a"},"Convention"))))}p.isMDXComponent=!0}}]);