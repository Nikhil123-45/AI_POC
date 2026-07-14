import React from "react";
import "./VerticalBoxPlot.css";

function VerticalBoxPlot({
  title,
  unit = "days",
  p20,
  p25,
  p50,
  p75,
  p90,
  color = "#3B82F6"
}) {

  const svgHeight = 140;

  const top = 14;
  const bottom = 112;

  const scale = (value) => {
    const range = p90 - p20;

    if (range === 0) return bottom;

    return (
      bottom -
      ((value - p20) / range) *
      (bottom - top)
    );
  };

  const y20 = scale(p20);
  const y25 = scale(p25);
  const y75 = scale(p75);
  const y90 = scale(p90);

  return (

    <div className="boxplot-card">

      {/* Metric Header */}

      <div
        className="metric-header"
        style={{
          background: color
        }}
      >
        {title}
      </div>

      {/* Chart */}

      <svg
        width="100%"
        height={svgHeight}
      >

        <line
          x1="68"
          y1={y90}
          x2="68"
          y2={y20}
          className="boxplot-line"
        />

        <line
          x1="56"
          y1={y90}
          x2="80"
          y2={y90}
          className="boxplot-line"
        />

        <line
          x1="56"
          y1={y20}
          x2="80"
          y2={y20}
          className="boxplot-line"
        />

        <circle
          cx="68"
          cy={y90}
          r="4.5"
          className="p90-dot"
        />

        <circle
          cx="68"
          cy={y20}
          r="4.5"
          className="p20-dot"
        />

        <rect
          x="50"
          y={y75}
          width="36"
          height={y25-y75}
          rx="5"
          fill={color}
          opacity="0.96"
          className="boxplot-box"
        />

        <text
          x="96"
          y={y90+4}
          className="boxplot-label p90"
        >
          {p90}
        </text>

        <text
          x="96"
          y={y75+4}
          className="boxplot-label p75"
        >
          {p75}
        </text>

        <text
          x="96"
          y={y25+4}
          className="boxplot-label p25"
        >
          {p25}
        </text>

        <text
          x="96"
          y={y20+4}
          className="boxplot-label p20"
        >
          {p20}
        </text>

      </svg>

      <div className="bottom-summary">

        <div className="range-section">

          <div className="range-title">
            Typical Range
          </div>

          <div className="range-value">
            {p25} – {p75}
          </div>

        </div>

        <div className="best-section">

          <div className="best-title">
            Best in Class
          </div>

          <div className="best-value">
            {p20}
          </div>

        </div>

      </div>

    </div>

  );
}

export default VerticalBoxPlot;