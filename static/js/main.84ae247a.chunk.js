(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),s=o.n(n),a=o(2),r=o.n(a),c=o(5),i=o(3),u=o(4),d=o(7),l=o(6),m=(o(13),o(16)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(d.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={goodsList:["Jam"]},t.makeListOfGoods=function(){switch(t.state.goodsList.length){case 0:return"no good is selected";case 1:return" is selected";default:return" are selected"}},t.goodStatus=function(e){return t.state.goodsList.some((function(t){return t===e}))?"App__active":"App__disables"},t}return Object(u.a)(o,[{key:"addGood",value:function(t){this.setState((function(e){var o=e.goodsList;return{goodsList:[].concat(Object(c.a)(o),[t])}}))}},{key:"removeGood",value:function(t){this.setState((function(e){return{goodsList:e.goodsList.filter((function(e){return e!==t}))}}))}},{key:"removeAllGood",value:function(){this.setState((function(t){t.goodsList;return{goodsList:[]}}))}},{key:"changeStatus",value:function(t){this.state.goodsList.some((function(e){return e===t}))?this.removeGood(t):this.addGood(t)}},{key:"buttonText",value:function(t){return this.state.goodsList.some((function(e){return e===t}))?"Remove":"Add"}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"App__header"},this.state.goodsList.join(", "),this.makeListOfGoods()),s.a.createElement("button",{type:"button",className:this.state.goodsList.length<1?"App__button-disable":"App__butoon",onClick:function(){return t.removeAllGood()}},"X"),s.a.createElement("ul",null,p.map((function(e){return s.a.createElement("li",{key:Object(m.a)(),className:"App__good-container"},s.a.createElement("span",{className:"App__good-item ".concat(t.goodStatus(e))},e)," ",s.a.createElement("button",{type:"button",className:"App__good-item-button",onClick:function(){return t.changeStatus(e)}},t.state.goodsList.some((function(t){return t===e}))?"Remove":"Add"))}))))}}]),o}(s.a.Component);r.a.render(s.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.84ae247a.chunk.js.map