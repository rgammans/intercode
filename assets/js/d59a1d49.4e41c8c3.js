"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[16191],{75631:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(3289);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=u,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:u,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32164:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(1629),u=n(17322),a=(n(3289),n(75631)),o=["components"],i={id:"refund-status",title:"RefundStatus"},c=void 0,l={unversionedId:"graphql/enums/refund-status",id:"graphql/enums/refund-status",isDocsHomePage:!1,title:"RefundStatus",description:"No description",source:"@site/docs/graphql/enums/refund-status.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/refund-status",permalink:"/docs/graphql/enums/refund-status",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/refund-status.mdx",tags:[],version:"current",frontMatter:{id:"refund-status",title:"RefundStatus"},sidebar:"sidebar",previous:{title:"ReceiveSignupEmail",permalink:"/docs/graphql/enums/receive-signup-email"},next:{title:"SchedulingUi",permalink:"/docs/graphql/enums/scheduling-ui"}},s=[{value:"Values",id:"values",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,u.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RefundStatus {\n  ALREADY_REFUNDED\n  NOT_REFUNDED\n  REFUNDED\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"already_refunded"},(0,a.kt)("inlineCode",{parentName:"h4"},"ALREADY_REFUNDED")),(0,a.kt)("p",null,"A refund was requested, but the charge had already been refunded"),(0,a.kt)("h4",{id:"not_refunded"},(0,a.kt)("inlineCode",{parentName:"h4"},"NOT_REFUNDED")),(0,a.kt)("p",null,"No refund was attempted"),(0,a.kt)("h4",{id:"refunded"},(0,a.kt)("inlineCode",{parentName:"h4"},"REFUNDED")),(0,a.kt)("p",null,"A refund was successfully provided"))}d.isMDXComponent=!0}}]);