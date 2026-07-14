import { simulatorData } from "../../data/planningSimulatorData";
import {
  FiGlobe,
  FiBriefcase,
  FiUsers,
  FiTarget,
  FiPlus,
} from "react-icons/fi";

export default function ScenarioBuilder() {
  const builder = simulatorData.builder;

  return (
    <div className="scenario-builder">

      {/* ===========================================
          Header
      =========================================== */}

      <div className="builder-header">
        <h3>Build Scenario</h3>

        <p>
          Modify study parameters to create and compare different planning
          scenarios.
        </p>
      </div>

      {/* ===========================================
          Region
      =========================================== */}

      <div className="builder-group">

        <label className="builder-label">
          <FiGlobe />
          Region
        </label>

        <select
          className="builder-select"
          defaultValue={builder.region}
        >
          {simulatorData.regions.map((region) => (
            <option key={region}>
              {region}
            </option>
          ))}
        </select>

      </div>

      {/* ===========================================
          Vendor
      =========================================== */}

      <div className="builder-group">

        <label className="builder-label">
          <FiBriefcase />
          Vendor
        </label>

        <select
          className="builder-select"
          defaultValue={builder.vendor}
        >
          {simulatorData.vendors.map((vendor) => (
            <option key={vendor}>
              {vendor}
            </option>
          ))}
        </select>

      </div>

      {/* ===========================================
          Site Count
      =========================================== */}

      <div className="builder-group">

        <div className="builder-label-row">

          <label className="builder-label">
            <FiUsers />
            Site Count
          </label>

          <span className="slider-number">
            {builder.sites}
          </span>

        </div>

        <input
          type="range"
          min="20"
          max="200"
          defaultValue={builder.sites}
        />

        <div className="slider-footer">
          <span>20</span>
          <span>200</span>
        </div>

      </div>

      {/* ===========================================
          Enrollment
      =========================================== */}

      <div className="builder-group">

        <div className="builder-label-row">

          <label className="builder-label">
            <FiTarget />
            Enrollment Target
          </label>

          <span className="slider-number">
            {builder.enrollment}
          </span>

        </div>

        <input
          type="range"
          min="100"
          max="1000"
          defaultValue={builder.enrollment}
        />

        <div className="slider-footer">
          <span>100</span>
          <span>1000</span>
        </div>

      </div>

      {/* ===========================================
          Button
      =========================================== */}

      <button className="add-scenario-btn">

        <FiPlus />

        Add Scenario

      </button>

    </div>
  );
}