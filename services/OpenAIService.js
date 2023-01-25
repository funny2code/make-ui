const { Worker } = require("node:worker_threads");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");

const validURL = async (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
};

class OpenAIService {
  constructor() {}

  async createWorkerThread(request, response) {
    return new Promise((resolve) => {
      const { image, model, api_key } = request;
      console.log('***** createWorkerThread ', request);

      //Create new worker
      const worker = new Worker(path.join(__dirname, "./worker.js"), {
        workerData: { api_key: api_key, model: model, image: image },
      });

      //Listen for a message from worker
      worker.once("message", (result) => {
        console.log(`check ${result}`);
        resolve({
          status: 200,
          data: {
            result: response.data.choices[0].text,
            image: result,
          },
        });
      });

      worker.on("error", (error) => {
        console.log(error, "check error worker");
        resolve({
          status: 500,
          data: {
            result: "INTERNAL SERVER ERROR",
          },
        });
      });

      worker.on("exit", (exitCode) => {
        console.log("exit", exitCode);
        resolve();
      });
    });
  }

  async copyWebsite(request) {
    const { message, image, openaiModel, api_key } = request;
    const isValidUrl = await validURL(message);

    console.log('****** copyWebsite called ', request);

    if (isValidUrl) {
      const { data } = await axios.get(message);
      const $ = cheerio.load(data);
      const getLinks = $("link");

      if (getLinks?.length) {
        for (let i = 0; i < getLinks.length; i++) {
          if (
            !getLinks[i]?.attribs?.href?.includes("data:text/css;base64") &&
            getLinks[i]?.attribs?.href?.includes(".css")
          ) {
            let link = getLinks[i]?.attribs?.href;
            let newLink =
              link?.includes("http:") || link?.includes("https:")
                ? link
                : `https:${link}`;
            let getLink = await axios.get(newLink);
            let linkData = getLink.data;
            $("body").append(`<style type="text/css">${linkData}</style>`);
          }
        }
      }
      $("link").remove();

      return {
        status: 200,
        data: {
          result: $.html(),
        },
      };
    } else {
      if (!api_key) {
        return {
          status: 200,
          data: { status: 304, message: "PLEASE USE YOUR AI API KEY" },
        };
      }

      const configuration = new Configuration({
        apiKey: api_key,
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createCompletion({
        model: openaiModel || "text-davinci-003",
        prompt: message,
        temperature: 0.1,
        max_tokens: 2048,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      if (!image) {
        return {
          status: response.status,
          data: {
            result: response.data.choices[0].text,
          },
        };
      }

      console.log('****** before createWorkerThread ', request, response.status, response.data.choices[0].text);
      const workerResponse = await this.createWorkerThread(request, response);
      return workerResponse;
    }
  }

  async createWebsite(request) {
    const { message, openaiModel, api_key } = request;

    if (!api_key) {
      return {
        status: 200,
        data: { status: 304, message: "PLEASE USE YOUR AI API KEY" },
      };
    }

    const configuration = new Configuration({
      apiKey: api_key,
    });
    const openai = new OpenAIApi(configuration);

    if (openai) {
      const templatePrompt = `make me an array object for a figma artboard that represents \${prompt}. make sure each object in the array represents a design element, such as a "FRAME", "RECTANGLE", or "TEXT" component,  and each object has properties that describe the design element,  such as its type, size, position, and styling.  The objects can also have child elements,  which would be nested inside the parent element,  and these child elements can also have their own properties and child elements, creating a tree structure that represents the entire design. `;
      const prompt = templatePrompt.replace("${prompt}", message);

      const response = await openai.createCompletion({
        model: openaiModel || "text-davinci-003",
        prompt: prompt,
        temperature: 0.1,
        max_tokens: 2048,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      return {
        status: response.status,
        data: {
          result: response.data.choices[0].text,
        },
      };
    }

    return {
      status: 500,
      data: {
        result: "SERVER ERROR",
      },
    };
  }
}

module.exports = OpenAIService;
