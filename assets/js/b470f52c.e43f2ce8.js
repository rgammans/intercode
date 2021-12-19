"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[77549],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,_=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(_,l(l({ref:t},d),{},{components:n})):o.createElement(_,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(69432),r=n(58703),i=(n(3289),n(75631)),l=["components"],a={id:"registration-policy",title:"RegistrationPolicy"},c=void 0,s={unversionedId:"graphql/objects/registration-policy",id:"graphql/objects/registration-policy",title:"RegistrationPolicy",description:"No description",source:"@site/docs/graphql/objects/registration-policy.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/registration-policy",permalink:"/docs/graphql/objects/registration-policy",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/registration-policy.mdx",tags:[],version:"current",frontMatter:{id:"registration-policy",title:"RegistrationPolicy"},sidebar:"sidebar",previous:{title:"RegistrationPolicyBucket",permalink:"/docs/graphql/objects/registration-policy-bucket"},next:{title:"RejectSignupRequestPayload",permalink:"/docs/graphql/objects/reject-signup-request-payload"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>buckets</code> (RegistrationPolicyBucket)",id:"buckets-registrationpolicybucket",children:[],level:4},{value:"<code>minimum_slots</code> (Int)",id:"minimum_slots-int",children:[],level:4},{value:"<code>minimum_slots_including_not_counted</code> (Int)",id:"minimum_slots_including_not_counted-int",children:[],level:4},{value:"<code>only_uncounted</code> (Boolean)",id:"only_uncounted-boolean",children:[],level:4},{value:"<code>preferred_slots</code> (Int)",id:"preferred_slots-int",children:[],level:4},{value:"<code>preferred_slots_including_not_counted</code> (Int)",id:"preferred_slots_including_not_counted-int",children:[],level:4},{value:"<code>prevent_no_preference_signups</code> (Boolean)",id:"prevent_no_preference_signups-boolean",children:[],level:4},{value:"<code>slots_limited</code> (Boolean)",id:"slots_limited-boolean",children:[],level:4},{value:"<code>total_slots</code> (Int)",id:"total_slots-int",children:[],level:4},{value:"<code>total_slots_including_not_counted</code> (Int)",id:"total_slots_including_not_counted-int",children:[],level:4}],level:3}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type RegistrationPolicy {\n  buckets: [RegistrationPolicyBucket!]!\n  minimum_slots: Int\n  minimum_slots_including_not_counted: Int\n  only_uncounted: Boolean\n  preferred_slots: Int\n  preferred_slots_including_not_counted: Int\n  prevent_no_preference_signups: Boolean!\n  slots_limited: Boolean\n  total_slots: Int\n  total_slots_including_not_counted: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"buckets-registrationpolicybucket"},(0,i.kt)("inlineCode",{parentName:"h4"},"buckets")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/registration-policy-bucket"},(0,i.kt)("inlineCode",{parentName:"a"},"RegistrationPolicyBucket")),")"),(0,i.kt)("h4",{id:"minimum_slots-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"minimum_slots")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"minimum_slots_including_not_counted-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"minimum_slots_including_not_counted")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"only_uncounted-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"only_uncounted")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"preferred_slots-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"preferred_slots")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"preferred_slots_including_not_counted-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"preferred_slots_including_not_counted")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"prevent_no_preference_signups-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"prevent_no_preference_signups")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"slots_limited-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"slots_limited")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"total_slots-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_slots")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"total_slots_including_not_counted-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_slots_including_not_counted")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}u.isMDXComponent=!0}}]);