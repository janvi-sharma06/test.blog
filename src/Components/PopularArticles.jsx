import React from "react";
import "./PopularArticles.css";
import { useNavigate } from "react-router-dom";

function PopularArticles() {
  const navigate = useNavigate();

  const handleRedirect = (appId) => {
    navigate(`/details`);
  };
  const articles = [
    {
      img: "./PopularArticles/App1.png",
      text: "Only Go Up Parkour Simulator",
      date: "March 22, 2024",
      rating: 4.1,
      link: "#",
    },
    {
      img: "./PopularArticles/App2.png",
      text: "Shape Change: Shifting Race",
      date: "March 22, 2024",
      rating: 3.2,
      link: "#",
    },
    {
      img: "./PopularArticles/App3.png",
      text: "Yuzu Emulator",
      date: "March 22, 2024",
      rating: 4.9,
      link: "#",
    },
  ];

  return (
    <section className="popular-articles">
      <h2 className="popular-articles-title">Top New Apps</h2>
      <div className="article-cards">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.img} alt="Popular Article" />
            <p className="article-text">{article.text}</p>
            <div className="rating">
              <span>⭐ {article.rating}</span>
            </div>
            <p className="date">{article.date}</p>
            <button className="app-btn" onClick={() => handleRedirect(app.id)}>Get</button>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All</button>
    </section>
  );
}

export default PopularArticles;
