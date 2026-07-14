import { useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

import { indicationChartData } from "../data/indicationData";
import "./IndicationChart.css";

function IndicationChart() {

  const [metric, setMetric] = useState("All");

  const metricOptions = [
    "All",
    "Contract Execution Time",
    "Site Start-Up Duration",
    "Time to First Patient In (FPI)",
    "Enrollment Completion (LPI)",
    "End-to-End Study Timeline"
  ];

  const getBars = () => {

    switch (metric) {

      case "Contract Execution Time":
        return (
          <Bar
            dataKey="contract"
            name="Contract Execution Time"
            fill="#3B82F6"
            radius={[6, 6, 0, 0]}
            barSize={28}
          />
        );

      case "Site Start-Up Duration":
        return (
          <Bar
            dataKey="startup"
            name="Site Start-Up Duration"
            fill="#65A30D"
            radius={[6, 6, 0, 0]}
            barSize={28}
          />
        );

      case "Time to First Patient In (FPI)":
        return (
          <Bar
            dataKey="fpi"
            name="Time to First Patient In (FPI)"
            fill="#F59E0B"
            radius={[6, 6, 0, 0]}
            barSize={28}
          />
        );

      case "Enrollment Completion (LPI)":
        return (
          <Bar
            dataKey="lpi"
            name="Enrollment Completion (LPI)"
            fill="#8B5CF6"
            radius={[6, 6, 0, 0]}
            barSize={28}
          />
        );

      case "End-to-End Study Timeline":
        return (
          <Bar
            dataKey="timeline"
            name="End-to-End Study Timeline"
            fill="#EC4899"
            radius={[6, 6, 0, 0]}
            barSize={28}
          />
        );

      default:
        return (
          <>
            <Bar
              dataKey="contract"
              name="Contract Execution Time"
              fill="#3B82F6"
              radius={[6, 6, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="startup"
              name="Site Start-Up Duration"
              fill="#65A30D"
              radius={[6, 6, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="fpi"
              name="Time to First Patient In (FPI)"
              fill="#F59E0B"
              radius={[6, 6, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="lpi"
              name="Enrollment Completion (LPI)"
              fill="#8B5CF6"
              radius={[6, 6, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="timeline"
              name="End-to-End Study Timeline"
              fill="#EC4899"
              radius={[6, 6, 0, 0]}
              barSize={14}
            />
          </>
        );

    }

  };
    return (

    <div className="benchmark-card">

      <div className="benchmark-card-header">

        <div>

          <h2 className="benchmark-title">
            Benchmark Comparison by Indication
            <span>(days)</span>
          </h2>

        </div>

        <div className="metric-dropdown">

          <label>Select Metric</label>

          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
          >

            {metricOptions.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

      </div>

      <div
  style={{
    width: "100%",
    height: 320,
    padding: "10px 20px 10px"
  }}
>

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={indicationChartData}
            barCategoryGap="24%"
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0
            }}
          >

            <CartesianGrid
              stroke="#23354d"
              vertical={false}
            />

            <XAxis
              dataKey="indication"
              tick={{
                fill: "#d1d5db",
                fontSize: 12
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#d1d5db",
                fontSize: 12
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "10px",
                color: "#ffffff"
              }}
            />

            <Legend
  verticalAlign="top"
  align="center"
  wrapperStyle={{
    color: "#ffffff",
    fontSize: "12px",
    paddingBottom: 8
  }}
/>

            {getBars()}

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
  }

export default IndicationChart;