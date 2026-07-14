import { useState } from "react";
import "./StudyComparison.css";

import StudySelector from "../../components/StudyComparison/StudySelector";
import ComparisonTabs from "../../components/StudyComparison/ComparisonTabs";
import ExternalCohort from "../../components/StudyComparison/ExternalCohort";
import MetricCards from "../../components/StudyComparison/MetricCards";
import ComparisonChart from "../../components/StudyComparison/ComparisonChart";
import AIInsights from "../../components/StudyComparison/AIInsights";

export default function StudyComparison() {

  const [activeTab, setActiveTab] = useState("internal");

  return (

    <div className="study-comparison-page">

      {/* =====================================================
          STUDY SELECTOR
      ===================================================== */}

      <StudySelector />

      {/* =====================================================
          TABS
      ===================================================== */}

      <ComparisonTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* =====================================================
          INTERNAL BENCHMARK
      ===================================================== */}

      {activeTab === "internal" && (

        <>

          {/* -------------------------------------------------
              Internal Cohort
          -------------------------------------------------- */}

          <ExternalCohort />

          {/* -------------------------------------------------
              Benchmark Comparison & Key Drivers
          -------------------------------------------------- */}

          <section className="metric-section">

            <h2 className="metric-section-title">
              Benchmark Comparison &amp; Key Drivers
            </h2>

            <MetricCards />

          </section>

          {/* -------------------------------------------------
              AI Insights
          -------------------------------------------------- */}

          <AIInsights />

        </>

      )}

      {/* =====================================================
          SIMILAR STUDIES
      ===================================================== */}

      {activeTab === "similar" && (

        <ComparisonChart />

      )}

      {/* =====================================================
          EXTERNAL BENCHMARK
      ===================================================== */}

      {activeTab === "external" && (

        <div className="coming-soon-card">

          <div className="coming-soon-content">

            <h2>
              External Benchmark
            </h2>

            <p>
              Compare your study against industry benchmark
              studies across sponsors, CROs and therapeutic
              areas.
            </p>

            <button className="coming-soon-button">
              Coming Soon
            </button>

          </div>

        </div>

      )}

    </div>

  );

}