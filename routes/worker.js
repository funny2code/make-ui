const {parentPort, workerData} = require('node:worker_threads');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: workerData.api_key,
});
const openai = new OpenAIApi(configuration);
const request = require('request');


(async function (){
    try {
        if(workerData.model === "dalle"){
            const imageResponse = await openai.createImage({
                prompt: workerData?.image,
                n: 1,
                size: "1024x1024",
            });
            return parentPort.postMessage(imageResponse.data.data[0].url);
        } else {
            request.post({
                headers: {
                    Authorization: 'Token ' + workerData.api_key,
                    'Content-Type': 'application/json'
                },
                url: 'https://api.replicate.com/v1/predictions',
                body: JSON.stringify({
                    "version": "f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1", 
                    "input": {
                        "prompt": workerData?.image
                    }
                })
            }, (error, response, body) => {
                let myResBody = JSON.parse(body);
                console.log(myResBody, myResBody?.urls, myResBody?.urls?.get, "DAV STUGI");
                setTimeout(()=>{
                    request.get({
                        headers: {
                            Authorization: 'Token ' + workerData.api_key,
                            'Content-Type': 'application/json'
                        },
                        url: myResBody?.urls?.get
                    }, (error, response, body) => {
                        console.log(body, "DAV CHECK GET");
                        let getImage = JSON.parse(body);
                        return parentPort.postMessage(getImage.output[0]);
                    });
                }, 7500);
            });
        }
    } catch(err){
        console.log(err, "DAV");
    }
})();
