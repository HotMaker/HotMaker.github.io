// build time:Wed Jan 16 2019 16:41:18 GMT+0800 (中国标准时间)
$(document).ready(function(){var o=window.location.href.replace(window.location.origin,"");var i;$(window).on("scroll",function(){clearTimeout(i);i=setTimeout(function(){Cookies.set("scroll-cookie",$(window).scrollTop()+"|"+o,{expires:365,path:""})},250)});if(Cookies.get("scroll-cookie")!==undefined){var e=Cookies.get("scroll-cookie").split("|");if(e[1]===o){$(window).scrollTop(e[0])}}});
//rebuild by neat 