(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[33],{IPpq:function(e,a,t){},jHQw:function(e,a,t){"use strict";t.r(a);var n=t("nxTg"),l=t.n(n),r=t("mXGw"),s=t.n(r),c=t("USb2"),i=t("Paa+");t("IPpq");a.default=function(e){var a=["You are a good person. You need good pizza.","You deserve a better pizza. We can help.","Old-world homemade goodness."],t=Object(r.useState)(0),n=l()(t,2),u=n[0],o=n[1],m=Object(r.useState)(a[u]),d=l()(m,2),E=d[0],b=d[1],O=Object(r.useState)(!1),v=l()(O,2),h=v[0],p=v[1],_=Object(r.useRef)();Object(r.useEffect)((function(){var e=setInterval((function(){h?p(!1):(o(u<a.length-1?u+1:0),p(!0))}),2500);return b(h?a[u]:"Order Online or Call 555-555-5555"),_.current=e,function(){clearInterval(_.current)}}));var f=function(a){return null!==e.activeMainNav?Object(i.a)({linkName:a,activeLinkRedux:e.activeMainNav}):null};return s.a.createElement("span",{className:e.isOpen?"main-header-middle hidden":"main-header-middle"},s.a.createElement("h2",null,E),s.a.createElement("nav",null,s.a.createElement("ul",{className:"thirds-equal"},s.a.createElement("li",null,s.a.createElement(c.b,{to:"/pizzas",className:f("pizzas")},"pizzas")),s.a.createElement("li",null,s.a.createElement(c.b,{to:"/wings",className:f("wings")},"wings")),s.a.createElement("li",null,s.a.createElement(c.b,{to:"/hot-subs",className:f("hot-subs")},"hot subs")))))}}}]);