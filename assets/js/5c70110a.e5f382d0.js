"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[98467],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,h=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96922:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var o=n(88078),r=n(65844),i=(n(3289),n(75631)),a=["components"],c={id:"coupon-application",title:"CouponApplication"},p=void 0,l={unversionedId:"graphql/objects/coupon-application",id:"graphql/objects/coupon-application",isDocsHomePage:!1,title:"CouponApplication",description:"No description",source:"@site/docs/graphql/objects/coupon-application.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/coupon-application",permalink:"/docs/graphql/objects/coupon-application",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/coupon-application.mdx",tags:[],version:"current",frontMatter:{id:"coupon-application",title:"CouponApplication"},sidebar:"sidebar",previous:{title:"ConvertTicketToEventProvidedPayload",permalink:"/docs/graphql/objects/convert-ticket-to-event-provided-payload"},next:{title:"Coupon",permalink:"/docs/graphql/objects/coupon"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>coupon</code> (Coupon!)",id:"coupon-coupon",children:[],level:4},{value:"<code>discount</code> (Money!)",id:"discount-money",children:[],level:4},{value:"<code>id</code> (ID!)",id:"id-id",children:[],level:4},{value:"<code>order</code> (Order!)",id:"order-order",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4}],level:3}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CouponApplication {\n  coupon: Coupon!\n  discount: Money!\n  id: ID!\n  order: Order!\n  transitionalId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"coupon-coupon"},(0,i.kt)("inlineCode",{parentName:"h4"},"coupon")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/coupon"},(0,i.kt)("inlineCode",{parentName:"a"},"Coupon!")),")"),(0,i.kt)("h4",{id:"discount-money"},(0,i.kt)("inlineCode",{parentName:"h4"},"discount")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,i.kt)("inlineCode",{parentName:"a"},"Money!")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"order-order"},(0,i.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order"},(0,i.kt)("inlineCode",{parentName:"a"},"Order!")),")"),(0,i.kt)("h4",{id:"transitionalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs have transitioned to the ID type. Please switch back to the id field so that we can remove this temporary one."))}s.isMDXComponent=!0}}]);