import React from "react";
import "./ToolsSection.css";

function ToolsSection() {
  return (
    <section className="tools-section">
      <div className="tools-content">
        <div className="text-content">
          <h2 className="tools-title">Best and Easiest Tools for Apps or Games</h2>
          <p className="tools-description">
            AppBrain helps Android developers succeed by offering easy tools for promoting and earning money from apps or games. With us, you can start quickly and manage everything yourself.
          </p>
          <div className="button-group">
            <a href="#" className="btn sdk-btn">SDK Documentation</a>
            <a href="#" className="btn learn-more-btn">Learn More</a>
          </div>
        </div>
        <div className="image-content">
          <img src="/ToolSection/Tool-Section.png" alt="Tools" className="tools-image" />
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;
