import React from "react";
import "./AppBrainMonetizeSection.css";

function AppBrainMonetize() {
  const features = [
    {
      icon: "/AppBrainMonetize/CreditCard.png", 
      title: "Monetization with user-friendly app install ads",
      description: "Show user-friendly app install ads to your users through interstitial or banner ad units.",
    },
    {
      icon: "/AppBrainMonetize/SDK.png", 
      title: "Easy and fast integration of our small SDK",
      description: "Integrate our small SDK easily and quickly into your app.",
    },
    {
      icon: "/AppBrainMonetize/Clear.png", 
      title: "Clear usage statistics and retention figures for your app",
      description: "Get detailed analytics and retention figures to improve your app’s performance.",
    },
    {
      icon: "/AppBrainMonetize/Quick.png",
      title: "Quick payout of your revenue",
      description: "Get your revenue payouts quickly and efficiently.",
    },
    {
      icon: "/AppBrainMonetize/High.png", 
      title: "High-earning ads from 25+ leading ad networks",
      description: "Earn more with ads from over 25+ leading ad networks.",
    },
  ];

  return (
    <section className="appbrain-monetize">
      <h2 className="section-title">AppBrain Monetize</h2>
      <p className="section-description">
        The AppBrain SDK lets you show user-friendly app install ads to your users through interstitial or banner ad units. Our high-quality ads provide a good user experience and great monetization potential.
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
    </section>
  );
}

export default AppBrainMonetize;
