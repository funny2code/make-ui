// Test with an element.
let initElement = document.getElementsByTagName("body")[0];
let json = mapDOM(initElement, true);
console.log(json);

// Test with a string.
// initElement = "<div><span>text</span>Text2</div>";
// json = mapDOM(initElement, true);



function mapDOM(element, json) {
    let treeObject = {};
    
    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
            parser = new DOMParser();
            docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
            docNode = new ActiveXObject("Microsoft.XMLDOM");
            docNode.async = false;
            docNode.loadXML(element); 
        } 
        element = docNode.firstChild;
    }

    function dumpCSSText(element){
      let s = {};
      let o = getComputedStyle(element);
      for(let i = 0; i < o.length; i++){
        if(o[i] === "background-color" || o[i] === "width" || o[i] === "height" || o[i] === "color" || o[i] === "font-size" || o[i] === "background"){
            s[o[i]] = o.getPropertyValue(o[i]);
        }
      }
      let rect = element.getBoundingClientRect();
      s.x = rect.left;
      s.y = rect.top;
      return s;
    }

    function checkElementHide(element){
        let css = getComputedStyle(element);
        let display = css.getPropertyValue("display");
        let visibility = css.getPropertyValue("visibility");
        return (display === "none" || visibility === "hidden") ? true : false;
    }
    
    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        if(element.nodeName === "STYLE" || element.nodeName === "LINK" || element.nodeName === "SCRIPT") return;
        if(checkElementHide(element)) return;
        object["type"] = element.nodeName;
        object["css"] = dumpCSSText(element);
        if(element.nodeName === "svg") return object["content"] = element.outerHTML;
        let nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (let i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        if(nodeList[i].nodeValue.replace(/[\r\n]/gm, '').trim() !== ''){
                            object["content"].push(nodeList[i].nodeValue.trim());
                        }
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    (element.attributes[i].nodeName === "src") 
                    ? object["attributes"][element.attributes[i].nodeName] = element.src
                    : object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
        
    }
    treeHTML(element, treeObject);
    
    return (json) ? JSON.stringify(treeObject) : treeObject;
}