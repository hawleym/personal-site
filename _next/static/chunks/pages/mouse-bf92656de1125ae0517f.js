_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{MbLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("YFqc"),u=n.n(o),s=a.a.createElement;function c(){return s("header",{class:"text-gray-700 bg-sage bg-opacity-60 body-font"},s("nav",null,s("ul",{className:"p-4 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},s("li",null,s(u.a,{href:"/"},s("a",{className:"text-sage-dark hover:text-white px-3 py-2 rounded-md text-4xl font-medium"},"Hawley Moore"))),s("li",null,s(u.a,{href:"/about"},s("a",{className:"text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium"},"About"))),s("li",null,s(u.a,{href:"/art"},s("a",{className:"text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium"},"My Art"))),s("li",null,s(u.a,{href:"/mouse"},s("a",{className:"text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium"},"My Cat"))),s("li",null,s(u.a,{href:"/music"},s("a",{className:"text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium"},"Music"))))))}},X9wf:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("q1tI"),a=n.n(r),o=n("MbLX"),u=a.a.createElement;function s(){return u("div",null,u(o.a,null),u("div",{className:"py-20"},u("h1",{className:"text-5xl text-center text-sage"},"Meet my cat, Mouse.")),u("div",null,u("img",{src:"/images/mouse1.jpg",alt:"Cat on the couch"})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),u=n("elyg"),s=n("nOHt"),c=n("vNVm"),l={};function i(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,u.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,u.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,v=e.replace,h=e.shallow,y=e.scroll,x=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var g=o.Children.only(m),w=g&&"object"===typeof g&&g.ref,b=(0,c.useIntersection)({rootMargin:"200px"}),M=r(b,2),E=M[0],N=M[1],_=o.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);(0,o.useEffect)((function(){var e=N&&t&&(0,u.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&i(n,d,p,{locale:r})}),[p,d,N,x,t,n]);var L={ref:_,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,d,p,v,h,y,x)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),i(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof x?x:n&&n.locale,I=(0,u.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);L.href=I||(0,u.addBasePath)((0,u.addLocale)(p,k,n&&n.defaultLocale))}return o.default.cloneElement(g,L)};t.default=f},pVQQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mouse",function(){return n("X9wf")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,a=(0,o.useRef)(),l=(0,o.useState)(!1),i=r(l,2),f=i[0],d=i[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,u=r.elements;return u.set(e,t),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){s||f||(0,u.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),u=a(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var c=new Map}},[["pVQQ",0,2,1]]]);