(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{840:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return P}});var r,i,a,o,s,c=t(861),p=t(439),l=t(757),d=t.n(l),h=t(791),u=t(689),x=t(87),g=t(243),f=t(168),m=t(444),v=t(7),b=t.n(v),j=m.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  &::before {\n    content: '';\n    display: block;\n    background-color: rgb(255 255 255);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n  }\n\n  &::after {\n    content: '';\n    position: fixed;\n    top: 0px;\n    left: -5px;\n    width: calc(100% + 10px);\n    height: calc(100vh + 10px);\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    filter: blur(5px);\n    z-index: -1;\n    opacity: 0.35;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 0 5px;\n  }\n"])),(function(n){return n.backdrop?"url('https://image.tmdb.org/t/p/w500/".concat(n.backdrop,"')"):"url('https://images.wallpaperscraft.com/image/single/wall_structure_polygon_866156_3840x2400.jpg')"})),_=m.ZP.div(i||(i=(0,f.Z)(["\n  flex: 0 0 auto;\n  margin-right: 30px;\n"]))),w=m.ZP.img(a||(a=(0,f.Z)(["\n  max-height: 500px;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;\n  align-self: flex-start;\n"]))),y=m.ZP.div(o||(o=(0,f.Z)(["\n  flex: 1 1 auto;\n"]))),k=m.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-top: 10px;\n"])));j.propTypes={backdrop:b().string};var Z=t(184),P=function(){var n,e=(0,u.UO)().movieId,t=(0,h.useState)(null),r=(0,p.Z)(t,2),i=r[0],a=r[1];if(g.Z.defaults.baseURL="https://api.themoviedb.org/3",(0,h.useEffect)((function(){var n={params:{api_key:"a4e0e6c94492c515df52f4a6ebcc54c7",language:"en-US"}},t=function(){var t=(0,c.Z)(d().mark((function t(){var r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.Z.get("/movie/".concat(e),n);case 3:r=t.sent,a(r.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),!i)return(0,Z.jsx)("div",{children:"Loading..."});var o=null===(n=i.production_companies)||void 0===n?void 0:n.map((function(n){var e=n.id,t=n.logo_path,r=n.name;return t&&(0,Z.jsx)("li",{children:t&&(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:r,style:{maxHeight:50,maxWidth:200,marginRight:30,marginTop:10}})},e)})),s=Math.round(10*i.vote_average);return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(j,{backdrop:i.backdrop_path,children:[(0,Z.jsxs)(y,{children:[(0,Z.jsx)("h1",{children:i.title}),(0,Z.jsxs)("p",{children:["User score: ",s,"%"]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:i.overview}),(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)("p",{children:i.genres.map((function(n){return(0,Z.jsxs)("span",{children:[" ",n.name]},n.id)}))}),null!==o[0]&&o.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h2",{children:"Production companies"}),(0,Z.jsx)(k,{children:o})]})]}),(0,Z.jsx)(_,{children:(0,Z.jsx)(w,{src:i.poster_path?"https://image.tmdb.org/t/p/w500".concat(i.poster_path):"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",alt:i.title})})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)(u.j3,{})]})}},888:function(n,e,t){"use strict";var r=t(47);function i(){}function a(){}a.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},7:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=840.e6ad561b.chunk.js.map