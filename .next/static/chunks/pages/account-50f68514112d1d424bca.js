_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c,u=[],l=!1,f=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void r(u)}a.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var s=e.apply(t,r);function a(e){n(s,i,o,a,c,"next",e)}function c(e){n(s,i,o,a,c,"throw",e)}a(void 0)}))}}r.d(t,"a",(function(){return i}))},NyWP:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var i=r("iVi/"),o=r("U0US"),s=function(){return"undefined"!==typeof window};function a(e,t){var r=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(r=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),function(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var i=0;i<r.length;i++){var o=r[i];if(e[o]!==t[o])return!1}return!0}(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&r}function c(e,t){return e&&e.req&&e.req.headers&&e.req.headers.cookie?i.parse(e.req.headers.cookie,t):s()?i.parse(document.cookie,t):{}}function u(e,t,r,c){if(e&&e.res&&e.res.getHeader&&e.res.setHeader){var u=e.res.getHeader("Set-Cookie")||[];"string"===typeof u&&(u=[u]),"number"===typeof u&&(u=[]);var l=o.parse(u),f=[];l.forEach((function(e){a(e,function(e,t,r){var i=r.sameSite;!0===i&&(i="strict"),void 0!==i&&!1!==i||(i="lax");var o=n(n({},r),{sameSite:i});return delete o.encode,n({name:e,value:t},o)}(t,r,c))||f.push(i.serialize(e.name,e.value,n({encode:function(e){return e}},e)))})),f.push(i.serialize(t,r,c)),e.res.finished||e.res.setHeader("Set-Cookie",f)}if(s()){if(c&&c.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=i.serialize(t,r,c)}return{}}function l(e,t,r){var o=n(n({},r||{}),{maxAge:-1});if(e&&e.res&&e.res.setHeader&&e.res.getHeader){var a=e.res.getHeader("Set-Cookie")||[];"string"===typeof a&&(a=[a]),"number"===typeof a&&(a=[]),a.push(i.serialize(t,"",o)),e.res.setHeader("Set-Cookie",a)}return s()&&(document.cookie=i.serialize(t,"",o)),{}}t.parseCookies=c,t.setCookie=u,t.destroyCookie=l,t.default={set:u,get:c,destroy:l}},U0US:function(e,t,r){"use strict";var n={decodeValues:!0,map:!1,silent:!1};function i(e){return"string"===typeof e&&!!e.trim()}function o(e,t){var r=e.split(";").filter(i),o=r.shift().split("="),s=o.shift(),a=o.join("="),c={name:s,value:(t=t?Object.assign({},n,t):n).decodeValues?decodeURIComponent(a):a};return r.forEach((function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?c.expires=new Date(n):"max-age"===r?c.maxAge=parseInt(n,10):"secure"===r?c.secure=!0:"httponly"===r?c.httpOnly=!0:"samesite"===r?c.sameSite=n:c[r]=n})),c}function s(e,t){if(t=t?Object.assign({},n,t):n,!e)return t.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var r=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];r||!e.headers.cookie||t.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),(t=t?Object.assign({},n,t):n).map){return e.filter(i).reduce((function(e,r){var n=o(r,t);return e[n.name]=n,e}),{})}return e.filter(i).map((function(e){return o(e,t)}))}e.exports=s,e.exports.parse=s,e.exports.parseString=o,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,r,n,i,o,s=[],a=0;function c(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,o=!1;c();)if(","===(r=e.charAt(a))){for(n=a,a+=1,c(),i=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=i,s.push(e.substring(t,n)),t=a):a=n+1}else a+=1;(!o||a>=e.length)&&s.push(e.substring(t,e.length))}return s}},cdae:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSP",(function(){return f}));var n=r("nKUr"),i=r("NyWP"),o=r("q1tI"),s=r("o0o1"),a=r.n(s),c=r("HaE+"),u=r("n84q");var l=function(){var e=Object(i.parseCookies)().token,t=Object(o.useState)([]),r=t[0],s=t[1];Object(o.useEffect)((function(){l()}),[]);var l=function(){var t=Object(c.a)(a.a.mark((function t(){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u.a,"/api/users"),{headers:{Authorization:e}});case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,console.log(n),s(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(n,i){var o,c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u.a,"/api/users"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:e},body:JSON.stringify({_id:n,role:i})});case 2:return o=t.sent,t.next=5,o.json();case 5:c=t.sent,console.log(c),l=r.map((function(e){return c._id==e._id?c:e})),s(l);case 9:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Role"})]})}),Object(n.jsx)("tbody",{children:r.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.email}),Object(n.jsxs)("td",{children:[e.role,Object(n.jsx)("button",{className:"btn danger",style:{marginLeft:"20px"},onClick:function(){return f(e._id,e.role)},children:"Toggle role"})]})]},e._id)}))})]})})},f=!0;t.default=function(e){var t=Object(i.parseCookies)(),r=Object(o.useRef)(null),s=t.user?JSON.parse(t.user):"";if(console.log("account"),console.log(s),0===e.orders.length)return Object(n.jsx)("div",{className:" container center-align",children:Object(n.jsx)("h2",{children:" You have no order history"})});Object(o.useEffect)((function(){M.Collapsible.init(r.current)}),[]);var a=function(){return Object(n.jsx)("ul",{className:"collapsible",ref:r,children:e.orders.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{className:"collapsible-header",children:[Object(n.jsx)("i",{className:"material-icons",children:"folder"})," ",e.createdAt," "]}),Object(n.jsxs)("div",{className:"collapsible-body",children:[Object(n.jsxs)("h4",{children:["Total \u20b9 ",e.total]}),e.products.map((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h5",{children:[e.product.name," x ",e.quantity]})})}))]})]})}))})};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"center-align",children:[Object(n.jsx)("h4",{children:s.name}),Object(n.jsx)("h4",{children:s.email})]}),Object(n.jsx)("h2",{children:"Order History"}),Object(n.jsx)(a,{}),"root"==s.role&&Object(n.jsx)(l,{})]})}},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},s=e.split(o),c=i.decode||n,u=0;u<s.length;u++){var l=s[u],f=l.indexOf("=");if(!(f<0)){var h=l.substr(0,f).trim(),d=l.substr(++f,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==r[h]&&(r[h]=a(d,c))}}return r},t.serialize=function(e,t,r){var n=r||{},o=n.encode||i;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!s.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!s.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(n.domain){if(!s.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!s.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,i=encodeURIComponent,o=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(r){return e}}},n84q:function(e,t,r){"use strict";(function(e){var r="production"===e.env?"https://mystoreAbhi25.vercel.app":"http://localhost:3000";t.a=r}).call(this,r("8oxB"))},nGCP:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return r("cdae")}])}},[["nGCP",0,2,1]]]);