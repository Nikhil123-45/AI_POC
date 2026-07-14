import React from "react";
import "./IndicationBenchmark.css";

import TimelineBenchmarkTable from "./TimelineBenchmarkTable";
import CostBenchmarkTable from "./CostBenchmarkTable";

export default function IndicationBenchmark() {
  return (
    <div className="indication-benchmark">

      {/* Timeline Benchmark */}

      <section className="benchmark-section">

        <div className="section-header">

          <h2 className="section-title">
            Timeline Benchmarks
            <span className="section-unit">
              (days)
            </span>
          </h2>

        </div>

        <TimelineBenchmarkTable />

      </section>

      {/* Cost Benchmark */}

      <section className="benchmark-section">

        <div className="section-header">

          <h2 className="section-title">
            Cost Benchmarks
            <span className="section-unit">
              ($)
            </span>
          </h2>

        </div>

        <CostBenchmarkTable />

      </section>

    </div>
  );
}