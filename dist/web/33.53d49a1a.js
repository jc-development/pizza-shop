(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[33],{"0l2W":function(e,n,t){},GPFk:function(e,n,t){},GUI7:function(e,n,t){"use strict";t.r(n);var r=t("mXGw"),a=t.n(r),c=t("xARA"),o=t("USb2"),u=t("/m4v"),s=t("6Q9u"),i=t.n(s),l=t("q/Up"),v=t("Nsjo"),p=t("NthX"),f=t.n(p),h=t("mJbN"),d=t("D1PD"),m=f.a.mark(y),b=f.a.mark(O);function y(e){var n,t;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.type,n=e.payload,t=n.length>1?n.replace("/",""):"home",r.prev=2,r.next=5,Object(h.d)({type:d.c,payload:t});case 5:r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(2),r.next=11,Object(h.d)({type:d.a,payload:r.t0});case 11:case"end":return r.stop()}}),m,null,[[2,7]])}function O(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(d.b,y);case 2:case"end":return e.stop()}}),b)}var _=t("WRm0"),w=t.n(_),E=t("Qk2H"),j=f.a.mark(x),A=f.a.mark(S),g=function(){return w()("http://jsonplaceholder.typicode.com/users").then((function(e){if(e.ok)return console.log("response: ",e),e.json();console.log("error")})).then((function(e){return e})).catch((function(e){return console.log("error on fetch: ",e)}))};function x(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(h.b)(g);case 3:return e=n.sent,console.log("pizzas:",e),n.next=7,Object(h.d)({type:E.c,payload:e});case 7:n.next=14;break;case 9:return n.prev=9,n.t0=n.catch(0),console.log("error: ",n.t0),n.next=14,Object(h.d)({type:E.a,payload:n.t0});case 14:case"end":return n.stop()}}),j,null,[[0,9]])}function S(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(E.b,x);case 2:case"end":return e.stop()}}),A)}var D=f.a.mark(k);function k(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(O),Object(h.b)(S)]);case 2:case"end":return e.stop()}}),D)}var N=t("VQ5w");delete window.__PRELOADED_STATE__;var P=Object(v.a)(i()(window.__PRELOADED_STATE__));P.runSaga(k),Object(l.b)((function(){Object(c.hydrate)(a.a.createElement(u.a,{store:P},a.a.createElement(o.a,null,a.a.createElement(N.a,null))),document.getElementById("app"))}))},Nsjo:function(e,n,t){"use strict";(function(e){var r=t("cnbf"),a=t("8Cru"),c=t("09a5"),o=t("nnlt");n.a=function(n){var t=e.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,u=Object(a.b)({sagaMonitor:c.a}),s=[u],i=Object(r.e)(o.a,n,t(r.a.apply(void 0,s)));return i.runSaga=u.run,i.close=function(){return i.dispatch(a.a)},i}}).call(this,t("pCvA"))},VQ5w:function(e,n,t){"use strict";var r=t("mXGw"),a=t.n(r),c=t("oNR1"),o=t("q/Up"),u=t("0l2W"),s=t.n(u),i=t("GPFk"),l=t.n(i),v=Object(o.a)({resolved:{},chunkName:function(){return"components-main-site-header"},isReady:function(e){var n=this.resolve(e);return!1!==this.resolved[n]&&!!t.m[n]},importAsync:function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,"VCwR"))},requireAsync:function(e){var n=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return n.resolved[t]=!0,e}))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return"VCwR"}}),p=function e(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/",component:Object(o.a)({resolved:{},chunkName:function(){return"Home"},isReady:function(e){var n=this.resolve(e);return!1!==this.resolved[n]&&!!t.m[n]},importAsync:function(){return Promise.all([t.e(2),t.e(1),t.e(3),t.e(16),t.e(20)]).then(t.bind(null,"APfl"))},requireAsync:function(e){var n=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return n.resolved[t]=!0,e}))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return"APfl"}})}),a.a.createElement(c.a,{path:"/pizzas",component:Object(o.a)({resolved:{},chunkName:function(){return"Pizzas"},isReady:function(e){var n=this.resolve(e);return!1!==this.resolved[n]&&!!t.m[n]},importAsync:function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(3),t.e(26)]).then(t.bind(null,"SbET"))},requireAsync:function(e){var n=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return n.resolved[t]=!0,e}))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return"SbET"}})})))};n.a=p},nnlt:function(e,n,t){"use strict";var r=t("cnbf"),a=t("bKPf"),c=t("Qk2H"),o={pizzas:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case c.a:case c.c:return Object(a.merge)({},e,{pizzas:r});default:return e}},s=t("D1PD"),i={activeMainNav:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case s.a:case s.c:return Object(a.merge)({},e,{activeMainNav:r});default:return e}};n.a=Object(r.c)({pizzasState:u,navState:l})}},[["GUI7",19,0,13,9,18,11,12,10,15,17,6,7,8,14,23,22,43,41,48,36,37,38,39,40,42,44,45,46,47,49,50,5,21]]]);