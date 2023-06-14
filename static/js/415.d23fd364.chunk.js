(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{2746:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r,o,a,i=n(7689),c=n(168),u=n(1087),s=n(6444),p=n(2007),l=n.n(p),f=n(5353),d=s.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),h=s.ZP.li(o||(o=(0,c.Z)(["\n  padding: 5px 12px;\n  border-bottom: 1px solid transparent;\n  position: relative;\n"]))),v=(0,s.ZP)(u.rU)(a||(a=(0,c.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  @media screen and (min-width: 768px) {\n    &:hover::after,\n    &:focus::after {\n      content: '';\n      background-image: ",";\n\n      background-size: cover;\n      width: 160px;\n      height: 240px;\n      display: block;\n      border-radius: 4px;\n      border: 1px solid rgba(43, 134, 197);\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n      position: absolute;\n      top: -140px;\n      left: 400px;\n      z-index: 1;\n    }\n  }\n"])),(function(e){return e.cover?"url('https://image.tmdb.org/t/p/w500/".concat(e.cover,"')"):"url(".concat(f,")")}));v.propTypes={cover:l().string,placeholder:l().string};var b=n(184),m=function(e){var t=e.films,n=(0,i.TH)();return(0,b.jsx)(d,{children:t.map((function(e){return(0,b.jsx)(h,{children:(0,b.jsxs)(v,{to:"/movies/".concat(e.id),state:{from:n},cover:e.poster_path,children:["\ud83c\udf9e\ufe0f ",e.title]})},e.id)}))})}},5415:function(e,t,n){"use strict";n.r(t);var r=n(5861),o=n(9439),a=n(7757),i=n.n(a),c=n(2791),u=n(7231),s=(n(5862),n(2746)),p=n(1022),l=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.wr)();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Trending Movies"}),(0,l.jsx)(u.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:0===n.length?(0,l.jsx)(u.Z,{count:15,style:{height:30,width:300,marginTop:15}}):(0,l.jsx)(s.Z,{films:n})})]})}},1022:function(e,t,n){"use strict";n.d(t,{Hx:function(){return f},Y5:function(){return s},o1:function(){return p},uV:function(){return l},wr:function(){return u}});var r=n(5861),o=n(7757),a=n.n(o),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:"a4e0e6c94492c515df52f4a6ebcc54c7",language:"en-US"}},u=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t),c);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(t),c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"),c);case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?"),c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5862:function(){},5353:function(e,t,n){"use strict";e.exports=n.p+"static/media/placeholder.766050a83a9c288363de.png"},7231:function(e,t,n){"use strict";n.d(t,{y:function(){return d},Z:function(){return f}});var r=n(9439);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=n(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],p=["children"],l=u.createContext({});function f(e){for(var t,n,o,a=e.count,p=void 0===a?1:a,f=e.wrapper,d=e.className,h=e.containerClassName,v=e.containerTestId,b=e.circle,m=void 0!==b&&b,y=e.style,g=c(e,s),x=u.useContext(l),w=i({},g),O=0,j=Object.entries(g);O<j.length;O++){var k=(0,r.Z)(j[O],2),Z=k[0];"undefined"===typeof k[1]&&delete w[Z]}var P=i(i(i({},x),w),{},{circle:m}),_=i(i({},y),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,o=e.height,a=e.borderRadius,i=e.circle,c=e.direction,u=e.duration,s=e.enableAnimation,p=void 0===s||s,l={};return"rtl"===c&&(l["--animation-direction"]="reverse"),"number"===typeof u&&(l["--animation-duration"]="".concat(u,"s")),p||(l["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(l.width=r),"string"!==typeof o&&"number"!==typeof o||(l.height=o),"string"!==typeof a&&"number"!==typeof a||(l.borderRadius=a),i&&(l.borderRadius="50%"),"undefined"!==typeof t&&(l["--base-color"]=t),"undefined"!==typeof n&&(l["--highlight-color"]=n),l}(P)),T="react-loading-skeleton";d&&(T+=" ".concat(d));for(var E=null!==(t=P.inline)&&void 0!==t&&t,C=[],S=Math.ceil(p),R=0;R<S;R++){var I=_;if(S>p&&R===S-1){var N=null!==(n=I.width)&&void 0!==n?n:"100%",D=p%1,U="number"===typeof N?N*D:"calc(".concat(N," * ").concat(D,")");I=i(i({},I),{},{width:U})}var z=u.createElement("span",{className:T,style:I,key:R},"\u200c");E?C.push(z):C.push(u.createElement(u.Fragment,{key:R},z,u.createElement("br",null)))}return u.createElement("span",{className:h,"data-testid":v,"aria-live":"polite","aria-busy":null===(o=P.enableAnimation)||void 0===o||o},f?C.map((function(e,t){return u.createElement(f,{key:t},e)})):C)}function d(e){var t=e.children,n=c(e,p);return u.createElement(l.Provider,{value:n},t)}}}]);
//# sourceMappingURL=415.d23fd364.chunk.js.map