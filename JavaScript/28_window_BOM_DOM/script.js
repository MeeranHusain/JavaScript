window.console.log(window)
// window is a global object, everything comes under 'window' object.

/* What is DOM?

    - DOM is Document Object Model, is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
    - DOM is a tree-like structure, it is a model of the structure of an HTML and XML.
    - DOM is a W3C (World Wide Web Consortium) standard for accessing and manipulating HTML and XML documents.

 */

console.log(document.body)
// document.body is the body of the HTML document, it is the main content of the HTML document.
document.body.style.background = 'yellow'


/* What is BOM?

    - BOM is Browser Object Model, it is a set of objects and methods that are available in
    the browser. It is used to interact with the browser and its features.
*/

location.href = "https://www.google.com/"  // write this line code into the inspect element