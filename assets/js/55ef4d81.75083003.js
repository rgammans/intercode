"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[76203],{75631:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:i,a[1]=m;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93349:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(1629),i=r(17322),o=(r(3289),r(75631)),a=["components"],m={id:"preview-form-item",title:"previewFormItem"},c=void 0,l={unversionedId:"graphql/queries/preview-form-item",id:"graphql/queries/preview-form-item",isDocsHomePage:!1,title:"previewFormItem",description:"DEPRECATED: Domain-specific queries are being deprecated. Please use the previewformitem field on the FormSection type instead.",source:"@site/docs/graphql/queries/preview-form-item.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/preview-form-item",permalink:"/docs/graphql/queries/preview-form-item",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/preview-form-item.mdx",tags:[],version:"current",frontMatter:{id:"preview-form-item",title:"previewFormItem"},sidebar:"sidebar",previous:{title:"organizations",permalink:"/docs/graphql/queries/organizations"},next:{title:"previewLiquid",permalink:"/docs/graphql/queries/preview-liquid"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>formItem</code> (FormItemInput!)",id:"formitem-formiteminput",children:[],level:4},{value:"<code>formSectionId</code> (Int)",id:"formsectionid-int",children:[],level:4},{value:"<code>transitionalFormSectionId</code> (ID)",id:"transitionalformsectionid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"FormItem",id:"formitem",children:[],level:4}],level:3}],s={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Domain-specific queries are being deprecated. Please use the `preview_form_item` field on the FormSection type instead."),(0,o.kt)("p",null,"Given a form section ID and a FormItemInput, returns a preview version of that form item\nwithin that section. This does not actually save the form item. This is mostly useful\nbecause of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rendered_properties")," field inside FormItem, which lets clients retrieve\na rendered HTML version of the Liquid-enabled properties of the form item."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"previewFormItem(\n  formItem: FormItemInput!\n  formSectionId: Int\n  transitionalFormSectionId: ID\n): FormItem!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"formitem-formiteminput"},(0,o.kt)("inlineCode",{parentName:"h4"},"formItem")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/form-item-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItemInput!")),")"),(0,o.kt)("p",null,"The fields to use for constructing the form item to preview."),(0,o.kt)("h4",{id:"formsectionid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"formSectionId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The ID of the form section to preview the item in."),(0,o.kt)("h4",{id:"transitionalformsectionid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalFormSectionId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("p",null,"The ID of the form section to preview the item in."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"formitem"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form-item"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItem"))))}u.isMDXComponent=!0}}]);