import React, { useMemo, useState } from "react";
import "./ComparisonBoxPlot.css";

function ComparisonBoxPlot({
  title,
  unit = "",
  metrics = [],
  colors = {},
  maxValue = 100,
}) {

  const metricNames = metrics.map((m) => m.metric);

  const [selectedMetric, setSelectedMetric] = useState(metricNames[0]);

  const selectedRow = useMemo(() => {
    return (
      metrics.find((m) => m.metric === selectedMetric) ||
      metrics[0]
    );
  }, [selectedMetric, metrics]);

  const comparisonKeys = useMemo(() => {
    if (!selectedRow) return [];

    return Object.keys(selectedRow).filter(
      (key) =>
        key !== "metric" &&
        key !== "maxValue"
    );
  }, [selectedRow]);

  const axisMax =
    selectedRow?.maxValue ||
    maxValue;

  const ticks = [];

  for (let i = 0; i <= 10; i++) {
    ticks.push(Math.round((axisMax / 10) * i));
  }

  const getPercent = (value) => {
    return (value / axisMax) * 100;
  };

  const formatHeading = (text) => {

    return text
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (c) => c.toUpperCase());

  };  return (
    <div className="comparison-boxplot-card">

      {/* ================= HEADER ================= */}

      <div className="comparison-boxplot-header">

        <div className="comparison-boxplot-title">

          <h3>
            {title}

            {unit && (
              <span>({unit})</span>
            )}

          </h3>

        </div>

        <div className="comparison-boxplot-controls">

          <label>Select Metric</label>

          <select
            value={selectedMetric}
            onChange={(e) =>
              setSelectedMetric(e.target.value)
            }
          >
            {metricNames.map((metric) => (
              <option
                key={metric}
                value={metric}
              >
                {metric}
              </option>
            ))}
          </select>

        </div>

      </div>

      {/* ================= LEGEND ================= */}

      <div className="comparison-boxplot-legend">

        <div className="legend-item">

          <span className="legend-dot best"></span>

          Best in Class

        </div>

        <div className="legend-item">

          <span className="legend-box"></span>

          Typical Range

        </div>

        <div className="legend-item">

          <span className="legend-dot worst"></span>

          Worst Case

        </div>

      </div>

      {/* ================= AXIS ================= */}

      <div className="comparison-axis">

        <div className="comparison-axis-left"></div>

        <div className="comparison-axis-right">

          {ticks.map((tick) => (

            <div
              key={tick}
              className="comparison-axis-tick"
            >
              {tick}
            </div>

          ))}

        </div>

      </div>

      {/* ================= ROWS ================= */}

      <div className="comparison-boxplot-body">

        {comparisonKeys.map((key) => {

          const row = selectedRow[key];

          if (!row) return null;

          const left = getPercent(row.best);
          const start = getPercent(row.low);
          const end = getPercent(row.high);
          const right = getPercent(row.worst);

          return (

            <div
              key={key}
              className="comparison-row"
            >

              <div className="comparison-label">

                {formatHeading(key)}

              </div>

              <div className="comparison-chart">
                                <div className="comparison-track">

                  {/* GRID */}

                  {ticks.map((tick) => (
                    <div
                      key={tick}
                      className="comparison-grid-line"
                      style={{
                        left: `${getPercent(tick)}%`,
                      }}
                    />
                  ))}

                  {/* WHISKER */}

                  <div
                    className="comparison-whisker"
                    style={{
                      left: `${left}%`,
                      width: `${right - left}%`,
                    }}
                  />

                  {/* BEST */}

                  <div
                    className="comparison-best"
                    style={{
                      left: `${left}%`,
                    }}
                  />

                  <div
                    className="comparison-best-label"
                    style={{
                      left: `${left}%`,
                    }}
                  >
                    {row.best}
                  </div>

                  {/* WORST */}

                  <div
                    className="comparison-worst"
                    style={{
                      left: `${right}%`,
                    }}
                  />

                  <div
                    className="comparison-worst-label"
                    style={{
                      left: `${right}%`,
                    }}
                  >
                    {row.worst}
                  </div>

                  {/* TYPICAL RANGE */}

                  <div
                    className="comparison-range"
                    style={{
                      left: `${start}%`,
                      width: `${end - start}%`,
                      background:
                        colors[key] || "#3B82F6",
                    }}
                  >
                    {row.low} – {row.high}
                  </div>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default ComparisonBoxPlot;