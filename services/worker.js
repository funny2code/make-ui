const {parentPort, workerData} = require('node:worker_threads');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: workerData.dalle_api_key,
});
const openai = new OpenAIApi(configuration);
const fetch = require('node-fetch');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const getStableImage = async (url) => {
    await sleep(1000);
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Token ' + workerData.stable_api_key,
            'Content-Type': 'application/json'
        }
    });
    const imageData = await res.json();
    if(imageData.status === "succeeded") return imageData;
    return await getStableImage(imageData?.urls?.get);
};

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
            const response = await fetch('https://api.replicate.com/v1/predictions', {
                method: 'post',
                body: JSON.stringify({
                    "version": "f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1", 
                    "input": {
                        "prompt": workerData?.image
                    }
                }),
                headers: {
                    'Authorization': 'Token ' + workerData.stable_api_key,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            const image = await getStableImage(data?.urls?.get);
            return parentPort.postMessage(image.output[0]);
        }
    } catch(err){
        console.log(err, "WORKER.JS ERROR");
    }
})();
