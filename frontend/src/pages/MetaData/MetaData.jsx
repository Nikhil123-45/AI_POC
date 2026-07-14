import "./MetaData.css";
import {
  FolderOpen,
  CalendarDays,
  CalendarCheck2,
  Globe,
  Cpu,
  BrainCircuit,
  Trees,
  TrendingUp,
  Building2,
} from "lucide-react";

function MetaData() {
  const overviewCards = [
  {
    icon: <FolderOpen size={22} />,
    title: "Total Studies",
    value: "25,000",
    color: "purple",
  },
  {
    icon: <CalendarDays size={22} />,
    title: "Start Date",
    value: "15 Jan 2015",
    color: "blue",
  },
  {
    icon: <CalendarCheck2 size={22} />,
    title: "End Date",
    value: "28 May 2025",
    color: "green",
  },
  {
    icon: <Globe size={22} />,
    title: "Regions",
    value: "8",
    color: "orange",
  },
 {
  icon: <Building2 size={22} />,
  title: "Vendors",
  value: "12",
  color: "pink",
},
];

 const models = [
  {
    icon: <Cpu size={20} />,
    title: "LightGBM",
    desc: "Gradient boosting framework used for fast and accurate predictions.",
    color: "blue",
    active: true,
  },
  {
    icon: <TrendingUp size={20} />,
    title: "XGBoost",
    desc: "Optimized gradient boosting model for high predictive performance.",
    color: "orange",
  },
  {
    icon: <BrainCircuit size={20} />,
    title: "CatBoost",
    desc: "Categorical boosting model with high predictive power.",
    color: "green",
  },
  {
    icon: <Trees size={20} />,
    title: "Random Forest",
    desc: "Ensemble learning method for robust predictions.",
    color: "purple",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Quantile Regression",
    desc: "Estimates multiple percentiles (P20, P25, P50, P75, P90).",
    color: "pink",
  },
];

  const percentiles = [
    {
      label: "P20",
      meaning: "20th Percentile",
      text: "20% of studies are faster (or lower) than this value.",
      example: "20% studies finish in 25 days or less.",
      color: "#3B82F6",
      dots: 4,
    },
    {
      label: "P25",
      meaning: "25th Percentile",
      text: "25% of studies are faster (or lower) than this value.",
      example: "25% studies finish in 30 days or less.",
      color: "#22C55E",
      dots: 5,
    },
    {
      label: "P50",
      meaning: "50th Percentile",
      text: "Half of the studies are faster, half are slower.",
      example: "50% studies finish in 45 days or less.",
      color: "#8B5CF6",
      dots: 8,
    },
    {
      label: "P75",
      meaning: "75th Percentile",
      text: "75% of studies are faster (or lower) than this value.",
      example: "75% studies finish in 65 days or less.",
      color: "#F97316",
      dots: 12,
    },
    {
      label: "P90",
      meaning: "90th Percentile",
      text: "90% of studies are faster (or lower) than this value.",
      example: "90% studies finish in 80 days or less.",
      color: "#EF4444",
      dots: 15,
    },
  ];

  return (
    <div className="metadata-page">

      {/* Overview Cards */}

 <div className="overview-grid">
  {overviewCards.map((card) => (
    <div className="overview-card" key={card.title}>
      <div className={`overview-icon ${card.color}`}>
        {card.icon}
      </div>

      <div className="overview-content">
        <div className="overview-value">
          {card.value}
        </div>

        <div className="overview-label">
          {card.title}
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Modeling */}

      <div className="meta-section">
        <div className="section-title">
          Modeling Approach
        </div>

        <div className="section-subtitle">
          We use advanced machine learning models and quantile regression to
          generate benchmark percentiles.
        </div>

        <div className="model-grid">
          {models.map((model) => (
  <div
    className={`model-card ${model.active ? "active-model" : ""}`}
    key={model.title}
  >
    <div className={`model-icon ${model.color}`}>
      {model.icon}
    </div>

    <div className="model-title">
      {model.title}
    </div>

    <div className={`model-desc ${model.color}`}>
      {model.desc}
    </div>
  </div>
))}
        </div>
      </div>

      {/* Percentiles */}

      <div className="meta-section">

        <div className="section-title">
          Understanding Percentiles
        </div>

        <div className="section-subtitle">
          Percentiles help us understand how a value compares to the rest of the
          data.
        </div>

        <table className="percentile-table">

          <thead>
            <tr>
              <th>Percentile</th>
              <th>What It Means</th>
              <th>In Layman Terms</th>
              <th>Example (Study Startup Time)</th>
            </tr>
          </thead>

          <tbody>

            {percentiles.map((item) => (

              <tr key={item.label}>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: `${item.color}20`,
                      color: item.color,
                    }}
                  >
                    {item.label}
                  </span>
                </td>

                <td>{item.meaning}</td>

                <td>{item.text}</td>

                <td>

                  <div className="example-row">

                    <div className="people">

                      {[...Array(15)].map((_, index) => (

                        <span
                          key={index}
                          className="dot"
                          style={{
                            background:
                              index < item.dots
                                ? item.color
                                : "#D1D5DB",
                          }}
                        />

                      ))}

                    </div>

                    <span>{item.example}</span>

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

export default MetaData;