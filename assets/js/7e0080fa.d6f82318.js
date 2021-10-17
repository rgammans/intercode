"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[82983],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69146:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(1629),i=n(17322),o=(n(3289),n(75631)),a=["components"],l={id:"sort-input",title:"SortInput"},s=void 0,p={unversionedId:"graphql/inputs/sort-input",id:"graphql/inputs/sort-input",isDocsHomePage:!1,title:"SortInput",description:"A description of a field to sort a result set by. This is typically used in pagination",source:"@site/docs/graphql/inputs/sort-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/sort-input",permalink:"/docs/graphql/inputs/sort-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/sort-input.mdx",tags:[],version:"current",frontMatter:{id:"sort-input",title:"SortInput"},sidebar:"sidebar",previous:{title:"SortCmsNavigationItemsInput",permalink:"/docs/graphql/inputs/sort-cms-navigation-items-input"},next:{title:"StaffPositionInput",permalink:"/docs/graphql/inputs/staff-position-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>desc</code> (Boolean!)",id:"desc-boolean",children:[],level:4},{value:"<code>field</code> (String!)",id:"field-string",children:[],level:4}],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A description of a field to sort a result set by. This is typically used in pagination\nfields to specify how the results should be ordered."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SortInput {\n  desc: Boolean!\n  field: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"desc-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"desc")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("p",null,"If true, the field will be sorted in descending order. If false, it will be sorted in\nascending order."),(0,o.kt)("h4",{id:"field-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"field")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("p",null,"The name of the field to sort by."))}d.isMDXComponent=!0}}]);