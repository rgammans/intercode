"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[16894],{75631:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3651:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=r(14002),a=r(89922),o=(r(3289),r(75631)),i=["components"],u={id:"oauth-pre-auth",title:"oauthPreAuth"},s=void 0,p={unversionedId:"graphql/queries/oauth-pre-auth",id:"graphql/queries/oauth-pre-auth",title:"oauthPreAuth",description:"Given a set of valid OAuth query parameters for the /oauth/authorize endpoint, returns a",source:"@site/docs/graphql/queries/oauth-pre-auth.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/oauth-pre-auth",permalink:"/docs/graphql/queries/oauth-pre-auth",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/oauth-pre-auth.mdx",tags:[],version:"current",frontMatter:{id:"oauth-pre-auth",title:"oauthPreAuth"},sidebar:"sidebar",previous:{title:"myAuthorizedApplications",permalink:"/docs/graphql/queries/my-authorized-applications"},next:{title:"organizations",permalink:"/docs/graphql/queries/organizations"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>queryParams</code> (<code>Json</code>)",id:"queryparams-json",level:4},{value:"Type",id:"type",level:3},{value:"<code>Json</code>",id:"json",level:4}],h={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Given a set of valid OAuth query parameters for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize")," endpoint, returns a\nJSON object containing the necessary data for rendering the pre-authorization screen that\nchecks if you want to allow an application to access Intercode on your behalf."),(0,o.kt)("p",null,"This essentially emulates the JSON behavior of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/doorkeeper-gem/doorkeeper"},"Doorkeeper"),"'s API-only mode if you go to\n",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize")," with query parameters. The only reason this query exists, rather than\nsimply having clients actually call ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize"),", is that we're running Doorkeeper\nin regular mode so that we can get the server-rendered HTML admin views."),(0,o.kt)("p",null,"When we've implemented our own admin screens for OAuth\n(see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neinteractiveliterature/intercode/issues/2740"},"this Github issue"),"),\nthis query will be deprecated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"oauthPreAuth(\n  queryParams: Json!\n): Json!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"queryparams-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"queryParams")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("p",null,"A set of HTTP query parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize"),", parsed out and\nrepresented as a JSON object."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"json"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json"))),(0,o.kt)("p",null,"An arbitrary object, serialized as JSON"))}d.isMDXComponent=!0}}]);