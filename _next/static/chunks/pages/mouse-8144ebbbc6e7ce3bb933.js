_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{MbLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("nKUr"),c=n("YFqc"),s=n.n(c);function a(){return Object(r.jsx)("header",{class:"text-gray-700 bg-gray-200 bg-opacity-60 body-font fixed w-screen",children:Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"p-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{className:"text-gray-700 hover:text-white px-3 rounded-md text-3xl font-medium",children:"HAWLEY MOORE"})})}),Object(r.jsx)("li",{className:"pt-2",children:Object(r.jsx)(s.a,{href:"/about",children:Object(r.jsx)("a",{className:"text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium",children:"About"})})}),Object(r.jsx)("li",{className:"pt-2",children:Object(r.jsx)(s.a,{href:"/art",children:Object(r.jsx)("a",{className:"text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium",children:"Art"})})}),Object(r.jsx)("li",{className:"pt-2",children:Object(r.jsx)(s.a,{href:"/mouse",children:Object(r.jsx)("a",{className:"text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium",children:"Cat"})})}),Object(r.jsx)("li",{className:"pt-2",children:Object(r.jsx)(s.a,{href:"/music",children:Object(r.jsx)("a",{className:"text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium",children:"Music"})})})]})})})}},X9wf:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("nKUr"),c=n("MbLX");function s(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(c.a,{}),Object(r.jsx)("div",{className:"py-10",children:Object(r.jsx)("h1",{className:"pt-20 text-5xl text-center text-gray-500",children:"Meet my cat, Mouse."})}),Object(r.jsxs)("div",{className:"grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 object-center pl-4 pr-4",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/images/mouse1.jpg",alt:"Cat on the couch",width:"100%"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/images/mouse2.jpeg",alt:"Sleeping Cat",width:"100%"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/images/mouse3.jpeg",alt:"Cat",width:"100%"})})]})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),a=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",d=s.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),s=n[0],o=n[1];return{href:s,as:e.as?(0,a.resolveHref)(c,e.as):o||s}}),[c,e.href,e.as]),f=d.href,h=d.as,p=e.children,j=e.replace,m=e.shallow,x=e.scroll,b=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var v=s.Children.only(p),g=v&&"object"===typeof v&&v.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),y=r(O,2),w=y[0],N=y[1],M=s.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,s.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,c=l[f+"%"+h+(r?"%"+r:"")];e&&!c&&u(n,f,h,{locale:r})}),[h,f,N,b,t,n]);var E={ref:M,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,s,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:s,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,f,h,j,m,x,b)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,f,h,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var _="undefined"!==typeof b?b:n&&n.locale,L=(0,a.getDomainLocale)(h,_,n&&n.locales,n&&n.domainLocales);E.href=L||(0,a.addBasePath)((0,a.addLocale)(h,_,n&&n.defaultLocale))}return s.default.cloneElement(v,E)};t.default=d},pVQQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mouse",function(){return n("X9wf")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=(0,s.useRef)(),l=(0,s.useState)(!1),u=r(l,2),d=u[0],f=u[1],h=(0,s.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),i.delete(c))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,s.useEffect)((function(){o||d||(0,a.default)((function(){return f(!0)}))}),[d]),[h,d]};var s=n("q1tI"),a=c(n("0G5g")),o="undefined"!==typeof IntersectionObserver;var i=new Map}},[["pVQQ",0,2,1]]]);