(this["webpackJsonpdemo-proxy-sale"]=this["webpackJsonpdemo-proxy-sale"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(12),l=a.n(s),o=(a(22),a(13)),r=a(14),i=a(17),u=a(16),j=(a(23),a(15)),d=a.n(j),h=a(0),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",days:5,ps:"paypal",country:"usa",project:"zigo.com"},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("form",{onSubmit:function(t){t.preventDefault(),d.a.post("https://stage.proxy-crm.com/api/ws/v1/order/submit",{orderNumber:"demo".concat(Math.floor(Math.random()*(Math.floor(9e4)-Math.ceil(1e4)))+Math.ceil(1e4)),orderDate:new Date,email:e.state.email,price:"100",projectCode:e.state.project,count:"2",days:e.state.days,paymentSystemCode:e.state.ps,countryCode:e.state.country,authTypeCode:"login",authIp:""},{headers:{Authorization:"Bearer yPW9XyBCcgR1pzVtm7aAaywVa81zflqiaZKAaSxhPjYwe9Kad5"},crossdomain:!0}).then((function(){alert("\u0406\u043c'\u044f, \u0449\u043e \u0431\u0443\u043b\u043e \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e: "+e.state.email),console.log("request sended")}))},children:Object(h.jsxs)("div",{style:{display:"table-caption"},children:[Object(h.jsxs)("label",{className:"form-label",children:["\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430:",Object(h.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})]}),Object(h.jsxs)("label",{className:"form-label",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439:",Object(h.jsxs)("select",{value:this.state.days,onChange:function(t){return e.setState({days:t.target.value})},children:[Object(h.jsx)("option",{value:"5",children:"5"}),Object(h.jsx)("option",{value:"10",children:"10"}),Object(h.jsx)("option",{value:"15",children:"15"}),Object(h.jsx)("option",{value:"20",children:"20"})]})]}),Object(h.jsxs)("label",{className:"form-label",children:["\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430:",Object(h.jsx)("select",{value:this.state.ps,onChange:function(t){return e.setState({ps:t.target.value})},children:Object(h.jsx)("option",{value:"paypal",children:"PayPal"})})]}),Object(h.jsxs)("label",{className:"form-label",children:["\u0421\u0442\u0440\u0430\u043d\u0430:",Object(h.jsxs)("select",{value:this.state.country,onChange:function(t){return e.setState({country:t.target.value})},children:[Object(h.jsx)("option",{value:"usa",children:"USA"}),Object(h.jsx)("option",{value:"ua",children:"UA"}),Object(h.jsx)("option",{value:"rus",children:"RUS"})]})]}),Object(h.jsxs)("label",{className:"form-label",children:["\u041f\u0440\u043e\u0435\u043a\u0442:",Object(h.jsxs)("select",{value:this.state.project,onChange:function(t){return e.setState({project:t.target.value})},children:[Object(h.jsx)("option",{value:"zigo.com",children:"zigo.com"}),Object(h.jsx)("option",{value:"jd.mail.ru",children:"jd.mail.ru"}),Object(h.jsx)("option",{value:"job-mo.ru",children:"job-mo.ru"})]})]}),Object(h.jsx)("input",{type:"submit",value:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"})]})})})})}}]),a}(n.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.93c85bfe.chunk.js.map