(this.webpackJsonpday=this.webpackJsonpday||[]).push([[0],{12:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c.n(a),s=c(13),n=c.n(s),i=(c(40),c(9)),l=c(5),o=c(6),j=c(4),d=(c(12),c(30),c(31),c(45),c(1));var u=Object(j.b)((function(e){return{state:e.reducer2,state2:e.reducer3,state3:e.reducer4}}))((function(e){return Object(d.jsxs)("div",{className:"title_header",children:[Object(d.jsx)(o.b,{to:"/",className:"header_nav",children:Object(d.jsx)("img",{src:"./img/locate_arrow.svg",alt:"nav"})}),Object(d.jsx)("p",{class:"main_titles",children:Object(d.jsx)(o.b,{to:"/",children:"\uc644\ubcbd\ud55c \ud558\ub8e8"})}),!0===e.state3[0].Nobell?Object(d.jsx)("img",{src:"/img/bell.svg",alt:"bell",onClick:function(){e.dispatch({type:"\uc54c\ub9bc\uc5f4\uae30"})}}):Object(d.jsx)("img",{src:"/img/no_bell.svg",alt:"bell",className:"down"})]})}));var b=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("p",{children:"\uc624\ub298\ub3c4 \uc644\ubcbd\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc2dc\uae38 \ubc14\ub784\uac8c\uc694"}),Object(d.jsx)("p",{children:"Copyright 2021 \u24d2 jioo-designer  "})]})};var m=function(e){var t=Object(l.e)();return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"center_wrap",children:[Object(d.jsxs)("div",{className:"logo_wrap",children:[Object(d.jsx)("img",{src:"/img/introduce.svg",alt:"\uc774\ubbf8\uc9c0",className:"introImg"}),Object(d.jsx)("p",{className:"title intro_title",children:"\uc81c\uc791\uc790 \uc778\uc0ac"}),Object(d.jsxs)("p",{className:"caption",children:["\uc7a0\ub4e4\uae30 \uc804 \uc624\ub298 \uc815\ub9d0 \ud55c\uac8c \uc5c6\ub2e4\uace0 \ub290\uaef4\uc9c0\uc2e0 \uc801 \uc5c6\uc73c\uc2e0\uac00\uc694?",Object(d.jsx)("br",{}),"\uc77c\uc815\uc744 \uccb4\ud06c\ud558\uace0 \ub05d\ub0c4\uc73c\ub85c \uc368 \ud558\ub8e8\ub97c \uc644\ubcbd\ud558\uac8c \ub05d\ub0b4\ubcf4\uc138\uc694"]}),Object(d.jsx)("p",{class:"enter",onClick:function(){t.push("/")},children:"\ud655\uc778"})]}),Object(d.jsx)(b,{})]})})};c(48);var O=Object(j.b)((function(e){return{state:e.reducer6}}))((function(e){var t=Object(l.e)();return Object(a.useEffect)((function(){var c=document.querySelector(".js-form"),a=c.querySelector("input"),r=document.querySelector(".js-grettings"),s=document.querySelector(".gretting_wrap"),n=(s.querySelector(".out"),"currentUser");function i(e){e.preventDefault();var t,c=a.value;l(c),t=c,localStorage.setItem(n,t)}function l(a){r.innerText="".concat(a," \ub2d8 \ubc18\uac11\uc2b5\ub2c8\ub2e4"),c.classList.add("none"),s.classList.add("height"),t.push("/"),e.dispatch({type:"\ub85c\uadf8\uc778\uc131\uacf5"})}function o(){var e=localStorage.getItem(n);null===e?c.addEventListener("submit",i):l(e)}o()})),Object(d.jsxs)("div",{className:"center_wrap",children:[Object(d.jsx)("div",{className:"gretting_wrap",children:Object(d.jsx)("h4",{class:"js-grettings grettings",children:" "})}),Object(d.jsx)("form",{class:"js-form form",children:Object(d.jsx)("input",{type:"text",placeholder:"\uc0ac\uc6a9 \ud560 \ub2c9\ub124\uc784\uc744 \uc801\uc5b4\uc8fc\uc138\uc694."})}),Object(d.jsx)(b,{})]})})),h=c(27),g=c.n(h);var x=function(){var e=Object(a.useState)(g()()),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)("div",{className:"header_in",children:[Object(a.useEffect)((function(){setInterval((function(){r(g()())}),1e3)}),[]),Object(d.jsx)("div",{className:"time",children:c.format("HH:mm")}),Object(d.jsx)("img",{src:"/img/phone_base.svg",alt:"phone_Base"})]})};var p=function(){return Object(d.jsxs)("div",{className:"center_wrap",children:[Object(d.jsx)("div",{className:"logo_wrap",children:Object(d.jsx)("p",{className:"title",children:"\uc644\ubcbd\ud55c \ud558\ub8e8"})}),Object(d.jsx)(b,{})]})},f=c(21);var v=Object(j.b)((function(e){return{editorSwich:e.reducer}}))((function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),r=c[0],s=c[1],n=Object(a.useState)([]),l=Object(i.a)(n,2),o=l[0],j=l[1],u=Object(a.useState)([]),b=Object(i.a)(u,2),m=b[0],O=b[1];return Object(d.jsxs)("div",{className:"editor",children:[Object(d.jsx)("b",{children:"\uc624\ub298\uc758 \ubaa9\ud45c"}),Object(d.jsx)("input",{className:"text_area",placeholder:"\uc2a4\ucf00\uc904\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:function(e){s(e.target.value)}}),Object(d.jsxs)("div",{className:"date",children:[Object(d.jsx)("p",{className:"day",children:"\uc2dc\uac04"}),Object(d.jsxs)("form",{className:"time_wrap",autoComplete:"off",children:[Object(d.jsx)("input",{className:"time_txt hour",placeholder:"00",maxLength:"2",type:"number",min:"00",max:"24",onChange:function(e){j(e.target.value),O("00")}}),Object(d.jsx)("input",{className:"time_txt minute",placeholder:"00",type:"number",maxLength:"2",min:"00",max:"60",onChange:function(e){O(e.target.value)}}),Object(d.jsx)("input",{className:"time_txt",placeholder:"00",type:"number",maxLength:"2",min:"00",max:"60",disabled:!0})]})]}),Object(d.jsx)("button",{onClick:function(){var t=Object(f.a)(r);t.unshift(r),s(t);var c=Object(f.a)(o);c.unshift(o),j(c);var a=Object(f.a)(m);a.unshift(m),O(a);var n=document.querySelector(".text_area").value,i={write:r,writeH:o,writeM:m};""===n?alert("\uc2a4\ucf00\uc904\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"):e.dispatch({type:"\uc5d0\ub514\ud130\ub2eb\uae30",payload:i})},children:"\ub4f1\ub85d\ud558\uae30"})]})})),y=c(57);var N=Object(j.b)((function(e){return{state:e.reducer}}))((function(e){var t=localStorage.getItem(e.state[0].saveData),c=(JSON.parse(t),Object(l.e)());return Object(d.jsxs)("footer",{className:"footer_bar",children:[!1===e.addToggle?Object(d.jsx)("button",{onClick:function(){e.dispatch({type:"\uc5d0\ub514\ud130\uc5f4\uae30"})},children:Object(d.jsx)("img",{src:"/img/adds.svg",alt:"add"})}):null,Object(d.jsxs)("div",{className:"home f_con",onClick:function(){c.push("/")},children:[Object(d.jsx)("img",{src:"/img/home.svg",alt:"home"}),Object(d.jsx)("p",{children:"\ud648"})]}),Object(d.jsxs)("div",{className:"calendar f_con",onClick:function(){c.push("/calendar")},children:[Object(d.jsx)("img",{src:"/img/calendar.svg",alt:"calendar"}),Object(d.jsx)("p",{children:"\uce98\ub9b0\ub354"})]})]})})),_=c(58);c(32);var w=Object(j.b)((function(e){return{state:e.reducer9}}))((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"d_txt_wrap",children:[Object(d.jsx)(_.a,{format:"yyyy,MM,dd"}),Object(d.jsx)("input",{id:"d_day_txt"})]}),Object(d.jsx)("button",{className:"d_days",onClick:function(){var t=document.getElementById("ej2-datepicker_42").value,c=document.getElementById("d_day_txt").value;e.dispatch({type:"\ub514\ub370\uc774\uc804\uc1a1",payload5:t}),""===c?alert("\ub0b4\uc6a9\uc744\uc785\ub825\ud558\uc138\uc694"):e.dispatch({type:"\ub0a8\uc740\uc77c\uc815\ub0b4\uc6a9\uc804\uc1a1",payload6:c}),document.querySelector(".d_days").classList.add("margin")},children:"\uc791\uc131"})]})}));var T=Object(j.b)((function(e){return{state:e.reducer9,state2:e.reducer10}}))((function(e){var t=localStorage.getItem(e.state[0].dayName),c=JSON.parse(t),a=localStorage.getItem(e.state2[0].daytxt),r=JSON.parse(a),s=new Date,n=new Array;null===t?console.log("\uc2e4\ud328"):c.map((function(e,t){n.push(new Date(e))}));var i=n.map((function(e,t){return n[t].getTime()-s.getTime()})),l=i.map((function(e,t){return Math.ceil(i[t]/864e5)}));return console.log(l),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"wrap calendar",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(u,{})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)("section",{className:"important_data",children:[Object(d.jsxs)("div",{className:"title_wrap",children:[Object(d.jsx)("div",{className:"date_title",children:"\uc608\uc57d\ub41c \uc77c\uc815"}),null!==a?r.map((function(e,t){return Object(d.jsxs)("div",{className:"date_wrap",children:[Object(d.jsx)("p",{className:"date_txt",children:Object(d.jsx)("p",{children:r[t]})}),Object(d.jsx)("p",{className:"date_btn",children:isNaN(l[t])?"":"D-".concat(l[t])})]},t)})):null]}),Object(d.jsx)(w,{})]})]}),Object(d.jsx)(N,{})]})}));c(50);var S=Object(j.b)((function(e){return{state:e.reducer2,Time:e.reducer3,Text:e.reducer5}}))((function(e){return Object(d.jsxs)("div",{className:"noti_wrap",children:[Object(d.jsx)("div",{className:"cover"}),Object(d.jsxs)("aside",{children:[Object(d.jsxs)("div",{className:"aside_header",children:[Object(d.jsx)("p",{className:"noti_title",children:"\uc54c\ub9bc\ud568"}),Object(d.jsx)("img",{src:"/img/clear.svg",onClick:function(){e.dispatch({type:"\uc54c\ub9bc\ub2eb\uae30"}),e.dispatch({type:"\uc54c\ub9bc\ub044\uae30"})}})]}),Object(d.jsx)("ul",{className:"noti_body",children:e.Time[0].defaultTime.map((function(t,c){return Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{src:"/img/check_btn.svg"}),Object(d.jsxs)("div",{className:"li_txt_wrap",children:[Object(d.jsx)("p",{className:"li_time",children:"".concat(e.Time[0].defaultTime[c].year,"-").concat(e.Time[0].defaultTime[c].mon<10?"0"+e.Time[0].defaultTime[c].mon:e.Time[0].defaultTime[c].mon,"-").concat(e.Time[0].defaultTime[c].date<10?"0"+e.Time[0].defaultTime[c].date:e.Time[0].defaultTime[c].date,"\n                                      ").concat(e.Time[0].defaultTime[c].hour<10?"0"+e.Time[0].defaultTime[c].hour:e.Time[0].defaultTime[c].hour,":").concat(e.Time[0].defaultTime[c].min<10?"0"+e.Time[0].defaultTime[c].min:e.Time[0].defaultTime[c].min,":00")}),Object(d.jsx)("p",{className:"li_title",children:e.Text[0].checkText[c]})]})]},c)}))})]})]})}));c(51);var k=Object(j.b)((function(e){return{rankPoint:e.reducer7}}))((function(e){return Object(d.jsxs)("div",{className:"rank_wrap",children:[Object(d.jsxs)("ul",{className:"table",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:"/img/brown.svg",alt:""})}),Object(d.jsxs)("figcaption",{children:[Object(d.jsx)("h6",{children:"\ucd08\ubcf4\uc644\ubcbd\ub7ec"}),Object(d.jsx)("p",{children:"100% \uc5f0\uc18d 5\ud68c \ubbf8\ub9cc"})]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:"/img/silver.svg",alt:""})}),Object(d.jsxs)("figcaption",{children:[Object(d.jsx)("h6",{children:"\ub048\uae30\uc644\ubcbd\ub7ec"}),Object(d.jsx)("p",{children:"100% \uc5f0\uc18d 10\ud68c \ubbf8\ub9cc"})]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:"/img/gold.svg",alt:""})}),Object(d.jsxs)("figcaption",{children:[Object(d.jsx)("h6",{children:"\ud504\ub85c\uc644\ubcbd\ub7ec"}),Object(d.jsx)("p",{children:"100% \uc5f0\uc18d 15\ud68c \uc774\uc0c1"})]})]})]}),Object(d.jsx)("div",{className:"rankClose",onClick:function(){e.dispatch({type:"\ub4f1\uae09\ud45c\ub2eb\uae30"})},children:Object(d.jsx)("img",{src:"/img/clear.svg",alt:""})})]})}));c(52);var I=Object(j.b)((function(e){return{rankPoint:e.reducer7,profileData:e.reducer8}}))((function(e){var t=Object(l.e)(),c=localStorage.getItem("id");return Object(d.jsxs)("div",{children:[Object(a.useEffect)((function(){document.querySelector(".main_titles a").innerHTML="\ub9c8\uc774\ud398\uc774\uc9c0"})),Object(d.jsxs)("div",{className:"wrap mypage",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(u,{})]}),Object(d.jsxs)("section",{className:"section_1",children:[Object(d.jsxs)("div",{className:"profile_wrap",children:[Object(d.jsxs)("h3",{className:"myName",children:[Object(d.jsx)("b",{children:e.currentUser}),"\ub2d8\uc740"]}),Object(d.jsxs)("p",{className:"myRank",children:[e.loadedPoint<5?"\ucd08\ubcf4\uc644\ubcbd\ub7ec":e.loadedPoint<14?"\ub048\uae30\uc644\ubcbd\ub7ec":e.loadedPoint>=15?"\ud504\ub85c\uc644\ubcbd\ub7ec":null,"\uc774\uc2ed\ub2c8\ub2e4!"]}),Object(d.jsx)("span",{children:"MY RANK"})]}),Object(d.jsx)("figure",{className:"profile_img",children:Object(d.jsx)("img",{src:"/img/profile".concat(null===c?1:c[0],".svg"),alt:""})})]}),Object(d.jsx)("section",{className:"section_2",children:Object(d.jsxs)("ul",{className:"tab_menu",children:[Object(d.jsxs)("li",{onClick:function(){t.push("/profile")},children:["\ud504\ub85c\ud544\uc774\ubbf8\uc9c0\ubcc0\uacbd",Object(d.jsx)("img",{src:"/img/my_arrow.svg",alt:""})]}),Object(d.jsxs)("li",{onClick:function(){e.dispatch({type:"\ub4f1\uae09\ud45c\uc5f4\uae30"})},children:["\ub4f1\uae09\ud45c",Object(d.jsx)("img",{src:"/img/my_arrow.svg",alt:""})]}),Object(d.jsx)("li",{children:Object(d.jsxs)(o.b,{to:"/introduce",children:["\uac1c\ubc1c\uc790\uc778\uc0ac",Object(d.jsx)("img",{src:"/img/my_arrow.svg",alt:""})]})}),Object(d.jsxs)("li",{onClick:function(){localStorage.removeItem("currentUser"),t.push("/login")},children:["\ub2c9\ub124\uc784\ubcc0\uacbd",Object(d.jsx)("img",{src:"/img/my_arrow.svg",alt:""})]})]})}),!0===e.rankPoint[0].rankToggle?Object(d.jsx)(k,{}):null]}),Object(d.jsx)(N,{})]})}));c(53);var C=Object(j.b)((function(e){return{profileData:e.reducer8}}))((function(e){var t=localStorage.getItem("id"),c=Object(l.e)();return Object(d.jsxs)("div",{children:[Object(a.useEffect)((function(){document.querySelector(".main_titles a").innerHTML="\ud504\ub85c\ud544\uc774\ubbf8\uc9c0\ubcc0\uacbd"})),Object(d.jsxs)("div",{className:"wrap profile_wrap",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(o.b,{to:"/Mypage",className:"profile_arrow",children:Object(d.jsx)("img",{src:"./img/locate_arrow.svg",alt:"arrow"})}),Object(d.jsx)(u,{})]}),Object(d.jsx)("section",{className:"section01",children:Object(d.jsxs)("div",{className:"my_profile",children:[Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:"/img/profile".concat(null===t?1:t[0],".svg"),alt:""})}),Object(d.jsx)("figcaption",{children:"\ud604\uc7ac\ud504\ub85c\ud544"})]})}),Object(d.jsx)("section",{className:"section02",children:Object(d.jsxs)("div",{className:"in_wrap",children:[[1,2,3,4,5,6].map((function(t,c){return Object(d.jsx)("figure",{className:"select_profile",onClick:function(){e.dispatch({type:"id\uac12\uc804\uc1a1",payload4:c+1})},children:Object(d.jsx)("img",{src:"/img/profile".concat(c+1,".svg"),alt:""})},c)})),Object(d.jsx)("button",{onClick:function(){c.push("/mypage")},children:"\ubc14\uafb8\uae30"})]})})]}),Object(d.jsx)(N,{})]})}));var D=Object(j.b)((function(e){return{reducer:e.reducer,reducer2:e.reducer2,reducer3:e.reducer3,reducer4:e.reducer4,reducer5:e.reducer5,reducer6:e.reducer6}}))((function(e){var t=Object(a.useState)(!1),c=Object(i.a)(t,2),r=c[0],s=c[1],n=localStorage.getItem("currentUser"),j=Object(a.useState)(1),b=Object(i.a)(j,2),h=b[0],g=b[1],f="rank",y=+localStorage.getItem(f),_=Object(a.useState)(0),w=Object(i.a)(_,2),k=w[0],D=w[1],M=Object(a.useState)(0),L=Object(i.a)(M,2),q=L[0],E=L[1],J=Object(a.useState)(!1),P=Object(i.a)(J,2),H=P[0],F=P[1],A=Object(a.useState)(!1),B=Object(i.a)(A,2),U=B[0],Y=B[1],V=localStorage.getItem(e.reducer[0].saveData),R=JSON.parse(V),K="parcent",z=+localStorage.getItem(K),G=new Date;G.setHours(24,0,0,0);var Q=setInterval((function(){var e=(new Date).getTime(),t=G-e;Math.floor(t%864e5/36e5),Math.floor(t%36e5/6e4),Math.floor(t%6e4/1e3);t<0&&(clearInterval(Q),E(0),localStorage.removeItem("data"),localStorage.removeItem("parcent"))}),1e3);return Object(d.jsxs)("div",{className:"App",children:[Object(a.useEffect)((function(){setTimeout((function(){s(!0);var e=new Date,t=new Date(e.getFullYear(),1,2),c=e-t,a=Math.floor(c/864e5);g(a-46)}),3e3)}),[]),Object(a.useEffect)((function(){var e=setInterval((function(){var t=(new Date).getTime(),c=G-t;Math.floor(c%864e5/36e5),Math.floor(c%36e5/6e4),Math.floor(c%6e4/1e3);0===c&&(clearInterval(e),E(0),localStorage.removeItem("data"),localStorage.removeItem("parcent"))}),1e3)}),[]),Object(a.useEffect)((function(){setInterval((function(){var e=new Date,t=new Date(e.getFullYear(),1,2),c=e-t,a=Math.floor(c/864e5);g(a-17)}),36e3)}),[]),Object(a.useEffect)((function(){E(null==z?0:z),D(null==y?0:y)}),[]),Object(d.jsx)(l.a,{exact:!0,path:"/",children:!1===r&&!1===e.reducer6[0].update?Object(d.jsx)(p,{}):null===n?Object(d.jsx)(O,{}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"wrap",children:[Object(d.jsxs)("header",{className:"main_header",children:[Object(d.jsx)(x,{}),Object(d.jsx)(o.b,{to:"/Mypage",className:"main_nav",children:Object(d.jsx)("img",{src:"./img/nav.svg",alt:"nav"})}),Object(d.jsx)(u,{})]}),Object(d.jsxs)("section",{className:"section01",children:[Object(d.jsxs)("div",{className:"s1_wrap",children:[Object(d.jsxs)("div",{className:"s1_txt_wrap",children:[Object(d.jsx)("p",{className:"today",children:"\uc624\ub298 \ud558\ub8e8"}),Object(d.jsxs)("p",{className:"parcent",children:[q>100?E(100):q,"%"]}),Object(d.jsx)("p",{className:"caption",children:"\uc644\ubcbd\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc168\uc2b5\ub2c8\ub2e4!"})]}),0===q?Object(d.jsx)("img",{src:"/img/wow.svg",alt:"\uc900\ube44"}):25===q?Object(d.jsx)("img",{src:"/img/ready.svg",alt:"\ud558\ub294\uc911",className:"ing"}):50===q?Object(d.jsx)("img",{src:"/img/50.svg",alt:"\ud558\ub294\uc911",className:"wow1"}):75===q?Object(d.jsx)("img",{src:"/img/75.svg",alt:"\ud558\ub294\uc911",className:"wow2"}):100===q?Object(d.jsx)("img",{src:"/img/ing.svg",alt:"\ud558\ub294\uc911",className:"wow3"}):Object(d.jsx)("img",{src:"/img/ing.svg",alt:"\ud558\ub294\uc911",className:"wow4"})]}),Object(d.jsxs)("div",{className:"race",children:[Object(d.jsx)("p",{className:"member",children:n}),Object(d.jsxs)("p",{className:"member_caption",children:["\ub2d8\uc740 ",h,"\uc77c\uc9f8 \uc644\ubcbd\ud55c \ud558\ub8e8\ub97c \uc0ac\uc6a9\uc911!!"]})]})]}),Object(d.jsx)("section",{className:"section02",children:Object(d.jsxs)("div",{className:"in_s2",children:[Object(d.jsxs)("div",{className:"schedule",children:[Object(d.jsx)("p",{children:"\uc77c\uc815\uc2a4\ucf00\uc904"}),!1===U?Object(d.jsxs)("p",{className:"reset",onClick:function(){F(!0),Y(!0)},children:["\uc791\uc131\uc644\ub8cc",Object(d.jsx)("img",{src:"/img/plus.svg",alt:"\ub354\ubcf4\uae30"})]}):Object(d.jsx)("p",{className:"reset",onClick:function(){localStorage.removeItem("data"),Y(!1),F(!1),localStorage.removeItem("parcent"),window.location.reload()},children:"\ucd08\uae30\ud654\ud558\uae30"})]}),null!==V?R.map((function(t,c){return Object(d.jsxs)("div",{className:"list",children:[Object(d.jsxs)("p",{className:"today_date",children:[R[c].writeH,":",R[c].writeM]}),Object(d.jsx)("p",{className:"today_txt",children:R[c].write}),Object(d.jsx)("button",{id:c,onClick:function(){var t=new Date,a={year:t.getFullYear(),mon:t.getMonth()+1,date:t.getDate(),hour:t.getHours(),min:t.getMinutes()};E(q>=100?q:q+25),localStorage.setItem(K,q+25),e.dispatch({type:"\ub0a0\uc9dc\uc804\uc1a1",payload2:a}),e.dispatch({type:"\uc54c\ub9bc\ubcf4\uae30"}),e.dispatch({type:"\ud14d\uc2a4\ud2b8\ubcf4\ub0b4\uae30",payload3:R[c].write}),D(50===q?k+1:k),localStorage.setItem(f,k);var r=document.querySelectorAll(".section02 .list button"),s=document.querySelectorAll(".section02 .list .today_date"),n=document.querySelectorAll(".section02 .list .today_txt");r[c].classList.add("off"),s[c].classList.add("op_off"),n[c].classList.add("op_off")},children:Object(d.jsx)("img",{src:"/img/before_check.svg",alt:"check"})})]},c)})):null]})}),!0===e.reducer[0].toggle?Object(d.jsx)(v,{}):null]}),Object(d.jsx)(N,{addToggle:H}),!0===e.reducer2[0].NotiToggle&&!0===e.reducer4[0].Nobell?Object(d.jsx)(S,{loadedTodos:V,parsedTodos:R}):null]})}),Object(d.jsx)(l.a,{exact:!0,path:"/introduce",children:Object(d.jsx)(m,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/login",children:Object(d.jsx)(O,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/calendar",children:Object(d.jsx)(T,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/loading",children:Object(d.jsx)(p,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/Mypage",children:Object(d.jsx)(I,{currentUser:n,loadedPoint:y})}),Object(d.jsx)(l.a,{exact:!0,path:"/profile",children:Object(d.jsx)(C,{})})]})})),M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),r(e),s(e),n(e)}))},L=c(18),q=[{toggle:!1,saveData:"data",defaultState:[]}],E=[{NotiToggle:!1,NavToggle:!1,Nobell:!1,update:!1,rankToggle:!1}],J=[{defaultTime:[],checkText:[],dateSave:"dateSave",checktxt:"textSave"}],P=[{profileId:"id",listValue:["1"]}],H=[{dayText:[],dayDate:[],dayName:"day",daytxt:"txt"}];var F=Object(L.c)(Object(L.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;if("\uc5d0\ub514\ud130\uc5f4\uae30"===t.type){var c=[].concat(q);return c[0].toggle=!0,c}if("\uc5d0\ub514\ud130\ub2eb\uae30"===t.type){var a=[].concat(q);return a[0].toggle=!1,a[0].defaultState.push(t.payload),localStorage.setItem(a[0].saveData,JSON.stringify(a[0].defaultState)),a}return e},reducer2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if("\uc54c\ub9bc\uc5f4\uae30"===t.type){var c=[].concat(E);return c[0].NotiToggle=!0,c}if("\uc54c\ub9bc\ub2eb\uae30"===t.type){var a=[].concat(E);return a[0].NotiToggle=!1,a}return e},reducer3:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;if("\ub0a0\uc9dc\uc804\uc1a1"===t.type){var c=[].concat(J);return c[0].defaultTime.push(t.payload2),c}return e},reducer4:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if("\uc54c\ub9bc\ubcf4\uae30"===t.type){var c=[].concat(E);return c[0].Nobell=!0,c}if("\uc54c\ub9bc\ub044\uae30"===t.type){var a=[].concat(E);return a[0].Nobell=!1,a}return e},reducer5:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;if("\ud14d\uc2a4\ud2b8\ubcf4\ub0b4\uae30"===t.type){var c=[].concat(J);return c[0].checkText.push(t.payload3),c}return e},reducer6:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if("\ub85c\uadf8\uc778\uc131\uacf5"===t.type){var c=[].concat(E);return c[0].update=!0,c}return e},reducer7:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if("\ub4f1\uae09\ud45c\uc5f4\uae30"===t.type){var c=[].concat(E);return c[0].rankToggle=!0,c}if("\ub4f1\uae09\ud45c\ub2eb\uae30"===t.type){var a=[].concat(E);return a[0].rankToggle=!1,a}return e},reducer8:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;if("id\uac12\uc804\uc1a1"===t.type){var c=[].concat(P);return c[0].listValue.unshift(t.payload4),localStorage.setItem(c[0].profileId,c[0].listValue),c}return e},reducer9:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;if("\ub514\ub370\uc774\uc804\uc1a1"===t.type){var c=[].concat(H);return c[0].dayDate.push(t.payload5),console.log(c[0].dayDate),localStorage.setItem(c[0].dayName,JSON.stringify(c[0].dayDate)),c}return e},reducer10:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;if("\ub0a8\uc740\uc77c\uc815\ub0b4\uc6a9\uc804\uc1a1"===t.type){var c=[].concat(H);return c[0].dayText.push(t.payload6),console.log(c[0].dayText),localStorage.setItem(c[0].daytxt,JSON.stringify(c[0].dayText)),c}return e}}));n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(j.a,{store:F,children:Object(d.jsx)(D,{})})})}),document.getElementById("root")),M()}},[[54,1,2]]]);
//# sourceMappingURL=main.299c7ce7.chunk.js.map