(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(2),o=n.n(r),l=n(3);n(9);console.log("start");var s=function(){return a.a.createElement("section",null,a.a.createElement("div",{className:"product"},a.a.createElement("img",{src:"https://i.imgur.com/EHyR2nP.png",alt:"The cover of Stubborn Attachments"}),a.a.createElement("div",{className:"description"},a.a.createElement("h3",null,"Stubborn Attachments"),a.a.createElement("h5",null,"$20.00"))),a.a.createElement("form",{action:"/create-checkout-session",method:"POST"},a.a.createElement("button",{type:"submit"},"Checkout")))},u=function(e){var t=e.message;return a.a.createElement("section",null,a.a.createElement("p",null,t))};function i(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search);console.log(Object.fromEntries(e)),e.get("success")&&(r("Order placed! You will receive an email confirmation."),console.log("this is true")),e.get("canceled")&&r("Order canceled -- continue to shop around and checkout when you're ready.")}),[]),n?a.a.createElement(u,{message:n}):a.a.createElement(s,null)}o.a.render(a.a.createElement(i,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.b4e48b46.chunk.js.map