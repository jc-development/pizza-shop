(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[27,16,51],{F56x:function(t,e){t.exports=function(t,e,n,r){var i=n?n.call(r,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),o=0;o<a.length;o++){var s=a[o];if(!u(s))return!1;var p=t[s],c=e[s];if(!1===(i=n?n.call(r,p,c,s):void 0)||void 0===i&&p!==c)return!1}return!0}},SbET:function(t,e,n){"use strict";n.r(e);var r=n("SDJZ"),i=n.n(r),a=n("NToG"),l=n.n(a),u=n("K4DB"),o=n.n(u),s=n("+IV6"),p=n.n(s),c=n("eef+"),f=n.n(c),z=n("mXGw"),h=n.n(z),v=n("tj/o"),m=n("/m4v"),d=n("Qk2H"),_=n("D1PD"),E=function(t){function e(){return i()(this,e),o()(this,p()(e).apply(this,arguments))}return f()(e,t),l()(e,[{key:"componentWillMount",value:function(){this.props.fetchPizzasList(),this.props.updateNav(this.props.match.path)}},{key:"render",value:function(){var t=this;return h.a.createElement(h.a.Fragment,null,h.a.createElement(v.Helmet,null,h.a.createElement("title",null,"Pizza's Pizzeria Pizza's List")),h.a.createElement("h1",null,"Pizza's List"),h.a.createElement("ul",null,null!==t.props.pizzas?t.props.pizzas.map((function(t,e){return h.a.createElement("li",{key:e},t.name)})):null))}}]),e}(z.Component);e.default=Object(m.b)((function(t){return{pizzas:t.pizzasState.pizzas}}),{fetchPizzasList:d.d,updateNav:_.d})(E)}}]);