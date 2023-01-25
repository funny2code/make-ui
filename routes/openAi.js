const express = require("express");
const router = express.Router();
const OpenAIController = require("../controllers/OpenAIController");

const openAIController = new OpenAIController();

router.get("/", async (req, res, next) => {
  try {
    res.render("openai");
  } catch (err) {
    return next(err);
  }
});

router.post("/", (...arg) => openAIController.copyWebsite(...arg));

router.post("/create-website", (...arg) =>
  openAIController.createWebsite(...arg)
);

module.exports = router;
