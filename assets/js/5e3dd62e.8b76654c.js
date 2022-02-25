"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[17369],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7566:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return d},toc:function(){return l},default:function(){return m}});var r=n(14002),i=n(89922),o=(n(3289),n(75631)),a=["components"],c={id:"coupon-input",title:"CouponInput"},p=void 0,u={unversionedId:"graphql/inputs/coupon-input",id:"graphql/inputs/coupon-input",title:"CouponInput",description:"No description",source:"@site/docs/graphql/inputs/coupon-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/coupon-input",permalink:"/docs/graphql/inputs/coupon-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/coupon-input.mdx",tags:[],version:"current",frontMatter:{id:"coupon-input",title:"CouponInput"},sidebar:"sidebar",previous:{title:"CouponFiltersInput",permalink:"/docs/graphql/inputs/coupon-filters-input"},next:{title:"CreateCmsContentGroupInput",permalink:"/docs/graphql/inputs/create-cms-content-group-input"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>code</code> (<code>String</code>)",id:"code-string",level:4},{value:"<code>expires_at</code> (<code>Date</code>)",id:"expires_at-date",level:4},{value:"<code>fixed_amount</code> (<code>MoneyInput</code>)",id:"fixed_amount-moneyinput",level:4},{value:"<code>percent_discount</code> (<code>BigDecimal</code>)",id:"percent_discount-bigdecimal",level:4},{value:"<code>providesProductId</code> (<code>ID</code>)",id:"providesproductid-id",level:4},{value:"<code>usage_limit</code> (<code>Int</code>)",id:"usage_limit-int",level:4}],s={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CouponInput {\n  code: String\n  expires_at: Date\n  fixed_amount: MoneyInput\n  percent_discount: BigDecimal\n  providesProductId: ID\n  usage_limit: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"expires_at-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"expires_at")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"fixed_amount-moneyinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"fixed_amount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/money-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MoneyInput")),")"),(0,o.kt)("h4",{id:"percent_discount-bigdecimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"percent_discount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/big-decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"BigDecimal")),")"),(0,o.kt)("h4",{id:"providesproductid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"providesProductId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"usage_limit-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"usage_limit")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))}m.isMDXComponent=!0}}]);