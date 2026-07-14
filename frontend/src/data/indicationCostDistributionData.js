const indicationCostDistributionData = [
  {
    metric: "Cost per Patient",

    multipleMyeloma: {
      p20: 15000,
      p25: 18000,
      p50: 21000,
      p75: 24000,
      p90: 28000,
    },

    dlbcl: {
      p20: 14500,
      p25: 17000,
      p50: 19500,
      p75: 22000,
      p90: 25500,
    },

    ball: {
      p20: 12000,
      p25: 14500,
      p50: 16500,
      p75: 19000,
      p90: 22500,
    },

    follicularLymphoma: {
      p20: 11000,
      p25: 13000,
      p50: 15000,
      p75: 17000,
      p90: 20000,
    },
  },

  {
    metric: "Total Study Cost",

    multipleMyeloma: {
      p20: 2.30,
      p25: 2.70,
      p50: 2.90,
      p75: 3.10,
      p90: 3.60,
    },

    dlbcl: {
      p20: 2.20,
      p25: 2.50,
      p50: 2.70,
      p75: 2.90,
      p90: 3.30,
    },

    ball: {
      p20: 1.90,
      p25: 2.10,
      p50: 2.30,
      p75: 2.50,
      p90: 2.90,
    },

    follicularLymphoma: {
      p20: 1.70,
      p25: 1.90,
      p50: 2.10,
      p75: 2.30,
      p90: 2.70,
    },
  },

  {
    metric: "Start-Up Cost Share",

    multipleMyeloma: {
      p20: 0.25,
      p25: 0.32,
      p50: 0.35,
      p75: 0.39,
      p90: 0.45,
    },

    dlbcl: {
      p20: 0.24,
      p25: 0.30,
      p50: 0.33,
      p75: 0.36,
      p90: 0.42,
    },

    ball: {
      p20: 0.20,
      p25: 0.26,
      p50: 0.29,
      p75: 0.32,
      p90: 0.38,
    },

    follicularLymphoma: {
      p20: 0.18,
      p25: 0.22,
      p50: 0.25,
      p75: 0.28,
      p90: 0.34,
    },
  },

  {
    metric: "Per-Site Cost",

    multipleMyeloma: {
      p20: 0.90,
      p25: 1.10,
      p50: 1.30,
      p75: 1.50,
      p90: 1.80,
    },

    dlbcl: {
      p20: 0.85,
      p25: 1.00,
      p50: 1.18,
      p75: 1.35,
      p90: 1.60,
    },

    ball: {
      p20: 0.72,
      p25: 0.90,
      p50: 1.05,
      p75: 1.20,
      p90: 1.45,
    },

    follicularLymphoma: {
      p20: 0.65,
      p25: 0.80,
      p50: 0.92,
      p75: 1.05,
      p90: 1.28,
    },
  },

  {
    metric: "FMV Alignment",

    multipleMyeloma: {
      p20: 38000,
      p25: 45000,
      p50: 52000,
      p75: 60000,
      p90: 68000,
    },

    dlbcl: {
      p20: 35000,
      p25: 42000,
      p50: 49000,
      p75: 56000,
      p90: 64000,
    },

    ball: {
      p20: 28000,
      p25: 34000,
      p50: 39000,
      p75: 45000,
      p90: 52000,
    },

    follicularLymphoma: {
      p20: 25000,
      p25: 30000,
      p50: 35000,
      p75: 40000,
      p90: 47000,
    },
  },
];

export default indicationCostDistributionData;