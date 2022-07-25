(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"* {\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n\n#content {\n    display: flex;\n    height: 100vh;\n    background-color: #FFFFFF;\n}\n\n.sidebar {\n    flex-basis: 25%;\n    flex-shrink: 2;\n    border-right: 1px solid black;\n}\n\n.mainbody {\n    flex-basis: 75%;\n    flex-shrink: 1;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    padding: 100px;\n    gap: 8px;\n}\n\n.popup {\n    width: 500px;\n    height: 200px;\n    border: 1px solid black;\n    align-self: center;\n\n}\n\n.card {\n    width: 100%;\n    border: 1px solid black;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.trashicon {\n    pointer-events: none;\n}\n.card {\n  \n    vertical-align: middle;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-property: transform;\n    transition-property: transform;\n  }\n  .card:hover, .card:focus, .card:active {\n    -webkit-transform: scale(1.04);\n    transform: scale(1.04);\n  }\n\n\n.formsubmission {\n    align-self: center;\n}\n\n.formbuttonicon {\n    height: 30px;\n    width: 30px;\n    background-color: none;\n    border: none;\n    cursor: pointer;\n    border: none;\n    text-decoration: none;\n}\n\n.formbutton {\n    align-self: flex-start;\n    all: unset;\n}\n\n.sidebarline {\n    width: 200px;\n    height: 4px;\n    background-color: #000000;\n}\n\n.sidebartitle {\n    font-weight: bolder;\n    font-size: 40px;\n}\n\n.sidebarcontainer {\n    height: 30%;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    justify-content: center;\n}\n\n\n.formbutton {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  }\n  .formbutton .formbuttonicon {\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    transition-property: transform;\n    -webkit-transition-timing-function: ease-in-out;\n    transition-timing-function: ease-in-out;\n  }\n  .formbutton:hover .formbuttonicon, .formbutton:focus .formbuttonicon, .formbutton:active .formbuttonicon {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const b=[],v=document.querySelector("#content"),h=document.createElement("div");h.classList.add("sidebar"),v.append(h);const x=document.createElement("div");x.classList.add("sidebarcontainer"),h.append(x);const y=document.createElement("div");y.classList.add("sidebartitle"),y.textContent="projects",x.append(y);const g=document.createElement("div");g.classList.add("sidebarline"),x.append(g);const E=document.createElement("div");E.classList.add("mainbody"),v.appendChild(E);const k=document.createElement("div");k.classList.add("formsubmission"),E.append(k);const w=document.createElement("button");w.classList.add("formbutton"),k.append(w);const L=document.createElement("ion-icon");L.classList.add("formbuttonicon"),L.name="add-outline",w.append(L),w.addEventListener("click",(function e(){const n=document.createElement("div");n.classList.add("popup"),k.append(n);const t=document.createElement("form");n.append(t);const o=document.createElement("label");o.for="task",o.innerText="Task Title",t.append(o);const r=document.createElement("input");r.type="text",r.id="task",r.name="task",r.setAttribute("requried",""),t.append(r);const a=document.createElement("label");a.for="Description",a.innerText="Description",t.append(a);const i=document.createElement("input");i.type="text",i.id="description",i.name="description",t.append(i);const c=document.createElement("label");c.innerText="Date",t.append(c);const s=document.createElement("input");s.type="date",s.id="date",s.name="date",t.append(s);const d=document.createElement("label");d.for="status",d.innerText="Importance",t.append(d);const l=document.createElement("select");l.name="status",l.id="status",t.append(l);const u=document.createElement("option");u.value="low",u.innerText="low",l.append(u);const p=document.createElement("option");p.value="medium",p.innerText="medium",l.append(p);const m=document.createElement("option");m.value="high",m.innerText="high",l.append(m);const f=document.createElement("input");function v(e,n,t,o){this.time=Date.now(),this.title=e,this.description=n,this.date=t,this.importance=o}f.classList="tasksubmitbutton",f.type="button",f.value="button",t.append(f),f.addEventListener("click",(e=>{let n=new v(document.querySelector("#task").value,document.querySelector("#description").value,document.querySelector("#date").value,document.querySelector("#status").value);b.push(n),console.log(b),document.querySelector(".popup").remove(),function(e){const n=document.createElement("div");n.classList.add("card"),E.append(n),n.value=e.time;const t=document.createElement("form");n.append(t);const o=document.createElement("label");o.class="switch",t.append(o);const r=document.createElement("input");r.type="checkbox",o.append(r);const a=document.createElement("span");a.class="slider",o.append(a);const i=document.createElement("div");i.innerText=e.title,n.append(i);const c=document.createElement("div");c.innerText=e.date,n.append(c);const s=document.createElement("button");s.classList.add("trashbutton"),s.type="button",s.value=e.time,n.append(s);const d=document.createElement("ion-icon");d.classList.add("trashicon"),d.name="trash-outline",d.value=e.time,s.append(d),s.addEventListener("click",(function(e){let n=e.target;document.querySelector(".card");for(let e=0;e<b.length;e++)Number(n.value)===b[e].time&&n.closest(".card").remove()}))}(n)})),f.addEventListener("click",(function(){!function(){const e=document.createElement("button");e.classList.add("formbutton"),k.append(e);const n=document.createElement("ion-icon");n.classList.add("formbuttonicon"),n.name="add-outline",e.append(n)}();let n=document.body.querySelector(".formbutton");n.addEventListener("click",e),n.addEventListener("click",(function(){document.body.querySelector(".formbutton").remove()}))}))})),w.addEventListener("click",(function(){document.body.querySelector(".formbutton").remove()}))})()})();