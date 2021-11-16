"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24223],{75631:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41560:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(50753),a=n(61242),i=(n(3289),n(75631)),o=["components"],c={id:"signup",title:"Signup"},l=void 0,d={unversionedId:"graphql/objects/signup",id:"graphql/objects/signup",isDocsHomePage:!1,title:"Signup",description:"No description",source:"@site/docs/graphql/objects/signup.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/signup",permalink:"/docs/graphql/objects/signup",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/signup.mdx",tags:[],version:"current",frontMatter:{id:"signup",title:"Signup"},sidebar:"sidebar",previous:{title:"SignupRequestsPagination",permalink:"/docs/graphql/objects/signup-requests-pagination"},next:{title:"SignupsPagination",permalink:"/docs/graphql/objects/signups-pagination"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>age_restrictions_check</code> (String)",id:"age_restrictions_check-string",children:[],level:4},{value:"<code>bucket_key</code> (String)",id:"bucket_key-string",children:[],level:4},{value:"<code>choice</code> (Int)",id:"choice-int",children:[],level:4},{value:"<code>counted</code> (Boolean)",id:"counted-boolean",children:[],level:4},{value:"<code>created_at</code> (Date)",id:"created_at-date",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>requested_bucket_key</code> (String)",id:"requested_bucket_key-string",children:[],level:4},{value:"<code>run</code> (Run)",id:"run-run",children:[],level:4},{value:"<code>state</code> (SignupState)",id:"state-signupstate",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4},{value:"<code>updated_at</code> (Date)",id:"updated_at-date",children:[],level:4},{value:"<code>user_con_profile</code> (UserConProfile)",id:"user_con_profile-userconprofile",children:[],level:4},{value:"<code>waitlist_position</code> (Int)",id:"waitlist_position-int",children:[],level:4}],level:3}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Signup {\n  age_restrictions_check: String!\n  bucket_key: String\n  choice: Int\n  counted: Boolean!\n  created_at: Date!\n  id: ID!\n  requested_bucket_key: String\n  run: Run!\n  state: SignupState!\n  transitionalId: ID!\n  updated_at: Date!\n  user_con_profile: UserConProfile!\n  waitlist_position: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"age_restrictions_check-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"age_restrictions_check")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"bucket_key-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"bucket_key")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"choice-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"choice")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"counted-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"counted")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"created_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"created_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"requested_bucket_key-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"requested_bucket_key")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"run-run"},(0,i.kt)("inlineCode",{parentName:"h4"},"run")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/run"},(0,i.kt)("inlineCode",{parentName:"a"},"Run")),")"),(0,i.kt)("h4",{id:"state-signupstate"},(0,i.kt)("inlineCode",{parentName:"h4"},"state")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-state"},(0,i.kt)("inlineCode",{parentName:"a"},"SignupState")),")"),(0,i.kt)("h4",{id:"transitionalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs have transitioned to the ID type. Please switch back to the id field so that we can remove this temporary one."),(0,i.kt)("h4",{id:"updated_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"user_con_profile-userconprofile"},(0,i.kt)("inlineCode",{parentName:"h4"},"user_con_profile")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,i.kt)("inlineCode",{parentName:"a"},"UserConProfile")),")"),(0,i.kt)("h4",{id:"waitlist_position-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"waitlist_position")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}u.isMDXComponent=!0}}]);