import { simulatorData } from "../../data/planningSimulatorData";

export default function StudyParameters() {
  const study = simulatorData.studyParameters;

  return (
    <div className="study-parameters-card">

      {/* ==========================================
          HEADER
      =========================================== */}


      {/* ==========================================
          PARAMETERS
      =========================================== */}

      <div className="study-fields">

        {/* Therapeutic Area */}

        <div className="study-field">

          <label>Therapeutic Area</label>

          <select defaultValue={study.therapeuticArea}>

            {simulatorData.therapeuticAreas.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

        {/* Indication */}

        <div className="study-field">

          <label>Indication</label>

          <select defaultValue={study.indication}>

            {simulatorData.indications.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

        {/* Phase */}

        <div className="study-field">

          <label>Phase</label>

          <select defaultValue={study.phase}>

            {simulatorData.phases.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

      </div>

    </div>
  );
}