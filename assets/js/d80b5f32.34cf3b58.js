"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[11665],{75631:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97642:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(14002),o=n(89922),a=(n(3289),n(75631)),i=["components"],s={id:"cms-parent-by-request-host",title:"cmsParentByRequestHost"},c=void 0,p={unversionedId:"graphql/queries/cms-parent-by-request-host",id:"graphql/queries/cms-parent-by-request-host",title:"cmsParentByRequestHost",description:"Returns the CMS parent object associated with the domain name of this HTTP request. In a",source:"@site/docs/graphql/queries/cms-parent-by-request-host.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/cms-parent-by-request-host",permalink:"/docs/graphql/queries/cms-parent-by-request-host",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/cms-parent-by-request-host.mdx",tags:[],version:"current",frontMatter:{id:"cms-parent-by-request-host",title:"cmsParentByRequestHost"},sidebar:"sidebar",previous:{title:"cmsParentByDomain",permalink:"/docs/graphql/queries/cms-parent-by-domain"},next:{title:"conventionByDomain",permalink:"/docs/graphql/queries/convention-by-domain"}},u=[{value:"Type",id:"type",children:[{value:"CmsParent",id:"cmsparent",children:[],level:4}],level:3}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns the CMS parent object associated with the domain name of this HTTP request. In a\nconvention domain, this is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Convention")," itself. Otherwise, it's the ",(0,a.kt)("inlineCode",{parentName:"p"},"RootSite"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"cmsParentByRequestHost: CmsParent!\n\n")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"cmsparent"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/cms-parent"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsParent"))),(0,a.kt)("p",null,"A CMS parent is a web site managed by Intercode. It acts as a container for CMS content, such\nas pages, partials, files, layouts, variables, content groups, and user-defined GraphQL queries."),(0,a.kt)("p",null,"Most CMS parents are conventions, so their content will be convention-specific and scoped to\nthat convention's domain name. The exception to this is the root site, which is what Intercode\nrenders when there is no convention associated with the current domain name. (See the RootSite\nobject for more details about this.)"))}m.isMDXComponent=!0}}]);