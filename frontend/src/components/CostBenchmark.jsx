import React from "react";
import {
  FaMoneyCheckAlt,
  FaHospital,
  FaClinicMedical,
  FaFileInvoiceDollar,
  FaDollarSign,
} from "react-icons/fa";

const data = [
  {
    metric: "Cost per Patient",
    range: "$18K - $24K",
    best: "$16K",
    icon: <FaMoneyCheckAlt />,
  },
  {
    metric: "Total Study Cost",
    range: "$2.7M - $3.1M",
    best: "$2.3M",
    icon: <FaHospital />,
  },
  {
    metric: "Start-Up Cost Share",
    range: "$0.32M - $0.39M",
    best: "$0.28M",
    icon: <FaClinicMedical />,
  },
  {
    metric: "Per-Site Cost",
    range: "$1.1M - $1.5M",
    best: "$0.95M",
    icon: <FaFileInvoiceDollar />,
  },
  {
    metric: "FMV Alignment",
    range: "$45K - $60K",
    best: "$42K",
    icon: <FaDollarSign />,
  },
];

function CostBenchmark() {
  return (
    <div className="benchmark-card" style={{ marginTop: 16 }}>
      <div
        className="benchmark-card-header"
        style={{
          padding: "14px 18px",
        }}
      >
        <div className="benchmark-title-wrapper">
          <h2
            style={{
              margin: 0,
              display: "flex",
              alignItems: "baseline",
              gap: "6px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Overall Cost Benchmark

            <span
              style={{
                color: "#6B7280",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              ($)
            </span>
          </h2>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="benchmark-table">
          <thead>
            <tr>
              <th
                className="metric-column"
                style={{
                  textAlign: "left",
                  padding: "10px 18px",
                  fontSize: "12px",
                }}
              >
                Cost Metric
              </th>

              <th
                style={{
                  padding: "10px",
                  fontSize: "12px",
                }}
              >
                Typical Range
              </th>

              <th
                style={{
                  padding: "10px",
                  fontSize: "12px",
                }}
              >
                Best In Class
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.metric}
                style={{
                  height: "54px",
                }}
              >
                <td
                  style={{
                    padding: "10px 18px",
                  }}
                >
                  <div
                    className="metric-info"
                    style={{
                      gap: "12px",
                    }}
                  >
                    <div
                      className="metric-icon"
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    >
                      {row.icon}
                    </div>

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {row.metric}
                    </span>
                  </div>
                </td>

                <td
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "10px",
                  }}
                >
                  {row.range}
                </td>

                <td
                  style={{
                    textAlign: "center",
                    color: "#22c55e",
                    fontSize: "13px",
                    fontWeight: 700,
                    padding: "10px",
                  }}
                >
                  {row.best}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CostBenchmark;