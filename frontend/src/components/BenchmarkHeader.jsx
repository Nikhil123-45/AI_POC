import React from "react";
import { FiDownload } from "react-icons/fi";

const BenchmarkHeader = () => {
  return (
    <div className="benchmark-header">

      <div className="benchmark-header-left">

        <h1 className="benchmark-title">
          Benchmark Summary
        </h1>

        <p className="benchmark-subtitle">
          Compare performance across regions, indications and study types.
        </p>

      </div>

      <button className="export-btn">

        <FiDownload size={18} />

        <span>Export</span>

      </button>

    </div>
  );
};

export default BenchmarkHeader;