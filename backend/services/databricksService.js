require("dotenv").config();
const { DBSQLClient } = require("@databricks/sql");

async function createConnection() {
  const client = new DBSQLClient();

  await client.connect({
    host: process.env.DATABRICKS_HOST,
    path: process.env.DATABRICKS_HTTP_PATH,
    token: process.env.DATABRICKS_TOKEN,
  });

  return client;
}

function buildWhereClause(filters = {}) {
  let where = " WHERE 1=1 ";

  if (filters.indication) {
    where += ` AND Indication='${filters.indication}'`;
  }

  if (filters.lineOfTherapy) {
    where += ` AND Line_of_Therapy='${filters.lineOfTherapy}'`;
  }

  if (filters.phase) {
    where += ` AND Phase='${filters.phase}'`;
  }

  if (filters.region) {
    where += ` AND Region='${filters.region}'`;
  }

  return where;
}

async function getBenchmarkData(filters = {}) {
  const client = await createConnection();
  const session = await client.openSession();

  const whereClause = buildWhereClause(filters);

  const query = await session.executeStatement(`
    SELECT
      COUNT(DISTINCT Study_ID) AS totalStudies,
      MIN(Study_Start) AS startDate,
      MAX(Study_End) AS endDate
    FROM study_benchmark_final_table
    ${whereClause}
  `);

  const rows = await query.fetchAll();

  await session.close();

  if (!rows || rows.length === 0) {
    return {
      summary: {
        totalStudies: 0,
        startDate: null,
        endDate: null,
      },
      timeline: [],
    };
  }

  const row = rows[0];

  return {
    summary: {
      totalStudies: row.totalStudies || 0,
      startDate: row.startDate || null,
      endDate: row.endDate || null,
    },

    timeline: [
      {
        metric: "Contract Execution Time",
        typicalRange: "48-53",
        best: 47,
      },

      {
        metric: "Site Start-Up Duration",
        typicalRange: "58-66",
        best: 57,
      },

      {
        metric: "Time to First Patient In (FPI)",
        typicalRange: "39-47",
        best: 38,
      },

      {
        metric: "Enrollment Completion (LPI)",
        typicalRange: "318-382",
        best: 308,
      },

      {
        metric: "End-to-End Study Timeline",
        typicalRange: "554-625",
        best: 545,
      },
    ],
  };
}

async function getStudies() {
  const client = await createConnection();
  const session = await client.openSession();

  const query = await session.executeStatement(`
    SELECT DISTINCT
      Study_ID,
      Indication,
      Line_of_Therapy,
      Phase,
      Region
    FROM study_benchmark_final_table
    ORDER BY Study_ID
  `);

  const rows = await query.fetchAll();

  await session.close();

  return rows;
}

async function getFilterOptions() {
  const client = await createConnection();
  const session = await client.openSession();

  const indication = await (
    await session.executeStatement(`
      SELECT DISTINCT Indication
      FROM study_benchmark_final_table
      ORDER BY Indication
    `)
  ).fetchAll();

  const lineOfTherapy = await (
    await session.executeStatement(`
      SELECT DISTINCT Line_of_Therapy
      FROM study_benchmark_final_table
      ORDER BY Line_of_Therapy
    `)
  ).fetchAll();

  const phase = await (
    await session.executeStatement(`
      SELECT DISTINCT Phase
      FROM study_benchmark_final_table
      ORDER BY Phase
    `)
  ).fetchAll();

  const region = await (
    await session.executeStatement(`
      SELECT DISTINCT Region
      FROM study_benchmark_final_table
      ORDER BY Region
    `)
  ).fetchAll();

  await session.close();

  return {
    indication,
    lineOfTherapy,
    phase,
    region,
  };
}

module.exports = {
  getBenchmarkData,
  getFilterOptions,
  getStudies,
};