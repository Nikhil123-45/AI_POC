const overallCostData = [

  // 1. Executive KPI
  {
    metric: "Total Study Cost",

    overall: {
      p20: 2.30,
      p25: 2.70,
      p50: 2.90,
      p75: 3.10,
      p90: 3.60,
      unit: "$M",
    },
  },

  // 2. Cost Efficiency
  {
    metric: "Cost per Patient",

    overall: {
      p20: 15000,
      p25: 18000,
      p50: 21000,
      p75: 24000,
      p90: 28000,
      unit: "$K",
    },
  },

  // 3. Site Cost
  {
    metric: "Per-Site Cost",

    overall: {
      p20: 0.90,
      p25: 1.10,
      p50: 1.30,
      p75: 1.50,
      p90: 1.80,
      unit: "$M",
    },
  },

  // 4. Startup Cost
  {
    metric: "Start-Up Cost Share",

    overall: {
      p20: 0.25,
      p25: 0.32,
      p50: 0.35,
      p75: 0.39,
      p90: 0.45,
      unit: "$M",
    },
  },

  // 5. Compliance
  {
    metric: "FMV Alignment",

    overall: {
      p20: 38000,
      p25: 45000,
      p50: 52000,
      p75: 60000,
      p90: 68000,
      unit: "$K",
    },
  },

];

export default overallCostData;