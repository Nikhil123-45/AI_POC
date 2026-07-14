const studyTypeCostData = [
  {
    metric: "Cost per Patient",

    rwe: {
      p20: 14000,
      p25: 16500,
      p50: 18500,
      p75: 21000,
      p90: 24500,
    },

    iis: {
      p20: 15000,
      p25: 18000,
      p50: 21000,
      p75: 24000,
      p90: 28000,
    },

    patientRegistry: {
      p20: 12500,
      p25: 15000,
      p50: 17500,
      p75: 20000,
      p90: 23500,
    },

    expandedAccess: {
      p20: 11000,
      p25: 13500,
      p50: 16000,
      p75: 18500,
      p90: 22000,
    },
  },

  {
    metric: "Total Study Cost",

    rwe: {
      p20: 2.10,
      p25: 2.40,
      p50: 2.60,
      p75: 2.80,
      p90: 3.20,
    },

    iis: {
      p20: 2.30,
      p25: 2.70,
      p50: 2.90,
      p75: 3.10,
      p90: 3.60,
    },

    patientRegistry: {
      p20: 1.90,
      p25: 2.20,
      p50: 2.40,
      p75: 2.60,
      p90: 3.00,
    },

    expandedAccess: {
      p20: 1.70,
      p25: 1.90,
      p50: 2.10,
      p75: 2.30,
      p90: 2.70,
    },
  },

  {
    metric: "Start-Up Cost Share",

    rwe: {
      p20: 0.22,
      p25: 0.28,
      p50: 0.31,
      p75: 0.35,
      p90: 0.40,
    },

    iis: {
      p20: 0.25,
      p25: 0.32,
      p50: 0.35,
      p75: 0.39,
      p90: 0.45,
    },

    patientRegistry: {
      p20: 0.20,
      p25: 0.25,
      p50: 0.28,
      p75: 0.31,
      p90: 0.36,
    },

    expandedAccess: {
      p20: 0.18,
      p25: 0.22,
      p50: 0.25,
      p75: 0.28,
      p90: 0.34,
    },
  },

  {
    metric: "Per-Site Cost",

    rwe: {
      p20: 0.82,
      p25: 0.98,
      p50: 1.15,
      p75: 1.30,
      p90: 1.55,
    },

    iis: {
      p20: 0.90,
      p25: 1.10,
      p50: 1.30,
      p75: 1.50,
      p90: 1.80,
    },

    patientRegistry: {
      p20: 0.72,
      p25: 0.88,
      p50: 1.02,
      p75: 1.18,
      p90: 1.40,
    },

    expandedAccess: {
      p20: 0.65,
      p25: 0.80,
      p50: 0.92,
      p75: 1.05,
      p90: 1.28,
    },
  },

  {
    metric: "FMV Alignment",

    rwe: {
      p20: 34000,
      p25: 40000,
      p50: 47000,
      p75: 54000,
      p90: 62000,
    },

    iis: {
      p20: 38000,
      p25: 45000,
      p50: 52000,
      p75: 60000,
      p90: 68000,
    },

    patientRegistry: {
      p20: 30000,
      p25: 36000,
      p50: 42000,
      p75: 49000,
      p90: 56000,
    },

    expandedAccess: {
      p20: 25000,
      p25: 30000,
      p50: 35000,
      p75: 40000,
      p90: 47000,
    },
  },
];

export default studyTypeCostData;