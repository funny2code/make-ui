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

        console.log(data);

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
        viewIframe();
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
    });

})();