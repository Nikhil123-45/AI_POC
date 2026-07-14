import { simulatorData } from "../../data/planningSimulatorData";
import ScenarioCard from "./ScenarioCard";
import {
  FiSave,
  FiArrowRight,
} from "react-icons/fi";

export default function ScenarioComparison() {
  return (
    <div className="scenario-comparison">

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="comparison-header">

        <div className="comparison-title">

          <h2>Scenario Comparison</h2>

          <p>
            Compare the estimated timeline and cost across different planning scenarios.
          </p>

        </div>

        <div className="comparison-actions">

          <button className="save-scenario-btn">

            <FiSave />

            Save Scenario

          </button>

          <button className="save-all-btn">

            Create Study in EGC

            <FiArrowRight />

          </button>

        </div>

      </div>

      {/* ==========================================
          SCENARIO CARDS
      ========================================== */}

      <div className="scenario-cards">

        {simulatorData.scenarios.map((scenario) => (

          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
          />

        ))}

      </div>

    </div>
  );
}