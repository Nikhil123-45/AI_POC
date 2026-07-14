import React, { useMemo, useState, useEffect } from "react";
import "./BenchmarkBoxPlot.css";
import BenchmarkRow from "./BenchmarkRow";

/* ==========================================
    COLUMN KEY MAP
========================================== */

const keyMap = {
  Overall: "overall",

  // Region
  US: "us",
  India: "india",
  Europe: "europe",
  APAC: "apac",
  LATAM: "latam",
  MEA: "mea",

  // Indication
  "Multiple Myeloma": "multipleMyeloma",
  DLBCL: "dlbcl",
  "B-ALL": "ball",
  "Follicular Lymphoma": "follicularLymphoma",

  // Study Type
  RWE: "rwe",
  IIS: "iis",
  "Patient Registry": "patientRegistry",
  "Expanded Access": "expandedAccess",

  // Vendor
  IQVIA: "iqvia",
  Parexel: "parexel",
  ICON: "icon",
  Syneos: "syneos",
  PPD: "ppd",
};

function BenchmarkBoxPlot({
  title,
  unit,
  data = [],
  columns = [],
  color = "purple",
}) {

  /* ==========================================
      METRICS
  ========================================== */

  const metrics = useMemo(() => {
    return data.map((item) => item.metric);
  }, [data]);

  const [selectedMetric, setSelectedMetric] = useState("");

  useEffect(() => {
    if (metrics.length > 0 && !metrics.includes(selectedMetric)) {
      setSelectedMetric(metrics[0]);
    }
  }, [metrics, selectedMetric]);

  /* ==========================================
      SELECTED METRIC
  ========================================== */

  const selectedData = useMemo(() => {
    return data.find(
      (item) => item.metric === selectedMetric
    );
  }, [selectedMetric, data]);

  /* ==========================================
      DISPLAY COLUMNS
  ========================================== */

  const displayColumns = useMemo(() => {
    return columns.length > 0 ? columns : ["Overall"];
  }, [columns]);

  /* ==========================================
      MAX VALUE
  ========================================== */

  const maxValue = useMemo(() => {

    if (!selectedData) return 100;

    let max = 0;

    displayColumns.forEach((column) => {

      const key = keyMap[column];
      const benchmark = selectedData[key];

      if (benchmark) {
        max = Math.max(max, benchmark.p90);
      }

    });

    return max || 100;

  }, [selectedData, displayColumns]);

  /* ==========================================
      HEADER COLOR
  ========================================== */

  const headerColor =
    color === "green"
      ? "#16A34A"
      : "#6D28D9";

  if (!selectedData) {
    return null;
  }

  return (

    <div className="benchmark-boxplot-card">

      {/* ======================================
          HEADER
      ====================================== */}

      <div
        className="benchmark-boxplot-header"
        style={{
          background: headerColor,
        }}
      >

        <div className="benchmark-boxplot-title">

          <h3>
            {title}
            {unit && (
              <span> ({unit})</span>
            )}
          </h3>

        </div>

        <div className="benchmark-boxplot-filter">

          <label>
            Select Metric
          </label>

          <select
            value={selectedMetric}
            onChange={(e) =>
              setSelectedMetric(e.target.value)
            }
          >

            {metrics.map((metric) => (

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

      {/* ======================================
          LEGEND
      ====================================== */}

      <div className="benchmark-boxplot-legend">

        <div className="legend-item">
          <span className="legend-best" />
          <span>Best in Class</span>
        </div>

        <div className="legend-item">
          <span className="legend-range" />
          <span>Typical Range</span>
        </div>

        <div className="legend-item">
          <span className="legend-worst" />
          <span>Worst Case</span>
        </div>

      </div>

      {/* ======================================
          SCALE
      ====================================== */}

      <div className="benchmark-scale-wrapper">

        <div className="benchmark-scale-label" />

        <div className="benchmark-scale">

          {Array.from({ length: 13 }).map((_, index) => (

            <div
              key={index}
              className="benchmark-scale-item"
            >
              {Math.round((maxValue / 12) * index)}
            </div>

          ))}

        </div>

      </div>

      {/* ======================================
          ROWS
      ====================================== */}

      <div className="benchmark-boxplot-body">

        {displayColumns.map((column) => {

          const key = keyMap[column];
          const benchmark = selectedData[key];

          if (!benchmark) return null;

          return (

            <BenchmarkRow
              key={column}
              label={column}
              best={benchmark.p20}
              low={benchmark.p25}
              median={benchmark.p50}
              high={benchmark.p75}
              worst={benchmark.p90}
              max={maxValue}
              color={color}
            />

          );

        })}

      </div>

    </div>

  );

}

export default BenchmarkBoxPlot;