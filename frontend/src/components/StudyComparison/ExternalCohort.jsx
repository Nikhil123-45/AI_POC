import { external } from "../../data/studyComparisonData";

export default function ExternalCohort() {
  return (
    <div className="external-cohort-card">

      <div className="external-left">

        <div className="external-title">
          {external.title.toUpperCase()}
        </div>

        <div className="external-subtitle">
          Internal Benchmark for{" "}
          <strong>{external.indication}</strong> ·{" "}
          {external.phase} ·{" "}
          {external.countries}
        </div>

        <div className="external-details">
          <span>{external.sites} Sites</span>

          <span className="dot">•</span>

          <span>{external.enrollments} Enrollments</span>

          <span className="dot">•</span>

          <span>{external.studies} Matched Studies</span>
        </div>

      </div>

      <div className="external-right">

        <div className="benchmark-label">
          BENCHMARK SCORE
        </div>

        <div className="benchmark-value">
          {external.score}
          <span className="score-total">/100</span>
        </div>

        <div className="benchmark-alignment">
          {external.alignment} Alignment
        </div>

      </div>

    </div>
  );
}