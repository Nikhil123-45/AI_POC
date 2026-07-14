import React from "react";

const colors = [
  "#22c55e", // US
  "#84cc16", // Europe
  "#facc15", // India
  "#fb923c", // APAC
  "#ef4444", // LATAM
  "#8b5cf6"  // MEA
];

const maxValue = 620;

const BenchmarkRow = ({ icon, metric, values }) => {
  return (
    <tr>

      <td className="metric-cell">

        <div className="metric-content">

          <div className="metric-icon">

            {icon}

          </div>

          <span>{metric}</span>

        </div>

      </td>

      {values.map((value, index) => (

        <td key={index}>

          <div className="value-cell">

            <div className="progress-track">

              <div
                className="progress-fill"
                style={{
                  width: `${(value / maxValue) * 100}%`,
                  background: colors[index]
                }}
              />

            </div>

            <span className="metric-value">

              {value}

            </span>

          </div>

        </td>

      ))}

    </tr>
  );
};

export default BenchmarkRow;