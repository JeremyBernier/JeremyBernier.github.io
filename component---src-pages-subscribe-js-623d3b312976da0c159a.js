(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{205:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=(a(211),a(219),a(215)),s=a(214);a(247);t.default=function(e){e.data;return i.a.createElement(n.a,null,i.a.createElement(s.a,{title:"Subscribe"}),i.a.createElement("p",null,"You can sign up for my email list."),i.a.createElement("p",null,"Otherwise social media"),i.a.createElement("p",null,"If for whatever reason you want to send me a large sum of money, here's my PayPal and Bitcoin address"))}},219:function(e,t,a){"use strict";a(29),a(30),a(13),a(91),a(132),a(220);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(68)),s=r(a(69)),o=r(a(133)),l=r(a(134)),d=r(a(0)),u=r(a(49)),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=c(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+s+o+a+r+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(V,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},V=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:z?1:0,transition:P?"opacity "+b+"ms":"none"},o),T="boolean"==typeof h?"lightgray":h,W={transitionDelay:b+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&W,o,f),C={title:t,alt:this.state.isVisible?"":a,style:x,className:g};if(p){var N=p,j=N[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),T&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&W)}),j.base64&&d.default.createElement(R,{src:j.base64,spreadProps:C,imageVariants:N,generateSources:E}),j.tracedSVG&&d.default.createElement(R,{src:j.tracedSVG,spreadProps:C,imageVariants:N,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(N),d.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:L},j,{imageVariants:N}))}}))}if(m){var q=m,M=q[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},T&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},P&&W)}),M.base64&&d.default.createElement(R,{src:M.base64,spreadProps:C,imageVariants:q,generateSources:E}),M.tracedSVG&&d.default.createElement(R,{src:M.tracedSVG,spreadProps:C,imageVariants:q,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(q),d.default.createElement(V,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:L},M,{imageVariants:q}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});z.propTypes={resolutions:P,sizes:k,fixed:u.default.oneOfType([P,u.default.arrayOf(P)]),fluid:u.default.oneOfType([k,u.default.arrayOf(k)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=z;t.default=T},220:function(e,t,a){"use strict";a(221)("fixed",function(e){return function(){return e(this,"tt","","")}})},221:function(e,t,a){var r=a(1),i=a(7),n=a(31),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},229:function(e,t,a){"use strict";var r=a(1),i=a(15),n=a(94),s="".startsWith;r(r.P+r.F*a(95)("startsWith"),"String",{startsWith:function(e){var t=n(this,e,"startsWith"),a=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return s?s.call(t,r,a):t.slice(a,a+r.length)===r}})},247:function(e,t,a){"use strict";a(229);var r=a(238),i=a(0),n=a.n(i),s=a(211),o=(a(223),a(224),a(225),a(226),a(227),a(228),a(239)),l=(a(197),function(e){var t=e.limit;return n.a.createElement(s.b,{query:"1340855974",render:function(e){var a=e.allMarkdownRemark.edges.filter(function(e){return!e.node.fields.slug.startsWith("/projects")}).filter(function(e){var t=e.node.frontmatter.type;return"unlisted"!==t&&"draft"!==t});return n.a.createElement("div",null,n.a.createElement("section",{style:{paddingTop:".7rem",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:".3rem 1.0875rem"}},n.a.createElement(o.a,{data:a,limit:t}),null!=t&&n.a.createElement(s.a,{to:"/blog",className:"view-more-blog-text"},"View more blog posts"))))},data:r})});l.defaultProps={},t.a=l}}]);
//# sourceMappingURL=component---src-pages-subscribe-js-623d3b312976da0c159a.js.map