!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=14)}([function(e,t,i){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),s=[];function o(e){for(var t=-1,i=0;i<s.length;i++)if(s[i].identifier===e){t=i;break}return t}function d(e,t){for(var i={},r=[],n=0;n<e.length;n++){var a=e[n],d=t.base?a[0]+t.base:a[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var p=o(l),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(s[p].references++,s[p].updater(h)):s.push({identifier:l,updater:m(h,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=i.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,i,r){var n=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,n);else{var a=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function u(e,t,i){var r=i.css,n=i.media,a=i.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,f=0;function m(e,t){var i,r,n;if(t.singleton){var a=f++;i=g||(g=c(t)),r=h.bind(null,i,a,!1),n=h.bind(null,i,a,!0)}else i=c(t),r=u.bind(null,i,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var i=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<i.length;r++){var n=o(i[r]);s[n].references--}for(var a=d(e,t),c=0;c<i.length;c++){var l=o(i[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}i=a}}}},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var n=(s=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(d," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[i].concat(a).concat([n]).join("\n")}var s,o,d;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(n[s]=!0)}for(var o=0;o<e.length;o++){var d=[].concat(e[o]);r&&n[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),t.push(d))}},t}},function(e,t,i){var r=i(0),n=i(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},s=(r(n,a),n.locals?n.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,".button1{position:absolute;top:57%;left:-80px}.button2{position:absolute;top:57%;right:-80px}\n",""]),e.exports=t},function(e,t,i){var r=i(0),n=i(5);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},s=(r(n,a),n.locals?n.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,".card-block{overflow:hidden}.card-wrapper{display:flex;height:370px;margin-top:20px;position:relative;left:-8640px}#card-1{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A01._CB514650866_.jpg);background-position:top right}#card-2{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A02._CB514650866_.jpg);background-position:top right}#card-3{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A03._CB514650829_.jpg);background-position:top right}#card-4{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A04._CB494909365_.jpg);background-position:top right}#card-5{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B01._CB514650828_.jpg);background-position:top right}#card-6{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B02._CB513839286_.jpg);background-position:top right}#card-7{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B03._CB513839286_.jpg);background-position:top right}#card-8{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2018/Other/AVD12272_PrimeContentUpdate/Card_B04_AVD12272_PrimeContentUpdate_1280x400_en_US._CB474157036_.jpg);background-position:top right}#card-9{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B05._CB514650828_.jpg);background-position:top right}#card-10{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C06._CB495022579_.jpg);background-position:top right}#card-11{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C01_revised._CB502880131_.jpg);background-position:top right}#card-12{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C03._CB511882458_.jpg);background-position:top right}#card-13{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C04._CB514650828_.jpg);background-position:top right}#card-14{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D01._CB514706473_.jpg);background-position:top right}#card-15{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D02._CB513839283_.jpg);background-position:top right}#card-16{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E03._CB513839888_.jpg);background-position:top right}#card-17{background:linear-gradient(to right, #fff, #fff 15px, rgba(255,255,255,0) 45px),url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E01._CB513839282_.jpg);background-position:top right}.card{min-width:1080px;display:flex;justify-content:space-between;position:relative}.card img{border-radius:50%}.card-copy{width:500px;margin-top:30px;position:absolute;right:0}.card-copy h4{font-size:32px}.card-copy li{line-height:2}.card-category{color:#fff;padding:5px 10px;font-size:15px;line-height:30px;font-weight:600;display:inline-block;margin-bottom:20px}.ship{background-color:#00A8E1}.stream{background-color:#FF6138}.shop{background-color:#E31F64}.read{background-color:#36C2B4}.more{background-color:#FFC400}.card-headline{font-size:38px;line-height:32px;font-weight:300;margin-bottom:20px}.card-body{font-size:18px;line-height:28px;font-weight:300;margin-bottom:20px}.card-cta{font-size:18px;color:#002F36;cursor:pointer}\n",""]),e.exports=t},function(e,t,i){var r=i(0),n=i(7);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},s=(r(n,a),n.locals?n.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"*{box-sizing:border-box}.header-wrapper{display:flex;justify-content:space-between;height:262px;max-width:1000px;min-width:1000px}.header-list{text-align:center;display:flex;min-width:190px;justify-content:center;align-items:center;color:#fff;background-size:1616px auto, 100% 100%;background-position:0px -26px, 0px 0px;position:relative;cursor:pointer}.header-list:nth-child(1){background-image:url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_A._CB513333159_.png),linear-gradient(30deg, #2C88AE 40%, #00A8E1 90%, #00A8E1 48px)}.header-list:nth-child(2){background-image:url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_B._CB513285352_.png),linear-gradient(30deg, #CC0C39 40%, #FF6138 90%, #FF6138 48px)}.header-list:nth-child(3){background-image:url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_C._CB513285352_.png),linear-gradient(30deg, #A90067 40%, #E31F64 90%, #E31F64 48px)}.header-list:nth-child(4){background-image:url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_D._CB513285353_.png),linear-gradient(30deg, #008577 40%, #36C2B4 90%, #36C2B4 48px)}.header-list:nth-child(5){background-image:url(https://web.archive.org/web/20180717213726im_/https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_E._CB513285352_.png),linear-gradient(30deg, #FF6138 40%, #FFC400 90%, #FFC400 48px)}.header-selected{transform:scale(1.2);z-index:98;overflow:hidden;box-shadow:-1px 0px 10px -1px #000000}.header_title{position:absolute;font-size:24px;font-weight:300;bottom:60px;width:100%;margin:0 auto}.circles{position:absolute;margin:0 auto;bottom:5px}.invisible{display:none}.dot{height:10px;width:10px;background-color:#bbb;border-radius:50%;display:inline-block;margin-left:4px}.selected-dot{background-color:#ffffff}\n",""]),e.exports=t},function(e,t,i){var r=i(0),n=i(9);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},s=(r(n,a),n.locals?n.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"#slider{width:1080px;margin:100px auto 0 auto;position:relative}\n",""]),e.exports=t},function(e,t,i){var r=i(0),n=i(11);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},s=(r(n,a),n.locals?n.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type="search"]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}\n',""]),e.exports=t},function(e,t,i){var r=i(0),n=i(13);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},s=(r(n,a),n.locals?n.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"#search-bar{background-color:#232f3e;display:flex;padding:15px;box-sizing:border-box;position:relative}#amazon-logo{display:inline-block;background-image:url(https://web.archive.org/web/20180717213726/https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-V3-2x_optimized._CB474516457_.png);background-position:-10px -51px;background-size:350px;width:97px;height:30px;position:absolute}.search-bar-wrapper{font-size:0;margin:0 auto;width:650px}.search-bar-wrapper>div{display:inline-block;font-size:20px;height:30px}.search-bar-wrapper .search-bar-category{position:relative;display:flex;width:120px;height:30px;line-height:3;background:#2c3e50;overflow:hidden;font-size:10px}.search-bar-wrapper .search-bar-category select{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;box-shadow:none;background:#f3f3f3;background-image:none;flex:1;padding:0 10px;font-size:14px;color:#000;cursor:pointer}.search-bar-wrapper .search-bar-category::after{content:'\\25BC';position:absolute;top:0;right:0;padding:0 10px;background:#dddddd;cursor:pointer;pointer-events:none;-webkit-transition:.25s all ease;-o-transition:.25s all ease;transition:.25s all ease}.search-bar-wrapper .search-bar-category:hover::after{color:#fff}.input-wrapper{position:relative}.input-wrapper input{margin:0 auto;width:500px;height:30px;padding:0 20px;font-size:12px;border:1px solid #D0CFCE;outline:none}.input-wrapper input:focus{border:1px solid #008ABF;transition:0.35s ease;color:#008ABF}.input-wrapper input:focus::-webkit-input-placeholder{transition:opacity 0.45s ease;opacity:0}.input-wrapper input:focus::-moz-placeholder{transition:opacity 0.45s ease;opacity:0}.input-wrapper input:focus:-ms-placeholder{transition:opacity 0.45s ease;opacity:0}.input-wrapper .hitlist-wrapper{box-sizing:border-box;position:absolute;z-index:100;background-color:#fff;width:100%;height:300px;overflow:scroll;border-right:1px solid #000;border-left:1px solid #000;border-bottom:1px solid #000;padding:18px;display:none}.input-wrapper .hitlist-wrapper ul li{margin-bottom:10px;transition:background-color 0.1s linear;font-size:17px}.input-wrapper .hitlist-wrapper ul li:hover{background-color:#f9f7f4}.selected-word{background-color:red}.icon-wrapper{float:right;background-color:#febd67;cursor:pointer}.icon-wrapper:hover{background-color:rgba(254,189,105,0.9)}.icon-wrapper .search-bar-icon{display:flex;width:30px;max-height:30px;min-height:30px;justify-content:center;align-items:center}.target-word{color:#febd67}\n",""]),e.exports=t},function(e,t,i){"use strict";i.r(t);const r=e=>document.querySelector(e),n=e=>document.querySelectorAll(e);var a=class{constructor(){}addEvent(e,t,i){e.addEventListener(t,i)}initializeStatus(){n(".header-list").forEach(e=>{e.classList.contains("header-selected")&&e.classList.remove("header-selected")}),n(".circles").forEach(e=>{!1===e.classList.contains("invisible")&&e.classList.add("invisible")}),n(".dot").forEach(e=>{e.classList.contains("selected-dot")&&e.classList.remove("selected-dot")})}};var s=class extends a{constructor(e){super(),this.isEventEnded=e}handleHeaderPart(e){const t=e.parentNode.querySelector(".dot");e.parentNode.classList.add("header-selected"),e.parentNode.querySelector(".circles").classList.remove("invisible"),t.classList.add("selected-dot"),t.click()}handleCirclesPart(e){const t=e.parentNode.querySelector(".dot");e.parentNode.classList.add("header-selected"),e.classList.remove("invisible"),t.classList.add("selected-dot"),t.click()}handleDotPart(e){e.parentNode.parentNode.classList.add("header-selected"),e.parentNode.classList.remove("invisible"),e.classList.add("selected-dot")}handleAnywhereElse(e){const t=e.querySelector(".dot");t.classList.add("selected-dot"),t.click(),e.classList.add("header-selected"),Array.from(e.children).forEach(e=>{e.classList.contains("circles")&&e.classList.remove("invisible")})}selectBoxListener(e){if(!1===this.isEventEnded.ended)return;const{target:t}=e;this.initializeStatus(),!0!==t.classList.contains("header_title")&&!0!==t.classList.contains("circles")?!0!==t.classList.contains("dot")?this.handleAnywhereElse(t):this.handleDotPart(t):this.handleHeaderPart(t)}};var o=class extends a{constructor(e,t={defaultCurrentIndex:1,defaultListLength:17,defaultCardLength:1080}){super();const{defaultCurrentIndex:i,defaultListLength:n,defaultCardLength:a}=t;this.isPrevious=!1,this.distance=0,this.previousIndex=0,this.currentIndex=i,this.listLength=n,this.halfListLength=parseInt(this.listLength/2),this.selectedCard=r(".selected-card"),this.movedFinished=!0,this.isEventEnded=e,this.cardLength=a}isRightWay(e){return e>=0}moveByDistance(e){const t=r(".card-wrapper");if(!0===this.isRightWay(e))return this.isPrevious=!1,t.style.transition="transform 0.5s",void(t.style.transform=`translateX(${-this.cardLength*e}px)`);this.isPrevious=!0,t.style.transition="transform 0.5s",t.style.transform=`translateX(${this.cardLength*-e}px)`}getPreviousIndex(e){return e-1==0?this.listLength:e-1}getNextIndex(e){return(e+1)%this.listLength==0?this.listLength:(e+1)%this.listLength}returnCurrentIndex(){const[e,t]=this.selectedCard.id.split("-");return parseInt(t)}giveSelectedClassToCurrentIndexNode(){this.selectedCard.classList.remove("selected-card"),this.selectedCard=r(`#card-${this.currentIndex}`),this.selectedCard.classList.add("selected-card")}setCurrentIndexAsPreviousIndex(){const e=this.returnCurrentIndex();this.previousIndex=e}previousButtonListener(e){!1!==this.isEventEnded.ended&&(this.isEventEnded.ended=!1,this.setCurrentIndexAsPreviousIndex(),this.currentIndex=this.getPreviousIndex(this.previousIndex),this.distance=-1,this.moveByDistance(this.distance),this.giveSelectedClassToCurrentIndexNode())}nextButtonListener(e){!1!==this.isEventEnded.ended&&(this.isEventEnded.ended=!1,this.setCurrentIndexAsPreviousIndex(),this.currentIndex=this.getNextIndex(this.previousIndex),this.distance=1,this.moveByDistance(this.distance),this.giveSelectedClassToCurrentIndexNode())}transitionEndEvent(e){const t=r(".card-wrapper");t.style.transition="none";const i=[...t.children],n=i.slice(0,Math.abs(this.distance)),a=i[0];if(this.isPrevious){const e=i.slice(i.length-Math.abs(this.distance));e.forEach(e=>e.remove()),e.forEach(e=>t.insertBefore(e,a))}else n.forEach(e=>e.remove()),n.forEach(e=>t.appendChild(e));this.initializeStatus();const s=r(`[data-id="${this.currentIndex}"]`);s.classList.add("selected-dot"),s.parentNode.classList.remove("invisible"),s.parentNode.parentNode.classList.add("header-selected"),t.style.transform="translateX(0px)",this.isEventEnded.ended=!0}setDistanceInRevertedOrder(e,t){if(e<=t&&t<=this.listLength)return void(this.distance=t-e);const i=e-this.listLength;1<=t&&t<=this.halfListLength+i?this.distance=t-i:this.distance=-1*(e-t)}setDistanceInNormalOrder(e,t){t<=e+this.halfListLength?this.distance=t-e:this.distance=t<e?-1*(e-t):-1*(this.listLength+e-t)}setDistance(e,t){e+this.halfListLength>this.listLength?this.setDistanceInRevertedOrder(e,t):this.setDistanceInNormalOrder(e,t)}hasClickedSameIndex(e){return parseInt(e.dataset.id)===this.currentIndex}smallBoxIndexEventListener(e){if(!0===this.hasClickedSameIndex(e.target))return void this.isEventEnded;if(!1===this.isEventEnded.ended)return;this.isEventEnded.ended=!1,this.setCurrentIndexAsPreviousIndex();const t=parseInt(e.target.dataset.id);this.currentIndex=t,this.setDistance(this.previousIndex,this.currentIndex),this.moveByDistance(this.distance),this.giveSelectedClassToCurrentIndexNode(),r(`#card-${t}`).click()}};var d=class{constructor(){this.isEventEnded={ended:!0},this.headerEvent=new s(this.isEventEnded),this.sliderEvent=new o(this.isEventEnded)}addEvents(){n(".header-list").forEach(e=>{this.headerEvent.addEvent(e,"click",this.headerEvent.selectBoxListener.bind(this.headerEvent))}),n(".dot").forEach(e=>{this.sliderEvent.addEvent(e,"click",this.sliderEvent.smallBoxIndexEventListener.bind(this.sliderEvent))}),this.sliderEvent.addEvent(r(".button2"),"click",this.sliderEvent.nextButtonListener.bind(this.sliderEvent)),this.sliderEvent.addEvent(r(".button1"),"click",this.sliderEvent.previousButtonListener.bind(this.sliderEvent)),this.sliderEvent.addEvent(r(".card-wrapper"),"transitionend",this.sliderEvent.transitionEndEvent.bind(this.sliderEvent))}};i(2);var c=class{constructor(e){this.buttonData=e}render(){return`${this.buttonData.reduce((e,t,i)=>e+`<button class=${"button"+(i+1)}>${t}</button>`,"")}`}};i(4);var l=class{constructor(e){this.cardData=e,this.cardIndex=1}sortByCategoryAndReturnHTML(e){const t=e=>this.cardData.filter(t=>t.category===e).reduce((e,t)=>e+`<li class="card ${1===this.cardIndex?"selected-card":""}" id=card-${this.cardIndex++}>\n                                                        <div class="card-copy">\n                                                            <span class="card-category ${t.category}">\n                                                                ${t.cardCategory}\n                                                            </span>\n                                                            <div class="card-headline">\n                                                                ${t.cardHeadline}\n                                                            </div>\n                                                            <div class="card-body">\n                                                                ${t.cardBody}\n                                                            </div>\n                                                            <a class="card-cta">\n                                                                ${t.cardCta}\n                                                            </a>\n                                                        </div>\n                                                    </li>`,"");return e.map(e=>t(e))}render(){const[e,t,i,r,n]=this.sortByCategoryAndReturnHTML(["ship","stream","shop","read","more"]);return`<div class="card-block">\n                    <ul class="card-wrapper">\n                        ${i}${r}${n}${e}${t}\n                    </ul>\n                </div>`}};i(6);var p=class{constructor(e){this.headerData=e,this.idIndex=1}returnCardLengthDivString(e){let t="";for(let i=0;i<e;i++)t+=`<div class="dot" data-id=${this.idIndex++}></div>`;return t}render(){return`<ul class="header-wrapper">${this.headerData.reduce((e,t)=>{const i=this.returnCardLengthDivString(t.cardLength);return e+=`<li class="header-list">\n                                <div class="header_title">\n                                    ${t.title}\n                                </div>\n                                <div class="circles invisible">\n                                    ${i}\n                                </div>\n                            </li>`},"")}</ul>`}};i(8),i(10);const h={API_SERVER_CARD:{ADDRESS:"http://localhost:8080/cards"},API_SERVER_SEARCH:{ADDRESS:"http://localhost:8080/search/"}};var u=class{constructor(){this.header=null,this.card=null,this.buttons=null,this.cardData=null}setCardData({headerData:e,headerCardLength:t,cardData:i,buttonData:r}){this.header=new p(e,t),this.card=new l(i),this.buttons=new c(r)}render(){return`\n        ${this.header.render()}\n        ${this.card.render()}\n        ${this.buttons.render()}\n        `}doesCardDataExist(){return null!==this.cardData}fetchCardData(){return fetch(h.API_SERVER_CARD.ADDRESS).then(e=>e.json()).then(e=>(this.cardData=e,e))}};i(12);var g=class{constructor(e){this.searchList=e,this.timer=null,this.hitList=null}inputEventListener(e){const t=e.target.value;this.timer&&clearTimeout(this.timer),""!==t?this.timer=setTimeout(function(){fetch(h.API_SERVER_SEARCH.ADDRESS+t).then(e=>e.json()).then(e=>this.searchList.setTargetTitle(t,e))}.bind(this),200):r(".hitlist-wrapper").style.display="none"}isArrowKeyCode(e){return 38===e||40===e}shutDownSearchList(){null===this.hitList&&(this.hitList=r(".hitlist-wrapper")),this.hitList.style.display="none"}isHitListOn(){return null===this.hitList&&(this.hitList=r(".hitlist-wrapper")),"block"===this.hitList.style.display}giveSelectedWordToTarget(e,t,i,r){if(t.classList.remove("selected-word"),null===e)return 1===r?void i[0].classList.add("selected-word"):void i[i.length-1].classList.add("selected-word");e.classList.add("selected-word")}handleKeyMovement(e){if(!1===this.isHitListOn())return;const t=r(".hitlist-wrapper .selected-word"),i=[...r(".hitlist-wrapper ul").children];if(!t)return void i[0].classList.add("selected-word");if(1===e){const e=t.nextSibling;return void this.giveSelectedWordToTarget(e,t,i,1)}const n=t.previousSibling;this.giveSelectedWordToTarget(n,t,i,-1)}movedSelectedWordToInputBox(){const e=r(".hitlist-wrapper .selected-word");if(!e)return;const t=[...e.querySelectorAll("span")].reduce((e,t)=>e+=t.innerHTML,"");""!==t&&(r("#search-bar-input").value=t,this.shutDownSearchList())}keyDownEventListener(e){const{keyCode:t}=e;13!==t?!1!==this.isArrowKeyCode(t)&&(38!==t?40===t&&this.handleKeyMovement(1):this.handleKeyMovement(-1)):this.movedSelectedWordToInputBox()}addInputEvent(){r("#search-bar-input").addEventListener("input",this.inputEventListener.bind(this)),r("#search-bar-input").addEventListener("keydown",this.keyDownEventListener.bind(this)),r(".icon-wrapper").addEventListener("click",this.shutDownSearchList.bind(this)),r("body").addEventListener("click",this.shutDownSearchList.bind(this))}render(){return'<div id="amazon-logo"></div>\n                <div class="search-bar-wrapper">\n                    <div class="category-wrapper">\n                        <div class="search-bar-category">\n                            <select name="category">\n                                <option value="all">All</option>\n                                <option value="album">Album</option>\n                                <option value="app">App & Game</option>\n                                <option value="book">Book</option>\n                                <option value="home">Home</option>\n                                <option value="sports">Sports</option>\n                                <option value="software">Software</option>\n                                <option value="toy">Toy</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class="input-wrapper">\n                        <input id="search-bar-input" type="text"></input>\n                        <div class="hitlist-wrapper"></div>\n                    </div>\n                    <div class="icon-wrapper">\n                        <div class="search-bar-icon">\n                            <i class="fas fa-search"></i>\n                        </div>\n                    </div>\n                </div>\n                '}};var f=class{constructor(e){return new Proxy(this,{get:(e,t)=>e[t],set:(t,i,r)=>(t[i]=r,e&&e(r),!0)})}};var m=class{constructor(){this.model=new f(this.onChanges.bind(this)),this.targetString=""}setTargetTitle(e,t){this.targetString=e,this.model.titles=t}onChanges(e){const{hitList:t}=e,i=this.targetString.length,r=t&&t.reduce((e,t)=>e+=`<li><span class="target-word">${t.substring(0,i)}</span><span>${t.substring(i)}</span></li>`,"");this.render(r)}initializeHTML(){r(".hitlist-wrapper").style.display="block",r(".hitlist-wrapper").innerHTML=""}render(e){if(this.initializeHTML(),!e)return void r(".hitlist-wrapper").insertAdjacentHTML("beforeend","<ul><li>No Results Matched</li></ul>");const t=`<ul>${e}</ul>`;r(".hitlist-wrapper").insertAdjacentHTML("beforeend",t)}};window.addEventListener("DOMContentLoaded",async()=>{await(async()=>{const e=new m,t=new g(e),i=new u;let n=window.localStorage.getItem("cards");if(!n){const e=await i.fetchCardData();return window.localStorage.setItem("cards",JSON.stringify(e)),n=e,i.setCardData(n),void(r("#slider").innerHTML=i.render())}i.setCardData(JSON.parse(n)),r("#slider").innerHTML=i.render(),r("#search-bar").innerHTML=t.render(),t.addInputEvent()})(),(new d).addEvents(),(()=>{const e=r(".header-list");e.classList.add("header-selected"),e.querySelector(".circles").classList.remove("invisible"),e.querySelector(".dot").classList.add("selected-dot")})()})}]);