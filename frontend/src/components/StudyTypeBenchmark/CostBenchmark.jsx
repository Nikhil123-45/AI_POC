import React, { useState } from "react";
import "./StudyTypeBenchmark.css";
import BenchmarkRow from "./BenchmarkRow";
import { studyTypeCostData } from "../../data/studyTypeCostData";

const metrics = Object.keys(studyTypeCostData);

const MAX_VALUES = {
  "Total Study Cost": 400,
  "Site Cost": 200,
  "Monitoring Cost": 100,
  "Vendor Cost": 100
};

function CostBenchmark() {
  const [metric, setMetric] = useState(metrics[0]);

  const chartData = studyTypeCostData[metric];
  const maxValue = MAX_VALUES[metric];

  const tickStep = 50;

  const ticks = [];

  for (let i = 0; i <= maxValue; i += tickStep) {
    ticks.push(i);
  }

  return (
    <div className="study-card">

      <div className="study-header">

        <h2>
          Cost Benchmark by Study Type
          <span>($)</span>
        </h2>

        <div className="metric-select">

          <label>Select Metric</label>

          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
          >
            {metrics.map((m) => (
              <option
                key={m}
                value={m}
              >
                {m}
              </option>
            ))}
          </select>

        </div>

      </div>

      {/* Legend */}

      <div className="study-legend">

        <div className="legend-item">
          <span className="legend-green"></span>
          Best in Class
        </div>

        <div className="legend-item">
          <span className="legend-blue"></span>
          Typical Range
        </div>

        <div className="legend-item">
          <span className="legend-orange"></span>
          Worst Case
        </div>

      </div>

      {/* Axis */}

      <div className="axis">

        <div className="study-name-space"></div>

        <div className="axis-scale">

          {ticks.map((tick) => (
            <div key={tick}>
              ${tick}K
            </div>
          ))}

        </div>

      </div>

      {/* Rows */}

      {chartData.map((row) => (
        <BenchmarkRow
          key={row.studyType}
          row={row}
          max={maxValue}
        />
      ))}

    </div>
  );
}

export default CostBenchmark;