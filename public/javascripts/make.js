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
        return (yiq >= 128) ? '#000000' : '#ffffff';
    };

    // Save old settings values
    const saveSettingsValues = (id=false) => {

        let data = document.querySelector('.py__settings-section-item');
        let blockSettings = document.querySelectorAll('.py__settings-block-item');
        let sectionName = data?.getAttribute('data-section-name');
        let templateName = data?.getAttribute('data-template-name');

        let section = {name: null, template_name: null, settings: {}, blocks: []};
        section.template_name = templateName;

        if(!sectionName){
            data?.querySelectorAll('[name]').forEach(element => {
                theme.settings[element.getAttribute('name').replace('settings_', '')] =  (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false : element.value;
            });
        }

        if(theme?.sections?.length){
            let checking = theme?.sections?.filter(sectionItem => sectionItem.name === sectionName);
            if(checking.length){
                theme?.sections?.forEach(sectionItem => {
                    if(sectionItem.name === sectionName){
                        data?.querySelectorAll('[name]').forEach(element => {
                            sectionItem.settings[element.getAttribute('name')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false : element.value;
                        });
                    }
                    if(blockSettings?.length){
                        blockSettings.forEach(block=>{
                            sectionItem?.blocks.forEach(localBlock => {
                                if(localBlock.type === block.getAttribute('data-type')){
                                    block.querySelectorAll('[name]').forEach(element => {
                                        localBlock.settings[element.getAttribute('name').replace('block_', '')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false : element.value;
                                    });
                                }
                            })
                        });
                    }
                });
            } else {
                section.name = sectionName;
                data?.querySelectorAll('[name]').forEach(element => {
                    section.settings[element.getAttribute('name')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false : element.value;
                });
                if(blockSettings?.length){
                    blockSettings.forEach(block=>{
                        let blockItem = {type: block.getAttribute('data-type'),settings: {}};
                        block?.querySelectorAll('[name]')?.forEach(element => {
                            blockItem.settings[element.getAttribute('name').replace('block_', '')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false : element.value;
                        });
                        section.blocks.push(blockItem);
                    });
                };
            }
        } else {
            section.name = sectionName;
            data?.querySelectorAll('[name]').forEach(element => {
                section.settings[element.getAttribute('name')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false : element.value;
            });
            if(blockSettings?.length){
                blockSettings.forEach(block=>{
                    let blockItem = {type: block.getAttribute('data-type'),settings: {}};
                    block?.querySelectorAll('[name]')?.forEach(element => {
                        blockItem.settings[element.getAttribute('name').replace('block_', '')] = (element.value === "true" || element.value === "false") ? (element.value === "true") ? true : false : element.value;
                    });
                    section.blocks.push(blockItem);
                });
            };
        }

        if(section.name){
            theme.sections.push(section);
        }
        console.log(theme, "---THEME SETTINGS");
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
    const save = () => {

        let form = document.querySelector('form.py__settings-form');
        let url = form.getAttribute('action');
        
        if(!form || !url) return;

        loading?.classList.add('py__animate');
        // let settings = {}, section = [], sectionName = '', templateName = '', sectionSettings = {};
        // let blocks = []; 
        // let blockItems = {
        //     type: "",
        //     settings: {}
        // }; 

        // let formData = new FormData(form);
        // formData.forEach((value, key) => {
        //     let newValue = value === "true" || value === "false" 
        //     ? value === "true" 
        //     ? true : false : /^\d+$/.test(value) 
        //     ? parseInt(value) : value;
        //     if(key === 'logo') return;
        //     if(key.includes('settings_')){ 
        //         settings[key.replace('settings_', '')] = newValue;
        //     } else if(key.includes('block_')){
        //         if(key.includes('block_type_')){
        //             blockItems.type = newValue;
        //             blocks.push(blockItems);
        //             blockItems = {type:"",settings: {}};
        //         } else {
        //             blockItems.settings[key.replace('block_', '')] = newValue
        //         }
        //     } else { 
        //         if(key === 'section_name'){ 
        //             sectionName = newValue;
        //         } else if(key === 'template_name'){
        //             templateName = newValue;
        //         } else { 
        //             sectionSettings[key] = newValue;
        //         }
        //     }
        // });
        
        // if(sectionName && Object.keys(sectionSettings).length){
        //     section.push({ name: sectionName, template: templateName, settings: sectionSettings});
        // }

        // let data = {
        //     settings: Object.keys(settings).length ? [settings] : null,
        //     section: section.length ? section : null,
        //     blocks: blocks?.length ? blocks : null,
        // };

        fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(theme)
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let dataParse = JSON.parse(data);
            if(dataParse?.status === 200){
                saveButton?.setAttribute('aria-disabled', 'true');
                downloadButton?.setAttribute('aria-disabled', 'false');
                saveSettingsValues();
            } 
            loading?.classList.remove('py__animate');
        })
        .catch(err => console.error(err));
    };

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
    const viewIframe = () => {
        // let form = document.querySelector('form.py__settings-form');
        let iframe = document.querySelector('iframe.py__view-iframe');
        
        // if(!iframe || !form) return;
        let url = iframe?.getAttribute('src');
        // let settings = {}; 
        // let section = []; 
        // let sectionName = document.querySelector('.py__settings-section-item').getAttribute('data-section-name');
        // let sectionSettings = {}; 
        // let blocks = []; 
        // let blockItems = {
        //     type: "",
        //     settings: {}
        // }; 

        // let formData = new FormData(form);
        // formData.forEach((value, key) => {
        //     let newValue = value === "true" || value === "false" 
        //     ? value === "true" ? true : false : value;
        //     if(key === 'logo') return;
        //     if(key.includes('settings_')){ 
        //         settings[key.replace('settings_', '')] = newValue;
        //     } else if(key.includes('block_')){
        //         if(key.includes('block_type_')){
        //             blockItems.type = newValue;
        //             blocks.push(blockItems);
        //             blockItems = {type:"",settings: {}};
        //         } else {
        //             blockItems.settings[key.replace('block_', '')] = newValue
        //         }
        //     } else { 
        //         sectionSettings[key] = newValue;
        //     }
        // });
        

        // if(sectionName && Object.keys(sectionSettings).length){
        //     section.push({ name: sectionName, settings: sectionSettings});
        // }

        // let data = {
        //     settings: Object.keys(settings).length ? [settings] : null,
        //     section: section.length ? section : null,
        //     blocks: blocks?.length ? blocks: null,
        // };

        fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(theme)
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            // let parser = new DOMParser();
            // let html = parser.parseFromString(data, "text/html");
            // let iframeContent = iframe.contentDocument || iframe.contentWindow.document;
            // iframeContent && html ? iframeContent.querySelector('html').innerHTML = html.querySelector('html').innerHTML : null;
            let myIframes = document.querySelectorAll('iframe.py__view-iframe');
            myIframes.forEach(iframeItem =>{
                let ifrm = iframeItem.contentWindow || iframeItem.contentDocument.document || iframeItem.contentDocument;
                ifrm.document.open();
                ifrm.document.write(data);
                ifrm.document.close();
            })
        })
        .catch(err => console.error(err));
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
    const getItemFromSettings = (event, another=false) => {
        
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

        fetch(getUrl)
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let parser = new DOMParser();
            let html = parser.parseFromString(data, "text/html");
            let newSettingsItem = html.querySelector('.py__settings-item');
            itemWrapToInner.innerHTML = newSettingsItem ? newSettingsItem.innerHTML : null;
            if(!another) listenerBtn.textContent = hideTxt;
            if(!another) itemWrapToInner.classList.add('open', 'isAdded');
        })
        .catch(err => console.log(err));

    };

    // Change View Pages Function
    const changeViewPage = (event) => {
        if(!event) return;
        let el = event.target;
        let url = el.options[el.selectedIndex].getAttribute('data-href');
        if(!url) return;
        window.history.replaceState({ }, '', url);
        // document.querySelectorAll('.py__loading-wrap').forEach(item => item.classList.add('py__animate'));
        fetch(url)
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let parser = new DOMParser();
            let html = parser.parseFromString(data, "text/html");
            let oldSettingsWrap = document.querySelector('.py__make-settings');
            let newSettingsWrap = html.querySelector('.py__make-settings');
            let oldIframeWrap = document.querySelectorAll('.py__preview-iframe');
            let newIframeWrap = html.querySelector('.py__preview-iframe');
            // let oldSidebarWrap = document.querySelector('.py__preview-iframe');
            // let newSidebarWrap = html.querySelector('.py__preview-iframe');
            oldSettingsWrap && newSettingsWrap ? oldSettingsWrap.innerHTML = newSettingsWrap.innerHTML : null;
            if(oldIframeWrap.length && newIframeWrap){
                oldIframeWrap.forEach(oldItem => {  
                    oldItem.innerHTML = newIframeWrap.innerHTML;
                });
            }
            // oldSidebarWrap && newSidebarWrap ? oldSidebarWrap.innerHTML = newSidebarWrap.innerHTML : null;
        }).catch(err => console.log(err));
    };

    // Get Global settings or Section settings dynamic function
    const getSettingsLists = (event) => {
        if(!event) return;
        
        let el = event.target, url = null;
        if(event.type === 'change'){
            url = el.options[el.selectedIndex].getAttribute('data-href');
        } else {
            event.preventDefault();
            if(el.classList.contains('active')) return;
            url = el.getAttribute('href');
        }

        if(!url) return;
        let content = document.querySelector('.py__settings-content');
        
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
        
        // if(content) content.querySelector('.py__loading-wrap').classList.add('py__animate');

        el.classList.add('active');
        fetch(url)
        .then(res => res.text())
        .then(data => {
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
        }).catch(err => console.log(err));
    };


    // RANDOM COLOR FUNCTION
    const generateRandomColor = () => {
        // let letters = '0123456789ABCDEF';
        // let color = '#';
        // for (var i = 0; i < 6; i++) {
        //   color += letters[Math.floor(Math.random() * 16)];
        // }
        // return color;
        
        // return "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);

        var color = Math.floor(Math.random() * 255).toString(16);
        if (color.length === 1)
        {
            color.concat('0');
        }
        return '#' + color + color + color;
    };

    const randomFun = (event) => {

       if(!event) return;
       event.preventDefault();

       let inputFileds = document.querySelectorAll('[name]');
       if(!inputFileds.length) return;
       inputFileds.forEach(filed => {
           let filedType = filed.getAttribute('type');
           if(filedType === "color"){
               let color = generateRandomColor();
               let closestWrap = filed.closest('.py__comp-color');
               let isColor = closestWrap.querySelector('.is__color');
               let isColorLabel = closestWrap.querySelector('.py__label-for-color');
               isColorLabel.style.backgroundColor = color;
               isColor.value = color;
               filed.value = color;
           }
       });
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
        let wrapper = event.target.closest('.py__comp-color');
        let isColor = wrapper.querySelector('.is__color');
        let forColor = wrapper.querySelector('.py__label-for-color');
        isColor.value = value;
        forColor.style.backgroundColor = value;
        saveSettingsValues();

        if(uniqName.includes('bg')){
            let textUniqName = uniqName.replace('bg_', '');
            let findInColorsJson = colorsNamesContrast[uniqName];
            let textColorInput = findInColorsJson ? document.querySelector(`[name="${findInColorsJson}"]`) : document.querySelector(`[name="${textUniqName}"]`);
            if(textColorInput){ 
                let newColor = getContrastYIQ(value);
                let childWrapper = textColorInput.closest('.py__comp-color');
                let childIsColor = childWrapper.querySelector('.is__color');
                let childForColor = childWrapper.querySelector('.py__label-for-color');
                childIsColor.value = newColor;
                childForColor.style.backgroundColor = newColor;
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
        let isHaveGlobal = container.querySelector('.py__get-result-wrapper');
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