parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
$(document).ready(function(){$("header nav ul li a").click(function(e){e.preventDefault();var o=$(this).attr("href"),r=$(o).position();r&&$(window).scrollTo({top:r.top,left:"0px"},1e3)}),$(".app_link").click(function(e){event.preventDefault(),$(window).scrollTo({top:$("#hero").position().top,left:"0px"},1e3)}),$(".burger_icon").click(function(){$("header nav").toggleClass("show"),$("header .burger_icon").toggleClass("active")}),wow=new WOW({animateClass:"animated",mobile:!1,offset:50}),wow.init(),$(".hero").parallax("50%",.3),$("html").niceScroll({scrollspeed:50,autohidemode:!1,cursorwidth:8,cursorborderradius:8,cursorborder:"0",background:"rgba(48, 48, 48, .4)",cursorcolor:"#1f1f1f",zindex:999}),$("#play_video").click(function(e){e.preventDefault();var o=$(this).data("video");o='<iframe src="'+o+'" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',$(".about_video").append(o).fadeIn(200)}),$(".close_video").click(function(e){e.preventDefault(),$(".about_video").fadeOut(200,function(){$("iframe",this).remove()})})});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.9799a4a7.js.map