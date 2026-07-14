import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Cell
} from "recharts";

import "./VendorBenchmarkChart.css";
import { vendorBenchmarkData } from "../data/vendorBenchmarkData";

const COLORS = {
  IQVIA: "#3B82F6",
  ICON: "#84CC16",
  Parexel: "#F59E0B"
};

// ===============================
// FORMAT METRIC LABELS
// ===============================

const formatMetric = (metric) => {
  switch (metric) {
    case "Contract Execution Time":
      return ["Contract Execution", "Time"];

    case "Site Start-Up Duration":
      return ["Site Start-Up", "Duration"];

    case "Time to First Patient In":
      return ["Time to First", "Patient In"];

    case "Enrollment Completion (LPI)":
      return ["Enrollment", "Completion (LPI)"];

    case "End-to-End Study Timeline":
      return ["End-to-End Study", "Timeline"];

    default:
      return [metric];
  }
};

// ===============================
// CUSTOM X AXIS LABEL
// ===============================

const CustomizedAxisTick = ({
  x,
  y,
  payload
}) => {

  const lines = formatMetric(payload.value);

  return (
    <g transform={`translate(${x},${y})`}>

      <text
        x={0}
        y={0}
        textAnchor="middle"
        fill="#374151"
        fontSize={13}
        fontWeight={500}
      >
        {lines.map((line, index) => (
          <tspan
            key={index}
            x="0"
            dy={index === 0 ? 16 : 18}
          >
            {line}
          </tspan>
        ))}
      </text>

    </g>
  );

};

// ===============================
// RANGE LABEL ABOVE BAR
// ===============================

const RangeLabel = ({
  x,
  y,
  width,
  value
}) => (

  <text
    x={x + width / 2}
    y={y - 10}
    textAnchor="middle"
    fill="#111827"
    fontSize={12}
    fontWeight="700"
  >
    {value}
  </text>

);

// ===============================
// CUSTOM TOOLTIP
// ===============================

const CustomTooltip = ({
  active,
  payload,
  label
}) => {

  if (!active || !payload || !payload.length)
    return null;

  const item = payload[0].payload;

  return (

    <div className="tooltip-card">

      <div className="tooltip-title">
        {label}
      </div>

      <div className="tooltip-text">
        <strong>IQVIA</strong> : {item.IQVIA_Label} Days
      </div>

      <div className="tooltip-text">
        <strong>ICON</strong> : {item.ICON_Label} Days
      </div>

      <div className="tooltip-text">
        <strong>Parexel</strong> : {item.Parexel_Label} Days
      </div>

    </div>

  );

};

// ===============================
// CUSTOM LEGEND
// ===============================

const CustomLegend = () => (

  <div className="custom-legend">

    <div className="legend-item">
      <span
        className="legend-box"
        style={{ background: COLORS.IQVIA }}
      />
      IQVIA
    </div>

    <div className="legend-item">
      <span
        className="legend-box"
        style={{ background: COLORS.ICON }}
      />
      ICON
    </div>

    <div className="legend-item">
      <span
        className="legend-box"
        style={{ background: COLORS.Parexel }}
      />
      Parexel
    </div>

  </div>

);function VendorBenchmarkChart() {

  return (

    <div className="vendor-card">

      <div className="vendor-benchmark-header">

        <div className="vendor-benchmark-title">
          <h2>
            Benchmark Comparison by Vendor{" "}
            <span>(days)</span>
          </h2>
        </div>

      </div>

      <div className="vendor-legend-wrapper">
        <CustomLegend />
      </div>

      <div className="vendor-chart">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={vendorBenchmarkData}
            margin={{
              top: 35,
              right: 20,
              left: 10,
              bottom: 45
            }}
            barGap={8}
            barCategoryGap={24}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="metric"
              interval={0}
              height={72}
              tick={<CustomizedAxisTick />}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[0, 110]}
              tick={{
                fill: "#374151",
                fontSize: 13
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            {/* =========================
                IQVIA
            ========================== */}

            <Bar
              dataKey="IQVIA"
              fill={COLORS.IQVIA}
              radius={[6, 6, 0, 0]}
              maxBarSize={30}
            >

              {vendorBenchmarkData.map((item, index) => (
                <Cell
                  key={`iqvia-${index}`}
                  fill={COLORS.IQVIA}
                />
              ))}

              <LabelList
                dataKey="IQVIA_Label"
                position="top"
                content={<RangeLabel />}
              />

            </Bar>

            {/* =========================
                ICON
            ========================== */}

            <Bar
              dataKey="ICON"
              fill={COLORS.ICON}
              radius={[6, 6, 0, 0]}
              maxBarSize={30}
            >

              {vendorBenchmarkData.map((item, index) => (
                <Cell
                  key={`icon-${index}`}
                  fill={COLORS.ICON}
                />
              ))}

              <LabelList
                dataKey="ICON_Label"
                position="top"
                content={<RangeLabel />}
              />

            </Bar>

            {/* =========================
                Parexel
            ========================== */}

            <Bar
              dataKey="Parexel"
              fill={COLORS.Parexel}
              radius={[6, 6, 0, 0]}
              maxBarSize={30}
            >

              {vendorBenchmarkData.map((item, index) => (
                <Cell
                  key={`parexel-${index}`}
                  fill={COLORS.Parexel}
                />
              ))}

              <LabelList
                dataKey="Parexel_Label"
                position="top"
                content={<RangeLabel />}
              />

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default VendorBenchmarkChart;