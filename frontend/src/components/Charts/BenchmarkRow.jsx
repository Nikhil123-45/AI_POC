import React from "react";
import "./BenchmarkRow.css";

function BenchmarkRow({
  label,
  best,
  low,
  median,
  high,
  worst,
  max = 120,
  color = "purple",
}) {

  const getPosition = (value) => {

    return (value / max) * 100;

  };

  const bestPos = getPosition(best);
  const lowPos = getPosition(low);
  const highPos = getPosition(high);
  const worstPos = getPosition(worst);

  return (

    <div className="benchmark-row">

      {/* Label */}

      <div className="benchmark-row-label">

        {label}

      </div>

      {/* Chart */}

      <div className="benchmark-row-chart">

        {/* Vertical Grid */}

        <div className="benchmark-grid">

          {Array.from({ length: 13 }).map((_, i) => (

            <div
              key={i}
              className="grid-line"
            />

          ))}

        </div>

        {/* Grey Connector */}
                <div
          className="benchmark-connector"
          style={{
            left: `${bestPos}%`,
            width: `${worstPos - bestPos}%`,
          }}
        />

        {/* Best */}

        <div
          className="benchmark-best-dot"
          style={{
            left: `${bestPos}%`,
          }}
        />

        <div
          className="benchmark-best-value"
          style={{
            left: `${bestPos}%`,
          }}
        >
          {best}
        </div>

        {/* Typical Range */}

        <div
          className={`benchmark-range ${color}`}
          style={{
            left: `${lowPos}%`,
            width: `${highPos - lowPos}%`,
          }}
        >

          <span>

            {low} - {high}

          </span>

        </div>

        {/* Worst */}

        <div
          className="benchmark-worst-dot"
          style={{
            left: `${worstPos}%`,
          }}
        />

        <div
          className="benchmark-worst-value"
          style={{
            left: `${worstPos}%`,
          }}
        >
          {worst}
        </div>
              </div>

    </div>

  );

}

export default BenchmarkRow;