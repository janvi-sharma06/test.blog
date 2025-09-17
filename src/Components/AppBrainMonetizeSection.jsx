import React from "react";
import "./AppBrainMonetizeSection.css";

function AppBrainMonetize() {
  const features = [
    {
      icon: "/AppBrainMonetize/CreditCard.png", 
      title: "Monetization with user-friendly app install ads",
    },
    {
      icon: "/AppBrainMonetize/SDK.png", 
      title: "Easy and fast integration of our small SDK",
    },
    {
      icon: "/AppBrainMonetize/Clear.png", 
      title: "Clear usage statistics and retention figures for your app",
    },
    {
      icon: "/AppBrainMonetize/Quick.png",
      title: "Quick payout of your revenue",
    },
    {
      icon: "/AppBrainMonetize/High.png", 
      title: "High-earning ads from 25+ leading ad networks",
    },
  ];

  return (
    <section className="appbrain-monetize">
      <h2 className="section-title">AppBrain Monetize</h2>
      <p className="section-description">
        The AppBrain SDK lets you show user-friendly app install ads to your users through interstitial or banner ad units. Our high-quality ads provide a good user experience and great monetization potential.
      </p>
      <div className="features-list1">
        {features.map((feature, index) => (
          <div className="feature-card1" key={index}>
            <img src={feature.icon} alt={feature.title} className="feature-icon1" />
            <h3 className="feature-title1">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AppBrainMonetize;
