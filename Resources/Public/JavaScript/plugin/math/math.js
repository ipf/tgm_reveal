/**
 * A plugin which enables rendering of math equations inside
 * of reveal.js slides. Essentially a thin wrapper for MathJax.
 *
 * @author Hakim El Hattab
 */
var RevealMath=window.RevealMath||function(){function e(e,a){var t=document.querySelector("head"),n=document.createElement("script");n.type="text/javascript",n.src=e;var i=function(){"function"==typeof a&&(a.call(),a=null)};n.onload=i,n.onreadystatechange=function(){"loaded"===this.readyState&&i()},t.appendChild(n)}var a=Reveal.getConfig().math||{};a.mathjax=a.mathjax||"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js",a.config=a.config||"TeX-AMS_HTML-full",e(a.mathjax+"?config="+a.config,function(){MathJax.Hub.Config({messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0}),MathJax.Hub.Queue(["Typeset",MathJax.Hub]),MathJax.Hub.Queue(Reveal.layout),Reveal.addEventListener("slidechanged",function(e){MathJax.Hub.Queue(["Typeset",MathJax.Hub,e.currentSlide])})})}();