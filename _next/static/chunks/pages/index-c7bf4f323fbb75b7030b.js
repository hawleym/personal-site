_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),p=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var p=a.key.slice(a.key.indexOf("$")+1);e.has(p)?o=!1:e.add(p)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var s=d[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var u=a.props[s],h=r[s]||new Set;"name"===s&&i||!h.has(u)?(h.add(u),r[s]=h):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(p.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},MbLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),a=n("YFqc"),o=n.n(a);function i(){return Object(r.jsx)("header",{className:"font-montserrat text-gray-700 bg-gray-200 bg-opacity-60 body-font fixed w-screen font-medium sm:text-3sm text-sm",children:Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"p-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:"pr-3 rounded-md md:text-3xl sm:text-2xl text-xl hover:text-white",children:"HAWLEY MOORE"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(o.a,{href:"/about",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"About"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(o.a,{href:"/art",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Art"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(o.a,{href:"/music",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Music"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(o.a,{href:"/contact",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Contact"})})})]})})})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n("nKUr"),a=n("g4pe"),o=n.n(a),i=n("q1tI"),p=n.n(i);function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},s=function(e){var t=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var n="";e.title?(n=e.title,l.templateTitle&&(n=l.templateTitle.replace(/%s/g,(function(){return n})))):e.defaultTitle&&(n=e.defaultTitle),n&&t.push(p.a.createElement("title",{key:"title"},n));var r=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,a=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,o="";if(e.robotsProps){var i=e.robotsProps,c=i.nosnippet,s=i.maxSnippet,u=i.maxImagePreview,d=i.maxVideoPreview,h=i.noarchive,f=i.noimageindex,m=i.notranslate,g=i.unavailableAfter;o=(c?",nosnippet":"")+(s?",max-snippet:"+s:"")+(u?",max-image-preview:"+u:"")+(h?",noarchive":"")+(g?",unavailable_after:"+g:"")+(f?",noimageindex":"")+(d?",max-video-preview:"+d:"")+(m?",notranslate":"")}if(r||a?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),t.push(p.a.createElement("meta",{key:"robots",name:"robots",content:(r?"noindex":"index")+","+(a?"nofollow":"follow")+o})),t.push(p.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(r?"noindex":"index")+","+(a?"nofollow":"follow")+o}))):(t.push(p.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+o})),t.push(p.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+o}))),e.description&&t.push(p.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(p.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(p.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(p.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(p.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(p.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(p.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(p.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var y=e.openGraph.type.toLowerCase();t.push(p.a.createElement("meta",{key:"og:type",property:"og:type",content:y})),"profile"===y&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(p.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(p.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(p.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(p.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===y&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"book:author:0"+n,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(p.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(p.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"book:tag:0"+n,property:"book:tag",content:e}))}))):"article"===y&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(p.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(p.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(p.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"article:author:0"+n,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(p.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"article:tag:0"+n,property:"article:tag",content:e}))}))):"video.movie"!==y&&"video.episode"!==y&&"video.tv_show"!==y&&"video.other"!==y||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,n){e.profile&&t.push(p.a.createElement("meta",{key:"video:actor:0"+n,property:"video:actor",content:e.profile})),e.role&&t.push(p.a.createElement("meta",{key:"video:actor:role:0"+n,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"video:director:0"+n,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"video:writer:0"+n,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(p.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(p.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"video:tag:0"+n,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(p.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(p.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||n})),(e.openGraph.description||e.description)&&t.push(p.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"og:image:0"+n,property:"og:image",content:e.url})),e.alt&&t.push(p.a.createElement("meta",{key:"og:image:alt0"+n,property:"og:image:alt",content:e.alt})),e.width?t.push(p.a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:e.width.toString()})):l.defaultOpenGraphImageWidth&&t.push(p.a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()})),e.height?t.push(p.a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:e.height.toString()})):l.defaultOpenGraphImageHeight&&t.push(p.a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,n){t.push(p.a.createElement("meta",{key:"og:video:0"+n,property:"og:video",content:e.url})),e.alt&&t.push(p.a.createElement("meta",{key:"og:video:alt0"+n,property:"og:video:alt",content:e.alt})),e.width?t.push(p.a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:e.width.toString()})):l.defaultOpenGraphVideoWidth&&t.push(p.a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:l.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(p.a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:e.height.toString()})):l.defaultOpenGraphVideoHeight&&t.push(p.a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:l.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(p.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(p.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(p.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(p.a.createElement("meta",Object.assign({key:e.name||e.property||e.httpEquiv},e)))})),t},u=(i.Component,function(e){function t(){return e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,r=void 0!==n&&n,a=e.nofollow,i=e.robotsProps,c=e.description,l=e.canonical,u=e.openGraph,d=e.facebook,h=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates;return p.a.createElement(o.a,null,s({title:t,noindex:r,nofollow:a,robotsProps:i,description:c,canonical:l,facebook:d,openGraph:u,additionalMetaTags:f,twitter:h,titleTemplate:m,mobileAlternate:g,languageAlternates:y}))},t}(i.Component)),d=n("MbLX");function h(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{title:"Hawley Moore",description:"Hawley Moore is a Data Analyst and Artist, currently living in New York."}),Object(r.jsx)(d.a,{}),Object(r.jsx)("div",{className:"pt-16",children:Object(r.jsx)("div",{className:"mt-1 sm:mt-3 h-screen bg-no-repeat bg-contain",style:{backgroundImage:"url(/images/art/1.jpg)"}})})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),p=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),u=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=u},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),p=n("nOHt"),c=n("vNVm"),l={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,p.useRouter)(),a=n&&n.pathname||"/",u=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],p=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):p||o}}),[a,e.href,e.as]),d=u.href,h=u.as,f=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var b=o.Children.only(f),k=b&&"object"===typeof b&&b.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),x=r(w,2),G=x[0],E=x[1],O=o.default.useCallback((function(e){G(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,G]);(0,o.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof v?v:n&&n.locale,a=l[d+"%"+h+(r?"%"+r:"")];e&&!a&&s(n,d,h,{locale:r})}),[h,d,E,v,t,n]);var _={ref:O,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,p,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==p&&(p=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:p}).then((function(e){e&&p&&document.body.focus()})))}(e,n,d,h,m,g,y,v)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(n,d,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var j="undefined"!==typeof v?v:n&&n.locale,M=(0,i.getDomainLocale)(h,j,n&&n.locales,n&&n.domainLocales);_.href=M||(0,i.addBasePath)((0,i.addLocale)(h,j,n&&n.defaultLocale))}return o.default.cloneElement(b,_)};t.default=u},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!p,a=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),u=s[0],d=s[1],h=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||u||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return(0,o.useEffect)((function(){p||u||(0,i.default)((function(){return d(!0)}))}),[u]),[h,u]};var o=n("q1tI"),i=a(n("0G5g")),p="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);