_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var a,s=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=s.length;t;){for(a=s,s=[];++l<t;)a&&a[l].run();l=-1,t=s.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function u(e){r(c,o,i,u,a,"next",e)}function a(e){r(c,o,i,u,a,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return o}))},O2ls:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("HaE+"),c=n("nKUr"),u=n("q1tI"),a=(n("YFqc"),n("n84q")),s=n("p46w"),f=n.n(s),l=n("nOHt");t.default=function(){var e=Object(u.useState)(""),t=e[0],n=e[1],r=Object(u.useState)(""),s=r[0],p=r[1],d=Object(l.useRouter)(""),h=function(){var e=Object(i.a)(o.a.mark((function e(n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("".concat(a.a,"/api/Login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:s})});case 3:return r=e.sent,e.next=6,r.json();case 6:i=e.sent,console.log(i),i.error?M.toast({html:i.error,classes:"red"}):(console.log(i),f.a.set("token",i.token),f.a.set("user",i.user),d.push("/account"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{onSubmit:function(e){return h(e)},children:Object(c.jsxs)("div",{className:" container center-align card authcard",children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsx)("input",{type:"text",placeholder:"Email",value:t,onChange:function(e){n(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"password",value:s,onChange:function(e){p(e.target.value)}}),Object(c.jsxs)("button",{type:"submit",className:"waves-effect waves-light btn ",children:[Object(c.jsx)("i",{className:"material-icons left ",children:"forward"}),"Login"]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{style:{margin:"8px"},className:"waves-effect waves-light btn",onClick:function(){return d.push("/signup")},children:"Does Not Have Account"})})]})})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i,c=o(n("q1tI")),u=n("elyg"),a=n("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=i||(f?i=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),i=o[0],s=o[1],h=(0,a.useRouter)(),v=h&&h.pathname||"/",m=c.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,u.resolveHref)(v,e.as):i||o}}),[v,e.href,e.as]),w=m.href,g=m.as;c.default.useEffect((function(){if(t&&f&&i&&i.tagName&&(0,u.isLocalURL)(w)&&!l[w+"%"+g])return p(i,(function(){d(h,w,g)}))}),[t,i,w,g,h]);var y=e.children,b=e.replace,x=e.shallow,j=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var O=c.Children.only(y),T={ref:function(e){e&&s(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,g,b,x,j)}};return t&&(T.onMouseEnter=function(e){(0,u.isLocalURL)(w)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(h,w,g,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(T.href=(0,u.addBasePath)((0,u.addLocale)(g,h&&h.locale,h&&h.defaultLocale))),c.default.cloneElement(O,T)};t.default=h},n84q:function(e,t,n){"use strict";(function(e){var n="production"===e.env?"https://mystoreAbhi25.vercel.app":"http://localhost:3000";t.a=n}).call(this,n("8oxB"))},p46w:function(e,t,n){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(s){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var a in i)i[a]&&(u+="; "+a,!0!==i[a]&&(u+="="+i[a].split(";")[0]));return document.cookie=t+"="+n+u}}function c(e,n){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var u=i[c].split("="),a=u.slice(1).join("=");n||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var s=t(u[0]);if(a=(r.read||r)(a,s)||t(a),n)try{a=JSON.parse(a)}catch(f){}if(o[s]=a,e===s)break}catch(f){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])}},[["u6Hu",0,2,1,3]]]);