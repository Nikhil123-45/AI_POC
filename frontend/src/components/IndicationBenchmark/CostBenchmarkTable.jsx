import React from "react";
import BenchmarkTable from "./BenchmarkTable";
import costData from "../../data/indicationCostData";

const metrics = [
  {
    key: "site",
    label: "Per-Site Cost",
    labelKey: "siteLabel",
    color: "#7C4DFF"
  },
  {
    key: "patient",
    label: "Cost per Patient",
    labelKey: "patientLabel",
    color: "#8E6BE8"
  },
  {
    key: "monitoring",
    label: "Monitoring Cost",
    labelKey: "monitoringLabel",
    color: "#2EC4B6"
  },
  {
    key: "investigator",
    label: "Investigator & Other Fees",
    labelKey: "investigatorLabel",
    color: "#F4B942"
  },
  {
    key: "other",
    label: "FMV Alignment",
    labelKey: "otherLabel",
    color: "#4DD0E1"
  }
];

export default function CostBenchmarkTable() {
  return (
    <BenchmarkTable
      data={costData}
      metrics={metrics}
    />
  );
}