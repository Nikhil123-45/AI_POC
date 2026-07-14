import usFlag from "../assets/flags/us.png";
import euFlag from "../assets/flags/eu.png";
import indiaFlag from "../assets/flags/india.png";
import apacFlag from "../assets/flags/apac.png";
import latamFlag from "../assets/flags/latam.png";
import meaFlag from "../assets/flags/mea.png";

// ================================
// FILTER DROPDOWNS
// ================================

export const filterOptions = {
  phase: [
    "All Phase",
    "Active",
    "Completed",
    "Proposed",
    "Terminated"
  ],

  region: [
    "All Regions",
    "US",
    "India",
    "Europe",
    "APAC",
    "LATAM",
    "MEA"
  ],

  indication: [
    "All Indications",
    "Multiple Myeloma",
    "Diffuse Large B-Cell Lymphoma (DLBCL)",
    "B-Cell Acute Lymphoblastic Leukemia (B-ALL)",
    "Follicular Lymphoma"
  ],

  lineOfTheraphy: [
    "All Lines",
    "1L",
    "2L",
    "3L",
    "4L+"
  ],

  studyType: [
    "All Study Types",
    "Real-World Evidence (RWE)",
    "Investigator-Initiated Study (IIS)",
    "Patient Registry"
  ],

  vendor: [
    "All Vendors",
    "IQVIA",
    "Parexel",
    "ICON",
    "Syneos Health",
    "PPD"
  ]
};

// ================================
// REGIONS
// ================================

export const regions = [
  {
    id: "US",
    name: "US",
    flag: usFlag,
    color: "#4ADE80"
  },
  {
    id: "Europe",
    name: "Europe",
    flag: euFlag,
    color: "#84CC16"
  },
  {
    id: "India",
    name: "India",
    flag: indiaFlag,
    color: "#EAB308"
  },
  {
    id: "APAC",
    name: "APAC",
    flag: apacFlag,
    color: "#FB923C"
  },
  {
    id: "LATAM",
    name: "LATAM",
    flag: latamFlag,
    color: "#EF4444"
  },
  {
    id: "MEA",
    name: "MEA",
    flag: meaFlag,
    color: "#9333EA"
  }
];

// ================================
// TIMELINE BENCHMARK DATA
// ================================

export const benchmarkData = [

  // 1. Overall KPI
  {
    metric: "End-to-End Study Timeline",
    values: {
      US: { p20: 545, p25: 554, p50: 590, p75: 625, p90: 680 },
      Europe: { p20: 530, p25: 540, p50: 572, p75: 600, p90: 650 },
      India: { p20: 515, p25: 525, p50: 545, p75: 565, p90: 620 },
      APAC: { p20: 575, p25: 590, p50: 620, p75: 645, p90: 700 },
      LATAM: { p20: 555, p25: 570, p50: 598, p75: 620, p90: 675 },
      MEA: { p20: 525, p25: 540, p50: 560, p75: 585, p90: 635 }
    }
  },

  // 2. Contracting
  {
    metric: "Contract Execution Time",
    values: {
      US: { p20: 47, p25: 48, p50: 50.5, p75: 53, p90: 58 },
      Europe: { p20: 45, p25: 46, p50: 48, p75: 50, p90: 54 },
      India: { p20: 42, p25: 43, p50: 45, p75: 47, p90: 51 },
      APAC: { p20: 49, p25: 50, p50: 52, p75: 55, p90: 60 },
      LATAM: { p20: 44, p25: 45, p50: 47, p75: 49, p90: 53 },
      MEA: { p20: 43, p25: 44, p50: 46, p75: 48, p90: 52 }
    }
  },

  // 3. Site Startup
  {
    metric: "Site Start-Up Duration",
    values: {
      US: { p20: 57, p25: 58, p50: 62, p75: 66, p90: 72 },
      Europe: { p20: 55, p25: 56, p50: 58, p75: 60, p90: 66 },
      India: { p20: 51, p25: 52, p50: 54, p75: 56, p90: 61 },
      APAC: { p20: 60, p25: 61, p50: 63, p75: 65, p90: 70 },
      LATAM: { p20: 56, p25: 57, p50: 59, p75: 61, p90: 67 },
      MEA: { p20: 52, p25: 53, p50: 55, p75: 57, p90: 63 }
    }
  },

  // 4. Recruitment Start
  {
    metric: "Time to First Patient In (FPI)",
    values: {
      US: { p20: 38, p25: 39, p50: 43, p75: 47, p90: 54 },
      Europe: { p20: 36, p25: 37, p50: 40, p75: 42, p90: 48 },
      India: { p20: 35, p25: 36, p50: 38, p75: 40, p90: 45 },
      APAC: { p20: 41, p25: 43, p50: 45, p75: 47, p90: 52 },
      LATAM: { p20: 37, p25: 39, p50: 41, p75: 43, p90: 49 },
      MEA: { p20: 36, p25: 37, p50: 39, p75: 41, p90: 46 }
    }
  },

  // 5. Recruitment End
  {
    metric: "Enrollment Completion (LPI)",
    values: {
      US: { p20: 308, p25: 318, p50: 350, p75: 382, p90: 420 },
      Europe: { p20: 300, p25: 310, p50: 336, p75: 360, p90: 395 },
      India: { p20: 292, p25: 302, p50: 320, p75: 338, p90: 372 },
      APAC: { p20: 322, p25: 332, p50: 365, p75: 392, p90: 430 },
      LATAM: { p20: 304, p25: 314, p50: 340, p75: 364, p90: 402 },
      MEA: { p20: 296, p25: 306, p50: 322, p75: 340, p90: 378 }
    }
  }

];
// ================================
// COST BENCHMARK DATA
// ================================

export const costBenchmarkData = [

  // 1. Overall Executive KPI
  {
    metric: "Total Study Cost",
    values: {
      US: { min: 2.7, max: 3.1, avg: 2.9 },
      Europe: { min: 2.5, max: 2.9, avg: 2.7 },
      India: { min: 1.9, max: 2.3, avg: 2.1 },
      APAC: { min: 2.1, max: 2.5, avg: 2.3 },
      LATAM: { min: 1.9, max: 2.3, avg: 2.1 },
      MEA: { min: 2.0, max: 2.4, avg: 2.2 }
    },
    suffix: "M"
  },

  // 2. Cost Efficiency
  {
    metric: "Cost per Patient",
    values: {
      US: { min: 18, max: 24, avg: 21 },
      Europe: { min: 17, max: 22, avg: 19.5 },
      India: { min: 14, max: 18, avg: 16 },
      APAC: { min: 14.5, max: 19, avg: 16.8 },
      LATAM: { min: 13, max: 17, avg: 15 },
      MEA: { min: 14, max: 18.5, avg: 16.2 }
    },
    suffix: "K"
  },

  // 3. Site Cost
  {
    metric: "Per-Site Cost",
    values: {
      US: { min: 1.10, max: 1.50, avg: 1.30 },
      Europe: { min: 1.00, max: 1.35, avg: 1.18 },
      India: { min: 0.75, max: 1.05, avg: 0.90 },
      APAC: { min: 0.90, max: 1.20, avg: 1.05 },
      LATAM: { min: 0.80, max: 1.05, avg: 0.93 },
      MEA: { min: 0.84, max: 1.12, avg: 0.98 }
    },
    suffix: "M"
  },

  // 4. Startup Cost
  {
    metric: "Start-Up Cost Share",
    values: {
      US: { min: 0.32, max: 0.39, avg: 0.35 },
      Europe: { min: 0.30, max: 0.36, avg: 0.33 },
      India: { min: 0.22, max: 0.28, avg: 0.25 },
      APAC: { min: 0.26, max: 0.32, avg: 0.29 },
      LATAM: { min: 0.22, max: 0.28, avg: 0.25 },
      MEA: { min: 0.24, max: 0.30, avg: 0.27 }
    },
    suffix: "M"
  },

  // 5. Compliance
  {
    metric: "FMV Alignment",
    values: {
      US: { min: 45, max: 60, avg: 52 },
      Europe: { min: 42, max: 56, avg: 49 },
      India: { min: 27, max: 36, avg: 31 },
      APAC: { min: 34, max: 45, avg: 39 },
      LATAM: { min: 30, max: 40, avg: 35 },
      MEA: { min: 32, max: 43, avg: 37 }
    },
    suffix: "K"
  }

];