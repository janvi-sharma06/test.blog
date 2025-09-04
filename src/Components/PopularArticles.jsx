import React from "react";
import "./PopularArticles.css";

function PopularArticles() {
  const articles = [
    {
      img: "./pop.art.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "March 22, 2024",
    },
    {
      img: "./pop.art.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "March 22, 2024",
    },
    {
      img: "./pop.art.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "March 22, 2024",
    },
  ];

  return (
    <section className="popular-articles">
      <h2 className="popular-articles-title">Popular Articles</h2>
      <div className="article-cards">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.img} alt="Popular Article" />
            <p className="article-text">{article.text}</p>
            <p className="date">{article.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularArticles;