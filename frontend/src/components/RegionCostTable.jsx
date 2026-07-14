import React from "react";

import {
  costBenchmarkData,
  regions,
} from "../data/benchmarkData";

const getWidth = (value, suffix) => {
  let max = 100;

  if (suffix === "M") {
    max = 3.5;
  }

  if (suffix === "K") {
    max = 65;
  }

  return Math.max((value / max) * 100, 18);
};

function RegionCostTable() {
  return (
    <div className="table-wrapper">
      <table className="benchmark-table">

        <thead>
          <tr>

            <th className="metric-column">
              Cost Metric
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

          {costBenchmarkData.map((metric) => (

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
                            width: `${getWidth(
                              value.avg,
                              metric.suffix
                            )}%`,
                            background: region.color,
                          }}
                        />

                      </div>

                      <span className="benchmark-number">
                        {metric.suffix === "M"
                          ? `$${value.min.toFixed(1)}–$${value.max.toFixed(1)}${metric.suffix}`
                          : `$${value.min}–$${value.max}${metric.suffix}`}
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
  );
}

export default RegionCostTable;