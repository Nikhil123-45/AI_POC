const express = require("express");

const router = express.Router();

const {
  getBenchmarkData
} = require("../services/databricksService");

router.get("/", async (req, res) => {

  try {

    const filters = {
      indication: req.query.indication,
      lineOfTherapy: req.query.lineOfTherapy,
      phase: req.query.phase,
      region: req.query.region
    };

    const data = await getBenchmarkData(filters);

    res.json(data);

  } catch (error) {

    console.error("Benchmark API Error:", error);

    res.status(500).json({
      error: "Failed to fetch benchmark data"
    });

  }

});

module.exports = router;