import React, { useState } from "react";
import "./StudyTypeBenchmark.css";
import BenchmarkRow from "./BenchmarkRow";
import { studyTypeBenchmarkData } from "../../data/studyTypeBenchmarkData";

const metrics = Object.keys(studyTypeBenchmarkData);

const MAX_VALUES = {
  "Contract Execution Time": 120,
  "Site Start-Up Duration": 120,
  "Time to First Patient In (FPI)": 120,
  "Enrollment Completion (LPI)": 500,
  "End-to-End Study Timeline": 800
};

function StudyTypeBenchmark() {
  const [metric, setMetric] = useState(metrics[0]);

  const chartData = studyTypeBenchmarkData[metric];
  const maxValue = MAX_VALUES[metric];

  const tickStep = maxValue <= 120 ? 10 : 100;

  const ticks = [];

  for (let i = 0; i <= maxValue; i += tickStep) {
    ticks.push(i);
  }

  return (
    <div className="study-card">

      <div className="study-header">

        <h2>
          Timeline Benchmark by Study Type
          <span>(days)</span>
        </h2>

        <div className="metric-select">

          <label>Select Metric</label>

          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
          >
            {metrics.map((item) => (
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
              {tick}
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

export default StudyTypeBenchmark;