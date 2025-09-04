import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <img src="/left.hero.png" className="hero-img left" />
        <h1 className="hero-title">The Zula Blog</h1>
        <p className="hero-subtitle">Discover all articles from priori</p>
        <img src="/right.hero.png" className="hero-img right" />
      </div>

    </section>
  );
};

export default Hero;


