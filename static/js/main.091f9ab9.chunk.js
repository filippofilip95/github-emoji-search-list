(this["webpackJsonpgithub-emoji-search-list"]=this["webpackJsonpgithub-emoji-search-list"]||[]).push([[0],[,,,,function(e,t,a){e.exports={emoji:"Emoji_emoji__34hTT",emojiInner:"Emoji_emojiInner__1iH3p",emojiImg:"Emoji_emojiImg__1vVfd",emojiName:"Emoji_emojiName__2mPs7"}},,,,function(e,t,a){e.exports={emojiList:"EmojiList_emojiList__2MGvx"}},,,function(e,t,a){e.exports={searchBarInput:"SearchBar_searchBarInput__bH-i9"}},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(17),a(2)),l=a(5),s=a.n(l),u=a(7);var m=a(8),d=a.n(m),h=a(9),v=a(4),f=a.n(v);var j={hideAfter:2,position:"bottom-center",renderIcon:function(){return r.a.createElement("span",null)},bar:{color:"var(--border-color-active)"}};var g=function(e){var t=e.name,a=e.url;return r.a.createElement("div",{className:f.a.emoji,onClick:function(){!function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}(":".concat(t,":")),h.a.info("Copied to clipboard!",j)}},r.a.createElement("div",{className:f.a.emojiInner},r.a.createElement("img",{src:a,className:f.a.emojiImg,alt:t}),r.a.createElement("code",{className:f.a.emojiName},":".concat(t,":"))))};var p=function(e){var t=e.emojiList;return r.a.createElement("div",{className:d.a.emojiList},t.map((function(e){return r.a.createElement(g,{key:e[0],name:e[0],url:e[1]})})))};var E=function(e){var t=e.searchQuery,a=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),l=Object(i.a)(o,2),m=l[0],d=l[1],h=Object(n.useState)(null),v=Object(i.a)(h,2),f=v[0],j=v[1],g=function(){var t=Object(u.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.prev=1,t.next=4,fetch("https://api.github.com".concat(e));case 4:if(200!==(a=t.sent).status){t.next=12;break}return t.next=8,a.json();case 8:n=t.sent,j(n),t.next=13;break;case 12:throw new Error(a.statusText);case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),d(t.t0.message),console.log(t.t0.message);case 19:c(!1);case 20:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[e]),{loading:r,error:m,data:f}}("/emojis"),c=a.loading,o=a.error,l=a.data;if(o)return r.a.createElement("code",null,o);if(c)return r.a.createElement("code",null,"Loading...");if(l){var m=Object.entries(l).filter((function(e){return e[0].includes(t)}));return m.length?r.a.createElement(p,{emojiList:m}):r.a.createElement("code",null,"Nothing found")}return null},b=a(10),_=a.n(b),x=a(11),N=a.n(x);var k=function(e){var t=e.setSearchQuery,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useCallback)(_()((function(e){t(e)}),350),[]);return r.a.createElement("input",{type:"text",placeholder:"Type to \ud83d\udd0e for emoji...",value:o,onChange:function(e){var t=e.target.value.toLowerCase();l(t),s(t)},className:N.a.searchBarInput})};a(22);var w=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"themeWrapper"},r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{className:"toggle-input",type:"checkbox",checked:a,onChange:function(e){document.documentElement.setAttribute("data-theme",e.target.checked?"dark":"light"),c(e.target.checked)}}),r.a.createElement("div",{className:"toggle-bg"}),r.a.createElement("div",{className:"toggle-switch"},r.a.createElement("div",{className:"toggle-switch-figure"}),r.a.createElement("div",{className:"toggle-switch-figureAlt"}))))};var O=function(e){var t=e.setSearchQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{setSearchQuery:t}),r.a.createElement(w,null))};var y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(O,{setSearchQuery:c})),r.a.createElement("main",null,r.a.createElement(E,{searchQuery:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.091f9ab9.chunk.js.map