_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("MbLX"),c=o.a.createElement;function u(){return c("div",null,c(a.a,null),c("div",{className:"py-20"},c("h1",{className:"text-5xl text-center text-gray-700 dark:text-gray-100"},"About Me")))}},MbLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),u=o.a.createElement,l=[{href:"https://github.com/vercel/next.js",label:"GitHub"},{href:"https://nextjs.org/docs",label:"Docs"}];function i(){return u("nav",null,u("ul",{className:"flex items-center justify-between p-8"},u("li",null,u(c.a,{href:"/"},u("a",{className:"text-blue-500 no-underline text-accent-1 dark:text-blue-300"},"Home"))),u("li",null,u(c.a,{href:"/about"},u("a",{className:"text-blue-500 no-underline text-accent-1 dark:text-blue-300"},"About"))),u("ul",{className:"flex items-center justify-between space-x-4"},l.map((function(e){var t=e.href,n=e.label;return u("li",{key:"".concat(t).concat(n)},u("a",{href:t,className:"no-underline btn-blue"},n))})))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),u=n("nOHt"),l=n("vNVm"),i={};function s(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),x=g&&"object"===typeof g&&g.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),E=r(w,2),_=E[0],N=E[1],M=a.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);(0,a.useEffect)((function(){var e=N&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=i[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,N,y,t,n]);var L={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,d,p,h,b,m,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof y?y:n&&n.locale,I=(0,c.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);L.href=I||(0,c.addBasePath)((0,c.addLocale)(p,k,n&&n.defaultLocale))}return a.default.cloneElement(g,L)};t.default=f},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,o=(0,a.useRef)(),i=(0,a.useState)(!1),s=r(i,2),f=s[0],d=s[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){u||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),c=o(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var l=new Map}},[["rB5V",0,2,1]]]);