// Test with an element.
(function(){

    // let saveButton = document.querySelector('.py__save-button');

    // saveButton.addEventListener("click", () => {
    //     let form = document.querySelector(".py__settings-form");
    //     let formUrl = form.getAttribute("action");
    //     console.log(formUrl);
    //     return;
    //     let initElement = document.getElementsByTagName("body")[0];
    //     let json = mapDOM(initElement, true);
    //     console.log(json);

    //     function mapDOM(element, json) {
    //         let treeObject = {};
            
    //         if (typeof element === "string") {
    //             if (window.DOMParser) {
    //                 parser = new DOMParser();
    //                 docNode = parser.parseFromString(element,"text/xml");
    //             } else { 
    //                 docNode = new ActiveXObject("Microsoft.XMLDOM");
    //                 docNode.async = false;
    //                 docNode.loadXML(element); 
    //             } 
    //             element = docNode.firstChild;
    //         }

    //         function dumpCSSText(element){
    //             let s = {};
    //             let o = getComputedStyle(element);
    //             s.backgroundColor = o["backgroundColor"];
    //             s.color = o["color"];
    //             s.width = o["width"];
    //             s.height = o["height"];
    //             s.fontSize = o["fontSize"];
    //             s.fontFamily = o["fontFamily"];
    //             s.borderWidth = o["borderWidth"];
    //             s.borderColor = o["borderColor"];
    //             s.textTransform = o["textTransform"];
    //             s.transform = o["transform"];
    //             s.borderStyle = o["borderStyle"];
    //             s.borderBottomLeftRadius = o["borderBottomLeftRadius"];
    //             s.borderBottomRightRadius = o["borderBottomRightRadius"];
    //             s.borderTopLeftRadius = o["borderTopLeftRadius"];
    //             s.borderTopRightRadius = o["borderTopRightRadius"];
    //             s.justifyContent = o["justifyContent"];
    //             s.alignItems = o["alignItems"];
    //             s.textAlign = o["textAlign"];
    //             let rect = element.getBoundingClientRect();
    //             s.x = rect.left;
    //             s.y = rect.top;
    //             return s;
    //         }

    //         function checkElementHide(element){
    //             let css = getComputedStyle(element);
    //             let display = css.getPropertyValue("display");
    //             let visibility = css.getPropertyValue("visibility");
    //             return (display === "none" || visibility === "hidden") ? true : false;
    //         }
            
    //         //Recursively loop through DOM elements and assign properties to object
    //         function treeHTML(element, object) {
    //             if(element.nodeName === "STYLE" || element.nodeName === "LINK" || element.nodeName === "SCRIPT") return;
    //             if(element && element.nodeType === 8 || checkElementHide(element) || element?.classList?.contains("visually-hidden")) return;
    //             object["type"] = element.nodeName;
    //             object["css"] = dumpCSSText(element);
    //             if(element.nodeName === "svg") return object["content"] = element.outerHTML;
    //             let nodeList = element.childNodes;
    //             if (nodeList != null) {
    //                 if (nodeList.length) {
    //                     object["content"] = [];
    //                     for (let i = 0; i < nodeList.length; i++) {
    //                         if (nodeList[i].nodeType == 3) {
    //                             if(nodeList[i].nodeValue.replace(/[\r\n]/gm, '').trim() !== ''){
    //                                 object["content"].push(nodeList[i].nodeValue.trim());
    //                             }
    //                         } else {
    //                             object["content"].push({});
    //                             treeHTML(nodeList[i], object["content"][object["content"].length -1]);
    //                         }
    //                     }
    //                 }
    //             }
    //             if (element.attributes != null) {
    //                 if (element.attributes.length) {
    //                     object["attributes"] = {};
    //                     for (var i = 0; i < element.attributes.length; i++) {
    //                         (element.attributes[i].nodeName === "src") 
    //                         ? object["attributes"][element.attributes[i].nodeName] = element.src
    //                         : object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
    //                     }
    //                 }
    //             }
                
    //         }
    //         treeHTML(element, treeObject);
            
    //         return (json) ? JSON.stringify(treeObject) : treeObject;
    //     }
    // })
})();