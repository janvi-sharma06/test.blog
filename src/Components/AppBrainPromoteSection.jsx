import React from "react";
import "./AppBrainPromoteSection.css";

function AppBrainPromote() {
  const features = [
    {
      icon: "/AppPromote/AP1.png", 
      title: "Boost your App",
      description: "Boost your app's growth with our global audience.",
    },
    {
      icon: "/AppPromote/AP2.png", 
      title: "Best Price",
      description: "Pay the best price with our cost-per-install pricing model.",
    },
       {
      icon: "/AppPromote/AP3.png", 
      title: "High Retention",
      description: "Score high retention rates as all traffic is non-incentivized.",
    },
    {
      icon: "/AppPromote/AP4.png", 
      title: "Real-time Reporting",
      description: "Get clear and real-time reporting.",
    },
    {
      icon: "/AppPromote/AP5.png", 
      title: "Campaign",
      description: "Create a user acquisition campaign within minutes.",
    },
    {
      icon: "/AppPromote/AP6.png", 
      title: "Target Specific Users",
      description: "Target specific users with CPI boost rules.",
    },
  ];

  return (
    <section className="appbrain-promote">
      <h2 className="section-title">AppBrain Promote</h2>
      <p className="section-description1">
        The easiest way to promote your Android App. Increase your Android app's users by promoting it on our network.
      </p>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <a href="#" className="more-info-btn">More Info</a>
    </section>
  );
}

export default AppBrainPromote;
