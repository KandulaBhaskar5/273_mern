(this["webpackJsonpreact-navbar"]=this["webpackJsonpreact-navbar"]||[]).push([[0],{25:function(n,e,t){n.exports=t(42)},30:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(19),c=t.n(o),i=(t(30),t(5)),l=t(10),u=t(8),s=t(3),d=t(20),f=t.n(d),m=t(2),g=function(){var n=function(n,e){var t=window.localStorage.getItem(n),r=Object(a.useState)(t||e),o=Object(m.a)(r,2),c=o[0],i=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem(n,c)}),[c,n]),[c,i]}("theme","light"),e=Object(m.a)(n,2),t=e[0],r=e[1];return Object(a.useEffect)((function(){document.body.className="",document.body.classList.add(t)}),[t]),[t,function(){return r((function(n){return"light"}))}]},v=Object(a.createContext)({isMenuOpen:!1,toggle:function(){},closeMenu:function(){}}),b=function(n){var e=n.children,t=function(n){var e=Object(a.useState)(n),t=Object(m.a)(e,2),r=t[0],o=t[1];return{isToggled:r,setToggle:o,toggle:function(){return o((function(n){return!n}))}}}(!1),o=t.isToggled,c=t.setToggle,i=t.toggle;return r.a.createElement(v.Provider,{value:{isMenuOpen:o,toggleMenu:i,closeMenu:function(){return c(!1)}}},e)},p=function(){return Object(a.useContext)(v)},h=(Object(a.createContext)({theme:"dark",toggleTheme:function(){}}),t(44)),w=function(n){var e=n.name,t=n.size,a=void 0===t?"24":t;switch(e){case"day":return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 302.4 302.4"},r.a.createElement("path",{fill:"#FFF",d:"M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6a76.3 76.3 0 0 0 76 76 76.3 76.3 0 0 0 76-76c0-20.8-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"}));case"night":return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 480 480"},r.a.createElement("path",{d:"M459.8 347.3a16 16 0 0 0-17.8-5A176.2 176.2 0 0 1 208.7 176c0-58.3 28.8-112.7 77-145.4a16 16 0 0 0-6.6-29C271.6.3 264 0 256.6 0c-132.3 0-240 107.6-240 240s107.7 240 240 240c84 0 160.5-42.7 204.4-114.2 3.6-5.8 3-13.2-1.2-18.5z"}));default:return"Icon does not exist"}};function x(){var n=Object(i.a)(['\n  position: relative;\n  color: white;\n  text-decoration: none;\n  text-transform: capitalize;\n  color: var(--text);\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 0;\n    bottom: -2px;\n    height: 2px;\n    width: 0;\n    background: var(--text);\n    transition: width 150ms linear;\n  }\n  &:hover::before {\n    width: 100%;\n  }\n']);return x=function(){return n},n}function E(){var n=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n\n  li:not(:last-child) {\n    margin-right: 26px;\n  }\n\n  li:last-child {\n    margin-left: auto;\n  }\n\n  button {\n    background: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    li {\n      padding: 12px;\n      margin: 0 !important;\n    }\n  }\n"]);return E=function(){return n},n}var O=["home","about","contact"],j=function(){var n=p().closeMenu,e=g(),t=Object(m.a)(e,2),a=(t[0],t[1]);return r.a.createElement(y,{className:"nav-links"},O.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(M,{to:"/".concat(e),className:"link",onClick:n},e))})),r.a.createElement("li",null,r.a.createElement("button",{onClick:a},r.a.createElement(w,{name:"day"}))))},y=s.default.ul(E()),M=Object(s.default)(l.b)(x());function z(){var n=Object(i.a)(["\n      background: var(--headerBg);\n      box-shadow: var(--headerBoxShadow);\n    "]);return z=function(){return n},n}function k(){var n=Object(i.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n\n  background: var(--bg);\n  color: var(--text);\n  transition: all 150ms linear;\n\n  ","\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  padding: 0 60px;\n  z-index: 2;\n\n  @media screen and (max-width: 768px) {\n    justify-content: space-between;\n    padding: 0 30px;\n  }\n\n  .logo {\n    flex: 2;\n    color: var(--text);\n    font-size: 32px;\n  }\n\n  .nav-links {\n    @media screen and (max-width: 768px) {\n      display: none;\n    }\n  }\n\n  .hamburger-react {\n    display: none;\n    z-index: 99;\n    & > div > div {\n      background: var(--text) !important;\n    }\n    @media screen and (max-width: 768px) {\n      display: block;\n    }\n  }\n"]);return k=function(){return n},n}var S=function(){var n=p(),e=n.isMenuOpen,t=n.toggleMenu,o=function(){var n=Object(a.useState)(!1),e=Object(m.a)(n,2),t=e[0],r=e[1],o=function(){var n=void 0!==window?window.pageYOffset:0;r(n>0)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",o,{passive:!0}),function(){window.removeEventListener("scroll",o,{passive:!0})}}),[]),{isScrolled:t}}().isScrolled;return r.a.createElement(C,{isScrolled:o},r.a.createElement(l.b,{to:"/",className:"Noriverse"},"Noriverse"),r.a.createElement(j,null),r.a.createElement(h.a,{toggled:e,toggle:t,duration:0}))},C=s.default.nav(k(),(function(n){return n.isScrolled&&Object(s.css)(z())}));function L(){var n=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: var(--bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return L=function(){return n},n}var N=function(){var n=p(),e=n.isMenuOpen,t=n.closeMenu,o=function(){var n=Object(a.useState)(!1),e=Object(m.a)(n,2),t=e[0],r=e[1],o=function(){var n=window.innerWidth<768;r(n)};return Object(a.useLayoutEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]),{isMobile:t}}().isMobile;return function(n){Object(a.useLayoutEffect)((function(){var e=window.getComputedStyle(document.body).overflow;return n&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow=e}}),[n])}(e),Object(a.useEffect)((function(){o||t()}),[o]),r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(B,null,r.a.createElement(j,null)))},B=s.default.nav(L());function T(){var n=Object(i.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n"]);return T=function(){return n},n}var F=function(){return r.a.createElement(I,null,r.a.createElement(S,null),r.a.createElement(N,null))},I=s.default.div(T()),A=function(){return r.a.createElement("div",null,"About page")};function H(){var n=Object(i.a)(["\n  ",';\n\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: "Montserrat", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: var(--bg);\n    color: var(--text);\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n  \n  a {\n    text-decoration: none;\n  }\n']);return H=function(){return n},n}var J=Object(s.createGlobalStyle)(H(),f.a),V=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement(b,null,r.a.createElement(F,null)),r.a.createElement("div",{style:{height:"100vh"}},"page loading"),r.a.createElement("div",{style:{height:"100vh"}},"page loading"),r.a.createElement(u.a,{exact:!0,path:"/about",component:A})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.70f7e6ba.chunk.js.map