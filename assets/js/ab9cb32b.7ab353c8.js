"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[29617],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(14002),a=n(89922),i=(n(3289),n(75631)),o=["components"],u={id:"create-cms-layout-input",title:"CreateCmsLayoutInput"},c=void 0,p={unversionedId:"graphql/inputs/create-cms-layout-input",id:"graphql/inputs/create-cms-layout-input",title:"CreateCmsLayoutInput",description:"Autogenerated input type of CreateCmsLayout",source:"@site/docs/graphql/inputs/create-cms-layout-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-cms-layout-input",permalink:"/docs/graphql/inputs/create-cms-layout-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-cms-layout-input.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-layout-input",title:"CreateCmsLayoutInput"},sidebar:"sidebar",previous:{title:"CreateCmsGraphqlQueryInput",permalink:"/docs/graphql/inputs/create-cms-graphql-query-input"},next:{title:"CreateCmsNavigationItemInput",permalink:"/docs/graphql/inputs/create-cms-navigation-item-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>cms_layout</code> (<code>CmsLayoutInput</code>)",id:"cms_layout-cmslayoutinput",level:4}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of CreateCmsLayout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateCmsLayoutInput {\n  clientMutationId: String\n  cms_layout: CmsLayoutInput!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"cms_layout-cmslayoutinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"cms_layout")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-layout-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsLayoutInput")),")"))}d.isMDXComponent=!0}}]);