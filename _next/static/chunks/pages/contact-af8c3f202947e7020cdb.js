_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{ALdH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("nKUr"),c=n("MbLX");function a(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(c.a,{}),Object(r.jsxs)("div",{className:"py-10",children:[Object(r.jsx)("h1",{className:"pt-20 text-5xl text-center text-gray-700",children:"Contact Me"}),Object(r.jsx)("p",{className:"text-l p-5 text-center text-gray-900",children:"Don't attempt to contact me. I'll find you."})]})]})}},MbLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),c=n("YFqc"),a=n.n(c);function o(){return Object(r.jsx)("header",{className:"font-montserrat text-gray-700 bg-gray-200 bg-opacity-60 body-font fixed w-screen font-medium sm:text-3sm text-sm",children:Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"p-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("a",{className:"pr-3 rounded-md md:text-3xl sm:text-2xl text-xl hover:text-white",children:"HAWLEY MOORE"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(a.a,{href:"/about",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"About"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(a.a,{href:"/art",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Art"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(a.a,{href:"/music",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Music"})})}),Object(r.jsx)("li",{className:"sm:pt-2 pt-1",children:Object(r.jsx)(a.a,{href:"/contact",children:Object(r.jsx)("a",{className:"px-3 rounded-md hover:text-white",children:"Contact"})})})]})})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),o=n("elyg"),s=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,o.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,o.resolveHref)(c,e.as):s||a}}),[c,e.href,e.as]),d=f.href,p=f.as,h=e.children,x=e.replace,m=e.shallow,j=e.scroll,v=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=a.Children.only(h),O=b&&"object"===typeof b&&b.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),N=r(y,2),g=N[0],w=N[1],E=a.default.useCallback((function(e){g(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,g]);(0,a.useEffect)((function(){var e=w&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof v?v:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,w,v,t,n]);var L={ref:E,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,d,p,x,m,j,v)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var M="undefined"!==typeof v?v:n&&n.locale,_=(0,o.getDomainLocale)(p,M,n&&n.locales,n&&n.domainLocales);L.href=_||(0,o.addBasePath)((0,o.addLocale)(p,M,n&&n.defaultLocale))}return a.default.cloneElement(b,L)};t.default=f},lqnA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){s||f||(0,o.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),o=c(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map}},[["lqnA",0,2,1]]]);