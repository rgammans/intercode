"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[62176],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(35161),o=n(79675),i=(n(3289),n(75631)),a=["components"],u={title:"GraphQL Cross-Domain Security Issue Disclosure",tags:["security"],authors:["marleighnorton","nbudin","dkapell","jaelen"]},s=void 0,c={permalink:"/blog/2022/01/18/graphql-cross-domain-security-issue-disclosure",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/blog/blog/2022-01-18-graphql-cross-domain-security-issue-disclosure.md",source:"@site/blog/2022-01-18-graphql-cross-domain-security-issue-disclosure.md",title:"GraphQL Cross-Domain Security Issue Disclosure",description:"Hey all. This thing happened we should tell you about.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"security",permalink:"/blog/tags/security"}],readingTime:2.285,truncated:!0,authors:[{name:"Marleigh Norton",url:"https://github.com/marleighnorton",imageURL:"https://github.com/marleighnorton.png",key:"marleighnorton"},{name:"Nat Budin",url:"https://github.com/nbudin",imageURL:"https://github.com/nbudin.png",key:"nbudin"},{name:"Dave Kapell",url:"https://github.com/dkapell",imageURL:"https://github.com/dkapell.png",key:"dkapell"},{name:"Jae Hartwin",url:"https://github.com/jhartwin",imageURL:"https://github.com/jhartwin.png",key:"jaelen"}],frontMatter:{title:"GraphQL Cross-Domain Security Issue Disclosure",tags:["security"],authors:["marleighnorton","nbudin","dkapell","jaelen"]},nextItem:{title:"Email forwarding",permalink:"/blog/2020/03/15/email-forwarding"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hey all. This thing happened we should tell you about."),(0,i.kt)("p",null,"While performing platform upgrades, we found a bug in Intercode, the website code used by conventions such as Intercon. It has since been fixed."),(0,i.kt)("p",null,"This bug created an exploit where people with leadership access to one Intercode convention could use certain permissions on any convention. As a reminder, not even admins have access to your passwords or financial information."),(0,i.kt)("p",null,"Due to the technical complexity of accessing the exploit and the small number of people who had the permissions required to take advantage of this, we don\u2019t think it was used, but can\u2019t prove it."))}d.isMDXComponent=!0}}]);