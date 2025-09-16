import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <img src="/left.hero.png" className="hero-img left" />
        <h1 className="hero-title">Welcome To Zula</h1>
        <p className="hero-subtitle">The best place to download Android apps</p>
        <img src="/right.hero.png" className="hero-img right" />
      </div>

    </section>
  );
};

export default Hero;


