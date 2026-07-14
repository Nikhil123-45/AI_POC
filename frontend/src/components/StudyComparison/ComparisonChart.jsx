import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ReferenceLine,
  ReferenceArea,
} from "recharts";

import { chart } from "../../data/studyComparisonData";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const axisOptions = [
  {
    label: "Enrollment Duration (Days)",
    value: "enrollment",
    domain: [0, 600],
    ticks: [0, 100, 200, 300, 400, 500, 600],
  },
  {
    label: "Startup Duration (Days)",
    value: "startup",
    domain: [0, 220],
    ticks: [0, 40, 80, 120, 160, 200, 220],
  },
  {
    label: "Study Cost (USD M)",
    value: "cost",
    domain: [0, 3],
    ticks: [0, 0.5, 1, 1.5, 2, 2.5, 3],
  },
  {
    label: "Enrollment Target",
    value: "target",
    domain: [0, 700],
    ticks: [0, 100, 200, 300, 400, 500, 600, 700],
  },
  {
    label: "Number of Sites",
    value: "sites",
    domain: [0, 200],
    ticks: [0, 50, 100, 150, 200],
  },
];

export default function ComparisonChart() {

  const [xAxis, setXAxis] = useState("enrollment");
  const [yAxis, setYAxis] = useState("startup");
  const [bubbleSize, setBubbleSize] = useState("cost");

  const benchmarkStudies = useMemo(
    () => chart.filter((study) => study.benchmark),
    []
  );

  const yourStudy = useMemo(
    () => chart.filter((study) => !study.benchmark),
    []
  );

  const xConfig = axisOptions.find(
    (item) => item.value === xAxis
  );

  const yConfig = axisOptions.find(
    (item) => item.value === yAxis
  );

  return (

    <div className="comparison-chart-card">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="chart-header">

        
<div className="chart-header-left">

  <h2>
    Your Study vs Similar Studies
  </h2>

</div>

        <div className="chart-controls">

          <div className="chart-control">

            <label>X Axis</label>

            <select
              value={xAxis}
              onChange={(e) => setXAxis(e.target.value)}
            >
              {axisOptions.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>

          </div>

          <div className="chart-control">

            <label>Y Axis</label>

            <select
              value={yAxis}
              onChange={(e) => setYAxis(e.target.value)}
            >
              {axisOptions.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>

          </div>

          <div className="chart-control">

            <label>Bubble Size</label>

            <select
              value={bubbleSize}
              onChange={(e) => setBubbleSize(e.target.value)}
            >
              {axisOptions.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>

      <CustomLegend />      <ResponsiveContainer
        width="100%"
        height={600}
      >

        <ScatterChart
          margin={{
            top: 40,
            right: 80,
            left: 60,
            bottom: 60,
          }}
        >

          {/* =====================================================
              PERFORMANCE QUADRANTS
          ===================================================== */}

          <ReferenceArea
            x1={0}
            x2={xConfig.domain[1] / 2}
            y1={0}
            y2={yConfig.domain[1] / 2}
            fill="#DCFCE7"
            fillOpacity={0.16}
          />

          <ReferenceArea
            x1={xConfig.domain[1] / 2}
            x2={xConfig.domain[1]}
            y1={0}
            y2={yConfig.domain[1] / 2}
            fill="#DBEAFE"
            fillOpacity={0.16}
          />

          <ReferenceArea
            x1={0}
            x2={xConfig.domain[1] / 2}
            y1={yConfig.domain[1] / 2}
            y2={yConfig.domain[1]}
            fill="#FEF3C7"
            fillOpacity={0.16}
          />

          <ReferenceArea
            x1={xConfig.domain[1] / 2}
            x2={xConfig.domain[1]}
            y1={yConfig.domain[1] / 2}
            y2={yConfig.domain[1]}
            fill="#FEE2E2"
            fillOpacity={0.16}
          />

          {/* =====================================================
              SVG DEFINITIONS
          ===================================================== */}

          <defs>

            {/* Similar Studies Bubble */}

            <radialGradient
              id="benchmarkBubble"
              cx="35%"
              cy="35%"
              r="70%"
            >
              <stop
                offset="0%"
                stopColor="#BFDBFE"
              />

              <stop
                offset="60%"
                stopColor="#60A5FA"
              />

              <stop
                offset="100%"
                stopColor="#2563EB"
              />
            </radialGradient>

            {/* Your Study Bubble */}

            <radialGradient
              id="studyBubble"
              cx="35%"
              cy="35%"
              r="70%"
            >
              <stop
                offset="0%"
                stopColor="#F5D0FE"
              />

              <stop
                offset="60%"
                stopColor="#C084FC"
              />

              <stop
                offset="100%"
                stopColor="#9333EA"
              />
            </radialGradient>

            {/* Bubble Shadow */}

            <filter
              id="bubbleShadow"
              x="-60%"
              y="-60%"
              width="220%"
              height="220%"
            >
              <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="6"
                floodOpacity="0.18"
                floodColor="#0F172A"
              />
            </filter>

            {/* Purple Glow */}

            <filter
              id="studyGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="12"
                result="coloredBlur"
              />

              <feMerge>

                <feMergeNode in="coloredBlur" />

                <feMergeNode in="SourceGraphic" />

              </feMerge>

            </filter>

          </defs>          {/* =====================================================
              GRID
          ===================================================== */}

          <CartesianGrid
            stroke="#E2E8F0"
            strokeDasharray="4 6"
            vertical
            horizontal
          />

          {/* =====================================================
              REFERENCE LINES
          ===================================================== */}

          <ReferenceLine
            x={xConfig.domain[1] / 2}
            stroke="#94A3B8"
            strokeDasharray="5 5"
          />

          <ReferenceLine
            y={yConfig.domain[1] / 2}
            stroke="#94A3B8"
            strokeDasharray="5 5"
          />

          {/* =====================================================
              X AXIS
          ===================================================== */}

          <XAxis
            type="number"
            dataKey={xAxis}
            domain={xConfig.domain}
            ticks={xConfig.ticks}
            tick={{
              fill: "#475569",
              fontSize: 12,
              fontWeight: 600,
            }}
            tickLine={false}
            axisLine={false}
            label={{
              value: xConfig.label,
              position: "insideBottom",
              offset: -18,
              fill: "#334155",
              fontSize: 13,
              fontWeight: 600,
            }}
          />

          {/* =====================================================
              Y AXIS
          ===================================================== */}

          <YAxis
            type="number"
            dataKey={yAxis}
            domain={yConfig.domain}
            ticks={yConfig.ticks}
            tick={{
              fill: "#475569",
              fontSize: 12,
              fontWeight: 600,
            }}
            tickLine={false}
            axisLine={false}
            label={{
              value: yConfig.label,
              angle: -90,
              position: "insideLeft",
              fill: "#334155",
              fontSize: 13,
              fontWeight: 600,
            }}
          />

          {/* =====================================================
              BUBBLE SIZE
          ===================================================== */}

          <ZAxis
            type="number"
            dataKey={bubbleSize}
            range={[350, 1800]}
            scale="sqrt"
          />

          {/* =====================================================
              TOOLTIP
          ===================================================== */}

          <Tooltip
            cursor={{
              stroke: "#2563EB",
              strokeWidth: 2,
              strokeDasharray: "5 5",
            }}
            content={<CustomTooltip />}
          />          {/* =====================================================
              SIMILAR STUDIES
          ===================================================== */}

          <Scatter
            name="Similar Studies"
            data={benchmarkStudies}
            animationDuration={1200}
            animationEasing="ease-out"
            shape={(props) => {

              const { cx, cy, payload } = props;

              const bubbleValue = Number(payload[bubbleSize]);

              const radius = Math.max(
                14,
                Math.min(
                  28,
                  Math.sqrt(bubbleValue) * 2.4
                )
              );

              return (

                <g>

                  {/* Bubble Shadow */}

                  <circle
                    cx={cx}
                    cy={cy + 3}
                    r={radius}
                    fill="rgba(15,23,42,.10)"
                  />

                  {/* Main Bubble */}

                  <circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill="url(#benchmarkBubble)"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    filter="url(#bubbleShadow)"
                  />

                  {/* Bubble Highlight */}

                  <circle
                    cx={cx - radius * 0.35}
                    cy={cy - radius * 0.35}
                    r={radius * 0.28}
                    fill="#FFFFFF"
                    opacity="0.45"
                  />

                  {/* Small Center Dot */}

                  <circle
                    cx={cx}
                    cy={cy}
                    r="2.8"
                    fill="#FFFFFF"
                    opacity="0.9"
                  />

                </g>

              );

            }}
          />

          {/* =====================================================
              MEDIAN LINES
          ===================================================== */}

          <ReferenceLine
            x={300}
            stroke="#64748B"
            strokeDasharray="3 5"
            strokeOpacity={0.6}
          />

          <ReferenceLine
            y={110}
            stroke="#64748B"
            strokeDasharray="3 5"
            strokeOpacity={0.6}
          />

          {/* =====================================================
              QUADRANT LABELS
          ===================================================== */}

          <text
  x="12%"
  y="6%"
  fill="#15803D"
  fontSize="14"
  fontWeight="700"
>
  High Performing
</text>

<text
  x="62%"
  y="6%"
  fill="#2563EB"
  fontSize="14"
  fontWeight="700"
>
  Efficient but Costly
</text>

<text
  x="12%"
  y="93%"
  fill="#D97706"
  fontSize="14"
  fontWeight="700"
>
  Improvement Opportunity
</text>

<text
  x="62%"
  y="93%"
  fill="#DC2626"
  fontSize="14"
  fontWeight="700"
>
  Needs Attention
</text>          {/* =====================================================
              YOUR STUDY
          ===================================================== */}

          <Scatter
            name="Your Study"
            data={yourStudy}
            animationDuration={1400}
            animationEasing="ease-out"
            shape={(props) => {

              const { cx, cy, payload } = props;

              const bubbleValue = Number(payload[bubbleSize]);

              const radius = Math.max(
                20,
                Math.min(
                  36,
                  Math.sqrt(bubbleValue) * 2.8
                )
              );

              return (

                <g>

                  {/* Glow */}

                  <circle
                    cx={cx}
                    cy={cy}
                    r={radius + 18}
                    fill="#A855F7"
                    opacity="0.05"
                    filter="url(#studyGlow)"
                  />

                  <circle
                    cx={cx}
                    cy={cy}
                    r={radius + 10}
                    fill="#A855F7"
                    opacity="0.10"
                  />

                  {/* Shadow */}

                  <circle
                    cx={cx}
                    cy={cy + 4}
                    r={radius}
                    fill="rgba(15,23,42,.18)"
                  />

                  {/* Main Bubble */}

                  <circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill="url(#studyBubble)"
                    stroke="#FFFFFF"
                    strokeWidth={4}
                    filter="url(#bubbleShadow)"
                  />

                  {/* Highlight */}

                  <circle
                    cx={cx - radius * 0.35}
                    cy={cy - radius * 0.35}
                    r={radius * 0.30}
                    fill="#FFFFFF"
                    opacity="0.45"
                  />

                  {/* Center */}

                  <circle
                    cx={cx}
                    cy={cy}
                    r="3"
                    fill="#FFFFFF"
                  />

                  {/* Connector */}

                  <line
                    x1={cx + radius}
                    y1={cy}
                    x2={cx + radius + 24}
                    y2={cy}
                    stroke="#64748B"
                    strokeWidth="2"
                  />

                  {/* Label */}

                  <g
                    transform={`translate(${cx + radius + 24}, ${cy - 18})`}
                  >

                    <rect
                      width="120"
                      height="36"
                      rx="10"
                      fill="#1E293B"
                      stroke="#475569"
                    />

                    <text
                      x="60"
                      y="22"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="13"
                      fontWeight="700"
                    >
                      Your Study
                    </text>

                  </g>

                </g>

              );

            }}
          />

        </ScatterChart>

      </ResponsiveContainer>      
</div>

  );

}