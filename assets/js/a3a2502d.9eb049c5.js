"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[97990],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(1629),o=n(17322),i=(n(3289),n(75631)),a=["components"],s={id:"runs",title:"runs"},u=void 0,c={unversionedId:"graphql/queries/runs",id:"graphql/queries/runs",isDocsHomePage:!1,title:"runs",description:"DEPRECATED: This field is being removed due to its potential performance implications. Please avoid requesting unpaginated lists of all runs. Instead, use events_paginated from a Convention object and request the runs from those events.",source:"@site/docs/graphql/queries/runs.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/runs",permalink:"/docs/graphql/queries/runs",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/runs.mdx",tags:[],version:"current",frontMatter:{id:"runs",title:"runs"},sidebar:"sidebar",previous:{title:"run",permalink:"/docs/graphql/queries/run"},next:{title:"searchCmsContent",permalink:"/docs/graphql/queries/search-cms-content"}},l=[{value:"Type",id:"type",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: This field is being removed due to its potential performance implications. Please avoid requesting unpaginated lists of all runs. Instead, use `events_paginated` from a Convention object and request the runs from those events."),(0,i.kt)("p",null,"Returns all runs attached to active events in convention associated with the domain name of\nthis HTTP request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"runs: [Run!]!\n\n")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"run"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/run"},(0,i.kt)("inlineCode",{parentName:"a"},"Run"))))}d.isMDXComponent=!0}}]);