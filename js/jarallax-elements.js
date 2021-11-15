/*!
 * Name    : DEPRECATED Elements Extension for Jarallax. Use laxxx instead https://github.com/alexfoxy/laxxx
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),i=n(3),a=n.n(i),l=n(5);Object(l.default)(),r()(function(){void 0!==a.a.jarallax&&a.a.jarallax(document.querySelectorAll("[data-jarallax-element]"))})},function(t,e){t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},function(n,t,e){(function(t){var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};n.exports=e}).call(this,e(4))},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}t.exports=o},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return i});var o=n(3),r=n.n(o);function i(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r.a.jarallax;void 0!==e&&(t=e.constructor,["initImg","canInitParallax","init","destroy","clipContainer","coverImage","isVisible","onScroll","onResize"].forEach(function(y){var h=t.prototype[y];t.prototype[y]=function(){var t=this;"initImg"===y&&null!==t.$item.getAttribute("data-jarallax-element")&&(t.options.type="element",t.pureOptions.speed=t.$item.getAttribute("data-jarallax-element")||t.pureOptions.speed);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if("element"!==t.options.type)return h.apply(t,n);switch(t.pureOptions.threshold=t.$item.getAttribute("data-threshold")||"",y){case"init":var r=t.pureOptions.speed.split(" ");t.options.speed=t.pureOptions.speed||0,t.options.speedY=r[0]?parseFloat(r[0]):0,t.options.speedX=r[1]?parseFloat(r[1]):0;var i=t.pureOptions.threshold.split(" ");t.options.thresholdY=i[0]?parseFloat(i[0]):null,t.options.thresholdX=i[1]?parseFloat(i[1]):null,h.apply(t,n);var a=t.$item.getAttribute("data-jarallax-original-styles");return a&&t.$item.setAttribute("style",a),!0;case"onResize":var l=t.css(t.$item,"transform");t.css(t.$item,{transform:""});var s=t.$item.getBoundingClientRect();t.itemData={width:s.width,height:s.height,y:s.top+t.getWindowData().y,x:s.left},t.css(t.$item,{transform:l});break;case"onScroll":var u=t.getWindowData(),c=(u.y+u.height/2-t.itemData.y-t.itemData.height/2)/(u.height/2),p=c*t.options.speedY,d=c*t.options.speedX,f=p,m=d;null!==t.options.thresholdY&&p>t.options.thresholdY&&(f=0),null!==t.options.thresholdX&&d>t.options.thresholdX&&(m=0),t.css(t.$item,{transform:"translate3d(".concat(m,"px,").concat(f,"px,0)")});break;case"initImg":case"isVisible":case"clipContainer":case"coverImage":return!0}return h.apply(t,n)}}))}}]);
//# sourceMappingURL=jarallax-element.min.js.map