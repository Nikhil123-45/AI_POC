import React from "react";
import "./RegionDistributionTable.css";

function RegionDistributionTable({
  title,
  unit,
  color = "purple",
  data = [],
}) {
  return (
    <div className={`distribution-card ${color}`}>

      <div className="distribution-header">
        <h3>
          {title}
          <span> ({unit})</span>
        </h3>
      </div>

      <div className="distribution-table-wrapper">

        <table className="distribution-table">

          <thead>

            <tr>

              <th className="metric-column">
                Metric
              </th>

              <th className="region-column">
                US
              </th>

              <th className="region-column">
                India
              </th>

              <th className="region-column">
                Europe
              </th>

              <th className="region-column">
                APAC
              </th>

              <th className="region-column">
                LATAM
              </th>

              <th className="region-column">
                MEA
              </th>

            </tr>

          </thead>

          <tbody>

            {data.map((row, index) => (

              <tr key={index}>

                <td className="metric-name">
                  {row.metric}
                </td>

                <td className="region-value us">
                  {row.us}
                </td>

                <td className="region-value india">
                  {row.india}
                </td>

                <td className="region-value europe">
                  {row.europe}
                </td>

                <td className="region-value apac">
                  {row.apac}
                </td>

                <td className="region-value latam">
                  {row.latam}
                </td>

                <td className="region-value mea">
                  {row.mea}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RegionDistributionTable;