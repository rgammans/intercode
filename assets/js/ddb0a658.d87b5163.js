"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[46844],{75631:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),g=i,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||c;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3249:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var n=r(35161),i=r(79675),c=(r(3289),r(75631)),a=["components"],o={id:"pricing-structure",title:"PricingStructure"},u=void 0,l={unversionedId:"graphql/objects/pricing-structure",id:"graphql/objects/pricing-structure",title:"PricingStructure",description:"No description",source:"@site/docs/graphql/objects/pricing-structure.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/pricing-structure",permalink:"/docs/graphql/objects/pricing-structure",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/pricing-structure.mdx",tags:[],version:"current",frontMatter:{id:"pricing-structure",title:"PricingStructure"},sidebar:"sidebar",previous:{title:"Permission",permalink:"/docs/graphql/objects/permission"},next:{title:"ProductVariant",permalink:"/docs/graphql/objects/product-variant"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>price</code> (<code>Money</code>)",id:"price-money",level:4},{value:"<code>pricing_strategy</code> (<code>PricingStrategy</code>)",id:"pricing_strategy-pricingstrategy",level:4},{value:"<code>value</code> (<code>PricingStructureValue</code>)",id:"value-pricingstructurevalue",level:4}],d={toc:s};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PricingStructure {\n  price(\n  time: Date\n): Money\n  pricing_strategy: PricingStrategy!\n  value: PricingStructureValue!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"price-money"},(0,c.kt)("inlineCode",{parentName:"h4"},"price")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,c.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("h5",{parentName:"li",id:"time-date"},(0,c.kt)("inlineCode",{parentName:"h5"},"time")," (",(0,c.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date")),")"))),(0,c.kt)("h4",{id:"pricing_strategy-pricingstrategy"},(0,c.kt)("inlineCode",{parentName:"h4"},"pricing_strategy")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/pricing-strategy"},(0,c.kt)("inlineCode",{parentName:"a"},"PricingStrategy")),")"),(0,c.kt)("h4",{id:"value-pricingstructurevalue"},(0,c.kt)("inlineCode",{parentName:"h4"},"value")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/pricing-structure-value"},(0,c.kt)("inlineCode",{parentName:"a"},"PricingStructureValue")),")"))}g.isMDXComponent=!0}}]);