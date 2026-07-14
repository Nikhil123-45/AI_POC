import { simulatorData } from "../../data/planningSimulatorData";
import {
  FiSearch,
  FiEye,
  FiCopy,
  FiTrash2,
} from "react-icons/fi";

export default function SavedScenarios() {
  return (
    <div className="saved-scenarios">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="saved-header">

        <div>

          <h2>Saved Scenarios</h2>

        </div>

        <div className="search-wrapper">

          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder={simulatorData.searchPlaceholder}
            className="scenario-search"
          />

        </div>

      </div>

      {/* ======================================
          TABLE
      ====================================== */}

      <div className="saved-table-wrapper">

        <table className="saved-table">

          <thead>

            <tr>

              <th>Scenario</th>

              <th>Region</th>

              <th>Vendor</th>

              <th>Sites</th>

              <th>Enrollment</th>

              <th>Timeline</th>

              <th>Cost</th>

              <th>Saved On</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {simulatorData.savedScenarios.map((scenario) => (

              <tr key={scenario.id}>

                <td>{scenario.name}</td>

                <td>{scenario.region}</td>

                <td>{scenario.vendor}</td>

                <td>{scenario.sites}</td>

                <td>{scenario.enrollment}</td>

                <td>{scenario.timeline}</td>

                <td>{scenario.cost}</td>

                <td>{scenario.savedOn}</td>

                <td>

                  <div className="table-actions">

                    <button title="View">

                      <FiEye />

                    </button>

                    <button title="Duplicate">

                      <FiCopy />

                    </button>

                    <button title="Delete">

                      <FiTrash2 />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}