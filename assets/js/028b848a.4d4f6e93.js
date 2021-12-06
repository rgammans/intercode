"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70058],{75631:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(3289);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,h=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(h,a(a({ref:r},l),{},{components:t})):n.createElement(h,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},227:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var n=t(50753),o=t(61242),i=(t(3289),t(75631)),a=["components"],c={id:"order-entry",title:"OrderEntry"},d=void 0,p={unversionedId:"graphql/objects/order-entry",id:"graphql/objects/order-entry",isDocsHomePage:!1,title:"OrderEntry",description:"No description",source:"@site/docs/graphql/objects/order-entry.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/order-entry",permalink:"/docs/graphql/objects/order-entry",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/order-entry.mdx",tags:[],version:"current",frontMatter:{id:"order-entry",title:"OrderEntry"},sidebar:"sidebar",previous:{title:"NotificationTemplate",permalink:"/docs/graphql/objects/notification-template"},next:{title:"OrderQuantityByStatus",permalink:"/docs/graphql/objects/order-quantity-by-status"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>describe_products</code> (String)",id:"describe_products-string",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>order</code> (Order)",id:"order-order",children:[],level:4},{value:"<code>price</code> (Money)",id:"price-money",children:[],level:4},{value:"<code>price_per_item</code> (Money)",id:"price_per_item-money",children:[],level:4},{value:"<code>product</code> (Product)",id:"product-product",children:[],level:4},{value:"<code>product_variant</code> (ProductVariant)",id:"product_variant-productvariant",children:[],level:4},{value:"<code>quantity</code> (Int)",id:"quantity-int",children:[],level:4}],level:3}],u={toc:l};function s(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrderEntry {\n  describe_products: String!\n  id: ID!\n  order: Order!\n  price: Money!\n  price_per_item: Money!\n  product: Product!\n  product_variant: ProductVariant\n  quantity: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"describe_products-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"describe_products")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"order-order"},(0,i.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order"},(0,i.kt)("inlineCode",{parentName:"a"},"Order")),")"),(0,i.kt)("h4",{id:"price-money"},(0,i.kt)("inlineCode",{parentName:"h4"},"price")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,i.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,i.kt)("h4",{id:"price_per_item-money"},(0,i.kt)("inlineCode",{parentName:"h4"},"price_per_item")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,i.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,i.kt)("h4",{id:"product-product"},(0,i.kt)("inlineCode",{parentName:"h4"},"product")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,i.kt)("inlineCode",{parentName:"a"},"Product")),")"),(0,i.kt)("h4",{id:"product_variant-productvariant"},(0,i.kt)("inlineCode",{parentName:"h4"},"product_variant")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"ProductVariant")),")"),(0,i.kt)("h4",{id:"quantity-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"quantity")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}s.isMDXComponent=!0}}]);