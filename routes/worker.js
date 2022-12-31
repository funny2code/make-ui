const {parentPort, workerData} = require('node:worker_threads');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


(async function (){
    const imageResponse = await openai.createImage({
        prompt: workerData?.image,
        n: 1,
        size: "1024x1024",
    });
    console.log(imageResponse.data.data[0].url, "WORKS");
    return parentPort.postMessage(imageResponse.data.data[0].url);
})();
