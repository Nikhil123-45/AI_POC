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

import costData from "../../data/indicationCostData";

const COLORS = {
  site: "#7C4DFF",
  patient: "#2196F3",
  monitoring: "#2EC4B6",
  investigator: "#F39C12",
  other: "#E0569A"
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

const renderLabel = ({ x, y, width, height, value }) => {
  if (width < 45) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      fontSize={10}
      fontWeight={600}
      dominantBaseline="middle"
      textAnchor="middle"
    >
      ${value.toFixed(2)}M
    </text>
  );
};

const TooltipContent = ({ active, payload, label }) => {
  if (!active || !payload) return null;

  return (
    <div
      style={{
        background: "#172338",
        border: "1px solid #314968",
        borderRadius: 8,
        padding: "10px 12px",
        color: "#fff",
        fontSize: 12
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: 14,
          marginBottom: 8
        }}
      >
        {label}
      </div>

      {payload.map((item) => (
        <div
          key={item.dataKey}
          style={{
            color: item.color,
            marginBottom: 3,
            fontSize: 12
          }}
        >
          {item.name}: ${item.value.toFixed(2)}M
        </div>
      ))}
    </div>
  );
};

export default function IndicationCostChart() {
  return (
    <div className="cost-card">

      <div className="benchmark-title">
        Cost Benchmarks by Indication{" "}
        <span className="unit">($)</span>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={costData}
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
            tickFormatter={(value) => `$${value}M`}
          />

          <YAxis
            type="category"
            width={170}
            dataKey="indication"
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

          <Bar
            stackId="cost"
            dataKey="site"
            fill={COLORS.site}
            name="Per-Site Cost"
          >
            <LabelList
              dataKey="site"
              content={renderLabel}
            />
          </Bar>

          <Bar
            stackId="cost"
            dataKey="patient"
            fill={COLORS.patient}
            name="Patient Related Cost"
          >
            <LabelList
              dataKey="patient"
              content={renderLabel}
            />
          </Bar>

          <Bar
            stackId="cost"
            dataKey="monitoring"
            fill={COLORS.monitoring}
            name="Monitoring Cost"
          >
            <LabelList
              dataKey="monitoring"
              content={renderLabel}
            />
          </Bar>

          <Bar
            stackId="cost"
            dataKey="investigator"
            fill={COLORS.investigator}
            name="Investigator & Other Fees"
          >
            <LabelList
              dataKey="investigator"
              content={renderLabel}
            />
          </Bar>

          <Bar
            stackId="cost"
            dataKey="other"
            fill={COLORS.other}
            name="Other Costs"
          >
            <LabelList
              dataKey="other"
              content={renderLabel}
            />
          </Bar>

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}