"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[48246],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(88078),i=n(65844),a=(n(3289),n(75631)),o=["components"],l={id:"run-input",title:"RunInput"},u=void 0,s={unversionedId:"graphql/inputs/run-input",id:"graphql/inputs/run-input",isDocsHomePage:!1,title:"RunInput",description:"No description",source:"@site/docs/graphql/inputs/run-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/run-input",permalink:"/docs/graphql/inputs/run-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/run-input.mdx",tags:[],version:"current",frontMatter:{id:"run-input",title:"RunInput"},sidebar:"sidebar",previous:{title:"RootSiteInput",permalink:"/docs/graphql/inputs/root-site-input"},next:{title:"ScheduledMoneyValueInput",permalink:"/docs/graphql/inputs/scheduled-money-value-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>room_ids</code> ([Int!])",id:"room_ids-int",children:[],level:4},{value:"<code>schedule_note</code> (String)",id:"schedule_note-string",children:[],level:4},{value:"<code>starts_at</code> (Date)",id:"starts_at-date",children:[],level:4},{value:"<code>title_suffix</code> (String)",id:"title_suffix-string",children:[],level:4},{value:"<code>transitionalRoomIds</code> ([ID!])",id:"transitionalroomids-id",children:[],level:4}],level:3}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RunInput {\n  room_ids: [Int!]\n  schedule_note: String\n  starts_at: Date\n  title_suffix: String\n  transitionalRoomIds: [ID!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"room_ids-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"room_ids")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"[Int!]")),")"),(0,a.kt)("h4",{id:"schedule_note-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"schedule_note")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"starts_at-date"},(0,a.kt)("inlineCode",{parentName:"h4"},"starts_at")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,a.kt)("h4",{id:"title_suffix-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"title_suffix")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"transitionalroomids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalRoomIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"))}d.isMDXComponent=!0}}]);