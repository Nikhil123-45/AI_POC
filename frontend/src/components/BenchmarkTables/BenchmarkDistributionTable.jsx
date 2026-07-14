import React from "react";
import "./BenchmarkDistributionTable.css";

function BenchmarkDistributionTable({
  title,
  unit,
  color = "purple",
  data = [],
}) {
  /* ==========================================
      FORMAT VALUE
  ========================================== */

  const formatValue = (value, metric = "") => {
    if (value === undefined || value === null || value === "-") {
      return "-";
    }

    const metricName = metric.toLowerCase();

    // Cost per Patient & FMV Alignment
    if (
      metricName.includes("cost per patient") ||
      metricName.includes("fmv")
    ) {
      return `$${Number(value).toLocaleString()}`;
    }

    // Million-based cost metrics
    if (
      metricName.includes("total study cost") ||
      metricName.includes("per-site cost") ||
      metricName.includes("start-up cost")
    ) {
      return `$${Number(value).toFixed(2)}M`;
    }

    // Timeline or other metrics
    return value;
  };

  /* ==========================================
      FORMAT RANGE
  ========================================== */

  const formatTypicalRange = (overall, metric = "") => {
    if (!overall) return "-";

    return `${formatValue(
      overall.p25,
      metric
    )} – ${formatValue(
      overall.p75,
      metric
    )}`;
  };

  return (
    <div className={`distribution-card ${color}`}>

      <div className="distribution-header">
        <h3>
          {title}
          {unit && <span> ({unit})</span>}
        </h3>
      </div>

      <div className="distribution-table-wrapper">

        <table className="distribution-table">

          <thead>
            <tr>
              <th className="metric-column">
                Metric
              </th>

              <th className="best-column">
                Best in Class
              </th>

              <th className="range-column">
                Typical Range
              </th>
            </tr>
          </thead>

          <tbody>

            {Array.isArray(data) &&
              data.map((row, index) => (

                <tr key={index}>

                  <td className="metric-name">
                    {row.metric}
                  </td>

                  <td className="best-value">
                    {formatValue(
                      row.overall?.p20,
                      row.metric
                    )}
                  </td>

                  <td className="range-value">
                    {formatTypicalRange(
                      row.overall,
                      row.metric
                    )}
                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default BenchmarkDistributionTable;