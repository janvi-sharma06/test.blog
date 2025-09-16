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
    navigate(`/details`);
  };

  return (
    <section className="hot-apps">
      <div className="hot-apps-center">
        <div className="view-all">
          <div><h2 className="hot-apps-title">Hot Apps</h2></div>
          <div className="view-all1">
            <button className="view-all-btn">Andriod</button>
            <button className="view-all-btn">IOS</button>
          </div>
        </div>
        <div className="hot-apps-list">
          {hotAppSectionData.map((app) => (
            <div className="hot-app-card" key={app.id}>
              <img src={app.image} alt={app.name} className="hot-app-img" />
              <h3 className="hot-app-name">{app.name}</h3>
              <p className="hot-app-description">{app.description}</p>
              <button className="hot-app-btn" onClick={() => handleRedirect(app.id)}>Get</button>
            </div>
          ))}
        </div>
        {/* <button className="view-all-btn">View All</button> */}
      </div>
    </section>
  );
};

export default HotAppSection;
