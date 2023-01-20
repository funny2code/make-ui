const { Configuration, OpenAIApi } = require("openai");

class OpenAIService {
  configuration = null;
  openai = null;

  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  async createWebsite(request) {
    const { message, openaiModel } = request;

    if (this.openai) {
      const templatePrompt = `make me an array object for a figma artboard that represents \${prompt}. make sure each object in the array represents a design element, such as a "FRAME", "RECTANGLE", or "TEXT" component,  and each object has properties that describe the design element,  such as its type, size, position, and styling.  The objects can also have child elements,  which would be nested inside the parent element,  and these child elements can also have their own properties and child elements, creating a tree structure that represents the entire design. `;
      const prompt = templatePrompt.replace("${prompt}", message);

      const response = await this.openai.createCompletion({
        model: openaiModel || "text-davinci-003",
        prompt: prompt,
        temperature: 0.1,
        max_tokens: 2048,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      return response;
    }
    return null;
  }
}

module.exports = OpenAIService;
