_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{MbLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),s=n("YFqc"),c=n.n(s);function o(){return Object(r.jsx)("header",{className:"font-montserrat text-gray-700 bg-gray-200 bg-opacity-60 body-font fixed w-screen font-medium sm:text-3sm text-sm z-50",children:Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"p-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"pr-3 rounded-md md:text-3xl sm:text-2xl text-xl hover:text-white",children:"HAWLEY MOORE"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(c.a,{href:"/about",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"About"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(c.a,{href:"/art",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Art"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(c.a,{href:"/music",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Music"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(c.a,{href:"/contact",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Contact"})})})]})})})}},PhvT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("nKUr"),s=n("MbLX"),c=[{title:"kitchen limbo",src:"https://open.spotify.com/embed/playlist/322AJJWNX7rBufEIboSVQq"},{title:"if you eat salad at my funeral, i'll be livid",src:"https://open.spotify.com/embed/playlist/6bm9AZARvIG7plnSHDo6lf"},{title:"coffee for dinner",src:"https://open.spotify.com/embed/playlist/5Z9Hfijtg5vKzsJGB1V5XB"},{title:"corn teen",src:"https://open.spotify.com/embed/playlist/4I002ODgfX2auEon1JExkg"},{title:"2 PM",src:"https://open.spotify.com/embed/playlist/6jgfkYkYcJ6HsQo3cbwo2j"},{title:"lunch break",src:"https://open.spotify.com/embed/playlist/2mS5GHS0Md6VwiEeasqWAy"},{title:"purgatory is a strip mall parking lot",src:"https://open.spotify.com/embed/playlist/7nx7g8gLRZCbrMuMFyeHgE"},{title:"cathedral",src:"https://open.spotify.com/embed/playlist/6M1CBeFUTN7oxUtbJLvKQi"}],o=function(e){return Object(r.jsx)("li",{className:"py-2",children:Object(r.jsx)("iframe",{title:e.title,src:e.src,width:"100%",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})})};function a(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(s.a,{}),Object(r.jsx)("div",{className:"py-10",children:Object(r.jsx)("h1",{className:"text-2xl text-center text-gray-500 pt-20 mx-10",children:"I love listening to music and have fun making playlists for the enjoyment of myself and others. Here are some of my personal favorites. I hope you like them!"})}),Object(r.jsx)("ul",{className:"grid gap-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 object-center pl-4 pr-4",children:c.map(o)})]})}},Ufkj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/music",function(){return n("PhvT")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var c=s(n("q1tI")),o=n("elyg"),a=n("nOHt"),i=n("vNVm"),l={};function f(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(s?"%"+s:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),s=n&&n.pathname||"/",u=c.default.useMemo((function(){var t=(0,o.resolveHref)(s,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,o.resolveHref)(s,e.as):a||c}}),[s,e.href,e.as]),d=u.href,p=u.as,m=e.children,h=e.replace,b=e.shallow,j=e.scroll,x=e.locale;"string"===typeof m&&(m=c.default.createElement("a",null,m));var v=c.Children.only(m),y=v&&"object"===typeof v&&v.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),O=r(g,2),w=O[0],N=O[1],E=c.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,c.useEffect)((function(){var e=N&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,s=l[d+"%"+p+(r?"%"+r:"")];e&&!s&&f(n,d,p,{locale:r})}),[p,d,N,x,t,n]);var M={ref:E,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,c,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[s?"replace":"push"](n,r,{shallow:c,locale:i,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,d,p,h,b,j,x)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var k="undefined"!==typeof x?x:n&&n.locale,L=(0,o.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);M.href=L||(0,o.addBasePath)((0,o.addLocale)(p,k,n&&n.defaultLocale))}return c.default.cloneElement(v,M)};t.default=u},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),s=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,c.useRef)(),l=(0,c.useState)(!1),f=r(l,2),u=f[0],d=f[1],p=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:s,elements:r}),n}(n),s=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return(0,c.useEffect)((function(){a||u||(0,o.default)((function(){return d(!0)}))}),[u]),[p,u]};var c=n("q1tI"),o=s(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["Ufkj",0,2,1]]]);