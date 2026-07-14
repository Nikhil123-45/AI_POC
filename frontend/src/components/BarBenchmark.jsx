import React from "react";

import { benchmarkData, regions } from "../data/benchmarkData";

const getWidth = (value) => {
  const max = 620;
  return Math.max((value / max) * 100, 18);
};

function BarBenchmark() {
  return (
    <div className="benchmark-card">
      <div className="table-wrapper">
        <table className="benchmark-table">
          <thead>
            <tr>
              <th className="metric-column">
                Metric
              </th>

              {regions.map((region) => (
                <th key={region.id}>
                  <div className="region-header">
                    <div className="region-flag-circle">
                      <img
                        src={region.flag}
                        alt={region.name}
                        className="region-flag"
                      />
                    </div>

                    <span>{region.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {benchmarkData.map((metric) => (
              <tr key={metric.metric}>
                <td className="metric-column">
                  <div className="metric-info">
                    <span className="metric-name">
                      {metric.metric}
                    </span>
                  </div>
                </td>

                {regions.map((region) => {
                  const value = metric.values[region.id];

                  return (
                    <td key={region.id}>
                      <div className="benchmark-cell">
                        <div className="benchmark-progress">
                          <div
                            className="benchmark-progress-fill"
                            style={{
                              width: `${getWidth(value.p50)}%`,
                              background: region.color
                            }}
                          />
                        </div>

                        <span className="benchmark-number">
                          {value.p25}–{value.p75}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BarBenchmark;