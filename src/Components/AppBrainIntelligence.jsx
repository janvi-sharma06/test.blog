import React from "react";
import "./AppBrainIntelligence.css";

function AppBrainIntelligence() {
  return (
    <section className="intelligence">
      <div className="intelligence1">
        <img src="./imgintel.png" className="imgintel" />
        <div className="brain">
          <div className="box">
            <h2 className="txt">AppBrain App Intelligence</h2>
            <p className="para">
              AppBrain App Intelligence tells you all about apps on Google Play. You
              can see how popular they are and find new ones easily.
            </p>
          </div>
          <div className="search-box1">
            <div className="search-wrapper">
              <input type="text" placeholder="Search for apps" className="search" />
              <img src="./Vector.png" alt="search" className="vector1" />
            </div>
            <div className="b9">
              <button className="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppBrainIntelligence;


