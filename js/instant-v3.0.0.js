var t=void 0,e=void 0,n=new Set,o=document.createElement("link"),s=o.relList&&o.relList.supports&&o.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,i="instantAllowQueryString"in document.body.dataset,r="instantAllowExternalLinks"in document.body.dataset,a="instantWhitelist"in document.body.dataset,c=65,d=!1,l=!1,u=!1;if("instantIntensity"in document.body.dataset){var _t=document.body.dataset.instantIntensity;if("mousedown"==_t.substr(0,"mousedown".length))d=!0,"mousedown-only"==_t&&(l=!0);else if("viewport"==_t.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType.includes("2g"))||("viewport"==_t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(u=!0):"viewport-all"==_t&&(u=!0));else{var _e=parseInt(_t);isNaN(_e)||(c=_e)}}if(s){var _n={capture:!0,passive:!0};if(l||document.addEventListener("touchstart",function(t){e=performance.now();var n=t.target.closest("a");f(n)&&h(n.href)},_n),d?document.addEventListener("mousedown",function(t){var e=t.target.closest("a");f(e)&&h(e.href)},_n):document.addEventListener("mouseover",function(n){if(!(performance.now()-e<1100)){var o=n.target.closest("a");f(o)&&(o.addEventListener("mouseout",m,{passive:!0}),t=setTimeout(function(){h(o.href),t=void 0},c))}},_n),u){var _t2=void 0;(_t2=window.requestIdleCallback?function(t){requestIdleCallback(t,{timeout:1500})}:function(t){t()})(function(){var n=new IntersectionObserver(function(t){t.forEach(function(t){if(t.isIntersecting){var e=t.target;n.unobserve(e),h(e.href)}})});document.querySelectorAll("a").forEach(function(t){f(t)&&n.observe(t)})})}}function m(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||t&&(clearTimeout(t),t=void 0)}function f(t){if(t&&t.href&&(!a||"instant"in t.dataset)&&(r||t.origin==location.origin||"instant"in t.dataset)&&["http:","https:"].includes(t.protocol)&&("http:"!=t.protocol||"https:"!=location.protocol)&&(i||!t.search||"instant"in t.dataset)&&!(t.hash&&t.pathname+t.search==location.pathname+location.search||"noInstant"in t.dataset))return!0}function h(t){if(!n.has(t)){var e=document.createElement("link");e.rel="prefetch",e.href=t,document.head.appendChild(e),n.add(t)}}