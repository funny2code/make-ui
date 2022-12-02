// IS JSON FILE DB GET SECTION SCHEMA FUNCTION
const getSectionNames = (data) => {
    let fileNames = [];
    if(data && Object.keys(data.sections).length > 0){
        Object.entries(data.sections).forEach(([key, val], ) => {
            fileNames.push(val.type); 
        });
    }
    return fileNames;
};

module.exports = { getSectionNames };