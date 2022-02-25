"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[5387],{75631:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,g=p["".concat(d,".").concat(m)]||p[m]||l[m]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25318:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},assets:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(14002),i=r(89922),a=(r(3289),r(75631)),o=["components"],c={id:"product-variant",title:"ProductVariant"},d=void 0,u={unversionedId:"graphql/objects/product-variant",id:"graphql/objects/product-variant",title:"ProductVariant",description:"No description",source:"@site/docs/graphql/objects/product-variant.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/product-variant",permalink:"/docs/graphql/objects/product-variant",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/product-variant.mdx",tags:[],version:"current",frontMatter:{id:"product-variant",title:"ProductVariant"},sidebar:"sidebar",previous:{title:"PricingStructure",permalink:"/docs/graphql/objects/pricing-structure"},next:{title:"Product",permalink:"/docs/graphql/objects/product"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>description_html</code> (<code>String</code>)",id:"description_html-string",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>image</code> (<code>ActiveStorageAttachment</code>)",id:"image-activestorageattachment",level:4},{value:"<code>image_url</code> (<code>String</code>)",id:"image_url-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>order_quantities_by_status</code> (<code>OrderQuantityByStatus</code>)",id:"order_quantities_by_status-orderquantitybystatus",level:4},{value:"<code>override_pricing_structure</code> (<code>PricingStructure</code>)",id:"override_pricing_structure-pricingstructure",level:4},{value:"<code>position</code> (<code>Int</code>)",id:"position-int",level:4},{value:"<code>product</code> (<code>Product</code>)",id:"product-product",level:4}],p={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductVariant {\n  description: String\n  description_html: String\n  id: ID!\n  image: ActiveStorageAttachment\n  image_url: String\n  name: String!\n  order_quantities_by_status: [OrderQuantityByStatus!]!\n  override_pricing_structure: PricingStructure\n  position: Int\n  product: Product!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"description_html-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description_html")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"image-activestorageattachment"},(0,a.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/active-storage-attachment"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveStorageAttachment")),")"),(0,a.kt)("h4",{id:"image_url-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"image_url")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"order_quantities_by_status-orderquantitybystatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"order_quantities_by_status")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-quantity-by-status"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderQuantityByStatus")),")"),(0,a.kt)("h4",{id:"override_pricing_structure-pricingstructure"},(0,a.kt)("inlineCode",{parentName:"h4"},"override_pricing_structure")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/pricing-structure"},(0,a.kt)("inlineCode",{parentName:"a"},"PricingStructure")),")"),(0,a.kt)("h4",{id:"position-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"product-product"},(0,a.kt)("inlineCode",{parentName:"h4"},"product")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,a.kt)("inlineCode",{parentName:"a"},"Product")),")"))}m.isMDXComponent=!0}}]);