(self.webpackChunksunburst_pools=self.webpackChunksunburst_pools||[]).push([[351],{4852:function(e){"use strict";e.exports=Object.assign},3723:function(e,t,n){"use strict";n.d(t,{G:function(){return I},L:function(){return m},M:function(){return E},P:function(){return T},S:function(){return M},_:function(){return s},a:function(){return i},b:function(){return u},c:function(){return l},g:function(){return d},h:function(){return c}});var r=n(7294),a=(n(2369),n(5697)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const l=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,o,s,c){const l={};o&&(l.backgroundColor=o,"fixed"===n?(l.width=r,l.height=a,l.backgroundColor=o,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const f=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${a}' width='${n}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=s(e,f);return r.createElement(r.Fragment,null,r.createElement(p,i({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:c}=e,l=s(e,g);return r.createElement("img",i({},l,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:o}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=s(e,b);const c=o.sizes||(null==t?void 0:t.sizes),l=r.createElement(h,i({},o,t,{sizes:c,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:`${t}-${o}-${n}`,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:c})})),l):l};var v;h.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],T=function(e){let{fallback:t}=e,n=s(e,w);return t?r.createElement(y,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};T.displayName="Placeholder",T.propTypes={fallback:a.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const A=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},x={image:o().object.isRequired,alt:A},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],O=new Set;let N,L;const k=function(e){let{as:t="div",image:a,style:o,backgroundColor:l,className:u,class:d,onStartLoad:f,onLoad:p,onError:m}=e,g=s(e,C);const{width:b,height:h,layout:y}=a,v=function(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(b,h,y),{style:w,className:T}=v,E=s(v,S),A=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);d&&(u=d);const k=function(e,t,n){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${n}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(y,b,h);return(0,r.useEffect)((()=>{N||(N=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==f||f({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(x);if(L&&O.has(x))return;let t,r;return N.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;A.current&&(A.current.innerHTML=n(i({isLoading:!0,isLoaded:O.has(x),image:a},g)),O.has(x)||(t=requestAnimationFrame((()=>{A.current&&(r=s(A.current,x,O,o,f,p,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{O.has(x)&&L&&(A.current.innerHTML=L(i({isLoading:O.has(x),isLoaded:O.has(x),image:a},g)),null==f||f({wasCached:!0}),null==p||p({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},E,{style:i({},w,o,{backgroundColor:l}),className:`${T}${u?` ${u}`:""}`,ref:A,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(k,e):null}));I.propTypes=x,I.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},U=new Set(["fixed","fullWidth","constrained"]),R={src:o().string.isRequired,alt:A,width:j,height:j,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},M=(Y=I,function(e){let{src:t,__imageData:n,__error:a}=e,o=s(e,P);return a&&console.warn(a),n?r.createElement(Y,i({image:n},o)):(console.warn("Image not loaded",t),null)});var Y;M.displayName="StaticImage",M.propTypes=R},2369:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,r=n,n=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},4531:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(1883),o=n(3723);const i=e=>{let{siteTitle:t,siteDescription:a}=e;return r.createElement("header",null,r.createElement("h1",{className:"site-heading text-center text-white d-none d-lg-block"},r.createElement("span",{className:"site-heading-lower"},r.createElement("span",null,"Sunburst "),r.createElement(o.S,{src:"../images/sunburst-logo.png",quality:95,width:80,placeholder:"blurred",formats:["auto","webp","avif"],alt:"wood pool image",__imageData:n(7473)})," ",r.createElement("span",null,"Pools"))))};i.defaultProps={siteTitle:"Sunburst Pools",siteDescription:"Central Ohio Pool Builder & Pool Service Company"};var s=i;var c=()=>r.createElement("footer",{className:"footer text-faded text-center py-5"},r.createElement("div",{className:"container"},r.createElement("p",{className:"m-0 small"},"© 2022 Sunburst Pools. All Rights Reserved.")));var l=()=>r.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark py-lg-4",id:"mainNav"},r.createElement("div",{className:"container"},r.createElement(a.Link,{className:"navbar-brand text-uppercase fw-bold d-lg-none d-flex align-items-center",to:"/"},r.createElement(o.S,{src:"../images/sunburst-logo.png",quality:95,width:40,placeholder:"blurred",formats:["auto","webp","avif"],alt:"wood pool image",__imageData:n(5792)}),r.createElement("span",{className:"m-1 brand-name"},r.createElement("span",null,"Sunburst")," ",r.createElement("span",null,"Pools"))),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.createElement("ul",{className:"navbar-nav mx-auto"},r.createElement(a.Link,{to:"/",className:"custom-show-for-fixed-top-large"},r.createElement(o.S,{src:"../images/sunburst-logo.png",quality:95,width:40,placeholder:"blurred",formats:["auto","webp","avif"],alt:"wood pool image",__imageData:n(5792)})),r.createElement("li",{className:"nav-item px-lg-3 px-xl-4"},r.createElement(a.Link,{to:"/",className:"nav-link text-uppercase"},"Home")),r.createElement("li",{className:"nav-item px-lg-3 px-xl-4"},r.createElement(a.Link,{to:"/pools",className:"nav-link text-uppercase"},"Pools")),r.createElement("li",{className:"nav-item px-lg-3 px-xl-4"},r.createElement(a.Link,{to:"/services",className:"nav-link text-uppercase"},"Services")),r.createElement("li",{className:"nav-item px-lg-3 px-xl-4"},r.createElement(a.Link,{to:"/gallery",className:"nav-link text-uppercase"},"Gallery")),r.createElement("li",{className:"nav-item px-lg-3 px-xl-4"},r.createElement(a.Link,{to:"/store",className:"nav-link text-uppercase"},"Store/Hours")),r.createElement("li",{className:"nav-item px-lg-3 px-xl-4"},r.createElement(a.Link,{to:"/about",className:"nav-link text-uppercase"},"About")),r.createElement("li",{className:"nav-item px-lg-3 px-xl-4"},r.createElement(a.Link,{to:"/contact-us",className:"nav-link text-uppercase"},"Contact-US"))))));var u=e=>{let{children:t}=e;const n=(0,a.useStaticQuery)("256249292");return r.useEffect((()=>{window.addEventListener("scroll",(function(){window.scrollY>document.querySelector("header").offsetHeight?(document.getElementById("mainNav").classList.add("fixed-top"),window.innerWidth>=992&&(document.body.style.paddingTop="5em")):(document.getElementById("mainNav").classList.remove("fixed-top"),window.innerWidth>=992&&(document.body.style.paddingTop=0))}))}),[]),r.createElement(r.Fragment,null,r.createElement(s,{siteTitle:n.site.siteMetadata.title,siteDescription:n.site.siteMetadata.description}),r.createElement(l,null),r.createElement("main",{"data-bs-spy":"scroll","data-bs-target":"#mainNav","data-bs-offset":"0"},t),r.createElement(c,null))}},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4593:function(e,t,n){"use strict";n.d(t,{q:function(){return ge}});var r,a,o,i,s=n(5697),c=n.n(s),l=n(3298),u=n.n(l),d=n(9590),f=n.n(d),p=n(7294),m=n(4852),g=n.n(m),b="bodyAttributes",h="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",A="http-equiv",x="innerHTML",C="itemprop",S="name",O="property",N="rel",L="src",k="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",j="defer",U="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",Y=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Z="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=_(e,v.TITLE),n=_(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,P);return t||r||void 0},K=function(e){return _(e,R)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||n===N&&"canonical"===e[n].toLowerCase()||c===N&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==x&&s!==T&&s!==C||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],c=g()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,a),se(d,f);var p={baseTag:le(v.BASE,n),linkTags:le(v.LINK,o),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,s),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},m={},g={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=p[e].oldTags)})),t&&t(),c(e,m,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(Z):n.getAttribute(Z)!==i.join(",")&&n.setAttribute(Z,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(Z,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,a=de(n,r),[p.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+J(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case h:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===x||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===x||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(h,a,r),link:fe(v.LINK,o,r),meta:fe(v.META,i,r),noscript:fe(v.NOSCRIPT,s,r),script:fe(v.SCRIPT,c,r),style:fe(v.STYLE,l,r),title:fe(v.TITLE,{title:d,titleAttributes:f},r)}},me=u()((function(e){return{baseTag:G([E,k],e),bodyAttributes:Q(b,e),defer:_(e,j),encode:_(e,U),htmlAttributes:Q(h,e),linkTags:X(v.LINK,[N,E],e),metaTags:X(v.META,[S,w,A,O,C],e),noscriptTags:X(v.NOSCRIPT,[x],e),onChangeClientState:K(e),scriptTags:X(v.SCRIPT,[L,x],e),styleTags:X(v.STYLE,[T],e),title:F(e),titleAttributes:Q(y,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),ge=(a=me,i=o=function(e){function t(){return V(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return W({},a,((t={})[r.type]=i,t.titleAttributes=W({},o),t));case v.BODY:return W({},a,{bodyAttributes:W({},o)});case v.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(D(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=D(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(a,r)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),o.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind},3298:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",s),d}}},7473:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/2c153bad4b3b216ac718df255f6f9396/15e82/sunburst-logo.png","srcSet":"/static/2c153bad4b3b216ac718df255f6f9396/6efc2/sunburst-logo.png 20w,\\n/static/2c153bad4b3b216ac718df255f6f9396/6e983/sunburst-logo.png 40w,\\n/static/2c153bad4b3b216ac718df255f6f9396/15e82/sunburst-logo.png 80w,\\n/static/2c153bad4b3b216ac718df255f6f9396/e85d4/sunburst-logo.png 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[{"srcSet":"/static/2c153bad4b3b216ac718df255f6f9396/8d600/sunburst-logo.avif 20w,\\n/static/2c153bad4b3b216ac718df255f6f9396/0ecf2/sunburst-logo.avif 40w,\\n/static/2c153bad4b3b216ac718df255f6f9396/d9027/sunburst-logo.avif 80w,\\n/static/2c153bad4b3b216ac718df255f6f9396/8a7fe/sunburst-logo.avif 160w","type":"image/avif","sizes":"(min-width: 80px) 80px, 100vw"},{"srcSet":"/static/2c153bad4b3b216ac718df255f6f9396/a1f16/sunburst-logo.webp 20w,\\n/static/2c153bad4b3b216ac718df255f6f9396/e28df/sunburst-logo.webp 40w,\\n/static/2c153bad4b3b216ac718df255f6f9396/a5f1e/sunburst-logo.webp 80w,\\n/static/2c153bad4b3b216ac718df255f6f9396/36fad/sunburst-logo.webp 160w","type":"image/webp","sizes":"(min-width: 80px) 80px, 100vw"}]},"width":80,"height":80}')},5792:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/2c153bad4b3b216ac718df255f6f9396/6e983/sunburst-logo.png","srcSet":"/static/2c153bad4b3b216ac718df255f6f9396/97848/sunburst-logo.png 10w,\\n/static/2c153bad4b3b216ac718df255f6f9396/6efc2/sunburst-logo.png 20w,\\n/static/2c153bad4b3b216ac718df255f6f9396/6e983/sunburst-logo.png 40w,\\n/static/2c153bad4b3b216ac718df255f6f9396/15e82/sunburst-logo.png 80w","sizes":"(min-width: 40px) 40px, 100vw"},"sources":[{"srcSet":"/static/2c153bad4b3b216ac718df255f6f9396/5c685/sunburst-logo.avif 10w,\\n/static/2c153bad4b3b216ac718df255f6f9396/8d600/sunburst-logo.avif 20w,\\n/static/2c153bad4b3b216ac718df255f6f9396/0ecf2/sunburst-logo.avif 40w,\\n/static/2c153bad4b3b216ac718df255f6f9396/d9027/sunburst-logo.avif 80w","type":"image/avif","sizes":"(min-width: 40px) 40px, 100vw"},{"srcSet":"/static/2c153bad4b3b216ac718df255f6f9396/b6349/sunburst-logo.webp 10w,\\n/static/2c153bad4b3b216ac718df255f6f9396/a1f16/sunburst-logo.webp 20w,\\n/static/2c153bad4b3b216ac718df255f6f9396/e28df/sunburst-logo.webp 40w,\\n/static/2c153bad4b3b216ac718df255f6f9396/a5f1e/sunburst-logo.webp 80w","type":"image/webp","sizes":"(min-width: 40px) 40px, 100vw"}]},"width":40,"height":40}')}}]);
//# sourceMappingURL=commons-933f12d00b0ad4f9ba7b.js.map