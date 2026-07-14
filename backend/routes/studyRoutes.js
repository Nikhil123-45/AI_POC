const express = require("express");

const router = express.Router();

const {
  getStudies
} = require("../services/databricksService");

router.get("/", async (req, res) => {

  try {

    const studies = await getStudies();

    res.json(studies);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;