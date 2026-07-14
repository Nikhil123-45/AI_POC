const express = require("express");
const router = express.Router();

const {
  getFilterOptions,
} = require("../services/databricksService");

router.get("/", async (req, res) => {
  try {
    const data = await getFilterOptions();
    res.json(data);
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);

    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
});

module.exports = router;