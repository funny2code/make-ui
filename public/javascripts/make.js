(function(){

    // GLOBAL VARIABLES
    var focuseValue = "";
    var theme = {
        settings: {},
        sections: [],
    };
    var saveButton = null; 
    var downloadButton = null;
    var loading = null;
    var themeName = "ThemeMake";

    // Colors names Objects 
    const colorsNamesContrast = {
        "py_header_bg_color_1": "py_header_link_color_1",
        "py_header_bg_color_2": "py_header_link_color_2",
        "py_search_bg_color": "py_search_color",
        "py_search_hover_bg_color": "py_search_hover_color",
        "settings_py_cart_bg_color": "settings_py_cart_color",
        "settings_ck_btn_bg": "settings_ck_btn_color"
    };
    // Colors Contrast Fun 
    const getContrastYIQ = (hexcolor) => {
        if(!hexcolor) return;
        hexcolor = hexcolor.replace("#", "");
        var r = parseInt(hexcolor.substr(0,2),16);
        var g = parseInt(hexcolor.substr(2,2),16);
        var b = parseInt(hexcolor.substr(4,2),16);
        var yiq = ((r*299)+(g*587)+(b*114))/1000;
        return (yiq >= 186) ? '#000000' : '#ffffff';
    };

    // Save old settings values
    const saveSettingsValues = (id=false) => {

        let dataSections = document.querySelectorAll('.py__settings-section-item');
        if(!dataSections.length) return;
        dataSections.forEach((data,index) => {
            let section = {name: null, file_name: null, template_name: null, settings: {}, blocks: []};
            let sectionClosest = data.closest('.py__closest');
            let blockSettings = sectionClosest ? sectionClosest.querySelectorAll('.py__settings-block-item') : null;
            // let sectionName = data?.getAttribute('data-section-name');
            let fileName = data?.getAttribute('data-file-name');
            let templateName = data?.getAttribute('data-template-name');

            // section.file_name = fileName || null;
            section.template_name = templateName;

            if(!fileName){
                data?.querySelectorAll('[name]').forEach(element => {
                    theme.settings[element.getAttribute('name').replace('settings_', '')] = (element.value === "true" || element.value === "false") 
                    ? (element.value === "true") ? true : false 
                    : (element.getAttribute('type') && element.getAttribute('type') === "range" || element.getAttribute('type') === "number") ? parseInt(element.value) : element.value;
                });
            }

            if(theme?.sections?.length){
                let checking = theme?.sections?.filter(sectionItem => sectionItem.file_name === fileName);
                if(checking.length){
                    theme?.sections?.forEach(sectionItem => {
                        if(sectionItem.file_name === fileName){
                            data?.querySelectorAll('[name]').forEach(element => {
                                sectionItem.settings[element.getAttribute('name')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false 
                                : (element.getAttribute('type') && element.getAttribute('type') === "range" || element.getAttribute('type') === "number") ? parseInt(element.value) : element.value;
                            });
                        }
                        if(blockSettings?.length){
                            blockSettings.forEach(block=>{
                                sectionItem?.blocks.forEach(localBlock => {
                                    if(localBlock.type === block.getAttribute('data-type')){
                                        block.querySelectorAll('[name]').forEach(element => {
                                            localBlock.settings[element.getAttribute('name').replace('block_', '')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false
                                            : (element.getAttribute('type') && element.getAttribute('type') === "range" || element.getAttribute('type') === "number") ? parseInt(element.value) : element.value;
                                        });
                                    }
                                })
                            });
                        }
                    });
                } else {
                    section.file_name = fileName;
                    data?.querySelectorAll('[name]').forEach(element => {
                        section.settings[element.getAttribute('name')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false
                        : (element.getAttribute('type') && element.getAttribute('type') === "range" || element.getAttribute('type') === "number") ? parseInt(element.value) : element.value;
                    });
                    if(blockSettings?.length){
                        blockSettings.forEach(block=>{
                            let blockItem = {type: block.getAttribute('data-type'),settings: {}};
                            block?.querySelectorAll('[name]')?.forEach(element => {
                                blockItem.settings[element.getAttribute('name').replace('block_', '')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false 
                                : (element.getAttribute('type') && element.getAttribute('type') === "range" || element.getAttribute('type') === "number") ? parseInt(element.value) : element.value;
                            });
                            section.blocks.push(blockItem);
                        });
                    };
                }
            } else {
                section.file_name = fileName;
                data?.querySelectorAll('[name]').forEach(element => {
                    section.settings[element.getAttribute('name')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false 
                    : (element.getAttribute('type') && element.getAttribute('type') === "range" || element.getAttribute('type') === "number") ? parseInt(element.value) : element.value;
                });
                if(blockSettings?.length){
                    blockSettings.forEach(block=>{
                        let blockItem = {type: block.getAttribute('data-type'),settings: {}};
                        block?.querySelectorAll('[name]')?.forEach(element => {
                            blockItem.settings[element.getAttribute('name').replace('block_', '')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false 
                            : (element.getAttribute('type') && element.getAttribute('type') === "range" || element.getAttribute('type') === "number") ? parseInt(element.value) : element.value;
                        });
                        section.blocks.push(blockItem);
                    });
                };
            }

            if(section.file_name){
                theme.sections.push(section);
            }
        })
    };

    // FETCH CONFIG FUNCTION
    const fetchConfig = (method='POST', type = 'json') => {
        return {
          method: method,
          headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
        };
    };

    // ERROR FUNCTION 
    const errorHandle = (el = '.py__error-wrapper', message) => {
        let errorWraper = document.querySelector(el);
        errorWraper.textContent = message;
        errorWraper?.classList.add('active');
        loading?.classList.remove('py__animate'); 
    };

    // Check settings values 
    const checkSettings = (id, value) => {
        // if(settingsValues[id] === value){
        //     let isDisabled = true; 
        //     settingsValuesBool[id] = false;
        //     Object.entries(settingsValuesBool).forEach(([key, val]) => {
        //         if(val) return isDisabled = false; 
        //     });
        //     if(isDisabled){
        //         saveButton && saveButton.setAttribute('aria-disabled', 'true');
        //         downloadButton && downloadButton.setAttribute('aria-disabled', 'false');
        //     }
        // } else {
        //     saveButton && saveButton.setAttribute('aria-disabled', 'false');
        //     downloadButton && downloadButton.setAttribute('aria-disabled', 'true');
        //     settingsValuesBool[id] = true;
        // }       
    };

    // Save Function
    const save = async () => {

        let form = document.querySelector('form.py__settings-form');
        let url = form.getAttribute('action');
        
        if(!form || !url) return;

        loading?.classList.add('py__animate');

        let res = await fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(theme)
        })
        let data = await res.text();
        if(!data) return;
        let dataParse = JSON.parse(data);
        if(dataParse?.status === 200){
            saveButton?.setAttribute('aria-disabled', 'true');
            downloadButton?.setAttribute('aria-disabled', 'false');
            saveSettingsValues();
        } 
        loading?.classList.remove('py__animate');
    };

    // SAVE FIGMA DATA
    let figmaContent = [];
    const saveFigma = async () => {
        let userID = document.querySelector('.py__save-figma-button').getAttribute('data-user-id');
        let themeID = document.querySelector('.py__save-figma-button').getAttribute('data-theme-id');
        if(!userID || !themeID) return;
        loading?.classList.add('py__animate','py__notopacity');
        loading?.insertAdjacentHTML("beforeend", '<span class="py__save-figma-message">Please wait few minuts...</span>');

        let currentUrl = location?.pathname + location?.search;
        let brandhref = encodeURI(document.querySelector('.global-styles')?.getAttribute('href'));
        currentUrl !== brandhref ? await changeViewPage(false, brandhref, false) : null;
        currentUrl !== brandhref ? await timeout(4000) : null;
        await saveBrandForFigma(); 

        let selectPages = document.querySelector('.py__preview-pages-select');
        let selectPagesOptions = selectPages.querySelectorAll('option');
        for (let option of selectPagesOptions) {
            let href = option.getAttribute('data-href');
            await changeViewPage(false, href, false);
            await timeout(3000);
            await savePageResForFigma();
        }
        
        let url = '/figma/' + userID + '/' + themeID; 
        let res = await fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(figmaContent)
        });
        let data = await res.text();
        if(!data) return;
        loading?.classList.remove('py__animate','py__notopacity');
        loading?.querySelector('.py__save-figma-message')?.remove();
    }

    const timeout = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const savePageResForFigma = async () => {
        let res = await saveDesktopForFigma();
        return res;
    };

    const saveDesktopForFigma = async () => {
        let iframe = document.querySelector('.py__view-iframe');
        let pageName = iframe.getAttribute('data-page-name');
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if(!iframeDocument) return;
        let data = await mapDOM(iframeDocument.getElementsByTagName('body')[0], false);
        if(data) data.name = pageName + " Desktop";
        figmaContent.push(data);
        let tablet = document.querySelector('.py__button-view[data-type="tablet"]');
        tablet.click();
        let res = await saveTabletForFigma();
        return res;
    };

    const saveBrandForFigma = async () => {
        let iframe = document.querySelector('.py__view-iframe');
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if(!iframeDocument) return;
        let brandHtml = iframeDocument.getElementsByTagName('body')[0];
        let data = await mapDOM(brandHtml, false);
        if(data) data.name = "Brand";
        figmaContent.push(data);
    };

    const saveTabletForFigma = async () => {
        let iframe = document.querySelector('.py__view-iframe');
        let pageName = iframe.getAttribute('data-page-name');
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if(!iframeDocument) return;
        let data = await mapDOM(iframeDocument.getElementsByTagName('body')[0], false);
        if(data) data.name = pageName + " Tablet";
        figmaContent.push(data);
        let mobile = document.querySelector('.py__button-view[data-type="mobile"]');
        mobile.click();
        let res = await saveMobileForFigma();
        return res;
    };

    const saveMobileForFigma = async () => {
        let iframe = document.querySelector('.py__view-iframe');
        let pageName = iframe.getAttribute('data-page-name');
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if(!iframeDocument) return;
        let data = await mapDOM(iframeDocument.getElementsByTagName('body')[0], false);
        if(data) data.name = pageName + " Mobile";
        figmaContent.push(data);
        let desktop = document.querySelector('.py__button-view[data-type="desktop"]');
        desktop.click();
        return true;
    };

    // FIGMA HTML TO JSON
    const  mapDOM = async (element, json) => {
        let treeObject = {};
        
        if (typeof element === "string") {
            if (window.DOMParser) {
                parser = new DOMParser();
                docNode = parser.parseFromString(element,"text/xml");
            } else { 
                docNode = new ActiveXObject("Microsoft.XMLDOM");
                docNode.async = false;
                docNode.loadXML(element); 
            } 
            element = docNode.firstChild;
        }

        const convertToAngle = async (matrix) => {
            let values = matrix.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            let sin = values[1];
            return Math.round(Math.asin(sin) * (180/Math.PI));
        };

        const dumpCSSText = async (element) => {
            let s = {};
            let o = getComputedStyle(element);
            s.backgroundColor = o["backgroundColor"];
            s.color = o["color"];
            s.width = o["width"];
            s.height = o["height"];
            s.fontSize = o["fontSize"];
            s.fontFamily = o["fontFamily"];
            s.borderWidth = o["borderWidth"];
            s.borderColor = o["borderColor"];
            s.textTransform = o["textTransform"];
            s.transform = o["transform"] !== "none" ? await convertToAngle(o["transform"]) : "none";
            s.borderStyle = o["borderStyle"];
            s.borderBottomLeftRadius = o["borderBottomLeftRadius"];
            s.borderBottomRightRadius = o["borderBottomRightRadius"];
            s.borderTopLeftRadius = o["borderTopLeftRadius"];
            s.borderTopRightRadius = o["borderTopRightRadius"];
            s.justifyContent = o["justifyContent"];
            s.alignItems = o["alignItems"];
            s.textAlign = o["textAlign"];
            s.textDecoration = o["textDecorationLine"];
            let rect = element.getBoundingClientRect();
            s.x = rect.left;
            s.y = rect.top;
            return s;
        }

        const checkElementHide = async (element) => {
            let css = getComputedStyle(element);
            let display = css.getPropertyValue("display");
            let visibility = css.getPropertyValue("visibility");
            return (display === "none" || visibility === "hidden") ? true : false;
        }
        
        //Recursively loop through DOM elements and assign properties to object
        const treeHTML = async (element, object) => {
            if(element.nodeName === "STYLE" || element.nodeName === "LINK" || element.nodeName === "SCRIPT" || element.nodeName === "NOSCRIPT") return;
            if(element && element.nodeType === 8 || await checkElementHide(element) || element?.classList?.contains("visually-hidden")) return;
            object["type"] = element.nodeName;
            object["css"] = await dumpCSSText(element);
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
                            await treeHTML(nodeList[i], object["content"][object["content"].length -1]);
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
        await treeHTML(element, treeObject);
        
        return (json) ? JSON.stringify(treeObject) : treeObject;
    }

    // Get Register Popup Function
    const getRegister = (event) => {
        
        if(!event) return;
        event.preventDefault();
        loading?.classList.add('py__animate');
    

        fetch('/signup', {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let body = document.querySelector('body');
            body.insertAdjacentHTML('afterend', data);
            loading?.classList.remove('py__animate');
        })
        .catch(err => console.error(err));
    };

    // Get Login Popup Function
    const getLogin = (event) => {
        
        if(!event) return;
        event.preventDefault();
        loading?.classList.add('py__animate');
    

        fetch('/login', {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let body = document.querySelector('body');
            body.insertAdjacentHTML('afterend', data);
            loading?.classList.remove('py__animate');
        })
        .catch(err => console.error(err));
    };

    // Get Add Theme Popup Function
    const getAddTheme = (event) => {
        
        if(!event) return;
        event.preventDefault();
        let el = event.target;
        let url = el.getAttribute('href');
        if(!url) return;

        fetch(url, {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let body = document.querySelector('body');
            body.insertAdjacentHTML('afterend', data);
        })
        .catch(err => console.error(err));
    };

    // SignUp Function
    const signup = async (event) => {
        
        if(!event) return;
        event.preventDefault();
        let form = event.target;
        let url = event.target.getAttribute('action');
        let themeId = document.querySelector('.py__signup-button')?.getAttribute('data-id'); 
        let body = null;
        if(!url || !themeId) return;
        loading?.classList.add('py__animate');
        
        let formData = new FormData(form);
        let ObjectFormData = Object.fromEntries(formData.entries());
        body = JSON.stringify(ObjectFormData);
        
        // Signup Ajax POST 
        let signupFun = await fetch(url, {...fetchConfig(), body});
        let signupFunRes = await signupFun.text();
        let signupFunParse = JSON.parse(signupFunRes);

        // Signup Ajax Response
        if(signupFunParse.status !== "active" && signupFunParse.status !== "requires_confirmation") return errorHandle('.py__signup-error-wrap', signupFunParse.message);
        if(signupFunParse.status === "requires_confirmation"){
            let stripe = Stripe('pk_test_hnMkmoqkvZxUjOrnEkPIVd80');
            let stripeResponse = await stripe.confirmCardPayment(signupFunParse?.client_secret);
            if(stripeResponse?.error || !stripeResponse?.paymentIntent) return;
        }

        // Add Theme Ajax POST;
        let addThemeUrl = `/add/${signupFunParse.id}/${themeId}`;
        body = JSON.stringify({themename: themeName});
        let addThemeFun = await fetch(addThemeUrl, {...fetchConfig(), body});
        let addThemeResponse = await addThemeFun.text();
        let addThemeParse = JSON.parse(addThemeResponse);
        if(addThemeParse.status !== 200) return errorHandle('.py__signup-error-wrap', addThemeParse.message);

        // Save Theme Settings Ajax POST
        let saveUrl = `/save/users/${signupFunParse.id}/themes/${addThemeParse.theme_id}`;
        body = JSON.stringify(theme);
        let saveFun = await fetch(saveUrl, {...fetchConfig(), body});
        let saveFunResponse = await saveFun.text();
        let saveFunParse = JSON.parse(saveFunResponse);
        if(saveFunParse.status !== 200) return errorHandle('.py__signup-error-wrap', saveFunParse.message);
        

        // DOWNLOAD Fun Ajax POST
        let downloadUrl = '/download';
        body = JSON.stringify({userId: signupFunParse.id, themeId: addThemeParse.theme_id});
        let downloadFun = await fetch(downloadUrl, {...fetchConfig(), body});
        let downloadFunResponse = await downloadFun.blob();
        if(!downloadFunResponse) return errorHandle('.py__signup-error-wrap', 'Error! please try again few minutes late.');
        
        let downloadObjectUrl = window.URL.createObjectURL(downloadFunResponse);
        let createElement = document.createElement('a');
        createElement.style.display = 'none';
        createElement.href = downloadObjectUrl;
        createElement.download = themeName + '.zip';
        document.body.appendChild(createElement);
        createElement.click();
        window.URL.revokeObjectURL(downloadObjectUrl);
        createElement.remove();
        loading?.classList.remove('py__animate');
        return location.href = `/users/${signupFunParse.id}/themes/${addThemeParse.theme_id}?page=Home%20Page&global=Global%20Styles`;
    };

    // Login Function
    const login = (event) => {
        
        if(!event) return;
        event.preventDefault();
        let form = event.target;
        let url = event.target.getAttribute('action');
        if(!url) return;
        let formData = new FormData(form);
        let ObjectFormData = Object.fromEntries(formData.entries());
        loading?.classList.add('py__animate');

        fetch(url, {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ObjectFormData)
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let parseData = JSON.parse(data);
            if(parseData.status !== 200) return errorHandle('.py__login-error-wrap', parseData.message);
            loading?.classList.remove('py__animate');
            return location.href = location.origin;
        })
        .catch(err => console.error(err));
    };

    // ADD Theme Function
    const addTheme = (event) => {
        
        if(!event) return;
        event.preventDefault();
        let form = event.target;
        let url = event.target.getAttribute('action');
        if(!url) return;
        let formData = new FormData(form);
        let ObjectFormData = Object.fromEntries(formData.entries());
        loading?.classList.add('py__animate');

        fetch(url, {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ObjectFormData)
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let parseData = JSON.parse(data);
            if(parseData.status !== 200) return errorHandle('.py__addtheme-error-wrap', parseData.message);
            loading?.classList.remove('py__animate');
            return location.href = location.origin;
        })
        .catch(err => console.error(err));
    };

    // Download function
    const download = (event) => {

        if(!event) return;
        event.preventDefault();

        let btn = event.target;
        let url = btn.getAttribute('href');
        let themeId = btn.getAttribute('data-id');
        let userId = btn.getAttribute('data-user-id');
        let data = userId ? {userId: userId, themeId: themeId} : {themeId: themeId};
        
        if(!url || !themeId) return;
        loading?.classList.add('py__animate');
        
        fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.blob())
        .then(data => {
            if(!data) return;
            let objectUrl = window.URL.createObjectURL(data);
            let a = document.createElement('a');
            a.style.display = 'none';
            a.href = objectUrl;
            a.download = themeName + '.zip';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(objectUrl);
            a.remove();
            loading?.classList.remove('py__animate');
        })
        .catch(err => console.log(err));
    };

    // View Iframe Fun
    const viewIframe = async () => {
        let iframes = document.querySelectorAll('iframe.py__view-iframe');
        let url = null;
        
        if(!iframes?.length) return;
        let randomContent = iframes[0].closest('.py__preview-random-content');
        let ids = randomContent?.getAttribute('data-ids');
        if(ids){
            let newId = null;
            let arrayIds = ids?.split(',');
            let signupBtn = document.querySelector('.py__signup-button');
            arrayIds?.forEach((id,i,array) => {
                let index = i + 1;
                if(iframes[0]?.getAttribute('data-theme-id') === id && index !== array.length){
                    newId = array[index];
                    return url = '/view/' + array[index] + location.search;
                } else if(iframes[0]?.getAttribute('data-theme-id') === id && index === array.length){
                    newId = array[0];
                    return url = '/view/' + array[0] + location.search;
                }
            });
            iframes?.forEach((item) => item?.setAttribute('data-theme-id', newId));
            signupBtn?.setAttribute('data-id', newId);
        } else {
            url = iframes[0]?.getAttribute('src');
        }

        let res = await fetch(url, {method:'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json'},  body:JSON.stringify(theme)});
        let data = await res.text();
        if(!data) loading?.classList.remove('py__animate');
        let parser = new DOMParser();
        let html = parser.parseFromString(data, "text/html");
        for(let i=0; i<iframes.length; i++){
            let iframeItem = iframes[i];
            let ifrm = iframeItem.contentDocument || iframeItem.contentWindow.document;
            html ? ifrm.querySelector('body').innerHTML = html.querySelector('body').innerHTML : null;
        }
        loading?.classList.remove('py__animate');
    };

    // Ifeame Previews Function (Mobile, Desktop, Tablet)
    const toggleIframePreview = (event) => {
        if(!event) return;
        let el = event.target;
        let size = el.getAttribute('data-view');
        let iframe = document.querySelector('.py__view-iframe');
        document.querySelector('.py__button-view.active').classList.remove('active');
        el.classList.add('active');
        iframe.style.width = size;
    };

    // Show Item From Global Settings Function (Color, padding, Margin and etc)
    const getItemFromSettings = async (event, another=false) => {
        
        if(!event) return;
        if(!another) event.preventDefault();

        let container = event.target.closest('.py__settings-item');
        let listenerBtn = another ? container.querySelector('.py__get-button') : event.target;
        let url = listenerBtn.getAttribute('href');
        let showTxt = listenerBtn.getAttribute('data-show');
        let hideTxt = listenerBtn.getAttribute('data-hide'); 
        let itemWrapToInner = container.querySelector('.py__get-result-wrapper');
        let getItem = container.querySelector('select');
        let getItemId = getItem && getItem.options[getItem.selectedIndex].innerHTML;
        let getItemIdClass = getItemId.toLowerCase().trim();

        if(getItemIdClass === 'none'|| getItemIdClass === 'unset') return; 

        if(itemWrapToInner.classList.contains('open') && !another){
            itemWrapToInner.classList.remove('open');
            return listenerBtn.textContent = showTxt;
        }

        if(!itemWrapToInner.classList.contains('open') && itemWrapToInner.classList.contains('isAdded') && !another){
            itemWrapToInner.classList.add('open');
            return listenerBtn.textContent = hideTxt;
        }

        if(!url || !getItemId) return;
        let getUrl = url + "&item_id=" + getItemId.trim();

        let res = await fetch(getUrl);
        let data = await res.text();
        if(!data) return;
        let parser = new DOMParser();
        let html = parser.parseFromString(data, "text/html");
        let newSettingsItem = html.querySelector('.py__settings-item');
        itemWrapToInner.innerHTML = newSettingsItem ? newSettingsItem.innerHTML : null;
        if(!another) listenerBtn.textContent = hideTxt;
        if(!another) itemWrapToInner.classList.add('open', 'isAdded');

    };

    // Change View Pages Function
    const changeViewPage = async (event=false, href=false, changeUrl=true) => {
        loading?.classList.add('py__animate');
        let el = event ? event.target : null;
        let brandBtn = document.querySelector('.global-styles');
        let url = event ? brandBtn?.classList?.contains('active') 
        ? el.options[el.selectedIndex].getAttribute('data-href') + '&global=Global%20Styles' 
        : el.options[el.selectedIndex].getAttribute('data-href') : href;
        if(!url) return;
        changeUrl ? window.history.replaceState({ }, '', url) : null;
        let res = await fetch(url);
        let data = await res.text();
        if(!data) return;
        let parser = new DOMParser();
        let html = parser.parseFromString(data, "text/html");
        let oldSettingsWrap = document.querySelector('.py__make-settings');
        let newSettingsWrap = html.querySelector('.py__make-settings');
        let oldIframeWrap = document.querySelectorAll('.py__preview-iframe');
        let newIframeWrap = html.querySelector('.py__preview-iframe');
        oldSettingsWrap && newSettingsWrap ? oldSettingsWrap.innerHTML = newSettingsWrap.innerHTML : null;
        if(oldIframeWrap.length && newIframeWrap){
            oldIframeWrap.forEach(oldItem => {  
                oldItem.innerHTML = newIframeWrap.innerHTML;
            });
        }
        loading?.classList.remove('py__animate');
        return true;
    };

    // Get Global settings or Section settings dynamic function
    const getSettingsLists = async (event) => {
        if(!event) return;
        
        loading?.classList.add('py__animate');
        let el = event.target, url = null;
        if(event.type === 'change'){
            url = el.options[el.selectedIndex].getAttribute('data-href');
        } else {
            event.preventDefault();
            if(el.classList.contains('active') && el.classList.contains('global-styles')){
                let currenturlSearchParam = new URLSearchParams(location.search);
                currenturlSearchParam.delete('global');
                let newUrl = location.origin + location.pathname + '?' + currenturlSearchParam.toString();
                url = newUrl;
            } else {
                url = el.getAttribute('href');
            }
        }

        if(!url) return;
        
        window.history.replaceState({ }, '', url);
        let urlSearch = new URLSearchParams(url);
        let sectionName = urlSearch.get('section');
        let iframe = document.querySelector('.py__view-iframe');
        
        if(sectionName){
            let urlParams = new URL(location.href);
            let iframeSearchParams = new URLSearchParams(urlParams.search);
            iframeSearchParams.set('section', sectionName); 
            let iframeUrl =  urlParams.pathname.indexOf('/users/') !== -1 
            ? '/view' + urlParams.pathname + '?' + iframeSearchParams.toString()
            : urlParams.pathname.replace('themes', 'view') + '?' + iframeSearchParams.toString(); 
            iframe.setAttribute('src', iframeUrl);
        } else {
            let urlParams = new URL(location.href);
            let iframeSearchParams = new URLSearchParams(urlParams.search);
            let iframeUrl = urlParams.pathname.indexOf('/users/') !== -1 
            ? '/view' + urlParams.pathname + '?' + iframeSearchParams.toString()
            : urlParams.pathname.replace('themes', 'view') + '?' + iframeSearchParams.toString();
            iframe.setAttribute('src', iframeUrl);
        }
        

        el.classList.add('active');
        let res = await fetch(url);
        let data = await res.text();
        
        if(!data) return;
        let parser = new DOMParser();
        let html = parser.parseFromString(data, "text/html");
        let oldSettingsWrap = document.querySelector('.py__make-settings');
        let newSettingsWrap = html.querySelector('.py__make-settings');
        let oldSidebar = document.querySelector('.py__settings-select-options');
        let newSidebar = html.querySelector('.py__settings-select-options');
        oldSettingsWrap && newSettingsWrap ? oldSettingsWrap.innerHTML = newSettingsWrap.innerHTML : null;
        oldSidebar && newSidebar ? oldSidebar.innerHTML = newSidebar.innerHTML : null;
        saveSettingsValues();
        loading?.classList.remove('py__animate');
    };


    // RANDOM COLOR FUNCTION
    let defaultSettings = {
        "backgrounds": [
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#102b00",
                "py_bg_color_avarge": "#2d4c17",
                "py_bg_color_middle_light": "#506f38",
                "py_bg_color_light": "#74945a"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#2d006e",
                "py_bg_color_avarge": "#50188e",
                "py_bg_color_middle_light": "#7238b0",
                "py_bg_color_light": "#9457d2"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#341e00",
                "py_bg_color_avarge": "#513a03",
                "py_bg_color_middle_light": "#735822",
                "py_bg_color_light": "#967841"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#003663",
                "py_bg_color_avarge": "#006192",
                "py_bg_color_middle_light": "#008fc4",
                "py_bg_color_light": "#41c0f8"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#122800",
                "py_bg_color_avarge": "#1d4600",
                "py_bg_color_middle_light": "#3b6400",
                "py_bg_color_light": "#5c8413"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#3e008f",
                "py_bg_color_avarge": "#6400b0",
                "py_bg_color_middle_light": "#8800d2",
                "py_bg_color_light": "#ac25f5"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#001583",
                "py_bg_color_avarge": "#0030a7",
                "py_bg_color_middle_light": "#434ecc",
                "py_bg_color_light": "#6e6ef2"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#670000",
                "py_bg_color_avarge": "#930500",
                "py_bg_color_middle_light": "#c23b22",
                "py_bg_color_light": "#f26545"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#510087",
                "py_bg_color_avarge": "#7900ac",
                "py_bg_color_middle_light": "#a200d3",
                "py_bg_color_light": "#cb3dfb"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#004400",
                "py_bg_color_avarge": "#007b00",
                "py_bg_color_middle_light": "#00b600",
                "py_bg_color_light": "#36f34d"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#002f50",
                "py_bg_color_avarge": "#005477",
                "py_bg_color_middle_light": "#037ba1",
                "py_bg_color_light": "#4ca5cd"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#000085",
                "py_bg_color_avarge": "#000095",
                "py_bg_color_middle_light": "#0000a5",
                "py_bg_color_light": "#1b11b6"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#521700",
                "py_bg_color_avarge": "#7d3d00",
                "py_bg_color_middle_light": "#ae6502",
                "py_bg_color_light": "#e19037"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#00343b",
                "py_bg_color_avarge": "#005c61",
                "py_bg_color_middle_light": "#00868b",
                "py_bg_color_light": "#1fb2b7"
            },
            {
                "py_bg_color_dark": "#000000",
                "py_bg_color_middle_dark": "#5d0000",
                "py_bg_color_avarge": "#851900",
                "py_bg_color_middle_light": "#b1411e",
                "py_bg_color_light": "#dd6640"
            }
        ],
        "colors": [
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            },
            {
                "py_color_dark": "#ffffff",
                "py_color_avarge": "#ffffff",
                "py_color_light": "#ffffff"
            }
        ],
        "fonts": [
            {
                "heading_font_custom": "Patua One",
                "title_font_custom": "Londrina Solid",
                "sub_title_font_custom": "Kranky",
                "body_font_custom": "Gorditas",
                "button_font_custom": "Revalia",
                "nav_font_custom": "Petrona",
                "field_font_custom": "Englebert",
                "header_position": "fixed",
                "logo_position": "middle-left-center-nav",
                "search_style": "search_page",
                "title_fontstyle": "normal",
                "info_fontstyle": "italic",
                "block_img_col_position": "last",
                "image_position": "left",
                "block_card_style": "vertical",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Prosto One",
                "title_font_custom": "Armata",
                "sub_title_font_custom": "Rozha One",
                "body_font_custom": "Lakki Reddy",
                "button_font_custom": "Playfair Display SC",
                "nav_font_custom": "Amarante",
                "field_font_custom": "Oxygen Mono",
                "header_position": "static",
                "logo_position": "middle-left",
                "search_style": "sidebar",
                "title_fontstyle": "italic",
                "info_fontstyle": "italic",
                "block_img_col_position": "first",
                "image_position": "left",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "normal",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Palanquin Dark",
                "title_font_custom": "Ramaraja",
                "sub_title_font_custom": "Questrial",
                "body_font_custom": "Fredoka One",
                "button_font_custom": "Mountains of Christmas",
                "nav_font_custom": "Fresca",
                "field_font_custom": "Judson",
                "header_position": "static",
                "logo_position": "middle-center",
                "search_style": "full_screen",
                "title_fontstyle": "italic",
                "info_fontstyle": "normal",
                "block_img_col_position": "first",
                "image_position": "right",
                "block_card_style": "vertical",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Asap",
                "title_font_custom": "Devonshire",
                "sub_title_font_custom": "Antic",
                "body_font_custom": "Rubik One",
                "button_font_custom": "Seymour One",
                "nav_font_custom": "IM Fell DW Pica SC",
                "field_font_custom": "Rammetto One",
                "header_position": "fixed",
                "logo_position": "top-left",
                "search_style": "search_page",
                "title_fontstyle": "normal",
                "info_fontstyle": "normal",
                "block_img_col_position": "last",
                "image_position": "left",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "normal",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Exo",
                "title_font_custom": "Kranky",
                "sub_title_font_custom": "Tenali Ramakrishna",
                "body_font_custom": "Expletus Sans",
                "button_font_custom": "Patrick Hand",
                "nav_font_custom": "Grand Hotel",
                "field_font_custom": "Simonetta",
                "header_position": "fixed",
                "logo_position": "middle-center",
                "search_style": "full_screen",
                "title_fontstyle": "italic",
                "info_fontstyle": "italic",
                "block_img_col_position": "last",
                "image_position": "right",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Modern Antiqua",
                "title_font_custom": "Waiting for the Sunrise",
                "sub_title_font_custom": "Quicksand",
                "body_font_custom": "Actor",
                "button_font_custom": "Passion One",
                "nav_font_custom": "Moulpali",
                "field_font_custom": "Glass Antiqua",
                "header_position": "fixed",
                "logo_position": "middle-left-center-nav",
                "search_style": "sidebar",
                "title_fontstyle": "italic",
                "info_fontstyle": "italic",
                "block_img_col_position": "last",
                "image_position": "right",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "normal"
            },
            {
                "heading_font_custom": "Londrina Solid",
                "title_font_custom": "Hanalei Fill",
                "sub_title_font_custom": "IM Fell Great Primer SC",
                "body_font_custom": "Vesper Libre",
                "button_font_custom": "Maven Pro",
                "nav_font_custom": "Metal",
                "field_font_custom": "Nova Cut",
                "header_position": "static",
                "logo_position": "middle-left-center-nav",
                "search_style": "sidebar",
                "title_fontstyle": "normal",
                "info_fontstyle": "italic",
                "block_img_col_position": "first",
                "image_position": "left",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Dorsa",
                "title_font_custom": "Lovers Quarrel",
                "sub_title_font_custom": "Sue Ellen Francisco",
                "body_font_custom": "Noto Sans",
                "button_font_custom": "Open Sans Condensed",
                "nav_font_custom": "Fondamento",
                "field_font_custom": "League Script",
                "header_position": "static",
                "logo_position": "middle-left",
                "search_style": "full_screen",
                "title_fontstyle": "normal",
                "info_fontstyle": "normal",
                "block_img_col_position": "first",
                "image_position": "left",
                "block_card_style": "vertical",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "normal"
            },
            {
                "heading_font_custom": "IM Fell DW Pica SC",
                "title_font_custom": "Mountains of Christmas",
                "sub_title_font_custom": "Bitter",
                "body_font_custom": "Antic",
                "button_font_custom": "Pacifico",
                "nav_font_custom": "Purple Purse",
                "field_font_custom": "Meddon",
                "header_position": "static",
                "logo_position": "middle-left",
                "search_style": "full_screen",
                "title_fontstyle": "italic",
                "info_fontstyle": "italic",
                "block_img_col_position": "last",
                "image_position": "right",
                "block_card_style": "vertical",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "normal"
            },
            {
                "heading_font_custom": "Luckiest Guy",
                "title_font_custom": "Rum Raisin",
                "sub_title_font_custom": "Unlock",
                "body_font_custom": "Dhurjati",
                "button_font_custom": "Monoton",
                "nav_font_custom": "Petrona",
                "field_font_custom": "Dhurjati",
                "header_position": "static",
                "logo_position": "top-left",
                "search_style": "full_screen",
                "title_fontstyle": "italic",
                "info_fontstyle": "italic",
                "block_img_col_position": "first",
                "image_position": "right",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "normal"
            },
            {
                "heading_font_custom": "Courgette",
                "title_font_custom": "Diplomata",
                "sub_title_font_custom": "Federo",
                "body_font_custom": "Quicksand",
                "button_font_custom": "Butterfly Kids",
                "nav_font_custom": "Ledger",
                "field_font_custom": "Gentium Basic",
                "header_position": "fixed",
                "logo_position": "middle-left",
                "search_style": "sidebar",
                "title_fontstyle": "normal",
                "info_fontstyle": "normal",
                "block_img_col_position": "last",
                "image_position": "left",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "italic",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Pompiere",
                "title_font_custom": "Nova Round",
                "sub_title_font_custom": "Parisienne",
                "body_font_custom": "Passero One",
                "button_font_custom": "Prociono",
                "nav_font_custom": "Keania One",
                "field_font_custom": "Angkor",
                "header_position": "static",
                "logo_position": "top-left",
                "search_style": "full_screen",
                "title_fontstyle": "normal",
                "info_fontstyle": "italic",
                "block_img_col_position": "first",
                "image_position": "left",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "normal",
                "block_info_fontstyle": "italic"
            },
            {
                "heading_font_custom": "Fascinate",
                "title_font_custom": "Fjord One",
                "sub_title_font_custom": "Michroma",
                "body_font_custom": "Gilda Display",
                "button_font_custom": "Ruda",
                "nav_font_custom": "Miss Fajardose",
                "field_font_custom": "Exo 2",
                "header_position": "static",
                "logo_position": "middle-left-center-nav",
                "search_style": "sidebar",
                "title_fontstyle": "normal",
                "info_fontstyle": "italic",
                "block_img_col_position": "first",
                "image_position": "left",
                "block_card_style": "vertical",
                "block_title_fontstyle": "normal",
                "block_info_fontstyle": "normal"
            },
            {
                "heading_font_custom": "Homemade Apple",
                "title_font_custom": "Marvel",
                "sub_title_font_custom": "Give You Glory",
                "body_font_custom": "Skranji",
                "button_font_custom": "Allerta",
                "nav_font_custom": "Erica One",
                "field_font_custom": "Lekton",
                "header_position": "static",
                "logo_position": "middle-left-center-nav",
                "search_style": "sidebar",
                "title_fontstyle": "normal",
                "info_fontstyle": "normal",
                "block_img_col_position": "first",
                "image_position": "right",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "normal",
                "block_info_fontstyle": "normal"
            },
            {
                "heading_font_custom": "Angkor",
                "title_font_custom": "Kalam",
                "sub_title_font_custom": "Uncial Antiqua",
                "body_font_custom": "Nothing You Could Do",
                "button_font_custom": "Patrick Hand",
                "nav_font_custom": "Crete Round",
                "field_font_custom": "Euphoria Script",
                "header_position": "fixed",
                "logo_position": "middle-left-center-nav",
                "search_style": "search_page",
                "title_fontstyle": "italic",
                "info_fontstyle": "italic",
                "block_img_col_position": "last",
                "image_position": "left",
                "block_card_style": "horizontal",
                "block_title_fontstyle": "normal",
                "block_info_fontstyle": "italic"
            }
        ]
    };

    // let remixColorCount = 0;
    let oldColorOne = "#000000";
    const generateRandomColor = () => {
        let color1 = chroma.random().hex();
        if(chroma.deltaE(color1, oldColorOne) < 40){
            color1 = chroma.random().hex();
            if(chroma.deltaE(color1, oldColorOne) < 40){
                color1 = chroma.random().hex();
            }
        }
        oldColorOne = color1;
        let color2 = '#000000';
        let colorsList = chroma.scale([color2, color1]).mode('lch').colors(5);
        return colorsList;
    };

    let remixCount = 1;
    let defaultSettingsCount = 0;
    const randomFun = (event) => {

       if(!event) return;
       event.preventDefault();
       loading?.classList.add('py__animate');

       let inputFileds = document.querySelectorAll('[name]');
       let index = 0;
       let colorsList = null;
       let textColorsList = null;
       let fontsList = null;
       if(!inputFileds.length) return;

       inputFileds.forEach(filed => {
           let filedType = filed.getAttribute('type');
           let filedName = filed.getAttribute('name');
           if(filedType === "color"){
            if(filedName.includes('_bg')){
                if(index === 0){
                    if(defaultSettingsCount >= 15) defaultSettingsCount = 0; 
                    if(remixCount > 15) remixCount = 0;
                    if((remixCount > 5 && remixCount <= 10) || (remixCount > 15 && remixCount <= 20) || (remixCount > 25 && remixCount <= 30)){
                        colorsList = generateRandomColor();
                    } else {
                        colorsList = defaultSettings.backgrounds[defaultSettingsCount];
                        textColorsList = defaultSettings.colors[defaultSettingsCount];
                        fontsList = defaultSettings.fonts[defaultSettingsCount];
                        defaultSettingsCount++;
                    }
                }
                let color = ((remixCount > 5 && remixCount <= 10) || (remixCount > 15 && remixCount <= 20) || (remixCount > 25 && remixCount <= 30)) ? colorsList[index] : colorsList[filedName];
                let closestWrap = filed.closest('.component-is-color');
                let isColorLabel = closestWrap.querySelector('.py__label-for-color');
                isColorLabel.style.backgroundColor = color;
                filed.value = color;
                index++;

                let textInputFiled = document.querySelector(`[name="${filedName.replace('_bg', '')}"]`);
                if(!textInputFiled) return;
                let textColor = ((remixCount > 5 && remixCount <= 10) || (remixCount > 15 && remixCount <= 20) || (remixCount > 25 && remixCount <= 30)) ? getContrastYIQ(color) : textColorsList[filedName.replace('_bg', '')];
                let textClosestWrap = textInputFiled.closest('.component-is-color');
                let textIsColorLabel = textClosestWrap.querySelector('.py__label-for-color');
                textIsColorLabel.style.backgroundColor = textColor;
                textInputFiled.value = textColor;
            }

           } else if(filedType === "select"){
                let options = filed.getElementsByTagName('option');
                if((remixCount > 5 && remixCount <= 10) || (remixCount > 15 && remixCount <= 20) || (remixCount > 25 && remixCount <= 30)){
                    let optionIndex = Math.floor(Math.random() * options.length);
                    filed.selectedIndex = optionIndex;
                } else {
                    for (let i= 0; i<options.length; i++) {
                        if (options[i].value === fontsList[filedName]) {
                            options[i].selected= true;
                            break;
                        }
                    } 
                }
           }
       });

        remixCount++;
        saveSettingsValues();
        viewIframe();

    };  

    //---------------------------------------
    // COMPONENTS FUN
    //---------------------------------------
    // Color Component Function
    const colorComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        let wrapper = event.target.closest('.component-is-color');
        let isColor = wrapper?.querySelector('.is__color');
        let forColor = wrapper?.querySelector('.py__label-for-color');
        if(isColor) isColor.value = value;
        if(forColor) forColor.style.backgroundColor = value;
        saveSettingsValues();

        if(uniqName.includes('bg')){
            let textUniqName = uniqName.replace('bg_', '');
            let findInColorsJson = colorsNamesContrast[uniqName];
            let textColorInput = findInColorsJson ? document.querySelector(`[name="${findInColorsJson}"]`) : document.querySelector(`[name="${textUniqName}"]`);
            if(textColorInput){ 
                let newColor = getContrastYIQ(value);
                let childWrapper = textColorInput.closest('.component-is-color');
                let childIsColor = childWrapper?.querySelector('.is__color');
                let childForColor = childWrapper?.querySelector('.py__label-for-color');
                if(childIsColor) childIsColor.value = newColor;
                if(childForColor) childForColor.style.backgroundColor = newColor;
                textColorInput.value = newColor;
            }
        }
        saveButton?.setAttribute('aria-disabled', false);
        viewIframe();
    };
    // Text Component Function
    const textComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        saveSettingsValues();
        (value !== focuseValue) ? viewIframe() : null;
        if(uniqName === 'settings_theme_name' && value !== focuseValue) themeName = value;
        saveButton?.setAttribute('aria-disabled', false);
    };
    // Textarea Component Function
    const textareaComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        saveSettingsValues();
        value !== focuseValue ? viewIframe() : null;
        saveButton?.setAttribute('aria-disabled', false);
    };
    // Richtext Component Function
    const richtextComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        saveSettingsValues();
        value !== focuseValue ? viewIframe() : null;
        saveButton?.setAttribute('aria-disabled', false);
    };
    // Select Component Function
    const selectComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        let container = event.target.closest('.py__settings-item');
        let isHaveGlobal = container?.querySelector('.py__get-result-wrapper');
        saveSettingsValues();
        if(uniqName.includes('bg')){
            let textUniqName = uniqName.replace('bg_', '');
            let findInColorsJson = colorsNamesContrast[textUniqName];
            let textColorInput = findInColorsJson ? document.querySelector(`[name="${findInColorsJson}"]`) : document.querySelector(`[name="${textUniqName}"]`);
            if(textColorInput){ 
                let newVal = value.includes('dark') ? 'light' : 'dark';
                textColorInput.selectedIndex = [...textColorInput.options].findIndex(option => option.value.includes(newVal));
            }
        }

        viewIframe();
        if(isHaveGlobal) getItemFromSettings(event, true);
        saveButton?.setAttribute('aria-disabled', false);
    };
    // Checkbox Component Function
    const checkboxComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let content = event.target.closest('.py__comp-checkbox');
        let hiddenFiled = content.querySelector('input[type="hidden"]');
        hiddenFiled.value = event.target.checked ? true : false;
        let value = hiddenFiled.value;
        saveSettingsValues();
        viewIframe();
        saveButton?.setAttribute('aria-disabled', false);
    }
    // Range Component Function
    const rangeComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        saveSettingsValues();
        viewIframe();
        saveButton?.setAttribute('aria-disabled', false);
    }

    //---------------------------------------
    // EVENTS LISTENERS
    //---------------------------------------
    // Input fileds change fun (color, select and etc)
    document.addEventListener('change', (e)=>{
        if(e && e.target.getAttribute('name')){
            let type = e.target.getAttribute('type');
            switch(type){
                case 'color':
                    colorComp(e);
                    break;
                case 'select':
                    selectComp(e);
                    break;
                case 'range':
                    rangeComp(e);
                    break;
                default:
                    break;
            }
        }
        if(e && e.target.classList.contains('is__checkbox')) return checkboxComp(e);
        if(e && e.target.classList.contains('py__preview-pages-select')) return changeViewPage(e);
        if(e && e.target.classList.contains('py__sections-dropdown-listener')) return getSettingsLists(e);
    });

    // Input fileds Focus fun (text, textarea and etc)
    document.addEventListener('focus', (e)=>{
        if(e && e.target.getAttribute('name')){
            let type = e.target.getAttribute('type');
            switch(type){
                case 'text':                   
                    focuseValue = e.target.value;
                    break;
                case 'textarea':
                    focuseValue = e.target.value;
                    break;
                case 'richtext':
                    focuseValue = e.target.value;
                    break;
                default:
                    break;
            }
        }
    }, true);

    // Input fileds Blur fun (text, textarea and etc)
    document.addEventListener('blur', (e)=>{
        if(e && e.target.getAttribute('name')){
            let type = e.target.getAttribute('type');
            switch(type){
                case 'text':
                    textComp(e);
                    break;
                case 'textarea':
                    textareaComp(e);
                    break;
                case 'richtext':
                    richtextComp(e);
                    break;
                default:
                    break;
            }
        }
    }, true);


    // Form Submit fun
    document.addEventListener('submit', (e)=>{
        if(e && e.target.classList.contains('py__signup-form')) return signup(e);
        if(e && e.target.classList.contains('py__login-form')) return login(e);
        if(e && e.target.classList.contains('py__addtheme-form')) return addTheme(e);
    });
    

    // Sidebar Select Settings Open Close Fun
    document.addEventListener('click', (e)=>{
        if(e && e.target.classList.contains('py__settings-item-name')){
            e.target.closest('.py__settings-item-wrapper').classList.contains('active') 
            ? e.target.closest('.py__settings-item-wrapper').classList.remove('active')
            : e.target.closest('.py__settings-item-wrapper').classList.add('active');
        }
        if(e && e.target.classList.contains('py__signup-button')) return getRegister(e);
        if(e && e.target.classList.contains('py__login-button')) return getLogin(e);
        if(e && e.target.classList.contains('py__button-add-theme')) return getAddTheme(e);
        if(e && e.target.classList.contains('py__signup')) return e.target.remove();
        if(e && e.target.classList.contains('py__login')) return e.target.remove();
        if(e && e.target.classList.contains('py__addtheme')) return e.target.remove();
        if(e && e.target.classList.contains('py__get-button')) return getItemFromSettings(e);
        if(e && e.target.classList.contains('py__button-view')) return toggleIframePreview(e);
        if(e && e.target.classList.contains('py__get-section-button')) return getSettingsLists(e);
        if(e && e.target.classList.contains('py__save-button')) return save(e);
        if(e && e.target.classList.contains('py__save-figma-button')) return saveFigma(e);
        if(e && e.target.classList.contains('py__download-button')) return download(e);
        if(e && e.target.classList.contains('py__button-random')) return randomFun(e);
    });

    // Before Unload
    window.addEventListener("beforeunload", function (e) {
        if (!saveButton || saveButton?.getAttribute('aria-disabled') === "true") return undefined;
        let confirmationMessage = 'If you leave before saving, your changes will be lost.';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    });

    // When Page Content is Loaded
    document.addEventListener('DOMContentLoaded', ()=> {
        saveSettingsValues();
        loading = document.querySelector('.py__loading-wrap');
        saveButton = document.querySelector('.py__save-button');
        downloadButton = document.querySelector('.py__download-button');
        themeName = document.querySelector('[name="settings_theme_name"]')?.value || "ThemeMake";
    });

})();