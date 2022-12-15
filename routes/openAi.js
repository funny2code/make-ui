const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');


const validURL = async (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
};

let components = {};
let figmaItemIndex = 1;
const mapDOM = async (element, json, pagename) => {
let figmaData = [];

if (typeof element === "string") {
    if (window.DOMParser) {
    parser = new DOMParser();
    docNode = parser.parseFromString(element, "text/xml");
    } else {
    docNode = new ActiveXObject("Microsoft.XMLDOM");
    docNode.async = false;
    docNode.loadXML(element);
    }
    element = docNode.firstChild;
}

const convertToAngle = async (matrix) => {
    let values = matrix.split("(")[1];
    values = values.split(")")[0];
    values = values.split(",");
    let sin = values[1];
    return Math.round(Math.asin(sin) * (180 / Math.PI));
};

const dumpCSSText = async (element) => {
    let s = {};
    // let o = window.getComputedStyle(element);
    s.backgroundColor = element.backgroundColor;
    s.color = element.color;
    s.width = element.width;
    s.height = element.height;
    s.fontSize = element.fontSize;
    // s.fontFamily = o["fontFamily"];
    // s.borderWidth = o["borderWidth"];
    // s.borderColor = o["borderColor"];
    // s.textTransform = o["textTransform"];
    // s.transform = o["transform"] !== "none"
    //     ? await convertToAngle(o["transform"])
    //     : "none";
    // s.borderStyle = o["borderStyle"];
    // s.borderBottomLeftRadius = o["borderBottomLeftRadius"];
    // s.borderBottomRightRadius = o["borderBottomRightRadius"];
    // s.borderTopLeftRadius = o["borderTopLeftRadius"];
    // s.borderTopRightRadius = o["borderTopRightRadius"];
    // s.display = o["display"];
    // s.direction = o["flexDirection"];
    // s.justifyContent = o["justifyContent"];
    // s.gap = o["gap"];
    // s.alignItems = o["alignItems"];
    // s.textAlign = o["textAlign"];
    // s.textDecoration = o["textDecorationLine"];
    // s.overflow = o["overflow"];
    let rect = element.getBoundingClientRect();
    s.x = rect.left;
    s.y = rect.top;
    return s;
};

const checkElementHide = async (element) => {
    // let css = getComputedStyle(element);
    let display = element.display;
    let visibility = element.visibility;
    let height = element.height;
    return display === "none" || visibility === "hidden" || parseInt(height) === 0 ? true : false;
};

const getAttributes = async (element, attributes) => {
    let attrs = {};
    for (var i = 0; i < attributes.length; i++) {
    attributes[i].nodeName === "src"
        ? (attrs[attributes[i].nodeName] = element.src)
        : (attrs[attributes[i].nodeName] = attributes[i].nodeValue);
    }
    return attrs;
};

//Recursively loop through DOM elements and assign properties to object
const treeHTML = async (element, isChild = false) => {
    if (
    element.nodeName === "STYLE" ||
    element.nodeName === "LINK" ||
    element.nodeName === "SCRIPT" ||
    element.nodeName === "NOSCRIPT"
    )
    return;
    if (
    (element && element.nodeType === 8) ||
    (await checkElementHide(element)) ||
    element?.classList?.contains("visually-hidden")
    )
    return;
    let figmaDataItem = {};
    figmaDataItem.css = await dumpCSSText(element);
    if (element?.attributes?.length)
    figmaDataItem.attributes = await getAttributes(
        element,
        element.attributes
    );
    let isComponent = (figmaDataItem?.attributes && figmaDataItem?.attributes['data-component']) ? figmaDataItem?.attributes['data-component'] : null;
    figmaDataItem.title = (element.nodeName === "BODY")
        ? pagename
        : (isComponent) 
        ? isComponent
        : (figmaDataItem?.attributes?.class || figmaDataItem?.attributes?.id)
        ? (figmaDataItem?.attributes?.class)
        ? figmaDataItem?.attributes.class
            ?.split(" ")[0]
            .replaceAll("_", " ")
            .replaceAll("-", " ")
            .replaceAll("__", " ") +
            " " +
            figmaItemIndex
        : figmaDataItem?.attributes?.id
            .replaceAll("_", " ")
            .replaceAll("-", " ")
            .replaceAll("__", " ") +
            " " +
            figmaItemIndex
        : "no name " + figmaItemIndex;
        figmaItemIndex++;
    // if(element.nodeName === "BODY" || element.nodeName === "BUTTON" || element.nodeName === "INPUT" || element.nodeName === "SECTION" || element.nodeName === "IMG" || element.nodeName === "svg" || figmaDataItem.css.display === "flex" || figmaDataItem.css.backgroundColor !== "rgba(0, 0, 0, 0)"){
    figmaDataItem.type =
        element.nodeName === "svg" ||
        element.nodeName === "IMG" ||
        element.nodeName === "BODY"
        ? element.nodeName
        : "FRAME";
        if (isChild) figmaDataItem.parent = isChild;
        if (element.nodeName === "svg")  figmaDataItem.svg = element.outerHTML;
        figmaData.push(figmaDataItem);
        if(isComponent) figmaDataItem.attributes['data-component'] = isComponent;
        if(element.nodeName === "svg") return;
        if(isComponent && components[isComponent]) return;
        if(isComponent) components[isComponent] = true;
    // }
    if (element?.childNodes?.length) {
    for (let i = 0; i < element?.childNodes?.length; i++) {
        let figmaChildItem = element?.childNodes[i];
        if (figmaChildItem.nodeType === 3) {
        if (figmaChildItem.nodeValue.replace(/[\r\n]/gm, "").trim() !== "")
        return figmaData.push({
            type: "TEXT",
            text: figmaChildItem.nodeValue.trim(),
            css: figmaDataItem?.css,
            attrinutes: figmaChildItem?.attributes,
            parent: figmaDataItem.title,
            tag: element.nodeName
        });
        } else {
        await treeHTML(figmaChildItem, figmaDataItem.title);
        }
    }
    }
};
console.log(element);
await treeHTML(element);

return json ? JSON.stringify(figmaData) : figmaData;
};

router.get("/", async (req, res, next) => {

    try {
        res.render('openai');
    } catch (err) {
        return next(err);
    }

});

router.post("/", async (req, res, next) => {


    const {message} = req.body;
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        
        if(await validURL(message)){
            const {data} = await axios.get(message);
            const $ = cheerio.load(data);
            // const figmaData = await mapDOM($('body')[0]);
            const getLinks = $('link');
            if(getLinks?.length){
                for(let i=0; i<getLinks.length; i++){
                    if(!getLinks[i]?.attribs?.href?.includes('data:text/css;base64') && getLinks[i]?.attribs?.href?.includes('.css')){
                        let link = getLinks[i]?.attribs?.href;
                        console.log(link);
                        let newLink = (link?.includes("http:") || link?.includes("https:")) 
                        ? link 
                        : `https:${link}`;
                        let getLink = await axios.get(newLink);
                        let linkData = getLink.data;
                        $('body').append(`<style type="text/css">${linkData}</style>`);
                    }
                }
            }
            $('link').remove();
            return res.status(200).json({result: $.html()});
        } else {
            const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: message,
                temperature: 0,
                max_tokens: 4000,
            });

            return res.status(response.status).json({result: response.data.choices[0].text});
        }

    } catch (err) {
        return next(err);
    }

});

module.exports = router;
