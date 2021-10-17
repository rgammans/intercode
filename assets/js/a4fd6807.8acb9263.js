"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[39549],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,v=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(v,c(c({ref:t},l),{},{components:n})):r.createElement(v,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(1629),o=n(17322),i=(n(3289),n(75631)),c=["components"],s={id:"convention-by-request-host",title:"conventionByRequestHost"},a=void 0,u={unversionedId:"graphql/queries/convention-by-request-host",id:"graphql/queries/convention-by-request-host",isDocsHomePage:!1,title:"conventionByRequestHost",description:"Returns the convention associated with the domain name of this HTTP request. If one is not",source:"@site/docs/graphql/queries/convention-by-request-host.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/convention-by-request-host",permalink:"/docs/graphql/queries/convention-by-request-host",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/convention-by-request-host.mdx",tags:[],version:"current",frontMatter:{id:"convention-by-request-host",title:"conventionByRequestHost"},sidebar:"sidebar",previous:{title:"conventionByRequestHostIfPresent",permalink:"/docs/graphql/queries/convention-by-request-host-if-present"},next:{title:"convention",permalink:"/docs/graphql/queries/convention"}},l=[{value:"Type",id:"type",children:[{value:"Convention",id:"convention",children:[],level:4}],level:3}],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns the convention associated with the domain name of this HTTP request. If one is not\npresent, the request will error out. (For a version that will return null instead of\nerroring out, use ",(0,i.kt)("inlineCode",{parentName:"p"},"conventionByRequestHostIfPresent"),".)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"conventionByRequestHost: Convention!\n\n")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"convention"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention"))))}f.isMDXComponent=!0}}]);