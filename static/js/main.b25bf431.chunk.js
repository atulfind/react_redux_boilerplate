(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(5),a=n.n(c),u=n(4),l=n(3),i=(n(23),n(24),Object(l.b)((function(e){return{ctr:e.ctr.counter,res:e.res.result}}),(function(e){return{onStoreResult:function(t){return e({type:"STORE_RESULT",payload:t})},onDeleteResult:function(t){return e({type:"DELETE_RESULT",payload:t})}}}))((function(e){var t=e.res,n=e.ctr,r=e.onStoreResult,c=e.onDeleteResult;return o.a.createElement("div",{className:"results"},o.a.createElement("button",{onClick:function(){return r(n)}},"Add to The Result"),t.length>0&&o.a.createElement("ul",null,t.map((function(e,t){return o.a.createElement("li",{key:t,onClick:function(){return c(e.id)}},e.value)}))))}))),s=Object(l.b)((function(e){return{ctr:e.ctr.counter}}),(function(e){return{onIncrementCounter:function(){return e({type:"INCREMENT"})},onDecrementCounter:function(){return e({type:"DECREMENT"})},onAddCounter:function(){return e({type:"ADD",payload:10})},onSubtractCounter:function(){return e({type:"SUBTRACT",payload:10})}}}))((function(e){var t=e.ctr,n=e.onIncrementCounter,r=e.onAddCounter,c=e.onSubtractCounter,a=e.onDecrementCounter;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("button",{onClick:a},"DECREMENT"),o.a.createElement("button",{onClick:n},"INCREMENT"),o.a.createElement("span",null," ",t),o.a.createElement("button",{onClick:r},"ADD 10"),o.a.createElement("button",{onClick:c},"SUBTRACT 10")),o.a.createElement(i,null))}));var p=function(){var e=Object(r.useCallback)((function(e,t){"back"===t.state.direction&&(document.querySelector("body").style.backgroundColor="red")}),[]);return Object(r.useEffect)((function(){return window.addEventListener("navigate",e),function(){window.removeEventListener("navigate",e)}}),[e]),o.a.createElement("div",{className:"App"},o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(6);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={counter:0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return E({},e,{counter:e.counter+1});case"DECREMENT":return E({},e,{counter:e.counter-1});case"ADD":return E({},e,{counter:e.counter+t.payload});case"SUBTRACT":return E({},e,{counter:e.counter-t.payload});default:return e}},y=n(12);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={result:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_RESULT":return v({},e,{result:[{id:new Date,value:t.payload}].concat(Object(y.a)(e.result))});case"DELETE_RESULT":var n=e.result.filter((function(e){return e.id!==t.payload}));return v({},e,{result:n});default:return e}},w=Object(u.b)({ctr:O,res:g}),h=Object(u.c)(w);a.a.render(o.a.createElement(l.a,{store:h},o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b25bf431.chunk.js.map