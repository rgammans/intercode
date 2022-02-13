"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[61067],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(p,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9907:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(14002),i=n(89922),a=(n(3289),n(75631)),o=["components"],c={id:"accept-signup-request-payload",title:"AcceptSignupRequestPayload"},p=void 0,u={unversionedId:"graphql/objects/accept-signup-request-payload",id:"graphql/objects/accept-signup-request-payload",title:"AcceptSignupRequestPayload",description:"Autogenerated return type of AcceptSignupRequest",source:"@site/docs/graphql/objects/accept-signup-request-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/accept-signup-request-payload",permalink:"/docs/graphql/objects/accept-signup-request-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/accept-signup-request-payload.mdx",tags:[],version:"current",frontMatter:{id:"accept-signup-request-payload",title:"AcceptSignupRequestPayload"},sidebar:"sidebar",previous:{title:"AcceptClickwrapAgreementPayload",permalink:"/docs/graphql/objects/accept-clickwrap-agreement-payload"},next:{title:"ActiveStorageAttachment",permalink:"/docs/graphql/objects/active-storage-attachment"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>signup</code> (Signup)",id:"signup-signup",children:[],level:4},{value:"<code>signup_request</code> (SignupRequest)",id:"signup_request-signuprequest",children:[],level:4}],level:3}],s={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated return type of AcceptSignupRequest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AcceptSignupRequestPayload {\n  clientMutationId: String\n  signup: Signup!\n  signup_request: SignupRequest!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"signup-signup"},(0,a.kt)("inlineCode",{parentName:"h4"},"signup")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,a.kt)("inlineCode",{parentName:"a"},"Signup")),")"),(0,a.kt)("h4",{id:"signup_request-signuprequest"},(0,a.kt)("inlineCode",{parentName:"h4"},"signup_request")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup-request"},(0,a.kt)("inlineCode",{parentName:"a"},"SignupRequest")),")"))}d.isMDXComponent=!0}}]);