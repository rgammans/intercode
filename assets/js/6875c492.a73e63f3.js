"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[48610],{58833:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(32056),l=a(3289),n=a(52238),i=a(82822),s=a(52220),m="sidebar_P_sk",o="sidebarItemTitle_gsUs",c="sidebarItemList_F000",g="sidebarItem_f9Lx",d="sidebarItemLink_mgQH",u="sidebarItemLinkActive_RiYr",p=a(96326);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var b=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,b),o=t&&t.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},19474:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(3289),l=a(96326),n=a(69511);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},24854:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(3289),l=a(52238),n=a(96326),i=a(52220),s=a(52757),m=a(21129),o=a(36700),c=a(60044),g=a(24872),d="blogPostTitle_TWYT",u="blogPostData_TOX4",p="blogPostDetailsFull_tkYM",h=a(71129),b="image_JXid";function E(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function v(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,s=t.email,m=n||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(E,{href:m},r.createElement("img",{className:b,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_UHds",_="imageOnlyAuthorRow_eml2",N="imageOnlyAuthorCol_DzLW";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:f),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function P(e){var t,a,b=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,s.C)().withBaseUrl,v=e.children,f=e.frontMatter,_=e.assets,N=e.metadata,P=e.truncated,k=e.isBlogPostPage,T=void 0!==k&&k,w=N.date,I=N.formattedDate,y=N.permalink,L=N.tags,M=N.readingTime,A=N.title,x=N.editUrl,U=N.authors,R=null!=(t=_.image)?t:f.image,B=!T&&P,C=L.length>0,O=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:d,itemProp:"headline"},T?A:r.createElement(i.Z,{itemProp:"url",to:y},A)),r.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",b(M))),r.createElement(Z,{authors:U,assets:_})),R&&r.createElement("meta",{itemProp:"image",content:E(R,{absolute:!0})}),r.createElement("div",{id:T?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,v)),(C||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",T&&p)},C&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},r.createElement(h.Z,{tags:L})),T&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:x})),B&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":C})},r.createElement(i.Z,{to:N.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},96200:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(3289),l=a(52220),n=a(58833),i=a(24854),s=a(96326),m=a(21129),o=a(19474),c=a(89048),g=a(52238);function d(e){var t,a=e.metadata,d=e.items,u=e.sidebar,p=e.listMetadata,h=a.allTagsPath,b=a.name,E=a.count,v=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(E),tagName:b});return r.createElement(m.FG,{className:(0,g.Z)(m.kM.wrapper.blogPages,m.kM.page.blogTagPostListPage)},r.createElement(m.d,{title:f}),r.createElement(c.Z,{tag:"blog_tags_posts"}),r.createElement(n.Z,{sidebar:u},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(l.Z,{href:h},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),d.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(o.Z,{metadata:p})))}}}]);