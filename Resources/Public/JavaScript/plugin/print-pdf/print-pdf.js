/**
 * phantomjs script for printing presentations to PDF.
 *
 * Example:
 * phantomjs print-pdf.js "http://lab.hakim.se/reveal-js?print-pdf" reveal-demo.pdf
 *
 * By Manuel Bieh (https://github.com/manuelbieh)
 */
var page=new WebPage,system=require("system"),slideWidth=system.args[3]?system.args[3].split("x")[0]:960,slideHeight=system.args[3]?system.args[3].split("x")[1]:700;page.viewportSize={width:slideWidth,height:slideHeight},page.paperSize={width:Math.round(2*slideWidth),height:Math.round(2*slideHeight),border:0};var inputFile=system.args[1]||"index.html?print-pdf",outputFile=system.args[2]||"slides.pdf";null===outputFile.match(/\.pdf$/gi)&&(outputFile+=".pdf"),console.log("Printing PDF (Paper size: "+page.paperSize.width+"x"+page.paperSize.height+")"),page.open(inputFile,function(e){window.setTimeout(function(){console.log("Printed successfully"),page.render(outputFile),phantom.exit()},1e3)});