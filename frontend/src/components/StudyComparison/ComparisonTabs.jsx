import {
  FiBarChart2,
  FiGitBranch,
  FiGlobe,
} from "react-icons/fi";

export default function ComparisonTabs({
  activeTab,
  onChange,
}) {
  return (
    <div className="comparison-tabs">

      <button
        className={`comparison-tab ${
          activeTab === "internal"
            ? "active"
            : ""
        }`}
        onClick={() =>
          onChange("internal")
        }
      >
        <FiBarChart2 />

        <span>
          vs Internal Benchmark
        </span>
      </button>

      <button
        className={`comparison-tab ${
          activeTab === "similar"
            ? "active"
            : ""
        }`}
        onClick={() =>
          onChange("similar")
        }
      >
        <FiGitBranch />

        <span>
          vs Similar Studies
        </span>
      </button>

      <button
        className={`comparison-tab ${
          activeTab === "external"
            ? "active"
            : ""
        }`}
        onClick={() =>
          onChange("external")
        }
      >
        <FiGlobe />

        <span>
          vs External Benchmark
        </span>
      </button>

    </div>
  );
}