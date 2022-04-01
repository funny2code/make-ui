(function(){

    // GLOBAL VARIABLES
    var focuseValue = "";
    var settingsValues = {}, settingsValuesBool = {}, previewSettingsValues = {};
    var saveButton = document.querySelector('.py__save-button'); 
    var downloadButton = document.querySelector('.py__download-button');

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
        let settingsWrapper = document.querySelector('.py__make-settings');
        settingsWrapper.querySelectorAll('[name]').forEach(element => {
            settingsValues[element.getAttribute('name')] = element.value;
            settingsValuesBool[element.getAttribute('name')] = id && element.getAttribute('name') === id ? true : false;
            previewSettingsValues[element.getAttribute('name')] = element.value;
        });
    };

    // Check settings values 
    const checkSettings = (id, value) => {
        if(settingsValues[id] === value){
            let isDisabled = true; 
            settingsValuesBool[id] = false;
            Object.entries(settingsValuesBool).forEach(([key, val]) => {
                if(val) return isDisabled = false; 
            });
            if(isDisabled){
                saveButton && saveButton.setAttribute('aria-disabled', 'true');
                downloadButton && downloadButton.setAttribute('aria-disabled', 'false');
            }
        } else {
            saveButton && saveButton.setAttribute('aria-disabled', 'false');
            downloadButton && downloadButton.setAttribute('aria-disabled', 'true');
            settingsValuesBool[id] = true;
        }       
    };

    // Save Function
    const save = () => {
        let form = document.querySelector('form.py__settings-form');
        let url = form.getAttribute('action');
        
        if(!form || !url) return;
        
        let fullLoading = document.querySelector('.py__full-loading-wrapper');
        fullLoading.classList.add('py__animate');
        let settings = {}, section = [], sectionName = '', templateName = '', sectionSettings = {};
        let blocks = []; 
        let blockItems = {
            type: "",
            settings: {}
        }; 

        let formData = new FormData(form);
        formData.forEach((value, key) => {
            let newValue = value === "true" || value === "false" 
            ? value === "true" 
            ? true : false : /^\d+$/.test(value) 
            ? parseInt(value) : value;
            if(key === 'logo') return;
            if(key.includes('settings_')){ 
                settings[key.replace('settings_', '')] = newValue;
            } else if(key.includes('block_')){
                if(key.includes('block_type_')){
                    blockItems.type = newValue;
                    blocks.push(blockItems);
                    blockItems = {type:"",settings: {}};
                } else {
                    blockItems.settings[key.replace('block_', '')] = newValue
                }
            } else { 
                if(key === 'section_name'){ 
                    sectionName = newValue;
                } else if(key === 'template_name'){
                    templateName = newValue;
                } else { 
                    sectionSettings[key] = newValue;
                }
            }
        });
        
        if(sectionName && Object.keys(sectionSettings).length){
            section.push({ name: sectionName, template: templateName, settings: sectionSettings});
        }

        let data = {
            settings: Object.keys(settings).length ? [settings] : null,
            section: section.length ? section : null,
            blocks: blocks?.length ? blocks : null,
        };

        fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(data)
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            if(data === "success"){
                saveButton.setAttribute('aria-disabled', 'true');
                downloadButton.setAttribute('aria-disabled', 'false');
                saveSettingsValues();
            } 
            fullLoading.classList.remove('py__animate');
        })
        .catch(err => console.error(err));
    };

    // Get Register Popup Function
    const getRegister = (event) => {
        
        if(!event) return;
        event.preventDefault();

        let fullLoading = document.querySelector('.py__full-loading-wrapper');
        fullLoading.classList.add('py__animate');
    

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
        })
        .catch(err => console.error(err))
        .finally(fullLoading.classList.remove('py__animate'));
    };

    // Get Login Popup Function
    const getLogin = (event) => {
        
        if(!event) return;
        event.preventDefault();

        let fullLoading = document.querySelector('.py__full-loading-wrapper');
        fullLoading.classList.add('py__animate');
    

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
        })
        .catch(err => console.error(err))
        .finally(fullLoading.classList.remove('py__animate'));
    };

    // SignUp Function
    const signup = (event) => {
        
        if(!event) return;
        event.preventDefault();
        let form = event.target;
        let url = event.target.getAttribute('action');
        if(!url) return;
        let formData = new FormData(form);
        let ObjectFormData = Object.fromEntries(formData.entries());
        let fullLoading = form.closest('.py__signup-wrapper').querySelector('.py__loading-wrap');
        fullLoading.classList.add('py__animate');
        console.log(fullLoading);

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
            if(parseData.status === "active"){
                return location.href = location.origin;
            } else if(parseData.status === "requires_confirmation"){
                let stripe = Stripe('pk_test_hnMkmoqkvZxUjOrnEkPIVd80');
                stripe.confirmCardPayment(parseData.client_secret)
                .then(function(result) {
                    if(result?.error) return
                    if(result?.paymentIntent) return location.href = location.origin;
                });
            } else {
                let errorWrap = document.querySelector('.py__signup-error-wrap');
                errorWrap.textContent = parseData.message;
                errorWrap.classList.add('active'); 
            }
            fullLoading.classList.remove('py__animate');
        })
        .catch(err => console.error(err));
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
        let fullLoading = form.closest('.py__login-wrapper').querySelector('.py__loading-wrap');
        fullLoading.classList.add('py__animate');

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
            if(parseData.status === 200){
                return location.href = location.origin;
            } else {
                let errorWrap = document.querySelector('.py__login-error-wrap');
                errorWrap.textContent = parseData.message;
                errorWrap.classList.add('active'); 
            }
            fullLoading.classList.remove('py__animate');
        })
        .catch(err => console.error(err));
    };

    // Download function
    const download = (event) => {

        if(!event) return;
        event.preventDefault();

        let btn = event.target;
        let url = btn.getAttribute('href');
        let id = btn.getAttribute('data-id');
        let themeName = btn.getAttribute('data-name');
        if(!url || !id) return;
        
        let fullLoading = document.querySelector('.py__full-loading-wrapper');
        fullLoading.classList.add('py__animate');

        fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id:id})
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
            fullLoading.classList.remove('py__animate');
        })
        .catch(err => console.log(err));
    };

    // View Iframe Fun
    const viewIframe = () => {
        let form = document.querySelector('form.py__settings-form');
        let iframe = document.querySelector('iframe.py__view-iframe');
        if(!iframe || !form) return;
        let url = iframe.getAttribute('src');
        let settings = {}; 
        let section = []; 
        let sectionName = '';
        let sectionSettings = {}; 
        let blocks = []; 
        let blockItems = {
            type: "",
            settings: {}
        }; 

        let formData = new FormData(form);
        formData.forEach((value, key) => {
            let newValue = value === "true" || value === "false" 
            ? value === "true" ? true : false : value;
            if(key === 'logo') return;
            if(key.includes('settings_')){ 
                settings[key.replace('settings_', '')] = newValue;
            } else if(key.includes('block_')){
                if(key.includes('block_type_')){
                    blockItems.type = newValue;
                    blocks.push(blockItems);
                    blockItems = {type:"",settings: {}};
                } else {
                    blockItems.settings[key.replace('block_', '')] = newValue
                }
            } else { 
                key === 'section_name' 
                ? sectionName = newValue
                : sectionSettings[key] = newValue;
            }
        });
        

        if(sectionName && Object.keys(sectionSettings).length){
            section.push({ name: sectionName, settings: sectionSettings});
        }

        let data = {
            settings: Object.keys(settings).length ? [settings] : null,
            section: section.length ? section : null,
            blocks: blocks?.length ? blocks: null,
        };

        fetch(url, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(data)
        })
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let parser = new DOMParser();
            let html = parser.parseFromString(data, "text/html");
            let iframeContent = iframe.contentDocument || iframe.contentWindow.document;
            iframeContent && html ? iframeContent.querySelector('html').innerHTML = html.querySelector('html').innerHTML : null;
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
        document.querySelectorAll('.py__loading-wrap').forEach(item => item.classList.add('py__animate'));
        fetch(url)
        .then(res => res.text())
        .then(data => {
            if(!data) return;
            let parser = new DOMParser();
            let html = parser.parseFromString(data, "text/html");
            let oldSettingsWrap = document.querySelector('.py__make-settings');
            let newSettingsWrap = html.querySelector('.py__make-settings');
            let oldIframeWrap = document.querySelector('.py__preview-iframe');
            let newIframeWrap = html.querySelector('.py__preview-iframe');
            let oldSidebarWrap = document.querySelector('.py__preview-iframe');
            let newSidebarWrap = html.querySelector('.py__preview-iframe');
            oldSettingsWrap && newSettingsWrap ? oldSettingsWrap.innerHTML = newSettingsWrap.innerHTML : null;
            oldIframeWrap && newIframeWrap ? oldIframeWrap.innerHTML = newIframeWrap.innerHTML : null;
            oldSidebarWrap && newSidebarWrap ? oldSidebarWrap.innerHTML = newSidebarWrap.innerHTML : null;
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
            let iframeUrl = urlParams.pathname.replace('themes', 'view') + '?' + iframeSearchParams.toString(); 
            iframe.setAttribute('src', iframeUrl);
        } else {
            let urlParams = new URL(location.href);
            let iframeSearchParams = new URLSearchParams(urlParams.search);
            let iframeUrl = urlParams.pathname.replace('themes', 'view') + '?' + iframeSearchParams.toString();
            iframe.setAttribute('src', iframeUrl);
        }
        
        if(content) content.querySelector('.py__loading-wrap').classList.add('py__animate');

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
        }).catch(err => console.log(err));
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
        checkSettings(uniqName, value);

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

        viewIframe();
    };
    // Text Component Function
    const textComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        checkSettings(uniqName, value);
        value !== focuseValue ? viewIframe() : null;
        if(uniqName === 'settings_theme_name' && value !== focuseValue) downloadButton?.setAttribute('data-name', value);
    };
    // Textarea Component Function
    const textareaComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        checkSettings(uniqName, value);
        value !== focuseValue ? viewIframe() : null;
    };
    // Richtext Component Function
    const richtextComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        checkSettings(uniqName, value);
        value !== focuseValue ? viewIframe() : null;
    };
    // Select Component Function
    const selectComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        let container = event.target.closest('.py__settings-item');
        let isHaveGlobal = container.querySelector('.py__get-result-wrapper');
        checkSettings(uniqName, value);

        if(uniqName.includes('bg')){
            let textUniqName = uniqName.replace('bg_', '');
            let findInColorsJson = colorsNamesContrast[textUniqName];
            let textColorInput = findInColorsJson ? document.querySelector(`[name="${findInColorsJson}"]`) : document.querySelector(`[name="${textUniqName}"]`);
            console.log(textColorInput, findInColorsJson);
            if(textColorInput){ 
                let newVal = value.includes('dark') ? 'light' : 'dark';
                textColorInput.selectedIndex = [...textColorInput.options].findIndex(option => option.value.includes(newVal));
            }
        }

        viewIframe();
        if(isHaveGlobal) getItemFromSettings(event, true);
    };
    // Checkbox Component Function
    const checkboxComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let content = event.target.closest('.py__comp-checkbox');
        let hiddenFiled = content.querySelector('input[type="hidden"]');
        hiddenFiled.value = event.target.checked ? true : false;
        let value = hiddenFiled.value;
        checkSettings(uniqName, value);
        viewIframe();
    }
    // Range Component Function
    const rangeComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        checkSettings(uniqName, value);
        viewIframe();
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
        if(e && e.target.classList.contains('py__signup')) return e.target.remove();
        if(e && e.target.classList.contains('py__login')) return e.target.remove();
        if(e && e.target.classList.contains('py__get-button')) return getItemFromSettings(e);
        if(e && e.target.classList.contains('py__button-view')) return toggleIframePreview(e);
        if(e && e.target.classList.contains('py__get-section-button')) return getSettingsLists(e);
        if(e && e.target.classList.contains('py__save-button')) return save(e);
        if(e && e.target.classList.contains('py__download-button')) return download(e);
    });

    // Before Unload
    window.addEventListener("beforeunload", function (e) {
        if (saveButton.getAttribute('aria-disabled') === "true") return undefined;
        let confirmationMessage = 'If you leave before saving, your changes will be lost.';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    });

    // When Page Content is Loaded
    document.addEventListener('DOMContentLoaded', ()=> {
        saveSettingsValues();
    });

})();