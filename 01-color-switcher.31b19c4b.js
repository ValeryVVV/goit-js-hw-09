!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");n.disabled=!0;var o=null,a={DELAY:100,getRandomHexColor:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},interval:function(){o=setInterval((function(){t.style.backgroundColor="".concat(a.getRandomHexColor())}),this.DELAY),n.disabled=!1},start:function(){var t=this;e.addEventListener("click",(function(){t.interval(),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",this.stop)},stop:function(){clearInterval(o),n.disabled=!0,e.disabled=!1}};a.start()}();
//# sourceMappingURL=01-color-switcher.31b19c4b.js.map