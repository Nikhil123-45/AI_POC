import React from "react";
import BenchmarkTable from "./BenchmarkTable";
import timelineData from "../../data/indicationTimelineData";

const metrics = [
  {
    key: "contract",
    label: "Contract Execution Time",
    labelKey: "contractLabel",
    color: "#F4C20D"
  },
  {
    key: "timeline",
    label: "End-to-End Study Timeline",
    labelKey: "timelineLabel",
    color: "#A0A7B4"
  },
  {
    key: "enrollment",
    label: "Enrollment Completion (LPI)",
    labelKey: "enrollmentLabel",
    color: "#42A5F5"
  },
  {
    key: "startup",
    label: "Site Start-Up Duration",
    labelKey: "startupLabel",
    color: "#EC6BC3"
  },
  {
    key: "fpi",
    label: "Time to First Patient In (FPI)",
    labelKey: "fpiLabel",
    color: "#82D96B"
  }
];

export default function TimelineBenchmarkTable() {
  return (
    <BenchmarkTable
      data={timelineData}
      metrics={metrics}
    />
  );
}