(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{1210:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,u=o(7273).Z,a=r(o(7294)),l=o(6273),c=o(2725),f=o(3462),i=o(1018),s=o(7190),p=o(1210),d=o(8684),v={};function y(e,t,o,n){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var b=a.default.forwardRef(function(e,t){var o,r,b=e.href,h=e.as,O=e.children,g=e.prefetch,j=e.passHref,C=e.replace,_=e.shallow,m=e.scroll,x=e.locale,M=e.onClick,P=e.onMouseEnter,L=e.onTouchStart,w=e.legacyBehavior,E=void 0===w?!0!==Boolean(!1):w,R=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=O,E&&("string"==typeof o||"number"==typeof o)&&(o=a.default.createElement("a",null,o));var k=!1!==g,S=a.default.useContext(f.RouterContext),T=a.default.useContext(i.AppRouterContext);T&&(S=T);var I=a.default.useMemo(function(){var e=n(l.resolveHref(S,b,!0),2),t=e[0],o=e[1];return{href:t,as:h?l.resolveHref(S,h):o||t}},[S,b,h]),Z=I.href,D=I.as,U=a.default.useRef(Z),B=a.default.useRef(D);E&&(r=a.default.Children.only(o));var N=E?r&&"object"==typeof r&&r.ref:t,A=n(s.useIntersection({rootMargin:"200px"}),3),H=A[0],K=A[1],G=A[2],q=a.default.useCallback(function(e){(B.current!==D||U.current!==Z)&&(G(),B.current=D,U.current=Z),H(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[D,N,Z,G,H]);a.default.useEffect(function(){var e=K&&k&&l.isLocalURL(Z),t=void 0!==x?x:S&&S.locale,o=v[Z+"%"+D+(t?"%"+t:"")];e&&!o&&y(S,Z,D,{locale:t})},[D,Z,K,x,k,S]);var z={ref:q,onClick:function(e){E||"function"!=typeof M||M(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,u,c,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(p=e).currentTarget.target)||"_self"===d)&&!p.metaKey&&!p.ctrlKey&&!p.shiftKey&&!p.altKey&&(!p.nativeEvent||2!==p.nativeEvent.which)&&l.isLocalURL(o)){e.preventDefault();var p,d,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:u,locale:f,scroll:c}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};i?a.default.startTransition(v):v()}}(e,S,Z,D,C,_,m,x,Boolean(T),k)},onMouseEnter:function(e){E||"function"!=typeof P||P(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!k&&T)&&l.isLocalURL(Z)&&y(S,Z,D,{priority:!0})},onTouchStart:function(e){E||"function"!=typeof L||L(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!k&&T)&&l.isLocalURL(Z)&&y(S,Z,D,{priority:!0})}};if(!E||j||"a"===r.type&&!("href"in r.props)){var F=void 0!==x?x:S&&S.locale,J=S&&S.isLocaleDomain&&p.getDomainLocale(D,F,S.locales,S.domainLocales);z.href=J||d.addBasePath(c.addLocale(D,F,S&&S.defaultLocale))}return E?a.default.cloneElement(r,z):a.default.createElement("a",Object.assign({},R,z),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,f=e.disabled||!a,i=n(r.useState(!1),2),s=i[0],p=i[1],d=n(r.useState(null),2),v=d[0],y=d[1];return r.useEffect(function(){if(a){if(!f&&!s&&v&&v.tagName){var e,n,r,i,d,y,b;return n=function(e){return e&&p(e)},d=(i=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=l.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},c.push(o),l.set(o,t),t}(r={root:null==t?void 0:t.current,rootMargin:o})).id,y=i.observer,(b=i.elements).set(v,n),y.observe(v),function(){if(b.delete(v),y.unobserve(v),0===b.size){y.disconnect(),l.delete(d);var e=c.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var h=u.requestIdleCallback(function(){return p(!0)});return function(){return u.cancelIdleCallback(h)}}},[v,f,o,t,s]),[y,s,r.useCallback(function(){p(!1)},[])]};var r=o(7294),u=o(9311),a="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var u=n.default.createContext(null);t.LayoutRouterContext=u;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=n.default.createContext(null);t.TemplateContext=l},9008:function(e,t,o){e.exports=o(5443)},1664:function(e,t,o){e.exports=o(8418)},1438:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}o.d(t,{Z:function(){return n}})},9396:function(e,t,o){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}o.d(t,{Z:function(){return n}})},9534:function(e,t,o){"use strict";function n(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)o=u[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)o=u[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}o.d(t,{Z:function(){return n}})}}]);