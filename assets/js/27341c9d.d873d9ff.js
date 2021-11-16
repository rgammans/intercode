"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[33858],{75631:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=i,u=m["".concat(d,".").concat(h)]||m[h]||p[h]||o;return r?n.createElement(u,a(a({ref:t},s),{},{components:r})):n.createElement(u,a({ref:t},s))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53314:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(50753),i=r(61242),o=(r(3289),r(75631)),a=["components"],l={id:"form-item",title:"FormItem"},d=void 0,c={unversionedId:"graphql/objects/form-item",id:"graphql/objects/form-item",isDocsHomePage:!1,title:"FormItem",description:"No description",source:"@site/docs/graphql/objects/form-item.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/form-item",permalink:"/docs/graphql/objects/form-item",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/form-item.mdx",tags:[],version:"current",frontMatter:{id:"form-item",title:"FormItem"},sidebar:"sidebar",previous:{title:"ForceConfirmSignupPayload",permalink:"/docs/graphql/objects/force-confirm-signup-payload"},next:{title:"FormResponseChange",permalink:"/docs/graphql/objects/form-response-change"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>admin_description</code> (String)",id:"admin_description-string",children:[],level:4},{value:"<code>default_value</code> (Json)",id:"default_value-json",children:[],level:4},{value:"<code>form_section</code> (FormSection)",id:"form_section-formsection",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>identifier</code> (String)",id:"identifier-string",children:[],level:4},{value:"<code>item_type</code> (String)",id:"item_type-string",children:[],level:4},{value:"<code>position</code> (Int)",id:"position-int",children:[],level:4},{value:"<code>properties</code> (Json)",id:"properties-json",children:[],level:4},{value:"<code>public_description</code> (String)",id:"public_description-string",children:[],level:4},{value:"<code>rendered_properties</code> (Json)",id:"rendered_properties-json",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4},{value:"<code>visibility</code> (FormItemRole)",id:"visibility-formitemrole",children:[],level:4},{value:"<code>writeability</code> (FormItemRole)",id:"writeability-formitemrole",children:[],level:4}],level:3}],p={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FormItem {\n  admin_description: String\n  default_value: Json\n  form_section: FormSection!\n  id: ID!\n  identifier: String\n  item_type: String!\n  position: Int!\n  properties: Json!\n  public_description: String\n  rendered_properties: Json!\n  transitionalId: ID!\n  visibility: FormItemRole!\n  writeability: FormItemRole!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"admin_description-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"admin_description")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"default_value-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"default_value")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"form_section-formsection"},(0,o.kt)("inlineCode",{parentName:"h4"},"form_section")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form-section"},(0,o.kt)("inlineCode",{parentName:"a"},"FormSection")),")"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"identifier-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"identifier")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"item_type-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"item_type")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"position-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"properties-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"properties")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"public_description-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"public_description")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"rendered_properties-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"rendered_properties")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"transitionalid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs have transitioned to the ID type. Please switch back to the id field so that we can remove this temporary one."),(0,o.kt)("h4",{id:"visibility-formitemrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"visibility")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/form-item-role"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItemRole")),")"),(0,o.kt)("h4",{id:"writeability-formitemrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"writeability")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/form-item-role"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItemRole")),")"))}m.isMDXComponent=!0}}]);