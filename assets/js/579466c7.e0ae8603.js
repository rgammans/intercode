"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[48246],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(14002),i=n(89922),o=(n(3289),n(75631)),a=["components"],u={id:"run-input",title:"RunInput"},c=void 0,l={unversionedId:"graphql/inputs/run-input",id:"graphql/inputs/run-input",title:"RunInput",description:"No description",source:"@site/docs/graphql/inputs/run-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/run-input",permalink:"/docs/graphql/inputs/run-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/run-input.mdx",tags:[],version:"current",frontMatter:{id:"run-input",title:"RunInput"},sidebar:"sidebar",previous:{title:"RootSiteInput",permalink:"/docs/graphql/inputs/root-site-input"},next:{title:"ScheduledMoneyValueInput",permalink:"/docs/graphql/inputs/scheduled-money-value-input"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>roomIds</code> (<code>ID</code>)",id:"roomids-id",level:4},{value:"<code>schedule_note</code> (<code>String</code>)",id:"schedule_note-string",level:4},{value:"<code>starts_at</code> (<code>Date</code>)",id:"starts_at-date",level:4},{value:"<code>title_suffix</code> (<code>String</code>)",id:"title_suffix-string",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RunInput {\n  roomIds: [ID!]\n  schedule_note: String\n  starts_at: Date\n  title_suffix: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"roomids-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"roomIds")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"schedule_note-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"schedule_note")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"starts_at-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"starts_at")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"title_suffix-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"title_suffix")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);