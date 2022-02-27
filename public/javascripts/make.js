(function(){

    // View Iframe Fun
    const viewIframe = () => {
        let form = document.querySelector('form.py__settings-form');
        let iframe = document.querySelector('iframe.py__view-iframe');
        if(!iframe || !form) return;
        let url = iframe.getAttribute('src');
        let settings = {}, section = [], sectionName = '', sectionSettings = {};

        let formData = new FormData(form);
        formData.forEach((value, key) => {
            if(key === 'logo') return;
            if(key.includes('settings_')){ 
                settings[key.replace('settings_', '')] = value;
            } else { 
                key === 'section_name' 
                ? sectionName = value
                : sectionSettings[key] = value;
            }
        });
        
        if(sectionName && Object.keys(sectionSettings).length){
            section.push({ name: sectionName, settings: sectionSettings});
        }

        let data = {
            settings: Object.keys(settings).length ? [settings] : null,
            section: section.length ? section : null
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
            iframeContent.querySelector('html').innerHTML = html.querySelector('html').innerHTML;
        })
        .catch(err => console.error(err));
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
        viewIframe();
    };
    // Text Component Function
    const textComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        viewIframe();
    };
    // Select Component Function
    const selectComp = (event) => {
        if(!event) return;
        let uniqName = event.target.getAttribute('name');
        let value = event.target.value;
        let container = event.target.closest('.py__settings-item');
        let isHaveGlobal = container.querySelector('.py__get-result-wrapper');
        viewIframe();
        if(isHaveGlobal) getItemFromSettings(event, true);
    };

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
                default:
                    break;
            }
        }
    });

    // Input fileds input fun (text, textarea and etc)
    document.addEventListener('input', (e)=>{
        if(e && e.target.getAttribute('name')){
            let type = e.target.getAttribute('type');
            switch(type){
                case 'text':
                    textComp(e);
                    break;
                case 'textarea':
                    break;
                default:
                    break;
            }
        }
    });

    // Sidebar Select Settings Open Close Fun
    document.addEventListener('click', (e)=>{
        if(e && e.target.classList.contains('py__settings-select')){
            e.target.classList.contains('active') 
            ? e.target.classList.remove('active')
            : e.target.classList.add('active');
        }
        if(e && e.target.classList.contains('py__settings-item-name')){
            e.target.closest('.py__settings-item-wrapper').classList.contains('active') 
            ? e.target.closest('.py__settings-item-wrapper').classList.remove('active')
            : e.target.closest('.py__settings-item-wrapper').classList.add('active');
        }
        if(e && e.target.classList.contains('py__types-item')){
            document.querySelector('.py__types-item.active').classList.remove('active');
            document.querySelector('.py__options-ul.active').classList.remove('active');
            e.target.classList.add('active');
            document.getElementById(e.target.getAttribute('data-id')).classList.add('active');
        }
        if(e && e.target.classList.contains('py__get-button')) getItemFromSettings(e);
    });

})();