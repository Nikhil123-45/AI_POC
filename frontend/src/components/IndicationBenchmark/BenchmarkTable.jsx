import React from "react";

const BenchmarkTable = ({
  data = [],
  metrics = []
}) => {
  return (
    <div className="benchmark-card">

      <div className="benchmark-table-wrapper">

        <table className="benchmark-table">

          <thead>
            <tr>

              <th className="indication-column">
                Indication
              </th>

              {metrics.map((metric) => (
                <th key={metric.key}>
                  <div className="metric-title">
                    {metric.label}
                  </div>
                </th>
              ))}

            </tr>
          </thead>

          <tbody>

            {data.map((row) => (
              <tr key={row.indication}>

                <td className="indication-name">
                  {row.indication}
                </td>

                {metrics.map((metric) => (
                  <td
                    key={metric.key}
                    className="metric-value"
                    style={{
                      color: metric.color
                    }}
                  >
                    {row[metric.labelKey]}
                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default BenchmarkTable;