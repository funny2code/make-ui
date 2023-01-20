const OpenAIService = require("../services/OpenAIService");

class OpenAIController {
  openaiService = null;

  constructor() {
    this.openaiService = new OpenAIService();
  }

  async copyWebsite(req, res, next) {
    try {
      const response = await this.openaiService.copyWebsite(req.body);

      const statusCode = response.status;
      const result = response.data;

      return res.status(statusCode).json(result);
    } catch (err) {
      return res
        .status(err.response?.status || 500)
        .json({ result: err.response?.statusText || "SERVER ERROR" });
    }
  }

  async createWebsite(req, res, next) {
    try {
      const response = await this.openaiService.createWebsite(req.body);

      const statusCode = response.status;
      const result = response.data.choices[0].text;

      return res.status(statusCode).json({ result });
    } catch (err) {
      return res
        .status(err.response?.status || 500)
        .json({ result: err.response?.statusText || "SERVER ERROR" });
    }
  }
}

module.exports = OpenAIController;
