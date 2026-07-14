import React from "react";
import "./OverallBenchmarkChart.css";

import VerticalBoxPlot from "./VerticalBoxPlot";
import overallBenchmarkData from "../data/overallBenchmarkData";

function OverallBenchmarkChart() {
  return (
    <div className="overall-benchmark-card">

      <div className="overall-header">

        <div className="overall-header-left">

          <h2 className="overall-title">
            Overall Timeline Benchmark
            <span>(Days)</span>
          </h2>

        </div>

      </div>

      <div className="overall-grid">

        {overallBenchmarkData.map((item) => (

          <VerticalBoxPlot
            key={item.title}
            title={item.title}
            unit={item.unit}
            p20={item.p20}
            p25={item.p25}
            p50={item.p50}
            p75={item.p75}
            p90={item.p90}
            color={item.color}
          />

        ))}

      </div>

    </div>
  );
}

export default OverallBenchmarkChart;