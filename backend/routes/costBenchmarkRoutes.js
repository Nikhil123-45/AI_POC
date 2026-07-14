const express = require("express");

const router = express.Router();

const {
  getCostBenchmark,
} = require("../services/costApiService");

router.post("/", async (req, res) => {
  try {
    const filters = req.body || {};

    const result = await getCostBenchmark(filters);

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to fetch Cost Benchmark data",
    });
  }
});

module.exports = router;