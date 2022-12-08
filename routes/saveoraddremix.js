const express = require('express');
const router = express.Router();
const modelRemix = require('../models/remix');
const path = require('path');
const fs = require('fs').promises;
const Pageres = require('pageres');



/* POST SAVE OR ADD NEW FUNCTION */
router.post('/:id', async (req, res, next) => {

    if(!req.session.user && !req?.session?.user?.isAdmin) return res.status(500).send("Error 500");

    const { id } = req.params;
    const {action_type, settings_data, templates} = req.body;

    if (!id) return res.status(500).send("Error 500");
    
    try {
        
        const theme = await modelRemix.findById(id).exec();
        if (!theme) return res.send("Error 500");

        if (!settings_data?.current && Object.keys(settings_data?.current).length === 1 && !Object.keys(settings_data?.current?.sections).length && !Object.keys(templates).length && !action_type) return res.send("Error 500");
        

        if(settings_data?.current && Object.keys(settings_data?.current).length > 1){
            Object.entries(settings_data?.current).forEach(([key, val]) => {
              if(key && typeof val !== 'object'){
                theme.settings_data.current[key] = val;
              }
            });
        }
      
        if(settings_data?.current?.sections && Object.keys(settings_data?.current?.sections).length > 0){
            Object.entries(settings_data?.current?.sections).forEach(([key, val]) => {
                theme.settings_data.current.sections[key] = val; 
            });
        }
        
        if(Object.keys(templates).length > 0){
            Object.entries(templates).forEach(async ([key, val]) => {
                let newKey = (key === "collection") ? "collection_template" : key;
                if(templates[newKey]?.order?.length){
                    templates[newKey]?.order?.forEach(orderItem => {
                        if(theme[newKey].sections[orderItem]){ 
                            theme[newKey].sections[orderItem] = templates[newKey].sections[orderItem];
                        } else {
                            theme[newKey].order.push(orderItem);
                            theme[newKey].sections[orderItem] = templates[newKey].sections[orderItem];
                        } 
                    });
                }
            })
        }

        if(action_type === "addnew"){
            const newRemix = new modelRemix({
                settings_data: theme.settings_data,
                index: theme.index,
                product: theme.product,
                collection_template: theme.collection_template,
                list_collections: theme.list_collections,
                page: theme.page,
                blog: theme.blog,
                article: theme.article,
                cart: theme.cart,
                password: theme.password,
                404: theme[404],
                search: theme.search
            });

            newRemix.save(async (err, remix) => {
                if(err) return res.status(500).send({status: 500, message: "Add New Remix dont works please try again!"});
            });

        } else {
            const saveChanges = await modelRemix.findByIdAndUpdate(id, theme).exec();
            if(!saveChanges) return res.status(500).send({status: 500, message: "error"});
        }

        await new Pageres({
                delay: 2,
                launchOptions: {args: ['--no-sandbox', '--disable-setuid-sandbox']}
            })
            .src(req.protocol + '://' + req.get('host') + '/view/' + id + '?page=index', ['1440x900'], {crop: true, filename: 'screen-' + id})
            .src(req.protocol + '://' + req.get('host') + '/view/' + id + '?page=index', ['414x736'], {crop: true, filename: 'm-screen-' + id})
            .dest(path.join(__dirname, '../public/screens/'))
            .run();
           
        let message = (action_type === "addnew") ? "added" : "success";   
        return res.status(200).send({status: 200, message: message});

    } catch (err) {
        return res.status(500).send({status: 500, message: "error"});
    }

});

module.exports = router;
