import React from "react";
import "./RegionDistributionTable.css";

function IndicationDistributionTable({
  title,
  unit,
  color,
  data,
}) {
  if (!data || data.length === 0) return null;

  // Get indication names dynamically
  const indicationColumns = Object.keys(data[0]).filter(
    (key) => key !== "metric"
  );

  return (
    <div className={`distribution-card ${color}`}>

      <div className="distribution-header">
        <h3>
          {title}
          <span>({unit})</span>
        </h3>
      </div>

      <div className="distribution-table-wrapper">

        <table className="distribution-table">

          <thead>

            <tr>

              <th className="metric-column">
                Metric
              </th>

              {indicationColumns.map((column) => (
                <th
                  key={column}
                  className="region-column"
                >
                  {column
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {data.map((row, index) => (

              <tr key={index}>

                <td className="metric-name">
                  {row.metric}
                </td>

                {indicationColumns.map((column) => (

                  <td
                    key={column}
                    className="region-value"
                  >
                    {row[column]}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default IndicationDistributionTable;