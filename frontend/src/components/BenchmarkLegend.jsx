import React from "react";

function BenchmarkLegend() {

  return (

    <div className="legend">

      <div className="legend-item">

        <span
          className="legend-color"
          style={{background:"#22c55e"}}
        />

        Excellent

      </div>

      <div className="legend-item">

        <span
          className="legend-color"
          style={{background:"#84cc16"}}
        />

        Good

      </div>

      <div className="legend-item">

        <span
          className="legend-color"
          style={{background:"#f59e0b"}}
        />

        Average

      </div>

      <div className="legend-item">

        <span
          className="legend-color"
          style={{background:"#ef4444"}}
        />

        Needs Improvement

      </div>

    </div>

  );

}

export default BenchmarkLegend;