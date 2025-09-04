import React from "react";
import "./AllArticles.css";

function AllArticles() {
  return (
    <section className="all-articles">
      <h2 className="all-articles1">All Articles</h2>
      <div className="filters">
        <button className="b1">All</button>
        <button className="b2">Newest</button>
        <button className="b3">Popular</button>
        <button className="b4">Android</button>
      </div>
      <div className="articles-card">
        <div className="block1">
          <div className="article-1">
            <img src="./pop.art.png" className="img-1" />
            <p className="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p1.1">March 22, 2024</p>
          </div>
          <div className="article-2">
            <img src="./pop.art.png" className="img-2" />
            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p2.2">March 22, 2024</p>
          </div>
          <div className="article-3">
            <img src="./pop.art.png" className="img-3" />
            <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p3.3">March 22, 2024</p>
          </div>
        </div>
        <div className="block2">
          <div className="article-4">
            <img src="./pop.art.png" className="img-4" />
            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p4.4">March 22, 2024</p>
          </div>
          <div className="article-5">
            <img src="./pop.art.png" className="img-5" />
            <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p5.5">March 22, 2024</p>
          </div>
          <div className="article-6">
            <img src="./pop.art.png" className="img-6" />
            <p className="p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p6.6">March 22, 2024</p>
          </div>
        </div>
        <div className="block3">
          <div className="article-7">
            <img src="./pop.art.png" className="img-7" />
            <p className="p-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p7.7">March 22, 2024</p>
          </div>
          <div className="article-8">
            <img src="./pop.art.png" className="img-8" />
            <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p8.8">March 22, 2024</p>
          </div>
          <div className="article-9">
            <img src="./pop.art.png" className="img-9" />
            <p className="p-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="p9.9">March 22, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllArticles;


