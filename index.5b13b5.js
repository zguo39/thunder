!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){"use strict";var r=e(2),i=e.n(r)()((function(t){return t[1]}));i.push([t.i,'* {\r\n\tmargin: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\nbody{\r\n\tbackground-color: gainsboro;\r\n}\r\n\r\n.blood {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 10%;\r\n\twidth: 375px;\r\n\theight: 15px;\r\n\tborder-radius: 7.5px;\r\n\tborder: 1px solid purple;\r\n\tbox-sizing: border-box;\r\n\tz-index: -12;\r\n}\r\n\r\n.realblood {\r\n\theight: 100%;\r\n\tbackground: -webkit-linear-gradient(left, purple, red);\r\n\tborder-radius: 7.5px;\r\n\tz-index: -12;\r\n}\r\n\r\n#container {\r\n\twidth: 480px;\r\n\theight: 550px;\r\n\t/* background-color: antiquewhite; */\r\n\tbackground: linear-gradient(to bottom, #202020, #111119);\r\n\tposition: absolute;\r\n\tfont-size: 200px;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n\tleft: 50%;\r\n\tcolor: whitesmoke;\r\n\ttransform: translate(-50%);\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tz-index: -10;\r\n\toverflow: hidden;\r\n}\r\n\r\n#shipback {\r\n\tposition: absolute;\r\n\tz-index: -8;\r\n\twidth: 480px;\r\n\theight: 550px;\r\n}\r\n\r\n.aship {\r\n\twidth: 40px;\r\n\theight: 60px;\r\n\tposition: absolute;\r\n\tz-index: 10;\r\n\t/* background-color: black; */\r\n}\r\n\r\n.mship {\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tposition: absolute;\r\n\tz-index: 9;\r\n\tanimation: rotate 5s linear infinite;\r\n}\r\n\r\n@keyframes rotate {\r\n\t0% {\r\n\t\ttransform: rotateZ(0deg);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: rotateZ(360deg)\r\n\t}\r\n}\r\n\r\n.bship {\r\n\twidth: 80px;\r\n\theight: 100px;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n}\r\n\r\n.suicide {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n\t/* background-color: #DC143C; */\r\n}\r\n\r\n.boss {\r\n\twidth: 300px;\r\n\theight: 300px;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n\tanimation: rotate 5s linear infinite;\r\n\tborder-radius: 70px;\r\n}\r\n\r\n.craft {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\t/* background-color: darkred; */\r\n\tposition: absolute;\r\n\t/* background: url(../img/st6.png); */\r\n}\r\n\r\n.craft::before {\r\n\tcontent: "";\r\n\tposition: absolute;\r\n\tbottom: -50px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\twidth: 10px;\r\n\theight: 50px;\r\n\tbackground: linear-gradient(#00d0ff, transparent);\r\n}\r\n\r\n.fire {\r\n\twidth: 14px;\r\n\theight: 50px;\r\n\t/* background-color: gold; */\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\t/* box-shadow: 0px 0px 5px #ffff00; */\r\n}\r\n\r\n.line {\r\n\twidth: 4px;\r\n\theight: 50px;\r\n\tbackground-color: gold;\r\n\tposition: absolute;\r\n\tz-index: 2;\r\n\tbox-shadow: 0px 0px 5px #ffff00;\r\n}\r\n\r\n.shoot {\r\n\twidth: 3px;\r\n\theight: 30px;\r\n\tbackground-color: #DC143C;\r\n\tposition: absolute;\r\n\tz-index: 20;\r\n\tbox-shadow: 0 0 3px #ff0004;\r\n}\r\n\r\n/*  */\r\n\r\n#home {\r\n\twidth: 480px;\r\n\theight: 550px;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%);\r\n\tbackground: linear-gradient(to bottom, #202020, #111119);\r\n\tposition: absolute;\r\n}\r\n\r\n#title {\r\n\tleft: 50%;\r\n\ttop: 17%;\r\n\ttransform: translate(-50%);\r\n\tposition: absolute;\r\n}\r\n\r\n.sct {\r\n\tdisplay: inline-block;\r\n\tcolor: #FFE4C4;\r\n\tfont-family: cursive;\r\n\tleft: 50%;\r\n\ttop: 32%;\r\n\ttransform: translate(-50%);\r\n\tposition: absolute;\r\n}\r\n\r\n#sc {\r\n\tleft: 300px;\r\n}\r\n\r\n.btn {\r\n\tposition: relative;\r\n\tpadding-left: 15px;\r\n\tleft: 27%;\r\n\ttop: 50%;\r\n\ttext-decoration: none;\r\n\ttransition: 0.5s;\r\n\tcolor: aliceblue;\r\n\tfont-family: cursive;\r\n}\r\n\r\n#play {\r\n\tfont-family: cursive;\r\n\tpadding: 25px 30px;\r\n\tmargin: 40px 0;\r\n\tposition: absolute;\r\n\ttop: 60%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%);\r\n\tfont-size: 30px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\ttransition: 0.5s;\r\n\tcolor: crimson;\r\n\tletter-spacing: 4px;\r\n\toverflow: hidden;\r\n}\r\n\r\n#play:hover {\r\n\tbackground: crimson;\r\n\tcolor: #050801;\r\n\tbox-shadow: 0 0 5px crimson,\r\n\t\t0 0 25px crimson,\r\n\t\t0 0 50px crimson,\r\n\t\t0 0 100px crimson;\r\n}\r\n\r\n#play span {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n}\r\n\r\n#play span:nth-child(1) {\r\n\ttop: 0;\r\n\tleft: -100%;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: linear-gradient(90deg, transparent, crimson);\r\n\tanimation: animate1 1s linear infinite;\r\n}\r\n\r\n@keyframes animate1 {\r\n\t0% {\r\n\t\tleft: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t}\r\n}\r\n\r\n#play span:nth-child(2) {\r\n\ttop: -100%;\r\n\tright: 0;\r\n\twidth: 2px;\r\n\theight: 100%;\r\n\tbackground: linear-gradient(180deg, transparent, crimson);\r\n\tanimation: animate2 1s linear infinite;\r\n\tanimation-delay: 0.25s;\r\n}\r\n\r\n@keyframes animate2 {\r\n\t0% {\r\n\t\ttop: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\ttop: 100%;\r\n\t}\r\n}\r\n\r\n#play span:nth-child(3) {\r\n\tbottom: 0;\r\n\tright: -100%;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: linear-gradient(270deg, transparent, crimson);\r\n\tanimation: animate3 1s linear infinite;\r\n\tanimation-delay: 0.5s;\r\n}\r\n\r\n@keyframes animate3 {\r\n\t0% {\r\n\t\tright: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\tright: 100%;\r\n\t}\r\n}\r\n\r\n#play span:nth-child(4) {\r\n\tbottom: -100%;\r\n\tleft: 0;\r\n\twidth: 2px;\r\n\theight: 100%;\r\n\tbackground: linear-gradient(360deg, transparent, crimson);\r\n\tanimation: animate4 1s linear infinite;\r\n\tanimation-delay: 0.75s;\r\n}\r\n\r\n@keyframes animate4 {\r\n\t0% {\r\n\t\tbottom: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\tbottom: 100%;\r\n\t}\r\n}\r\n\r\n\r\n\r\n.drop {\r\n\tposition: absolute;\r\n\tbottom: 100%;\r\n\twidth: 15px;\r\n\theight: 120px;\r\n\tpointer-events: none;\r\n\tanimation: drop 2s linear infinite;\r\n\tz-index: 5;\r\n}\r\n\r\n@keyframes drop {\r\n\t0% {\r\n\t\ttransform: translateY(0vh);\r\n\t}\r\n\r\n\t75% {\r\n\t\ttransform: translateY(90vh);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(90vh);\r\n\t}\r\n}\r\n\r\n.stem {\r\n\twidth: 1px;\r\n\theight: 60%;\r\n\tmargin-left: 7px;\r\n\tbackground: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));\r\n\tanimation: stem 2s linear infinite;\r\n\tz-index: 6;\r\n}\r\n\r\n@keyframes stem {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t65% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t75% {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n.plant {\r\n\tz-index: -9;\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tposition: absolute;\r\n\tanimation: planet 20s linear;\r\n}\r\n\r\n@keyframes planet {\r\n\t0% {\r\n\t\ttransform: translateY(0px);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(850px);\r\n\t}\r\n}\r\n\r\n.cyc {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tposition: absolute;\r\n\tanimation: rotate 5s linear infinite;\r\n\tz-index: 100;\r\n}\n\r\n.hist {\r\n\twidth: 50px;\r\n\theight: 0;\r\n\tbackground: linear-gradient(to left, purple, white, purple);\r\n\tposition: absolute;\r\n\ttransition: 2s;\r\n}\r\n.time {\r\n\tfont-size: 100px;\r\n\tposition: absolute;\r\n\tz-index: -12;\r\n\tright: 10%;\r\n\ttop: 10%;\r\n\tcolor: red;\r\n\t\r\n}\r\n\r\n#score {\r\n\tfont-size: 50px;\r\n\tposition: absolute;\r\n\tz-index: -12;\r\n\tleft: 18%;\r\n\ttop: 30%;\r\n\tcolor: black;\r\n}',""]),n.a=i},function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function l(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},r=[],i=0;i<t.length;i++){var o=t[i],s=n.base?o[0]+n.base:o[0],d=e[s]||0,p="".concat(s," ").concat(d);e[s]=d+1;var c=l(p),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==c?(a[c].references++,a[c].updater(u)):a.push({identifier:p,updater:v(u,n),references:1}),r.push(p)}return r}function d(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var p,c=(p=[],function(t,n){return p[t]=n,p.filter(Boolean).join("\n")});function u(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=c(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function f(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(t,n){var e,r,i;if(n.singleton){var o=m++;e=h||(h=d(n)),r=u.bind(null,e,o,!1),i=u.bind(null,e,o,!0)}else e=d(n),r=f.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=l(e[r]);a[i].references--}for(var o=s(t,n),d=0;d<e.length;d++){var p=l(e[d]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}e=o}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},function(t,n,e){"use strict";e.r(n);var r=e(1),i=e.n(r),o=e(0),a={insert:"head",singleton:!1};i()(o.a,a),o.a.locals;function l(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("container");!function(){var n=0,e="";for(;n<100;){var r=Math.floor(98*Math.random()+1),i=Math.floor(7*Math.random()+10);e+='<div class="drop" style="left: '+(n+=i)+"%; bottom: "+(i+i-1+85)+"%; animation-delay: 0."+r+"s; animation-duration: 0.5"+r+'s;"><div class="stem" style="animation-delay: 0.'+r+"s; animation-duration: 0.5"+r+'s;"></div></div>'}t.innerHTML='<div id="shipback"></div>'+e,document.querySelector("#rain").innerHTML=e}(),document.querySelector(".sct").innerHTML="Best score: ".concat(localStorage.getItem("score")||0);var n=document.querySelector(".time"),e=document.getElementById("play"),r=document.getElementById("shipback"),i=document.createElement("div"),o=document.getElementById("home"),a=document.createElement("div"),s=document.querySelector(".realblood");s.blood=375,e.onclick=function(){o.style.display="none",t.style.display="block",document.getElementById("container").style.cursor="none",function(){var n;i.classList.add("craft"),i.style.left="210px",i.style.bottom="-100px";var e=setInterval((function(){var t=parseInt(i.style.bottom);i.style.bottom=t+6+"px",t>=200&&null==n&&(clearInterval(e),n=setInterval((function(){var t=parseInt(i.style.bottom);i.style.bottom=t-3+"px",t<=60&&clearInterval(n)}),20))}),20),r=document.createElement("img");r.src="./mj1.png",r.style.position="absolute",r.style.width="60px",r.style.height="60px",r.style.left="0px",i.appendChild(r),t.appendChild(i)}();var n=setTimeout((function(){M(1),setInterval((function(){w++}),1e3),d=setInterval(E,30),t.onclick=function(){100,L()},t.onmousedown=function(t){t.preventDefault(),c=null,c=setTimeout((function(){100,null==v&&(v=setInterval(L,170))}),500)},t.onmouseup=function(){clearTimeout(c),clearInterval(v),v=null},a.addEventListener("webkitAnimationEnd",(function(){a.remove(a),h=[],a=null})),t.onmousemove=function(n){n=n||window.event;var e=document.body.scrollTop||document.documentElement.scrollTop,r=document.body.scrollLeft||document.documentElement.scrollLeft,o=n.clientX,a=n.clientY;o<t.getBoundingClientRect().right-60&&a<480&&o>t.getBoundingClientRect().left&&(i.style.left=o-t.getBoundingClientRect().left+r+"px",i.style.top=a+e+"px")},clearTimeout(n)}),3e3)};var d,p,c,u=[],f=[],h=[],m=[],v=null,b=500,y=document.getElementById("score"),x=0,g=1,w=0,I=!1,k=0,C=function(t,n){return Math.round(Math.random()*(n-t))+t};function M(t){var n;1==t?n=new S(b):3==t?n=new q(b):5==t&&(n=new A(b)),u.push(n)}function E(){var e;w<=35&&(n.innerText="".concat(35-w,"s!")),w>=35&&0==I&&(I=!0,k=new j,u.push(k)),h.length<1&&w%5==0&&function(){null==a&&(a=document.createElement("div"));a.classList.add("plant"),a.style.left=200*Math.random()+"px",a.style.bottom="600px",t.appendChild(a);var n=document.createElement("img");n.src="./planet"+C(1,4)+".png",n.style.position="absolute",n.style.opacity=.6;var e=C(130,200);n.style.width=e+"px",n.style.height=e+"px",n.style.left="0px",a.appendChild(n),h.push(a)}(),0==u.length&&w<=35&&M(1);var r=u.filter((function(t){return t instanceof F==0}));if(((null===(e=r[r.length-1])||void 0===e?void 0:e.bottom)<500||r.length<=4)&&w<=35&&(b=C(550,800),function(){for(var t=Math.round(2*Math.random()),n=0;n<t;n++){var e=Math.random();M(e=e<.1?5:e<.5?3:1),b+=30}}()),w%10==0&&0!==w&&0==m.length&&w<=35)for(var o=600,l=0;l<7;l++){var s=new F(o);o+=153,u.push(s),m.push(s)}for(var d=0,p=function(){var n=u[d];n instanceof F==0&&n instanceof j==0?(n.bottom=parseInt(n.bottom)-4,n.visual.style.bottom=n.bottom+"px"):n instanceof j==0&&(n.bottom-=15,n.visual.style.bottom=n.bottom+"px",n.left-=15*Math.tan(n.degree*(2*Math.PI/360)),n.left=parseInt(n.left),n.visual.style.left=n.left+"px"),n.life+=1,(n instanceof F==0&&45==n.life||120==n.life)&&function(n,e,r){var o=document.createElement("div");if(o.classList.add("shoot"),o.bot=n-20,o.style.bottom=o.bot+"px",r instanceof S){o.left=e+17,o.style.left=o.left+"px";var a=setInterval((function(){o.bot<0||o.left<0?(clearInterval(a),o.remove(o),o=null):(o.bot-=10,o.style.bottom=o.bot+"px",O(o.left,o.bot,0))}),50);return void t.appendChild(o)}if(r instanceof q){o.left=e+30,o.style.left=o.left+"px";var l=e-parseInt(i.style.left),s=Math.abs(n-(550-parseInt(i.style.top))),d=180/Math.PI*Math.atan2(l,s);(d>70||d<-70)&&(d=C(-45,45)),o.style.transform="rotate("+d+"deg)",t.appendChild(o);var p=setInterval((function(){o.bot<0||o.left<0?(clearInterval(p),o.remove(o),o=null):(o.bot-=10,o.style.bottom=o.bot+"px",o.left=o.left-10*Math.tan(d*(2*Math.PI/360)),o.style.left=o.left+"px",O(o.left,o.bot,5))}),50);return}if(r instanceof A){o.left=e+30,o.style.left=o.left+"px";var c=document.createElement("div");c.classList.add("shoot"),c.bot=n-20,c.style.bottom=c.bot+"px",c.left=e+40,c.style.left=c.left+"px";var u=document.createElement("div");u.classList.add("shoot"),u.bot=n-20,u.left=e+50,u.style.bottom=u.bot+"px",u.style.left=u.left+"px",o.style.transform="rotate(30deg)",u.style.transform="rotate(-30deg)",t.appendChild(o),t.appendChild(c),t.appendChild(u);var f=setInterval((function(){o.bot<0||o.bot<0?(clearInterval(f),o.remove(o),o=null):(o.bot-=10,o.left=o.left-10*Math.tan(2*Math.PI/360*30),o.style.bottom=o.bot+"px",o.style.left=o.left+"px",O(o.left,o.bot,5))}),50),h=setInterval((function(){c.bot<0||c.left<0?(clearInterval(h),c.remove(c),c=null):(c.bot-=10,c.style.bottom=c.bot+"px",O(c.left,c.bot,0))}),50),m=setInterval((function(){u.bot<0||u.left<0?(clearInterval(m),u.remove(u),u=null):(u.bot-=10,u.style.bottom=u.bot+"px",u.left=u.left-10*Math.tan(2*Math.PI/360*-30),u.style.left=u.left+"px",O(u.left,u.bot,5))}),50)}}(n.bottom,n.left,n);var e=i.style,r=parseInt(e.left),o=parseInt(e.top);r<n.left+n.width-23&&r+60-23>n.left&&550-o>n.bottom+15&&550-o-60-25<n.bottom+n.height&&(i.remove(i),t.onmousedown=null,t.onclick=null,t.onmousemove=null,T()),n.bottom<=-100&&(n.visual.remove(n.visual),n instanceof F&&(m=m.filter((function(t){return t!==n}))),u.splice(d,1),d--)};d<u.length;d++)p()}function L(){var n=document.createElement("div"),e=document.createElement("div"),r=document.createElement("div");n.classList.add("fire"),e.classList.add("line"),r.classList.add("line");var o=parseInt(i.style.left)+23+"px",a=550-parseInt(i.style.top);n.style.left=o,n.style.bottom=a+"px",e.style.left="0px",r.style.left="10px",f.push(n),n.appendChild(e),n.appendChild(r),t.appendChild(n),null==p&&(p=setInterval((function(){for(var t=0;t<f.length;t++)f[t].style.bottom=parseInt(f[t].style.bottom)+10+"px",z(),void 0!==f[t]&&parseInt(f[t].style.bottom)>500&&(f[t].remove(f[t]),f.splice(t,1),t--),0==f.length&&(clearInterval(p),p=null)}),10))}function z(){for(var t=0;t<f.length;t++)for(var n=function(n){if(void 0!==f[t]&&parseInt(f[t].style.left)+10>=parseInt(u[n].left)&&parseInt(f[t].style.left)<=parseInt(u[n].left)+parseInt(u[n].visual.childNodes[0].style.width)&&parseInt(f[t].style.bottom)+40>=parseInt(u[n].bottom))if(1==u[n].armour){switch(f[t].remove(f[t]),u[n].visual.remove(u.visual),!0){case u[n]instanceof S:g=2;break;case u[n]instanceof q:g=4;break;case u[n]instanceof A:g=6;break;case u[n]instanceof F:m=m.filter((function(t){return t!==u[n]})),g=6;break;case u[n]instanceof j:k=null,g=50}x+=g,y.innerHTML=100*x,u[n]=null,f[t]=null,u.splice(n,1),f.splice(t,1),t--,x+=g,y.innerHTML=100*x}else u[n].armour>1&&(u[n]instanceof j&&(s.blood-=1,s.style.width=s.blood+"px"),f[t].remove(f[t]),u[n].armour-=1,f.splice(t,1),t--)},e=0;e<u.length;e++)n(e)}function T(){for(clearInterval(d),t.style.zIndex="150",t.onmouseup(),t.onmousedown=null,t.onclick=null,t.onmousemove=null;t.firstChild;)t.removeChild(t.firstChild);localStorage.getItem("score")<100*x&&localStorage.setItem("score",100*x),t.innerHTML="".concat(100*x,'<a id="play" href="javascript:location.reload();">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\tBack\n\t\t\t</a>'),t.style.cursor=""}var S=function t(n){l(this,t),this.bottom=n,this.life=0,this.left=440*Math.random(),this.armour=2,this.height=60,this.width=40,this.visual=document.createElement("div"),this.visual.classList.add("aship"),this.visual.style.left=this.left+"px",this.visual.style.bottom=this.bottom+"px",r.appendChild(this.visual);var e=document.createElement("img");e.src="./st5.png",e.style.position="absolute",e.style.width="40px",e.style.height="60px",e.style.left="0px",e.style.zIndex=10,this.visual.appendChild(e)},q=function t(n){l(this,t),this.bottom=n,this.life=0,this.left=400*Math.random(),this.armour=5,this.width=80,this.height=80,this.visual=document.createElement("div"),this.visual.classList.add("mship"),this.visual.style.left=this.left+"px",this.visual.style.bottom=this.bottom+"px",r.appendChild(this.visual);var e=document.createElement("img");e.src="./st2.png",e.style.position="absolute",e.style.width="80px",e.style.height="80px",e.style.left="0px",e.style.zIndex=9,this.visual.appendChild(e)},A=function t(n){l(this,t),this.bottom=n,this.life=0,this.left=400*Math.random(),this.armour=8,this.width=80,this.height=100,this.visual=document.createElement("div"),this.visual.classList.add("bship"),this.visual.style.left=this.left+"px",this.visual.style.bottom=this.bottom+"px",r.appendChild(this.visual);var e=document.createElement("img");e.src="./st3.png",e.style.position="absolute",e.style.width="80px",e.style.height="100px",e.style.left="0px",e.style.zIndex=8,this.visual.appendChild(e)},F=function n(e){l(this,n),this.bottom=e,this.left=200,this.armour=4,this.life=0,this.width=50,this.height=50,this.visual=document.createElement("div"),this.visual.style.bottom=this.bottom+"px",this.visual.style.left=this.left+"px",this.visual.classList.add("suicide");var r=document.createElement("img");r.src="./ssss.png",r.style.position="absolute",r.style.width="50px",r.style.height="50px",r.style.left="0px";var o=this.left-parseInt(i.style.left),a=Math.abs(this.bottom-(550-parseInt(i.style.top)));this.degree=180/Math.PI*Math.atan2(o,a),(this.degree>70||this.degree<-70)&&(this.degree=C(-60,60)),this.degree=C(-this.degree-12,this.degree+12),r.style.transform="rotate("+this.degree+"deg)",t.appendChild(this.visual),this.visual.appendChild(r)};var j=function n(){var e=this;l(this,n),this.armour=375,this.life=0,this.bottom=850,this.left=90,this.histleft=0,this.height=300,this.width=300,this.visual=document.createElement("div"),this.visual.classList.add("boss"),this.visual.style.bottom=this.bottom+"px",this.visual.style.left=this.left+"px",this.fire1=!1,this.fire2=!1,this.fire3=!1;var r=document.createElement("img");r.src="./boss1.png",r.style.position="absolute",r.style.width="300px",r.style.height="300px",r.style.left="0px";var o=document.createElement("div");o.classList.add("hist"),this.visual.appendChild(r),t.appendChild(this.visual),this.phase=0;var a=window.requestAnimationFrame((function n(){if(null==k)return window.cancelAnimationFrame(a),void T();if(0==e.phase)e.bottom>400?(e.bottom-=3,e.visual.style.bottom=e.bottom+"px",window.requestAnimationFrame(n)):(e.phase=1,window.requestAnimationFrame(n));else if(1==e.phase){if(e.left<=45)return e.phase=2,void window.requestAnimationFrame(n);e.left-=1,e.bottom-=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(2==e.phase){if(e.bottom>=400)return e.phase=3,void window.requestAnimationFrame(n);e.left-=1,e.bottom+=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(3==e.phase){if(e.left>=175)return e.phase=4,e.fire1=!1,e.fire2=!1,o.remove(o),void window.requestAnimationFrame(n);!e.fire2&&Math.random()>.8&&(o.style.left=e.left+150+"px",o.style.top=450-e.bottom+"px",o.style.height="550px",e.histleft=e.left,t.appendChild(o),e.fire2=!0),e.left>130&&Math.random()>.8&&!e.fire1&&(B(e.bottom,e.left+C(80,200),C(15,22),C(7,12)),e.fire1=!0),e.left+=1,e.histleft+=4,o.style.left=e.histleft+150+"px";var r=i.style,l=parseInt(r.left);l<e.left+170&&l+70>e.left+150&&(i.remove(i),T(),k=null),e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(4==e.phase){if(e.left<=130)return e.phase=5,void window.requestAnimationFrame(n);e.left-=1,e.bottom-=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(5==e.phase){if(e.left<=90)return e.phase=1,e.fire1=!1,void window.requestAnimationFrame(n);e.fire1||(B(e.bottom,e.left,-20,5),e.fire1=!0),e.left-=1,e.bottom+=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}}))};function B(n,e,r,i){var o=0,a=setInterval((function(){if(8==o)return clearInterval(a),void(a=null);var l=document.createElement("div");l.classList.add("cyc");var s=document.createElement("img");s.src="./fire2.png",s.style.position="absolute";var d=n+20;l.style.bottom=d+"px",s.style.width="25px",s.style.height="25px",l.style.left=e+"px",e+=r,o++,l.appendChild(s),t.appendChild(l),l.timeid=setInterval((function(){d-=i,l.style.bottom=d+"px",O(parseInt(l.style.left),d,0),d<-5&&(clearInterval(l.timeid),l.remove(l),l.timeid=null)}),50)}),300)}function O(t,n,e){var r=i.style,o=parseInt(r.left),a=parseInt(r.top);t-10>o&&o+60>t-e&&550-a-15>n&&490-a<n+30&&(i.remove(i),T(),k=null)}}))}]);