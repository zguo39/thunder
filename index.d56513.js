!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){"use strict";var r=e(2),i=e.n(r)()((function(t){return t[1]}));i.push([t.i,'* {\r\n\tmargin: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\nbody{\r\n\tbackground-color: gainsboro;\r\n}\r\n\r\n.blood {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 10%;\r\n\twidth: 375px;\r\n\theight: 15px;\r\n\tborder-radius: 7.5px;\r\n\tborder: 1px solid purple;\r\n\tbox-sizing: border-box;\r\n\tz-index: -12;\r\n}\r\n\r\n.realblood {\r\n\theight: 100%;\r\n\tbackground: -webkit-linear-gradient(left, purple, red);\r\n\tborder-radius: 7.5px;\r\n\tz-index: -12;\r\n}\r\n\r\n#container {\r\n\twidth: 480px;\r\n\theight: 550px;\r\n\t/* background-color: antiquewhite; */\r\n\tbackground: linear-gradient(to bottom, #202020, #111119);\r\n\tposition: absolute;\r\n\tfont-size: 200px;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n\tleft: 50%;\r\n\tcolor: whitesmoke;\r\n\ttransform: translate(-50%);\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tz-index: -10;\r\n\toverflow: hidden;\r\n}\r\n\r\n#shipback {\r\n\tposition: absolute;\r\n\tz-index: -8;\r\n\twidth: 480px;\r\n\theight: 550px;\r\n}\r\n\r\n.aship {\r\n\twidth: 40px;\r\n\theight: 60px;\r\n\tposition: absolute;\r\n\tz-index: 10;\r\n\t/* background-color: black; */\r\n}\r\n\r\n.mship {\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tposition: absolute;\r\n\tz-index: 9;\r\n\tanimation: rotate 5s linear infinite;\r\n}\r\n\r\n@keyframes rotate {\r\n\t0% {\r\n\t\ttransform: rotateZ(0deg);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: rotateZ(360deg)\r\n\t}\r\n}\r\n\r\n.bship {\r\n\twidth: 80px;\r\n\theight: 100px;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n}\r\n\r\n.suicide {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n\t/* background-color: #DC143C; */\r\n}\r\n\r\n.boss {\r\n\twidth: 300px;\r\n\theight: 300px;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n\tanimation: rotate 5s linear infinite;\r\n\tborder-radius: 70px;\r\n}\r\n\r\n.craft {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\t/* background-color: darkred; */\r\n\tposition: absolute;\r\n\t/* background: url(../img/st6.png); */\r\n}\r\n\r\n.craft::before {\r\n\tcontent: "";\r\n\tposition: absolute;\r\n\tbottom: -50px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\twidth: 10px;\r\n\theight: 50px;\r\n\tbackground: linear-gradient(#00d0ff, transparent);\r\n}\r\n\r\n.fire {\r\n\twidth: 14px;\r\n\theight: 50px;\r\n\t/* background-color: gold; */\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\t/* box-shadow: 0px 0px 5px #ffff00; */\r\n}\r\n\r\n.line {\r\n\twidth: 4px;\r\n\theight: 50px;\r\n\tbackground-color: gold;\r\n\tposition: absolute;\r\n\tz-index: 2;\r\n\tbox-shadow: 0px 0px 5px #ffff00;\r\n}\r\n\r\n.shoot {\r\n\twidth: 3px;\r\n\theight: 30px;\r\n\tbackground-color: #DC143C;\r\n\tposition: absolute;\r\n\tz-index: 20;\r\n\tbox-shadow: 0 0 3px #ff0004;\r\n}\r\n\r\n/*  */\r\n\r\n#home {\r\n\twidth: 480px;\r\n\theight: 550px;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%);\r\n\tbackground: linear-gradient(to bottom, #202020, #111119);\r\n\tposition: absolute;\r\n}\r\n\r\n#title {\r\n\tleft: 50%;\r\n\ttop: 17%;\r\n\ttransform: translate(-50%);\r\n\tposition: absolute;\r\n\tfont-size: 40px;\r\n\tfont-family: cursive;\r\n\tcolor: #FF4500;\r\n}\r\n\r\n.sct {\r\n\tdisplay: inline-block;\r\n\tcolor: #FFE4C4;\r\n\tfont-family: cursive;\r\n\tleft: 50%;\r\n\ttop: 32%;\r\n\ttransform: translate(-50%);\r\n\tposition: absolute;\r\n}\r\n\r\n#sc {\r\n\tleft: 300px;\r\n}\r\n\r\n.btn {\r\n\tposition: relative;\r\n\tpadding-left: 15px;\r\n\tleft: 27%;\r\n\ttop: 50%;\r\n\ttext-decoration: none;\r\n\ttransition: 0.5s;\r\n\tcolor: aliceblue;\r\n\tfont-family: cursive;\r\n}\r\n\r\n#play {\r\n\tfont-family: cursive;\r\n\tpadding: 25px 30px;\r\n\tmargin: 40px 0;\r\n\tposition: absolute;\r\n\ttop: 60%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%);\r\n\tfont-size: 30px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\ttransition: 0.5s;\r\n\tcolor: crimson;\r\n\tletter-spacing: 4px;\r\n\toverflow: hidden;\r\n}\r\n\r\n#play:hover {\r\n\tbackground: crimson;\r\n\tcolor: #050801;\r\n\tbox-shadow: 0 0 5px crimson,\r\n\t\t0 0 25px crimson,\r\n\t\t0 0 50px crimson,\r\n\t\t0 0 100px crimson;\r\n}\r\n\r\n#play span {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n}\r\n\r\n#play span:nth-child(1) {\r\n\ttop: 0;\r\n\tleft: -100%;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: linear-gradient(90deg, transparent, crimson);\r\n\tanimation: animate1 1s linear infinite;\r\n}\r\n\r\n@keyframes animate1 {\r\n\t0% {\r\n\t\tleft: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\tleft: 100%;\r\n\t}\r\n}\r\n\r\n#play span:nth-child(2) {\r\n\ttop: -100%;\r\n\tright: 0;\r\n\twidth: 2px;\r\n\theight: 100%;\r\n\tbackground: linear-gradient(180deg, transparent, crimson);\r\n\tanimation: animate2 1s linear infinite;\r\n\tanimation-delay: 0.25s;\r\n}\r\n\r\n@keyframes animate2 {\r\n\t0% {\r\n\t\ttop: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\ttop: 100%;\r\n\t}\r\n}\r\n\r\n#play span:nth-child(3) {\r\n\tbottom: 0;\r\n\tright: -100%;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: linear-gradient(270deg, transparent, crimson);\r\n\tanimation: animate3 1s linear infinite;\r\n\tanimation-delay: 0.5s;\r\n}\r\n\r\n@keyframes animate3 {\r\n\t0% {\r\n\t\tright: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\tright: 100%;\r\n\t}\r\n}\r\n\r\n#play span:nth-child(4) {\r\n\tbottom: -100%;\r\n\tleft: 0;\r\n\twidth: 2px;\r\n\theight: 100%;\r\n\tbackground: linear-gradient(360deg, transparent, crimson);\r\n\tanimation: animate4 1s linear infinite;\r\n\tanimation-delay: 0.75s;\r\n}\r\n\r\n@keyframes animate4 {\r\n\t0% {\r\n\t\tbottom: -100%;\r\n\t}\r\n\r\n\t50%,\r\n\t100% {\r\n\t\tbottom: 100%;\r\n\t}\r\n}\r\n\r\n\r\n\r\n.drop {\r\n\tposition: absolute;\r\n\tbottom: 100%;\r\n\twidth: 15px;\r\n\theight: 120px;\r\n\tpointer-events: none;\r\n\tanimation: drop 2s linear infinite;\r\n\tz-index: 5;\r\n}\r\n\r\n@keyframes drop {\r\n\t0% {\r\n\t\ttransform: translateY(0vh);\r\n\t}\r\n\r\n\t75% {\r\n\t\ttransform: translateY(90vh);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(90vh);\r\n\t}\r\n}\r\n\r\n.stem {\r\n\twidth: 1px;\r\n\theight: 60%;\r\n\tmargin-left: 7px;\r\n\tbackground: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));\r\n\tanimation: stem 2s linear infinite;\r\n\tz-index: 6;\r\n}\r\n\r\n@keyframes stem {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t65% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t75% {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n.plant {\r\n\tz-index: -9;\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tposition: absolute;\r\n\tanimation: planet 20s linear;\r\n}\r\n\r\n@keyframes planet {\r\n\t0% {\r\n\t\ttransform: translateY(0px);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(850px);\r\n\t}\r\n}\r\n\r\n.cyc {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tposition: absolute;\r\n\tanimation: rotate 5s linear infinite;\r\n\tz-index: 100;\r\n}\n\r\n.hist {\r\n\twidth: 50px;\r\n\theight: 0;\r\n\tbackground: linear-gradient(to left, purple, white, purple);\r\n\tposition: absolute;\r\n\ttransition: 2s;\r\n}\r\n.time {\r\n\tfont-size: 100px;\r\n\tposition: absolute;\r\n\tz-index: -12;\r\n\tleft: 10%;\r\n\ttop: 55%;\r\n\tcolor: red;\r\n\t\r\n}\r\n\r\n#score {\r\n\tfont-size: 50px;\r\n\tposition: absolute;\r\n\tz-index: -12;\r\n\tleft: 18%;\r\n\ttop: 30%;\r\n\tcolor: black;\r\n}\r\n\r\n.info {\r\n\tposition: absolute;\r\n\tz-index: -12;\r\n\ttop: 15%;\r\n\tright: 8%;\r\n\ttext-align: center;\r\n}\r\n\r\n.label {\r\n\twidth: 70px;\r\n\theight: 70px;\r\n}',""]),n.a=i},function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function s(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function l(t,n){for(var e={},r=[],i=0;i<t.length;i++){var o=t[i],l=n.base?o[0]+n.base:o[0],d=e[l]||0,p="".concat(l," ").concat(d);e[l]=d+1;var c=s(p),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==c?(a[c].references++,a[c].updater(f)):a.push({identifier:p,updater:b(f,n),references:1}),r.push(p)}return r}function d(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var p,c=(p=[],function(t,n){return p[t]=n,p.filter(Boolean).join("\n")});function f(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=c(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function u(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(t,n){var e,r,i;if(n.singleton){var o=h++;e=m||(m=d(n)),r=f.bind(null,e,o,!1),i=f.bind(null,e,o,!0)}else e=d(n),r=u.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=l(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=s(e[r]);a[i].references--}for(var o=l(t,n),d=0;d<e.length;d++){var p=s(e[d]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}e=o}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},function(t,n,e){"use strict";e.r(n);var r=e(1),i=e.n(r),o=e(0),a={insert:"head",singleton:!1};i()(o.a,a),o.a.locals;function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("container");!function(){var n=0,e="";for(;n<100;){var r=Math.floor(98*Math.random()+1),i=Math.floor(7*Math.random()+10);e+='<div class="drop" style="left: '+(n+=i)+"%; bottom: "+(i+i-1+85)+"%; animation-delay: 0."+r+"s; animation-duration: 0.5"+r+'s;"><div class="stem" style="animation-delay: 0.'+r+"s; animation-duration: 0.5"+r+'s;"></div></div>'}t.innerHTML='<div id="shipback"></div>'+e,document.querySelector("#rain").innerHTML=e}();var n=document.querySelector(".fire");n.ing=!1,n.onended=function(){n.play()};var e=document.querySelector(".laser");document.querySelector(".sct").innerHTML="Best score: ".concat(localStorage.getItem("score")||0);var r=document.querySelector(".time"),i=document.getElementById("play"),o=document.getElementById("shipback"),a=document.createElement("div"),l=document.getElementById("home"),d=document.createElement("div"),p=document.querySelector(".realblood");p.blood=375,i.onclick=function(){l.style.display="none",t.style.display="block",document.getElementById("container").style.cursor="none",function(){var n;a.classList.add("craft"),a.style.left="210px",a.style.bottom="-100px";var e=setInterval((function(){var t=parseInt(a.style.bottom);a.style.bottom=t+6+"px",t>=200&&null==n&&(clearInterval(e),n=setInterval((function(){var t=parseInt(a.style.bottom);a.style.bottom=t-3+"px",t<=60&&clearInterval(n)}),20))}),20),r=document.createElement("img");r.src="https://www.imageoss.com/images/2021/02/26/mj12c052e7693143e19.th.png",r.style.position="absolute",r.style.width="60px",r.style.height="60px",r.style.left="0px",a.appendChild(r),t.appendChild(a)}();var e=setTimeout((function(){z(1),setInterval((function(){k++}),1e3),c=setInterval(L,30),t.onclick=function(){100,n.ing||(n.play(),n.ing=!0),T(),n.ing=!1,setTimeout((function(){n.pause()}),150)},t.onmousedown=function(t){t.preventDefault(),n.ing||(n.play(),n.ing=!0),null==y&&(y=setTimeout((function(){100,null==v&&(v=setInterval(T,170))}),200))},t.onmouseup=function(){y=null,setTimeout((function(){n.pause(),n.ing=!1}),300),clearTimeout(y),clearInterval(v),v=null},d.addEventListener("webkitAnimationEnd",(function(){d.remove(d),h=[],d=null})),t.onmousemove=function(n){n=n||window.event;var e=document.body.scrollTop||document.documentElement.scrollTop,r=document.body.scrollLeft||document.documentElement.scrollLeft,i=n.clientX,o=n.clientY;i<t.getBoundingClientRect().right-60&&o<480&&i>t.getBoundingClientRect().left&&(a.style.left=i-t.getBoundingClientRect().left+r+"px",a.style.top=o+e+"px")},clearTimeout(e)}),3e3)};var c,f,u=[],m=[],h=[],b=[],v=null,y=null,g=500,x=document.getElementById("score"),w=0,I=1,k=0,C=!1,M=0,E=function(t,n){return Math.round(Math.random()*(n-t))+t};function z(t){var n;1==t?n=new F(g):3==t?n=new A(g):5==t&&(n=new j(g)),u.push(n)}function L(){var n;k<=35&&(r.innerText="".concat(35-k,"s!")),k>=35&&0==C&&(C=!0,M=new O,u.push(M)),h.length<1&&k%5==0&&function(){null==d&&(d=document.createElement("div"));d.classList.add("plant"),d.style.left=200*Math.random()+"px",d.style.bottom="600px",t.appendChild(d);var n=document.createElement("img"),e=Math.random();n.src=e<.4?"https://www.imageoss.com/images/2021/02/26/planet4a283763c0277c110.png":e<.7?"https://www.imageoss.com/images/2021/02/26/planet2f1e4ab22a42a92e5.md.png":"https://www.imageoss.com/images/2021/02/26/planet1f3855861f8df6ec6.md.png";n.style.position="absolute",n.style.opacity=.6;var r=E(130,200);n.style.width=r+"px",n.style.height=r+"px",n.style.left="0px",d.appendChild(n),h.push(d)}(),0==u.length&&k<=35&&z(1);var i=u.filter((function(t){return t instanceof B==0}));if(((null===(n=i[i.length-1])||void 0===n?void 0:n.bottom)<500||i.length<=4)&&k<=35&&(g=E(550,800),function(){for(var t=Math.round(2*Math.random()),n=0;n<t;n++){var e=Math.random();z(e=e<.1?5:e<.5?3:1),g+=70}}()),k%10==0&&0!==k&&0==b.length&&k<=35)for(var o=600,s=0;s<7;s++){var l=new B(o);o+=153,u.push(l),b.push(l)}for(var p=0,c=function(){var n=u[p];n instanceof B==0&&n instanceof O==0?(n.bottom=parseInt(n.bottom)-4,n.visual.style.bottom=n.bottom+"px"):n instanceof O==0&&(n.bottom-=15,n.visual.style.bottom=n.bottom+"px",n.left-=15*Math.tan(n.degree*(2*Math.PI/360)),n.left=parseInt(n.left),n.visual.style.left=n.left+"px"),n.life+=1,(n instanceof B==0&&45==n.life||120==n.life)&&(!function(n,e,r){var i=document.createElement("div");if(i.classList.add("shoot"),i.bot=n-20,i.style.bottom=i.bot+"px",r instanceof F){i.left=e+17,i.style.left=i.left+"px";var o=setInterval((function(){i.bot<0||i.left<0?(clearInterval(o),i.remove(i),i=null):(i.bot-=10,i.style.bottom=i.bot+"px",H(i.left,i.bot,0))}),50);return void t.appendChild(i)}if(r instanceof A){i.left=e+30,i.style.left=i.left+"px";var s=e-parseInt(a.style.left),l=Math.abs(n-(550-parseInt(a.style.top))),d=180/Math.PI*Math.atan2(s,l);(d>70||d<-70)&&(d=E(-45,45)),i.style.transform="rotate("+d+"deg)",t.appendChild(i);var p=setInterval((function(){i.bot<0||i.left<0?(clearInterval(p),i.remove(i),i=null):(i.bot-=10,i.style.bottom=i.bot+"px",i.left=i.left-10*Math.tan(d*(2*Math.PI/360)),i.style.left=i.left+"px",H(i.left,i.bot,5))}),50);return}if(r instanceof j){i.left=e+30,i.style.left=i.left+"px";var c=document.createElement("div");c.classList.add("shoot"),c.bot=n-20,c.style.bottom=c.bot+"px",c.left=e+40,c.style.left=c.left+"px";var f=document.createElement("div");f.classList.add("shoot"),f.bot=n-20,f.left=e+50,f.style.bottom=f.bot+"px",f.style.left=f.left+"px",i.style.transform="rotate(30deg)",f.style.transform="rotate(-30deg)",t.appendChild(i),t.appendChild(c),t.appendChild(f);var u=setInterval((function(){i.bot<0||i.bot<0?(clearInterval(u),i.remove(i),i=null):(i.bot-=10,i.left=i.left-10*Math.tan(2*Math.PI/360*30),i.style.bottom=i.bot+"px",i.style.left=i.left+"px",H(i.left,i.bot,5))}),50),m=setInterval((function(){c.bot<0||c.left<0?(clearInterval(m),c.remove(c),c=null):(c.bot-=10,c.style.bottom=c.bot+"px",H(c.left,c.bot,0))}),50),h=setInterval((function(){f.bot<0||f.left<0?(clearInterval(h),f.remove(f),f=null):(f.bot-=10,f.style.bottom=f.bot+"px",f.left=f.left-10*Math.tan(2*Math.PI/360*-30),f.style.left=f.left+"px",H(f.left,f.bot,5))}),50)}}(n.bottom,n.left,n),e.play());var r=a.style,i=parseInt(r.left),o=parseInt(r.top);i<n.left+n.width-23&&i+60-23>n.left&&550-o>n.bottom+15&&550-o-60-25<n.bottom+n.height&&(a.remove(a),t.onmousedown=null,t.onclick=null,t.onmousemove=null,q()),n.bottom<=-100&&(n.visual.remove(n.visual),n instanceof B&&(b=b.filter((function(t){return t!==n}))),u.splice(p,1),p--)};p<u.length;p++)c()}function T(){var n=document.createElement("div"),e=document.createElement("div"),r=document.createElement("div");n.classList.add("fire"),e.classList.add("line"),r.classList.add("line");var i=parseInt(a.style.left)+23+"px",o=550-parseInt(a.style.top);n.style.left=i,n.style.bottom=o+"px",e.style.left="0px",r.style.left="10px",m.push(n),n.appendChild(e),n.appendChild(r),t.appendChild(n),null==f&&(f=setInterval((function(){for(var t=0;t<m.length;t++)m[t].style.bottom=parseInt(m[t].style.bottom)+10+"px",S(),void 0!==m[t]&&parseInt(m[t].style.bottom)>500&&(m[t].remove(m[t]),m.splice(t,1),t--),0==m.length&&(clearInterval(f),f=null)}),10))}function S(){for(var t=0;t<m.length;t++)for(var n=function(n){if(void 0!==m[t]&&parseInt(m[t].style.left)+10>=parseInt(u[n].left)&&parseInt(m[t].style.left)<=parseInt(u[n].left)+parseInt(u[n].visual.childNodes[0].style.width)&&parseInt(m[t].style.bottom)+40>=parseInt(u[n].bottom))if(1==u[n].armour){switch(m[t].remove(m[t]),u[n].visual.remove(u.visual),!0){case u[n]instanceof F:I=2;break;case u[n]instanceof A:I=4;break;case u[n]instanceof j:I=6;break;case u[n]instanceof B:b=b.filter((function(t){return t!==u[n]})),I=6;break;case u[n]instanceof O:M=null,I=50}w+=I,x.innerHTML=100*w,u[n]=null,m[t]=null,u.splice(n,1),m.splice(t,1),t--,w+=I,x.innerHTML=100*w}else u[n].armour>1&&(u[n]instanceof O&&(p.blood-=1,p.style.width=p.blood+"px"),m[t].remove(m[t]),u[n].armour-=1,m.splice(t,1),t--)},e=0;e<u.length;e++)n(e)}function q(){for(clearInterval(c),t.style.zIndex="150",t.onmouseup(),t.onmousedown=null,t.onclick=null,t.onmousemove=null;t.firstChild;)t.removeChild(t.firstChild);localStorage.getItem("score")<100*w&&localStorage.setItem("score",100*w),t.innerHTML="".concat(100*w,'<a id="play" href="javascript:location.reload();">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\tBack\n\t\t\t</a>'),t.style.cursor=""}var F=function t(n){s(this,t),this.bottom=n,this.life=0,this.left=440*Math.random(),this.armour=2,this.height=60,this.width=40,this.visual=document.createElement("div"),this.visual.classList.add("aship"),this.visual.style.left=this.left+"px",this.visual.style.bottom=this.bottom+"px",o.appendChild(this.visual);var e=document.createElement("img");e.src="https://www.imageoss.com/images/2021/02/26/st574d975ddecfe52ec.md.png",e.style.position="absolute",e.style.width="40px",e.style.height="60px",e.style.left="0px",e.style.zIndex=10,this.visual.appendChild(e)},A=function t(n){s(this,t),this.bottom=n,this.life=0,this.left=400*Math.random(),this.armour=5,this.width=80,this.height=80,this.visual=document.createElement("div"),this.visual.classList.add("mship"),this.visual.style.left=this.left+"px",this.visual.style.bottom=this.bottom+"px",o.appendChild(this.visual);var e=document.createElement("img");e.src="https://www.imageoss.com/images/2021/02/26/st279be4ebc6c8e6839.th.png",e.style.position="absolute",e.style.width="80px",e.style.height="80px",e.style.left="0px",e.style.zIndex=9,this.visual.appendChild(e)},j=function t(n){s(this,t),this.bottom=n,this.life=0,this.left=400*Math.random(),this.armour=7,this.width=80,this.height=100,this.visual=document.createElement("div"),this.visual.classList.add("bship"),this.visual.style.left=this.left+"px",this.visual.style.bottom=this.bottom+"px",o.appendChild(this.visual);var e=document.createElement("img");e.src="https://www.imageoss.com/images/2021/02/26/st39493a61ebebc2966.th.png",e.style.position="absolute",e.style.width="80px",e.style.height="100px",e.style.left="0px",e.style.zIndex=8,this.visual.appendChild(e)},B=function n(e){s(this,n),this.bottom=e,this.left=200,this.armour=4,this.life=0,this.width=50,this.height=50,this.visual=document.createElement("div"),this.visual.style.bottom=this.bottom+"px",this.visual.style.left=this.left+"px",this.visual.classList.add("suicide");var r=document.createElement("img");r.src="https://www.imageoss.com/images/2021/02/26/ssssfd97d26c3b52e1b1.th.png",r.style.position="absolute",r.style.width="50px",r.style.height="50px",r.style.left="0px";var i=this.left-parseInt(a.style.left),o=Math.abs(this.bottom-(550-parseInt(a.style.top)));this.degree=180/Math.PI*Math.atan2(i,o),(this.degree>70||this.degree<-70)&&(this.degree=E(-60,60)),this.degree=E(-this.degree-12,this.degree+12),r.style.transform="rotate("+this.degree+"deg)",t.appendChild(this.visual),this.visual.appendChild(r)};var O=function n(){var e=this;s(this,n),this.armour=375,this.life=0,this.bottom=850,this.left=90,this.histleft=0,this.height=300,this.width=300,this.visual=document.createElement("div"),this.visual.classList.add("boss"),this.visual.style.bottom=this.bottom+"px",this.visual.style.left=this.left+"px",this.fire1=!1,this.fire2=!1,this.fire3=!1;var r=document.createElement("img");r.src="https://www.imageoss.com/images/2021/02/26/boss1a243240d12e1f8af.md.png",r.style.position="absolute",r.style.width="300px",r.style.height="300px",r.style.left="0px";var i=document.createElement("div");i.classList.add("hist"),this.visual.appendChild(r),t.appendChild(this.visual),this.phase=0;var o=window.requestAnimationFrame((function n(){if(null==M)return window.cancelAnimationFrame(o),void q();if(0==e.phase)e.bottom>400?(e.bottom-=3,e.visual.style.bottom=e.bottom+"px",window.requestAnimationFrame(n)):(e.phase=1,window.requestAnimationFrame(n));else if(1==e.phase){if(e.left<=45)return e.phase=2,void window.requestAnimationFrame(n);e.left-=1,e.bottom-=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(2==e.phase){if(e.bottom>=400)return e.phase=3,void window.requestAnimationFrame(n);e.left-=1,e.bottom+=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(3==e.phase){if(e.left>=175)return e.phase=4,e.fire1=!1,e.fire2=!1,i.remove(i),void window.requestAnimationFrame(n);!e.fire2&&Math.random()>.8&&(i.style.left=e.left+150+"px",i.style.top=450-e.bottom+"px",i.style.height="550px",e.histleft=e.left,t.appendChild(i),e.fire2=!0),e.left>130&&Math.random()>.8&&!e.fire1&&(P(e.bottom,e.left+E(80,200),E(15,22),E(7,12)),e.fire1=!0),e.left+=1,e.histleft+=4,i.style.left=e.histleft+150+"px";var r=a.style,s=parseInt(r.left);s<e.left+170&&s+70>e.left+150&&(a.remove(a),q(),M=null),e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(4==e.phase){if(e.left<=130)return e.phase=5,void window.requestAnimationFrame(n);e.left-=1,e.bottom-=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}else if(5==e.phase){if(e.left<=90)return e.phase=1,e.fire1=!1,void window.requestAnimationFrame(n);e.fire1||(P(e.bottom,e.left,-20,5),e.fire1=!0),e.left-=1,e.bottom+=1,e.visual.style.bottom=e.bottom+"px",e.visual.style.left=e.left+"px",window.requestAnimationFrame(n)}}))};function P(n,e,r,i){var o=0,a=setInterval((function(){if(8==o)return clearInterval(a),void(a=null);var s=document.createElement("div");s.classList.add("cyc");var l=document.createElement("img");l.src="https://www.imageoss.com/images/2021/02/26/fire1531c341b2fa6ea28.th.png",l.style.position="absolute";var d=n+20;s.style.bottom=d+"px",l.style.width="25px",l.style.height="25px",s.style.left=e+"px",e+=r,o++,s.appendChild(l),t.appendChild(s),s.timeid=setInterval((function(){d-=i,s.style.bottom=d+"px",H(parseInt(s.style.left),d,0),d<-5&&(clearInterval(s.timeid),s.remove(s),s.timeid=null)}),50)}),300)}function H(t,n,e){var r=a.style,i=parseInt(r.left),o=parseInt(r.top);t-10>i&&i+60>t-e&&550-o-15>n&&490-o<n+30&&(a.remove(a),q(),M=null)}}))}]);