"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[66968],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,m=s["".concat(p,".").concat(f)]||s[f]||c[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62437:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(88078),i=n(65844),a=(n(3289),n(75631)),o=["components"],l={id:"root-site-input",title:"RootSiteInput"},p=void 0,u={unversionedId:"graphql/inputs/root-site-input",id:"graphql/inputs/root-site-input",isDocsHomePage:!1,title:"RootSiteInput",description:"No description",source:"@site/docs/graphql/inputs/root-site-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/root-site-input",permalink:"/docs/graphql/inputs/root-site-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/root-site-input.mdx",tags:[],version:"current",frontMatter:{id:"root-site-input",title:"RootSiteInput"},sidebar:"sidebar",previous:{title:"RoomInput",permalink:"/docs/graphql/inputs/room-input"},next:{title:"RunInput",permalink:"/docs/graphql/inputs/run-input"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>default_layout_id</code> (Int)",id:"default_layout_id-int",children:[],level:4},{value:"<code>root_page_id</code> (Int)",id:"root_page_id-int",children:[],level:4},{value:"<code>site_name</code> (String)",id:"site_name-string",children:[],level:4},{value:"<code>transitionalDefaultLayoutId</code> (ID)",id:"transitionaldefaultlayoutid-id",children:[],level:4},{value:"<code>transitionalRootPageId</code> (ID)",id:"transitionalrootpageid-id",children:[],level:4}],level:3}],c={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RootSiteInput {\n  default_layout_id: Int\n  root_page_id: Int\n  site_name: String\n  transitionalDefaultLayoutId: ID\n  transitionalRootPageId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"default_layout_id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"default_layout_id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"root_page_id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"root_page_id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"site_name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"site_name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"transitionaldefaultlayoutid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalDefaultLayoutId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"transitionalrootpageid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalRootPageId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);