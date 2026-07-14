import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

import timelineData from "../../data/indicationTimelineData";

const COLORS = {
  contract: "#f4c20d",
  timeline: "#8a8f98",
  enrollment: "#61b8f6",
  startup: "#d87ac5",
  fpi: "#8fd17a"
};

// Display shorter indication names
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

/* =========================================================
   RANGE LABEL RENDERERS
========================================================= */

const renderContractLabel = ({ x, y, width, height, index }) => {
  if (width < 55) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      fontSize={9}
      fontWeight={600}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {timelineData[index].contractLabel}
    </text>
  );
};

const renderTimelineLabel = ({ x, y, width, height, index }) => {
  if (width < 95) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      fontSize={10}
      fontWeight={700}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {timelineData[index].timelineLabel}
    </text>
  );
};

const renderEnrollmentLabel = ({ x, y, width, height, index }) => {
  if (width < 70) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      fontSize={9}
      fontWeight={600}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {timelineData[index].enrollmentLabel}
    </text>
  );
};

const renderStartupLabel = ({ x, y, width, height, index }) => {
  if (width < 55) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      fontSize={8}
      fontWeight={600}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {timelineData[index].startupLabel}
    </text>
  );
};

const renderFPILabel = ({ x, y, width, height, index }) => {
  if (width < 50) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      fontSize={8}
      fontWeight={600}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {timelineData[index].fpiLabel}
    </text>
  );
};

/* =========================================================
   CUSTOM TOOLTIP
========================================================= */

const TooltipContent = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: "#172338",
        border: "1px solid #314968",
        borderRadius: 8,
        padding: "10px 12px",
        color: "#fff",
        minWidth: 220
      }}
    >
      <div
        style={{
          fontWeight: 700,
          marginBottom: 10,
          fontSize: 14
        }}
      >
        {label}
      </div>

      {payload.map((item) => (
        <div
          key={item.dataKey}
          style={{
            marginBottom: 8,
            color: item.color,
            fontSize: 12
          }}
        >
          <div>
            <strong>{item.name}</strong>
          </div>

          <div>Value: {item.value} days</div>

          <div>
            Typical Range:{" "}
            {item.payload[`${item.dataKey}Label`]} days
          </div>
        </div>
      ))}
    </div>
  );
};export default function IndicationTimelineChart() {
  return (
    <div className="timeline-card">

      <div className="benchmark-title">
        Timeline Benchmark by Indication{" "}
        <span className="unit">(days)</span>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart
          data={timelineData}
          layout="vertical"
          barCategoryGap={16}
          margin={{
            top: 10,
            right: 260,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid
            stroke="#26364c"
            horizontal={false}
          />

          <XAxis
            type="number"
            stroke="#41556f"
            tick={{
              fill: "#cfd8e3",
              fontSize: 10
            }}
          />

          <YAxis
            type="category"
            dataKey="indication"
            width={170}
            tickFormatter={formatIndication}
            tick={{
              fill: "#d9e3ef",
              fontSize: 10
            }}
          />

          <Tooltip content={<TooltipContent />} />

          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="square"
            iconSize={10}
            wrapperStyle={{
              right: 0,
              top: 45,
              fontSize: "11px",
              lineHeight: "20px",
              color: "#d9e3ef"
            }}
          />

          {/* Contract */}
          <Bar
            stackId="timeline"
            dataKey="contract"
            fill={COLORS.contract}
            name="Contract Execution Time"
          >
            <LabelList content={renderContractLabel} />
          </Bar>

          {/* End-to-End Timeline */}
          <Bar
            stackId="timeline"
            dataKey="timeline"
            fill={COLORS.timeline}
            name="End-to-End Study Timeline"
          >
            <LabelList content={renderTimelineLabel} />
          </Bar>

          {/* Enrollment */}
          <Bar
            stackId="timeline"
            dataKey="enrollment"
            fill={COLORS.enrollment}
            name="Enrollment Completion (LPI)"
          >
            <LabelList content={renderEnrollmentLabel} />
          </Bar>

          {/* Startup */}
          <Bar
            stackId="timeline"
            dataKey="startup"
            fill={COLORS.startup}
            name="Site Start-Up Duration"
          >
            <LabelList content={renderStartupLabel} />
          </Bar>

          {/* FPI */}
          <Bar
            stackId="timeline"
            dataKey="fpi"
            fill={COLORS.fpi}
            name="Time to First Patient In (FPI)"
          >
            <LabelList content={renderFPILabel} />
          </Bar>

        </BarChart>
      </ResponsiveContainer>    </div>
  );
}