(this["webpackJsonparbitrage-scanner-frontend"]=this["webpackJsonparbitrage-scanner-frontend"]||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(44),r=n.n(c),s=(n(149),n(14)),o=n(7),d=n(3),b=(n(150),n(52)),l=n.n(b),j=n(121),h=n.n(j),u=n(117),O=n(2),p=[{field:"id",hide:!0},{field:"asset",headerName:"Asset",width:150},{field:"basePoints",headerName:"Base Points",type:"number",width:200},{field:"binancePrice",headerName:"Binance Price",type:"number",width:200},{field:"coinbasePrice",headerName:"Coinbase Price",type:"number",width:200},{field:"binanceBips",headerName:"Binance Bips",type:"number",width:200},{field:"coinbaseBips",headerName:"Coinbase Bips",type:"number",width:200}];function f(e){return Object(O.jsx)("div",{style:{height:800,width:"100%"},children:Object(O.jsx)(u.a,{rows:e.assets,columns:p,pageSize:20,rowsPerPageOptions:[10,20,50]})})}var g=n(256),m=n(257),x=n(255),C=n(254),N=n(70),S=n(251);var w=function(){var e,t=l()("wss://arbitrage-scanner.herokuapp.com/prices",{onOpen:function(){return console.log("WebSocket Client Connected")},shouldReconnect:function(e){return!0}}),n=t.lastMessage,i=t.readyState,c=(e={},Object(d.a)(e,b.ReadyState.CONNECTING,"Connecting"),Object(d.a)(e,b.ReadyState.OPEN,"Open"),Object(d.a)(e,b.ReadyState.CLOSING,"Closing"),Object(d.a)(e,b.ReadyState.CLOSED,"Closed"),Object(d.a)(e,b.ReadyState.UNINSTANTIATED,"Uninstantiated"),e)[i],r=Object(a.useState)([]),j=Object(o.a)(r,2),u=j[0],p=j[1];return Object(a.useEffect)((function(){null!==n&&p((function(e){return[].concat(Object(s.a)(e),[JSON.parse(n.data)])}))}),[n]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(g.a,{sx:{flexGrow:1},children:Object(O.jsx)(m.a,{position:"static",children:Object(O.jsxs)(x.a,{children:[Object(O.jsxs)(C.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:["Arbitrage Scanner (",c,")"]}),Object(O.jsx)(N.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return p([])},children:Object(O.jsx)(h.a,{})})]})})}),Object(O.jsx)(S.a,{container:!0,spacing:0,direction:"row",alignItems:"center",justifyContent:"center",style:{marginTop:"1vh"},children:Object(O.jsx)(S.a,{item:!0,lg:8,md:10,xs:12,children:Object(O.jsx)(f,{assets:u})})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),y()}},[[172,1,2]]]);
//# sourceMappingURL=main.4cd22184.chunk.js.map