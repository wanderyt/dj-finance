(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{42:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,i=!1,c=void 0;try{for(var m,r=e[Symbol.iterator]();!(n=(m=r.next()).done)&&(a.push(m.value),!t||a.length!==t);n=!0);}catch(l){i=!0,c=l}finally{try{n||null==r.return||r.return()}finally{if(i)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},43:function(e,t,a){"use strict";t.a=[{id:1,name:"\u73ed\u8d39",date:"2019-04-06",amount:3400,type:1,details:{total:3400,number:34,price:100}},{id:2,name:"\u73ed\u670d",date:"2019-09-20",amount:1870,type:2,details:{total:1870,items:[{name:"\u73ed\u670d",number:34,price:55}]}},{id:3,name:"\u96c6\u7ae0\u5c0f\u793c\u7269",date:"2019-11-13",amount:257.3,type:2,details:{total:257.3,items:[{name:"\u591a\u8089\u8425\u517b\u571f",number:1,price:6.2},{name:"\u80b2\u82d7\u76c6",number:1,price:25.8},{name:"\u79cd\u690d\u76c6",number:2,price:6.62},{name:"\u4e00\u6b21\u6027\u7eb8\u76d8\u5200\u53c9",number:1,price:9.9},{name:"\u6728\u5934\u7247",number:1,price:26.28},{name:"\u6d77\u7ef5\u7403",number:1,price:27.86},{name:"\u91cf\u676f",number:4,price:4.7},{name:"\u4e52\u4e53\u7403",number:1,price:14.5},{name:"\u624b\u5de5\u6298\u7eb8",number:1,price:34},{name:"\u6587\u5177",number:1,price:50.9},{name:"\u94c5\u7b14",number:2,price:14.9}]}}]},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(42),i=a(0),c=a.n(i),m={0:"\u661f\u671f\u65e5",1:"\u661f\u671f\u4e00",2:"\u661f\u671f\u4e8c",3:"\u661f\u671f\u4e09",4:"\u661f\u671f\u56db",5:"\u661f\u671f\u4e94",6:"\u661f\u671f\u516d"},r=(a(52),a(53),function(e){var t=e.type,a=e.details,n=a.total%1!==0,i=function(e){return n?parseFloat(e).toFixed(2):e};return c.a.createElement("div",{className:"ActivityDetails"},2===t&&c.a.createElement("div",{className:"Activity--Items"},a.items.map(function(e){return c.a.createElement("div",{className:"AmountItem"},c.a.createElement("div",{className:"AmountName"},e.name),c.a.createElement("div",{className:"Amount"},i(e.number*e.price)))}),c.a.createElement("div",{className:"Activity--Total"},c.a.createElement("div",{className:"Activity--TotalAmountCaption"},"\u603b\u8ba1"),c.a.createElement("div",{className:"Activity--TotalAmount"},i(a.total)))),1===t&&c.a.createElement("div",{className:"Activity--Items"},c.a.createElement("div",{className:"AmountItem"},c.a.createElement("div",{className:"Amount"},i(a.number*a.price))),c.a.createElement("div",{className:"Activity--Total"},c.a.createElement("div",{className:"Activity--TotalAmountCaption"},"\u603b\u8ba1"),c.a.createElement("div",{className:"Activity--TotalAmount"},i(a.total)))))}),l=function(e){var t=e.name,a=e.date,l=e.amount,s=e.type,o=e.details,u=Object(i.useState)(!1),v=Object(n.a)(u,2),d=v[0],y=v[1];return c.a.createElement("div",{className:"ActivityTile"},c.a.createElement("div",{className:"Activity--Item Activity--Header"},c.a.createElement("div",{className:"Activity--Caption"},c.a.createElement("div",{className:"Activity--Name"},t),c.a.createElement("div",{className:"Activity--Date"},function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth(),i=t.getDay(),c=t.getDate(),r=m[i];return"".concat(a,"\u5e74").concat(n+1,"\u6708").concat(c,"\u65e5 ").concat(r)}(a))),c.a.createElement("div",{className:"Activity--AmountArea"},c.a.createElement("div",{className:"Activity--Amount ".concat(1===s?"Activity--Income":"Activity--Outcome")},l))),d&&o&&c.a.createElement("div",{className:"Activity--Item"},c.a.createElement(r,{type:s,details:o})),c.a.createElement("div",{className:"Activity--Item Activity--Toolbar"},d?c.a.createElement("div",{className:"Activity--Fold",onClick:function(){y(!1)}},"\u6536\u8d77"):c.a.createElement("div",{className:"Activity--LearnMore",onClick:function(){y(!0)}},"\u67e5\u770b\u660e\u7ec6")))},s=a(43),o=(a(54),window.location.search),u=o.split("&").some(function(e){var t=e.split("="),a=Object(n.a)(t,2),i=a[0],c=a[1];return("keyContent"===i||"?keyContent"===i)&&"true"===c}),v=o.split("&").some(function(e){var t=e.split("="),a=Object(n.a)(t,2),i=a[0],c=a[1];return("keyContentPush"===i||"?keyContentPush"===i)&&"true"===c});t.default=function(){var e=Object(i.useState)(u),t=Object(n.a)(e,2),a=(t[0],t[1],Object(i.useState)(v)),m=Object(n.a)(a,2),r=(m[0],m[1],0);s.a.forEach(function(e){1===e.type?r+=e.amount:r-=e.amount});return c.a.createElement("div",{className:"Activities"},c.a.createElement("div",{className:"Activities--LeftArea"},c.a.createElement("span",{className:"Activities--LeftCaption"},"\u5269\u4f59\u91d1\u989d\uff1a"),c.a.createElement("span",{className:"Activities--LeftAmount"},r)),c.a.createElement("div",{className:"Activities--List"},s.a.map(function(e){return c.a.createElement("div",{className:"ActivityTile-Item",key:e.id},c.a.createElement(l,e))})))}}}]);
//# sourceMappingURL=page-activities.d2c9eb99.chunk.js.map