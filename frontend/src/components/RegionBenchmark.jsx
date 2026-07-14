import React from "react";

import BarBenchmark from "./BarBenchmark";
import RegionCostTable from "./RegionCostTable";

function RegionBenchmark({ view }) {
  return (
    <div className="benchmark-card">

      <div className="benchmark-card-header">

        <div className="benchmark-title-wrapper">
          <h2>
            Benchmark by Region{" "}
            <span
              style={{
                color: "#6B7280",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              (Days / USD)
            </span>
          </h2>
        </div>

      </div>

      {view === "timeline" ? (
        <BarBenchmark />
      ) : (
        <RegionCostTable />
      )}

    </div>
  );
}

export default RegionBenchmark;