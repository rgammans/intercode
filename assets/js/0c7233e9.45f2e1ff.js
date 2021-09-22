"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[71641],{75631:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=i,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62410:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(1629),i=t(17322),a=(t(3289),t(75631)),o=["components"],c={id:"receive-signup-email",title:"ReceiveSignupEmail"},u=void 0,l={unversionedId:"graphql/enums/receive-signup-email",id:"graphql/enums/receive-signup-email",isDocsHomePage:!1,title:"ReceiveSignupEmail",description:"No description",source:"@site/docs/graphql/enums/receive-signup-email.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/receive-signup-email",permalink:"/docs/graphql/enums/receive-signup-email",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/receive-signup-email.mdx",tags:[],version:"current",frontMatter:{id:"receive-signup-email",title:"ReceiveSignupEmail"},sidebar:"sidebar",previous:{title:"PricingStrategy",permalink:"/docs/graphql/enums/pricing-strategy"},next:{title:"RefundStatus",permalink:"/docs/graphql/enums/refund-status"}},p=[{value:"Values",id:"values",children:[]}],s={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ReceiveSignupEmail {\n  ALL_SIGNUPS\n  NO\n  NON_WAITLIST_SIGNUPS\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"all_signups"},(0,a.kt)("inlineCode",{parentName:"h4"},"ALL_SIGNUPS")),(0,a.kt)("p",null,"Receive email for all signup activity"),(0,a.kt)("h4",{id:"no"},(0,a.kt)("inlineCode",{parentName:"h4"},"NO")),(0,a.kt)("p",null,"Do not receive signup email"),(0,a.kt)("h4",{id:"non_waitlist_signups"},(0,a.kt)("inlineCode",{parentName:"h4"},"NON_WAITLIST_SIGNUPS")),(0,a.kt)("p",null,"Receive email for signup activity affecting confirmed signups"))}m.isMDXComponent=!0}}]);