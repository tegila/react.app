(this["webpackJsonpreact.app"]=this["webpackJsonpreact.app"]||[]).push([[0],{31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(1),a=n(21),o=n.n(a),i=(n(31),n(20)),s=n(23),u=n(5),l=n(58),b=n(61),j=n(63),h=n(64),d=n(59),O=n(62),p=n(57),g=n(60),m=Object(u.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(h.a),f=Object(u.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),x=1;function k(e,t,n){return{key:x++,exchange:e,price:Math.round(100*(t+Number.EPSILON))/100,amount:n}}var v=Object(l.a)({table:{minWidth:200}});function w(){var e=v(),t=Object(r.useState)([]),n=Object(s.a)(t,2),a=n[0],o=n[1],u=Object(r.useRef)(null);return Object(r.useEffect)((function(){return u.current=new WebSocket("wss://c.tegila.com.br/wss"),u.current.onmessage=function(e){var t=JSON.parse(e.data);o((function(e){return[k.apply(void 0,Object(i.a)(t))].concat(Object(i.a)(e))}))},function(){return u.current.close()}}),[]),Object(c.jsx)(d.a,{component:g.a,children:Object(c.jsxs)(b.a,{className:e.table,"aria-label":"customized table",children:[Object(c.jsx)(O.a,{children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(m,{children:"Exchange"}),Object(c.jsx)(m,{align:"right",children:"Prize"}),Object(c.jsx)(m,{align:"right",children:"Amount"})]})}),Object(c.jsx)(j.a,{children:a.map((function(e){return Object(c.jsxs)(f,{children:[Object(c.jsx)(m,{align:"right",children:e.exchange}),Object(c.jsx)(m,{align:"right",children:e.price}),Object(c.jsx)(m,{align:"right",children:e.amount})]},e.key)}))})]})})}o.a.render(Object(c.jsx)(w,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.81c384dc.chunk.js.map