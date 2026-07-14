const axios = require("axios");

const ENDPOINT = process.env.DATABRICKS_COST_ENDPOINT;
const TOKEN = process.env.DATABRICKS_TOKEN;

async function getCostBenchmark(filters = {}) {
  try {
    const payload = {
      dataframe_records: [
        {
          Region: filters.region || "",
          Phase: filters.phase || "",
          Indication: filters.indication || "",
          "Institution / Vendor": filters.vendor || "",
          "Strategic Imperative": filters.lineOfTherapy || "",
          "Study Type": filters.studyType || "",
        },
      ],
    };

    const response = await axios.post(
      ENDPOINT,
      payload,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Cost API Error");

    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }

    throw error;
  }
}

module.exports = {
  getCostBenchmark,
};