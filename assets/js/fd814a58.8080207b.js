"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[38657],{75631:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(3289);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,h=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55178:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(88078),o=t(65844),i=(t(3289),t(75631)),a=["components"],c={id:"coupon",title:"Coupon"},d=void 0,l={unversionedId:"graphql/objects/coupon",id:"graphql/objects/coupon",isDocsHomePage:!1,title:"Coupon",description:"No description",source:"@site/docs/graphql/objects/coupon.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/coupon",permalink:"/docs/graphql/objects/coupon",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/coupon.mdx",tags:[],version:"current",frontMatter:{id:"coupon",title:"Coupon"},sidebar:"sidebar",previous:{title:"CouponApplication",permalink:"/docs/graphql/objects/coupon-application"},next:{title:"CouponsPagination",permalink:"/docs/graphql/objects/coupons-pagination"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>code</code> (String!)",id:"code-string",children:[],level:4},{value:"<code>convention</code> (Convention!)",id:"convention-convention",children:[],level:4},{value:"<code>expires_at</code> (Date)",id:"expires_at-date",children:[],level:4},{value:"<code>fixed_amount</code> (Money)",id:"fixed_amount-money",children:[],level:4},{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>percent_discount</code> (BigDecimal)",id:"percent_discount-bigdecimal",children:[],level:4},{value:"<code>provides_product</code> (Product)",id:"provides_product-product",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4},{value:"<code>usage_limit</code> (Int)",id:"usage_limit-int",children:[],level:4}],level:3}],s={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Coupon {\n  code: String!\n  convention: Convention!\n  expires_at: Date\n  fixed_amount: Money\n  id: Int!\n  percent_discount: BigDecimal\n  provides_product: Product\n  transitionalId: ID!\n  usage_limit: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"convention-convention"},(0,i.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention!")),")"),(0,i.kt)("h4",{id:"expires_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"expires_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"fixed_amount-money"},(0,i.kt)("inlineCode",{parentName:"h4"},"fixed_amount")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,i.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,i.kt)("h4",{id:"percent_discount-bigdecimal"},(0,i.kt)("inlineCode",{parentName:"h4"},"percent_discount")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/big-decimal"},(0,i.kt)("inlineCode",{parentName:"a"},"BigDecimal")),")"),(0,i.kt)("h4",{id:"provides_product-product"},(0,i.kt)("inlineCode",{parentName:"h4"},"provides_product")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,i.kt)("inlineCode",{parentName:"a"},"Product")),")"),(0,i.kt)("h4",{id:"transitionalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"usage_limit-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"usage_limit")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}u.isMDXComponent=!0}}]);