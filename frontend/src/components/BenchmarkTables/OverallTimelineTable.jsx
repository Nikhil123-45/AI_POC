import React from "react";
import "./OverallTimelineTable.css";
import overallTimelineTableData from "../../data/overallTimelineTableData";

function OverallTimelineTable() {
  return (
    <div className="overall-table-card">

      <div className="overall-table-header">
        <h3>
          Timeline Benchmark Distribution
          <span> (Days)</span>
        </h3>
      </div>

      <table className="overall-table">

        <thead>

          <tr>
            <th className="metric-col">Metric</th>

            <th className="best-col">
              Best in Class
              <br />
              <span>(P20)</span>
            </th>

            <th className="p25-col">
              P25
            </th>

            <th className="p50-col">
              Median
              <br />
              <span>(P50)</span>
            </th>

            <th className="p75-col">
              P75
            </th>

            <th className="p90-col">
              P90
            </th>
          </tr>

        </thead>

        <tbody>

          {overallTimelineTableData.map((row) => (
            <tr key={row.metric}>

              <td className="metric-name">
                {row.metric}
              </td>

              <td className="best-value">
                {row.p20}
              </td>

              <td className="p25-value">
                {row.p25}
              </td>

              <td className="p50-value">
                {row.p50}
              </td>

              <td className="p75-value">
                {row.p75}
              </td>

              <td className="p90-value">
                {row.p90}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <div className="table-footer">
        All values are shown in Days
      </div>

    </div>
  );
}

export default OverallTimelineTable;