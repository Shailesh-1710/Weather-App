(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(6),i=s.n(n),r=(s(12),s(13),s(4)),j=s.n(r),d=s(7),l=s(2),o=(s(15),s(0));s(17).config();var b=function(){var e=Object(c.useState)("brisbane"),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)({}),i=Object(l.a)(n,2),r=i[0],b=i[1],m=Object(c.useState)(""),h=Object(l.a)(m,2),u=h[0],x=h[1],p=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,a,n,i,r,d,l,o,m,h,u,x,p,O;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&units=metric&APPID=").concat("35f3526354aa467824b3c20536732b26"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,n=a.main,i=n.temp,r=n.pressure,d=n.humidity,l=n.temp_min,o=n.temp_max,m=a.weather[0].main,h=a.wind.speed,u=a.sys.country,x=a.name,p=a.sys.sunset,O=new Date(1e3*p),p=O.toLocaleTimeString(),b({temp:i,pressure:r,humidity:d,weather_type:m,speed:h,country:u,sunset:p,name:x,temp_min:l,temp_max:o}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(r.weather_type)switch(r.weather_type){case"Clouds":x("wi-day-cloudy");break;case"Rain":x("wi-day-rain");break;case"Haze":x("wi-day-haze");break;case"Snow":x("wi-day-snow");break;case"Smoke":x("wi-smoke");break;case"Clear":x("wi-cloud");break;default:x("wi-day-sunny")}}),[r.weather_type]),Object(c.useEffect)((function(){p()})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"wrap",children:Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("input",{type:"search",placeholder:"Your City Name",autoFocus:!0,value:s,onChange:function(e){return a(e.target.value)},className:"searchTerm"}),Object(o.jsx)("button",{className:"searchButton",type:"button",onClick:p,children:"Search"})]})}),Object(o.jsxs)("div",{className:"widget",children:[Object(o.jsx)("div",{className:"weatherIcon",children:Object(o.jsx)("i",{className:"wi ".concat(u)})}),Object(o.jsxs)("div",{className:"weatherInfo",children:[Object(o.jsx)("div",{className:"temperature",children:Object(o.jsxs)("span",{children:[" ",r.temp," \xb0"]})}),Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("div",{className:"weatherCondition",children:r.weather_type}),Object(o.jsxs)("div",{className:"place",children:[r.name," - ",r.country]})]})]}),Object(o.jsx)("div",{className:"date",children:(new Date).toLocaleString("en-GB",{hour12:!0})}),Object(o.jsxs)("div",{className:"extra-temp",children:[Object(o.jsxs)("div",{className:"temp-info-minmax",children:[Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-sunset"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:[r.sunset," ",Object(o.jsx)("br",{}),"Sun Set"]})]}),Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-humidity"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:[r.humidity," %",Object(o.jsx)("br",{}),"Humidity"]})]})]}),Object(o.jsxs)("div",{className:"weather-extra-info",children:[Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-celsius"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:["Min - ",r.temp_min," ",Object(o.jsx)("br",{}),"Max - ",r.temp_max]})]}),Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-strong-wind"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:[r.speed," m/s",Object(o.jsx)("br",{}),"WIND SPEED"]})]})]})]})]})]})};var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b,{})})},h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),h()}},[[21,1,2]]]);
//# sourceMappingURL=main.cdfec73b.chunk.js.map