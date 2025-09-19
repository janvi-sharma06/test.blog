import React from "react";
import "./HotAppSection.css";
import { useNavigate } from "react-router-dom";

const hotAppSectionData = [
  {
    id: 1,
    name: "Clean Master Ultra Security",
    image: "/public/HotAppImages/hotApp1.png",
    description: "Optimize your phone with security features.",
    link: "#",
  },
  {
    id: 2,
    name: "Open House: Match 3 puzzles",
    image: "/public/HotAppImages/hotApp2.png",
    description: "Enjoy fun match 3 puzzles with a house theme.",
    link: "#",
  },
  {
    id: 3,
    name: "Cubes Empire Champions",
    image: "/public/HotAppImages/hotApp3.png",
    description: "A colorful and challenging puzzle game.",
    link: "#",
  },
  {
    id: 4,
    name: "Top War: Battle Game",
    image: "/public/HotAppImages/hotApp4.png",
    description: "A strategy battle game with endless fun.",
    link: "#",
  },
];

const HotAppSection = () => {
  const navigate = useNavigate();

  const handleRedirect = (appId) => {
    navigate("/details");
  };

  return (
    <section className="hot-apps">
      <div className="hot-apps-center">
        <div className="view-all">
          <div><h2 className="hot-apps-title">Hot Apps</h2></div>
          <div className="view-all1">
            <button className="view-all-btn1">View All</button>
          </div>
        </div>
        <div className="hot-apps-list">
          {/* Left column, first card */}
          <div className="hot-app-card-left">
            <img src={hotAppSectionData[0].image} alt={hotAppSectionData[0].name} className="hot-app-img-left" />
            <h3 className="hot-app-name">{hotAppSectionData[0].name}</h3>
            <p className="hot-app-description">{hotAppSectionData[0].description}</p>
            <button className="hot-app-btn" onClick={() => handleRedirect(hotAppSectionData[0].id)}>Get</button>
          </div>

          <div className="right-cards-container">

            <div className="hot-app-card">
              <img src={hotAppSectionData[1].image} alt={hotAppSectionData[1].name} className="hot-app-img" />
              <h3 className="hot-app-name">{hotAppSectionData[1].name}</h3>
              <p className="hot-app-description">{hotAppSectionData[1].description}</p>
              <button className="hot-app-btn" onClick={() => handleRedirect(hotAppSectionData[1].id)}>Get</button>
            </div>

            <div className="hot-app-card">
              <img src={hotAppSectionData[2].image} alt={hotAppSectionData[2].name} className="hot-app-img" />
              <h3 className="hot-app-name">{hotAppSectionData[2].name}</h3>
              <p className="hot-app-description">{hotAppSectionData[2].description}</p>
              <button className="hot-app-btn" onClick={() => handleRedirect(hotAppSectionData[2].id)}>Get</button>
            </div>
            <div className="hot-app-card">
              <img src={hotAppSectionData[3].image} alt={hotAppSectionData[3].name} className="hot-app-img" />
              <h3 className="hot-app-name">{hotAppSectionData[3].name}</h3>
              <p className="hot-app-description">{hotAppSectionData[3].description}</p>
              <button className="hot-app-btn" onClick={() => handleRedirect(hotAppSectionData[3].id)}>Get</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotAppSection;
