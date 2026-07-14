import {
  FiTrendingUp,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

import "./AIInsights.css";

const insights = [
  {
    icon: <FiTrendingUp />,
    color: "green",
    title: "Overall Alignment is Moderate",
    text:
      "Your benchmark score of 68/100 indicates moderate alignment with comparable internal benchmark studies. Most study metrics are close to historical performance, although opportunities remain to improve operational efficiency.",
  },
  {
    icon: <FiClock />,
    color: "orange",
    title: "Enrollment Duration Requires Attention",
    text:
      "Enrollment duration (300 days) is 15.4% higher than the benchmark median (260 days), making it the largest contributor to the lower benchmark score.",
  },
  {
    icon: <FiDollarSign />,
    color: "blue",
    title: "Study Cost is Slightly Above Benchmark",
    text:
      "Study cost remains within an acceptable benchmark range but is modestly higher than the historical median, indicating opportunities for additional cost optimization.",
  },
  {
    icon: <FiUsers />,
    color: "purple",
    title: "Enrollment Target is Realistic",
    text:
      "The planned enrollment target aligns well with comparable benchmark studies and appears achievable based on historical study performance.",
  },
  {
    icon: <FiCheckCircle />,
    color: "green",
    title: "Startup Duration Has Optimization Potential",
    text:
      "Startup duration is slightly above benchmark expectations. Accelerating site activation could further improve overall study performance.",
  },
];

export default function AIInsights() {
  return (
    <div className="ai-insights-card">

      <div className="ai-header">

        <div className="ai-title">
          <FiZap />
          <span>AI Insights</span>
        </div>

      </div>

      <div className="ai-list">

        {insights.map((item) => (
          <div
            className="ai-item"
            key={item.title}
          >

            <div className={`ai-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="ai-content">

              <div className="ai-item-title">
                {item.title}
              </div>

              <div className="ai-item-text">
                {item.text}
              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="ai-recommendation">

        <div className="recommendation-title">
          Recommendation
        </div>

        <div className="recommendation-text">
          Focus on improving patient recruitment and site
          activation to reduce enrollment duration. Based on
          historical benchmark patterns, reducing enrollment
          duration by approximately 10–15% could improve the
          overall benchmark score from <strong>68</strong> to
          approximately <strong>80–83</strong>.
        </div>

      </div>

    </div>
  );
}