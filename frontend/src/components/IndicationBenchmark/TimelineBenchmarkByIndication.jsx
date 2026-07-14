import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from "recharts";

import timelineData from "../../data/indicationTimelineData";

const METRICS = [
  {
    value: "contract",
    label: "Contract Execution Time",
    color: "#F4C20D",
    unit: "days"
  },
  {
    value: "timeline",
    label: "End-to-End Study Timeline",
    color: "#9CA3AF",
    unit: "days"
  },
  {
    value: "enrollment",
    label: "Enrollment Completion (LPI)",
    color: "#61B8F6",
    unit: "days"
  },
  {
    value: "startup",
    label: "Site Start-Up Duration",
    color: "#D87AC5",
    unit: "days"
  },
  {
    value: "fpi",
    label: "Time to First Patient In (FPI)",
    color: "#8FD17A",
    unit: "days"
  }
];

const formatIndication = (value) => {
  switch (value) {
    case "Diffuse Large B-Cell Lymphoma (DLBCL)":
      return "DLBCL";

    case "B-Cell Acute Lymphoblastic Leukemia (B-ALL)":
      return "B-ALL";

    default:
      return value;
  }
};

export default function TimelineBenchmarkByIndication() {
  const [metric, setMetric] = useState("timeline");

  const selectedMetric = METRICS.find(
    (m) => m.value === metric
  );

  const chartData = useMemo(() => {
    return timelineData.map((row) => ({
      indication: row.indication,
      value: row[metric],
      range: row[`${metric}Label`]
    }));
  }, [metric]);

  const TooltipContent = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    return (
      <div
        style={{
          background: "#172338",
          border: "1px solid #314968",
          borderRadius: 8,
          padding: 12,
          color: "#fff"
        }}
      >
        <div
          style={{
            fontWeight: 600,
            marginBottom: 8
          }}
        >
          {label}
        </div>

        <div
          style={{
            color: selectedMetric.color
          }}
        >
          {selectedMetric.label}
        </div>

        <div
          style={{
            marginTop: 6
          }}
        >
          Typical Range : {payload[0].payload.range}
        </div>
      </div>
    );
  };

  return (
    <div className="timeline-card">

      <div className="benchmark-title">
        Timeline Benchmark by Indication{" "}
        <span className="unit">(days)</span>
      </div>

      <div
        style={{
          marginTop: 18,
          marginBottom: 20
        }}
      >

        <label
          style={{
            color: "#B8C6D6",
            fontSize: 13,
            display: "block",
            marginBottom: 8
          }}
        >
          Metric
        </label>

        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="benchmark-select"
        >
          {METRICS.map((item) => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>

      </div>

      <ResponsiveContainer
        width="100%"
        height={330}
      >
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 5,
            right: 120,
            left: 20,
            bottom: 5
          }}
          barCategoryGap={20}
        >
          <CartesianGrid
            stroke="#24364D"
            horizontal={false}
          />

          <XAxis
            type="number"
            stroke="#41556F"
            tick={{
              fill: "#D6E0EC",
              fontSize: 11
            }}
          />

          <YAxis
            type="category"
            width={210}
            dataKey="indication"
            tickFormatter={formatIndication}
            tick={{
              fill: "#E6EDF7",
              fontSize: 11
            }}
          />

          <Tooltip
            content={<TooltipContent />}
          />

          <Bar
            dataKey="value"
            radius={[0, 4, 4, 0]}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={selectedMetric.color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}