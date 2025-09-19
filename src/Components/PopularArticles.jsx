import React from "react";
import "./PopularArticles.css";
import { useNavigate } from "react-router-dom";

function PopularArticles() {
  const navigate = useNavigate();

  const handleRedirect = (appId) => {
    navigate("/details");
  };
  const articles = [
    {
      img: "./PopularArticles/App1.png",
      text: "Only Go Up Parkour Simulator",
      date: "Big Glock Studio",
      rating: 4.1,
      link: "#",
    },
    {
      img: "./PopularArticles/App2.png",
      text: "Shape Change: Shifting Race",
      date: "Big Glock Studio",
      rating: 3.2,
      link: "#",
    },
    {
      img: "./PopularArticles/App3.png",
      text: "Yuzu Emulator",
      date: "Big Glock Studio",
      rating: 4.9,
      link: "#",
    },
  ];

  return (
    <section className="popular-articles">
      <div className="popular-articles1">
        <div className="popular-articles2"><h2 className="popular-articles-title">Top New Apps</h2></div>
        <div className="popular-articles3"><button className="view-btn">View All</button></div>
      </div>
      <div className="article-cards">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.img} alt="Popular Article" />

            <div className="popu">
              <div className="popu-left">
                <img
                  src="./PopularArticles/top1.png"
                  alt="App icon"
                />
                <div className="info">
                  <p className="article-text">{article.text}</p>
                  <p className="date">{article.date}</p>
                  <div className="rating">
                    <span>⭐ {article.rating}</span>
                  </div>
                </div>
              </div>
              <button className="app-btn" onClick={() => handleRedirect(article.id)}>Get</button>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}

export default PopularArticles;