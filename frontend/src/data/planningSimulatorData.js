export const simulatorData = {
  /* ==========================================================
      STUDY PARAMETERS
  ========================================================== */

  studyParameters: {
    studyId: "STU-10003",
    therapeuticArea: "Oncology",
    indication: "Non-Small Cell Lung Cancer",
    phase: "Phase IV",
  },

  therapeuticAreas: [
    "Oncology",
    "Neurology",
    "Cardiology",
    "Immunology",
  ],

  indications: [
    "Non-Small Cell Lung Cancer",
    "Breast Cancer",
    "Melanoma",
    "Leukemia",
  ],

  phases: [
    "Phase I",
    "Phase II",
    "Phase III",
    "Phase IV",
  ],

  /* ==========================================================
      FILTERS
  ========================================================== */

  regions: [
    "North America",
    "Asia (Singapore)",
    "China",
    "India",
    "Europe",
  ],

  vendors: [
    "IQVIA",
    "Parexel",
    "ICON",
    "PPD",
    "Syneos",
  ],

  builder: {
    region: "North America",
    vendor: "IQVIA",
    sites: 60,
    enrollment: 400,
  },

  /* ==========================================================
      AI RECOMMENDATION
  ========================================================== */

  recommendation: {
    title:
      "Scenario A offers the best balance of lower timeline and cost.",

    subtitle:
      "It is recommended based on your complexity score and benchmark data.",

    lowestCost: {
      scenario: "Scenario A",
      value: "$1.68M",
    },

    shortestTimeline: {
      scenario: "Scenario A",
      value: "8.2 Months",
    },

    bestOverall: "Scenario A",
  },

  /* ==========================================================
      SCENARIOS
  ========================================================== */

  scenarios: [
    {
      id: 1,

      title: "Scenario A",

      best: true,

      color: "#2563EB",

      region: "North America",

      vendor: "IQVIA",

      sites: 60,

      enrollment: 400,

      timeline: 8.2,

      timelineRange: "7.0 - 9.8 months",

      cost: "$1.68M",

      costRange: "$1.50M - $1.92M",
    },

    {
      id: 2,

      title: "Scenario B",

      best: false,

      color: "#9333EA",

      region: "Asia (Singapore)",

      vendor: "Parexel",

      sites: 75,

      enrollment: 500,

      timeline: 9.6,

      timelineRange: "8.1 - 11.2 months",

      cost: "$2.15M",

      costRange: "$1.90M - $2.42M",
    },

    {
      id: 3,

      title: "Scenario C",

      best: false,

      color: "#F97316",

      region: "China",

      vendor: "ICON",

      sites: 90,

      enrollment: 600,

      timeline: 12.4,

      timelineRange: "10.0 - 14.2 months",

      cost: "$2.45M",

      costRange: "$2.30M - $2.70M",
    },
  ],

  /* ==========================================================
      SAVED SCENARIOS
  ========================================================== */

  savedScenarios: [
    {
      id: 1,
      name: "US – IQVIA – 60 Sites",
      region: "North America",
      vendor: "IQVIA",
      sites: 60,
      enrollment: 400,
      timeline: "8.2 Months",
      cost: "$1.68M",
      savedOn: "May 28, 2026",
    },

    {
      id: 2,
      name: "Asia – Parexel – 75 Sites",
      region: "Asia (Singapore)",
      vendor: "Parexel",
      sites: 75,
      enrollment: 500,
      timeline: "9.6 Months",
      cost: "$2.15M",
      savedOn: "May 28, 2026",
    },

    {
      id: 3,
      name: "China – ICON – 90 Sites",
      region: "China",
      vendor: "ICON",
      sites: 90,
      enrollment: 600,
      timeline: "12.4 Months",
      cost: "$2.45M",
      savedOn: "May 28, 2026",
    },
  ],

  /* ==========================================================
      BUTTONS
  ========================================================== */

  actions: {
    createStudyButton: "Create Study in BGC",
    saveScenario: "Save Scenario",
    saveAll: "Save All Scenarios",
    addScenario: "Add Scenario",
  },

  /* ==========================================================
      SEARCH PLACEHOLDER
  ========================================================== */

  searchPlaceholder: "Search scenarios...",
};