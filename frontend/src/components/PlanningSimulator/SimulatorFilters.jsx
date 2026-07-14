import { simulatorData } from "../../data/planningSimulatorData";

export default function SimulatorFilters() {
  const study = simulatorData.study;

  return (
    <div className="simulator-filters">

      <h2 className="simulator-title">
        📋 Study Parameters
      </h2>

      {/* Therapeutic Area */}
      <div className="filter-group">
        <label>THERAPEUTIC AREA</label>
        <select defaultValue={study.therapeuticArea}>
          {simulatorData.therapeuticAreas.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Indication */}
      <div className="filter-group">
        <label>INDICATION</label>
        <select defaultValue={study.indication}>
          {simulatorData.indications.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Phase */}
      <div className="filter-group">
        <label>PHASE</label>
        <select defaultValue={study.phase}>
          {simulatorData.phases.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Region */}
      <div className="filter-group">
        <label>REGION</label>
        <select defaultValue={study.region}>
          {simulatorData.regions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Lead Country */}
      <div className="filter-group">
        <label>LEAD COUNTRY</label>
        <select defaultValue={study.country}>
          {simulatorData.countries.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Site Count */}
      <div className="filter-group">
        <label>SITE COUNT: {study.siteCount}</label>

        <input
          type="range"
          min="20"
          max="300"
          defaultValue={study.siteCount}
        />
      </div>

      {/* Enrollment Target */}
      <div className="filter-group">
        <label>ENROLLMENT TARGET</label>

        <input
          type="number"
          defaultValue={study.enrollmentTarget}
        />
      </div>

      {/* Complexity */}
      <div className="filter-group">
        <label>
          COMPLEXITY SCORE: {study.complexity}/10
        </label>

        <input
          type="range"
          min="1"
          max="10"
          defaultValue={study.complexity}
        />
      </div>

      <button className="recalculate-btn">
        ✨ Recalculate
      </button>

    </div>
  );
}