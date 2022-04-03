"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[15946],{75631:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(r),m=i,f=s["".concat(c,".").concat(m)]||s[m]||l[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},80474:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return l}});var n=r(35161),i=r(79675),o=(r(3289),r(75631)),a=["components"],p={id:"order-entry-input",title:"OrderEntryInput"},c=void 0,d={unversionedId:"graphql/inputs/order-entry-input",id:"graphql/inputs/order-entry-input",title:"OrderEntryInput",description:"No description",source:"@site/docs/graphql/inputs/order-entry-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/order-entry-input",permalink:"/docs/graphql/inputs/order-entry-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/order-entry-input.mdx",tags:[],version:"current",frontMatter:{id:"order-entry-input",title:"OrderEntryInput"},sidebar:"sidebar",previous:{title:"NotificationTemplateInput",permalink:"/docs/graphql/inputs/notification-template-input"},next:{title:"OrderFiltersInput",permalink:"/docs/graphql/inputs/order-filters-input"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>price_per_item</code> (<code>MoneyInput</code>)",id:"price_per_item-moneyinput",level:4},{value:"<code>productId</code> (<code>ID</code>)",id:"productid-id",level:4},{value:"<code>productVariantId</code> (<code>ID</code>)",id:"productvariantid-id",level:4},{value:"<code>quantity</code> (<code>Int</code>)",id:"quantity-int",level:4},{value:"<code>ticketId</code> (<code>ID</code>)",id:"ticketid-id",level:4}],s={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input OrderEntryInput {\n  price_per_item: MoneyInput\n  productId: ID\n  productVariantId: ID\n  quantity: Int\n  ticketId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"price_per_item-moneyinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"price_per_item")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/money-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MoneyInput")),")"),(0,o.kt)("h4",{id:"productid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"productId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"productvariantid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"productVariantId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"quantity-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"quantity")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"ticketid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"ticketId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}m.isMDXComponent=!0}}]);