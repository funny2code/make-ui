const OpenAIService = require("../services/OpenAIService");

class OpenAIController {
  openaiService = null;

  constructor() {
    this.openaiService = new OpenAIService();
  }

  async createWebsite(req, res, next) {
    try {
      const response = await this.openaiService.createWebsite(req.body);

      const statusCode = response.status;
      const result = response.data.choices[0].text;

      return res.status(statusCode).json({ result });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = OpenAIController;
