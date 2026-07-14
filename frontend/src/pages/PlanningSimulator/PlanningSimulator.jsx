import "./PlanningSimulator.css";

import StudyParameters from "../../components/PlanningSimulator/StudyParameters";
import RecommendationPanel from "../../components/PlanningSimulator/RecommendationPanel";
import ScenarioBuilder from "../../components/PlanningSimulator/ScenarioBuilder";
import ScenarioComparison from "../../components/PlanningSimulator/ScenarioComparison";
import SavedScenarios from "../../components/PlanningSimulator/SavedScenarios";

export default function PlanningSimulator() {
  return (
    <div className="planning-simulator">

      {/* ======================================================
          STUDY PARAMETERS
      ======================================================= */}
      <StudyParameters />

      {/* ======================================================
          AI INSIGHTS & RECOMMENDATION
      ======================================================= */}
      <RecommendationPanel />

      {/* ======================================================
          BUILD SCENARIO + SCENARIO COMPARISON
      ======================================================= */}
      <div className="planning-layout">

        {/* Left Panel */}
        <aside className="planning-sidebar">
          <ScenarioBuilder />
        </aside>

        {/* Right Panel */}
        <main className="planning-content">
          <ScenarioComparison />
        </main>

      </div>

      {/* ======================================================
          SAVED SCENARIOS
      ======================================================= */}
      <SavedScenarios />

    </div>
  );
}