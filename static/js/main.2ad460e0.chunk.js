(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),c=e(1),a=e.n(c),s=e(3),u=e(6),i=e(7),d=e(9),l=e(8),f=e(2),p=e.n(f),h=(e(15),e(0)),j=function(t){var n=t.goods;return Object(h.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(h.jsx)("li",{style:{color:"".concat(t.color)},children:t.name},t.id)}))})};function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(){var t=Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b().then((function(t){return t.filter((function(t){return"red"===t.color}))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(t){Object(d.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(u.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=n.call.apply(n,[this].concat(o))).state={goods:[]},t.changeButton=function(){var n=Object(s.a)(a.a.mark((function n(e){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:r=n.sent,t.setState({goods:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(i.a)(e,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React dynamic list of goods"}),Object(h.jsxs)("div",{className:"App__goods",children:[Object(h.jsxs)("div",{className:"App__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){t.changeButton(b)},children:"Load All goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.changeButton(g)},children:"Load 5 first goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.changeButton(m)},children:"Load red goods"})]}),Object(h.jsx)(j,{goods:this.state.goods})]})]})}}]),e}(p.a.Component),O=v;o.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2ad460e0.chunk.js.map