"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[25186],{75631:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57798:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(1629),i=n(17322),o=(n(3289),n(75631)),a=["components"],c={id:"create-form-section-input",title:"CreateFormSectionInput"},p=void 0,l={unversionedId:"graphql/inputs/create-form-section-input",id:"graphql/inputs/create-form-section-input",isDocsHomePage:!1,title:"CreateFormSectionInput",description:"Autogenerated input type of CreateFormSection",source:"@site/docs/graphql/inputs/create-form-section-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-form-section-input",permalink:"/docs/graphql/inputs/create-form-section-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-form-section-input.mdx",tags:[],version:"current",frontMatter:{id:"create-form-section-input",title:"CreateFormSectionInput"},sidebar:"sidebar",previous:{title:"CreateFormItemInput",permalink:"/docs/graphql/inputs/create-form-item-input"},next:{title:"CreateFormWithJSONInput",permalink:"/docs/graphql/inputs/create-form-with-json-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>form_id</code> (Int)",id:"form_id-int",children:[],level:4},{value:"<code>form_section</code> (FormSectionInput!)",id:"form_section-formsectioninput",children:[],level:4},{value:"<code>transitionalFormId</code> (ID)",id:"transitionalformid-id",children:[],level:4}],level:3}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of CreateFormSection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateFormSectionInput {\n  clientMutationId: String\n  form_id: Int\n  form_section: FormSectionInput!\n  transitionalFormId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"form_id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"form_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"form_section-formsectioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"form_section")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/form-section-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FormSectionInput!")),")"),(0,o.kt)("h4",{id:"transitionalformid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalFormId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}d.isMDXComponent=!0}}]);