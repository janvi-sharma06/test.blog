import React, { useState } from "react";
import "./AppBrainRankingSection.css";

function AppBrainRanking() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  const leaderboard = {
    rank: 1,
    app: "App 1",
    icon: "/public/AppBrainSection/BrainSection.png", 
  };

  const collapsibles = [
    { title: "Track your Google Play rankings", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at commodo enim." },
    { title: "Benchmark your app against competitors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at commodo enim." },
    { title: "Insight in user engagement and retention", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at commodo enim." },
    { title: "Improve your app with AppBrain Apptimizer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at commodo enim." },
  ];

  return (
    <section className="appbrain-ranking">
      <div className="leaderboard">
        <div className="leaderboard-content">
          <div className="ranking-item">
            <img src={leaderboard.icon} alt={leaderboard.app} className="app-icon" />
          </div>
        </div>
      </div>

      <div className="ranking-info">
        <h2 className="ranking-title">AppBrain Ranking</h2>
        <p className="ranking-description">
          Optimize user acquisition and retention by analyzing your app’s market position and understanding your users through our free analytics service.
        </p>
        {collapsibles.map((item, index) => (
          <div key={index} className={`collapsible ${activeIndex === index ? "active" : ""}`}>
            <div className="collapsible-header" onClick={() => toggleCollapse(index)}>
              <h3>{item.title}</h3>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && <p className="collapsible-content">{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AppBrainRanking;
