(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{77:function(e,a,t){"use strict";t.r(a);var c=t(42),n=t(0),i=t.n(n),r=t(57),s=t.n(r);a.default=function(){var e=Object(n.useState)({}),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){s.a.get("https://www.apiopen.top/weatherApi?city=\u4e0a\u6d77").then(function(e){var a=e.data;r(a)})},[]),t.code?i.a.createElement("div",{className:"Weather"},i.a.createElement("div",{className:"City"},"\u4e0a\u6d77"),t.data.forecast.map(function(e,a){return i.a.createElement("div",{className:"Weather__ForecastItem",key:a},i.a.createElement("div",{className:"Date"},e.date),i.a.createElement("div",{className:"Temporature"},"".concat(e.high," - ").concat(e.low)),i.a.createElement("div",{className:"Type"},e.type),i.a.createElement("div",{className:"WindDirection"},e.fengxiang))})):null}}}]);
//# sourceMappingURL=page-weather.4db4e430.chunk.js.map