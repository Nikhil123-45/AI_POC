import React from "react";
import "./ComparisonDistributionTable.css";

function ComparisonDistributionTable({
  title,
  unit,
  color = "purple",
  columns = [],
  data = [],
}) {

  /* ==========================================
     KEY MAP
  ========================================== */

  const keyMap = {

    // Region
    US: "us",
    India: "india",
    Europe: "europe",
    APAC: "apac",
    LATAM: "latam",
    MEA: "mea",

    // Indication
    "Multiple Myeloma": "multipleMyeloma",
    DLBCL: "dlbcl",
    "B-ALL": "ball",
    "Follicular Lymphoma": "follicularLymphoma",

    // Study Type
    RWE: "rwe",
    IIS: "iis",
    "Patient Registry": "patientRegistry",
    "Expanded Access": "expandedAccess",

    // Vendor
    IQVIA: "iqvia",
    Parexel: "parexel",
    ICON: "icon",
    Syneos: "syneos",
    PPD: "ppd",

  };

  /* ==========================================
     GET OBJECT
  ========================================== */

  const getObject = (row, column) => {

    if (row[column]) return row[column];

    const mappedKey = keyMap[column];

    if (mappedKey && row[mappedKey]) {
      return row[mappedKey];
    }

    return null;
  };

  /* ==========================================
     FORMAT NUMBER
  ========================================== */

  const formatNumber = (value, metric = "") => {

    if (value === undefined || value === null) {
      return "-";
    }

    const number = Number(value);

    // Cost per Patient
    if (metric.includes("Cost per Patient")) {
      return `$${number.toLocaleString()}`;
    }

    // FMV Alignment
    if (metric.includes("FMV")) {
      return `$${number.toLocaleString()}`;
    }

    // Million-based metrics
    if (
      metric.includes("Total Study Cost") ||
      metric.includes("Per-Site Cost") ||
      metric.includes("Start-Up Cost Share")
    ) {
      return `$${number.toFixed(2)}M`;
    }

    // Timeline metrics
    return number;
  };

  /* ==========================================
     FORMAT CELL
  ========================================== */

  const formatCell = (obj, metric) => {

    if (!obj) return "-";

    return `${formatNumber(obj.p25, metric)} – ${formatNumber(obj.p75, metric)}`;

  };

  return (

    <div className={`distribution-card ${color}`}>

      <div className="distribution-header">

        <h3>

          {title}

          {unit && <span> ({unit})</span>}

        </h3>

      </div>

      <div className="distribution-table-wrapper">

        <table className="distribution-table">

          <thead>

            <tr>

              <th className="metric-column">
                Metric
              </th>

              {columns.map((column) => (

                <th
                  key={column}
                  className="dynamic-column"
                >
                  {column}
                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {data.map((row, index) => (

              <tr key={index}>

                <td className="metric-name">
                  {row.metric}
                </td>

                {columns.map((column) => {

                  const value = getObject(row, column);

                  return (

                    <td
                      key={column}
                      className="dynamic-value"
                    >

                      {formatCell(value, row.metric)}

                    </td>

                  );

                })}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ComparisonDistributionTable;