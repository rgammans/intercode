"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[91181],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35899:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(14002),i=n(89922),o=(n(3289),n(75631)),a=["components"],u={id:"create-user-signup-input",title:"CreateUserSignupInput"},c=void 0,p={unversionedId:"graphql/inputs/create-user-signup-input",id:"graphql/inputs/create-user-signup-input",title:"CreateUserSignupInput",description:"Autogenerated input type of CreateUserSignup",source:"@site/docs/graphql/inputs/create-user-signup-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-user-signup-input",permalink:"/docs/graphql/inputs/create-user-signup-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-user-signup-input.mdx",tags:[],version:"current",frontMatter:{id:"create-user-signup-input",title:"CreateUserSignupInput"},sidebar:"sidebar",previous:{title:"CreateUserConProfileInput",permalink:"/docs/graphql/inputs/create-user-con-profile-input"},next:{title:"DeleteCmsContentGroupInput",permalink:"/docs/graphql/inputs/delete-cms-content-group-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>no_requested_bucket</code> (<code>Boolean</code>)",id:"no_requested_bucket-boolean",level:4},{value:"<code>requested_bucket_key</code> (<code>String</code>)",id:"requested_bucket_key-string",level:4},{value:"<code>runId</code> (<code>ID</code>)",id:"runid-id",level:4},{value:"<code>suppress_notifications</code> (<code>Boolean</code>)",id:"suppress_notifications-boolean",level:4},{value:"<code>userConProfileId</code> (<code>ID</code>)",id:"userconprofileid-id",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of CreateUserSignup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateUserSignupInput {\n  clientMutationId: String\n  no_requested_bucket: Boolean\n  requested_bucket_key: String\n  runId: ID\n  suppress_notifications: Boolean\n  userConProfileId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"no_requested_bucket-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"no_requested_bucket")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"requested_bucket_key-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"requested_bucket_key")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"runid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"runId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"suppress_notifications-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"suppress_notifications")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"userconprofileid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"userConProfileId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}f.isMDXComponent=!0}}]);