(function(window,undefined){var JSONP=function(url,method,callback){url=url||'';method=method||'';callback=callback||function(){};if(typeof method=='function'){callback=method;method='callback';}
var generatedFunction='jsonp'+Math.round(Math.random()*1000001)
window[generatedFunction]=function(json){callback(json);delete window[generatedFunction];};if(url.indexOf('?')===-1){url=url+'?';}
else{url=url+'&';}
var jsonpScript=document.createElement('script');jsonpScript.setAttribute("src",url+method+'='+generatedFunction);document.getElementsByTagName("head")[0].appendChild(jsonpScript)}
window.JSONP=JSONP;})(window);