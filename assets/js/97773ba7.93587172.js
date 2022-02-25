"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[6197],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87503:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(14002),a=n(89922),o=(n(3289),n(75631)),i=["components"],l={title:"New Intercode Schedule Design",tags:["changelog"],authors:["marleighnorton","nbudin","dkapell"]},s=void 0,u={permalink:"/blog/2019/10/03/new-intercode-schedule-design",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/blog/blog/2019-10-03-new-intercode-schedule-design/index.md",source:"@site/blog/2019-10-03-new-intercode-schedule-design/index.md",title:"New Intercode Schedule Design",description:"We're rolling out some changes to how the schedule and run buckets display in Intercode 2. Here\u2019s the highlights:",date:"2019-10-03T00:00:00.000Z",formattedDate:"October 3, 2019",tags:[{label:"changelog",permalink:"/blog/tags/changelog"}],readingTime:1.59,truncated:!0,authors:[{name:"Marleigh Norton",url:"https://github.com/marleighnorton",imageURL:"https://github.com/marleighnorton.png",key:"marleighnorton"},{name:"Nat Budin",url:"https://github.com/nbudin",imageURL:"https://github.com/nbudin.png",key:"nbudin"},{name:"Dave Kapell",url:"https://github.com/dkapell",imageURL:"https://github.com/dkapell.png",key:"dkapell"}],frontMatter:{title:"New Intercode Schedule Design",tags:["changelog"],authors:["marleighnorton","nbudin","dkapell"]},prevItem:{title:"SMS Notifications",permalink:"/blog/2020/01/27/sms-notifications"}},c={authorsImageUrls:[void 0,void 0,void 0]},p=[{value:"Schedule",id:"schedule",level:2},{value:"Schedule Legend Example",id:"schedule-legend-example",level:3},{value:"Signup Buckets",id:"signup-buckets",level:2},{value:"Signup Bucket Examples",id:"signup-bucket-examples",level:3}],d={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're rolling out some changes to how the schedule and run buckets display in Intercode 2. Here\u2019s the highlights:"),(0,o.kt)("h2",{id:"schedule"},"Schedule"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instead of having a thin green bar that empties as people sign up for an event, the event will have rounded ends, and act as a progress bar that goes up as people sign up. Once the event is full, it will be lightened to show that it is full."),(0,o.kt)("li",{parentName:"ul"},"Events that have unlimited slots will remain rectangular, and have a gradient background to show that you can sign up for them."),(0,o.kt)("li",{parentName:"ul"},"Events that have no slots (i.e. consuite) will remain rectangular, and have a solid background."),(0,o.kt)("li",{parentName:"ul"},'The "you are signed up for this game" has changed to a user/head icon instead of the checkbox that looked like an interactive element.'),(0,o.kt)("li",{parentName:"ul"},'The concom only "Schedule With Counts" view has been updated to show the percentage of signups in the same style, as a background progress bar on each event.'),(0,o.kt)("li",{parentName:"ul"},"The sorting of events on the schedule has been updated to better group multiple runs of events together if they\u2019re sequential.")),(0,o.kt)("h3",{id:"schedule-legend-example"},"Schedule Legend Example"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"The new schedule legend view, showing examples of types of event",src:n(85801).Z})),(0,o.kt)("h2",{id:"signup-buckets"},"Signup Buckets"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instead of having a broken line that turns from colored segments to gray, we\u2019re displaying a set of empty circles that get replaced by the same user/head icon that we use on the schedule as people sign up. This should be easier to read at a glance."),(0,o.kt)("li",{parentName:"ul"},"When you click on a run in the schedule view, the same set of circles/heads are displayed there as well.")),(0,o.kt)("h3",{id:"signup-bucket-examples"},"Signup Bucket Examples"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"The view of an event run from its event page, showing the lines of empty circles for open slots",src:n(82941).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"The view of an event run from the schedule grid, showing the reorganized popup view with lines of empty circles",src:n(7717).Z})))}h.isMDXComponent=!0},85801:function(e,t,n){t.Z=n.p+"assets/images/news_20191003_legend-2f598cad972802e87d02e05e26981407.png"},7717:function(e,t,n){t.Z=n.p+"assets/images/news_20191003_popup-f48d99a1d7e26e63d3e24539aebb6d17.png"},82941:function(e,t,n){t.Z=n.p+"assets/images/news_20191003_run-48c1c9a3d28cadeb398270b2e4681424.png"}}]);