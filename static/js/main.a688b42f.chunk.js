(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(11),a(1)),m=a.n(s),u=a(5),o=a(2);function i(e){var t=e.movie;return r.a.createElement("div",{className:"card",key:t.id},r.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title}),r.a.createElement("div",{className:"card--content"},r.a.createElement("h3",{className:"card--title"},t.title),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE: ",t.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING: ",t.vote_average)),r.a.createElement("p",{className:"card--desc"},t.overview)))}function p(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),p=s[0],v=s[1],d=function(){var e=Object(u.a)(m.a.mark((function e(t){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=911794a5621d7f40a780f23086ab25dd&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,v(c.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("section",null,r.a.createElement("form",{onSubmit:d},r.a.createElement("label",{htmlFor:"query",className:"Label"},"Movie Name"),r.a.createElement("input",{type:"text",name:"query",placeholder:"eg Prison Break",onChange:function(e){var t=e.target.value;c(t)},value:a}),r.a.createElement("button",{className:"button",type:"submit"},"Search")),r.a.createElement("div",{className:"card-list"},p.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(i,{movie:e})}))))}var v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Movie Searcher"),r.a.createElement(p,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.a688b42f.chunk.js.map