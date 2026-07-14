import React from "react";
import "./VendorCostChart.css";
import { vendorCostData } from "../data/vendorCostData";

function VendorCostChart() {
  return (
    <div className="vendor-cost-card">

      {/* Table Header */}

      <div className="vendor-cost-table-header">

        <div className="metric-column">
          <strong>
            Cost Benchmark by Vendor{" "}
            <span className="vendor-cost-title-unit">($)</span>
          </strong>
        </div>

        <div className="vendor-column">
          <div className="vendor-name">
            IQVIA
          </div>
        </div>

        <div className="vendor-column">
          <div className="vendor-name">
            ICON
          </div>
        </div>

        <div className="vendor-column">
          <div className="vendor-name">
            Parexel
          </div>
        </div>

      </div>

      {/* ===========================
          DATA
      ============================ */}

      {vendorCostData.map((row) => (

        <div
          className="vendor-cost-row"
          key={row.metric}
        >

          {/* Metric */}

<div className="metric-column">
  <div className="metric-info">
    <span className="metric-name">
      {row.metric}
    </span>
  </div>
</div>

          {/* IQVIA */}

          <div className="vendor-column">

            <div className="range-block">

              <div className="range-text">
                {row.iqvia.min} – {row.iqvia.max}
              </div>

            </div>

          </div>

          {/* ICON */}

          <div className="vendor-column">

            <div className="range-block">

              <div className="range-text">
                {row.iconVendor.min} – {row.iconVendor.max}
              </div>

            </div>

          </div>

          {/* Parexel */}

          <div className="vendor-column">

            <div className="range-block">

              <div className="range-text">
                {row.parexel.min} – {row.parexel.max}
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default VendorCostChart;