// import React from "react";
// import "./TopAppDealSection.css";
// import { useNavigate } from "react-router-dom";

// function TopAppDeals() {
//   const navigate = useNavigate();

//   const handleRedirect = (appId) => {
//     navigate(`/details`);
//   };

//   const appDeals = [
//     {
//       img: "/AppDeal/AD1.png",
//       title: "Capybara Simulator",
//       developer: "Turtle Co Entertainment",
//       rating: 4.6,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD2.png",
//       title: "Fire and Water",
//       developer: "Advanced Probing Systems Inc",
//       rating: 4.6,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD3.png",
//       title: "Fortune Vs Rabbit",
//       developer: "Dark Magic",
//       rating: 4.3,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD4.png",
//       title: "777 Ski Jumping Game",
//       developer: "FuelTech, Inc",
//       rating: 3.9,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD5.png",
//       title: "Princess Toy Phone",
//       developer: "Pi Games Studio",
//       rating: 4.2,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD6.png",
//       title: "Cartoon Sticker Book",
//       developer: "WePlay Games",
//       rating: 4.2,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD7.png",
//       title: "Invincible: Guarding the Globe",
//       developer: "Ubisoft Entertainment",
//       rating: 3.9,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD8.png",
//       title: "Grow Heroes VIP: Idle RPG",
//       developer: "Pixstar",
//       rating: 4.0,
//       link: "#",
//     },
//     {
//       img: "/AppDeal/AD9.png",
//       title: "SpotRacers - Car Racing Game",
//       developer: "Casual Azur Games",
//       rating: 4.2,
//       link: "#",
//     },
//   ];

//   return (
//     <section className="top-app-deals">
//       <div style={{display:"flex",justifyContent:"space-between"}}>
//         <h2 className="top-app-deals-title">Top App Deals</h2>
//         <button className="all-btn">View All</button>
//       </div>
//       <div className="app-deals-list">
//         {appDeals.map((app, index) => (
//           <div className="app-deal-card" key={index}>
//             <div className="app-image">
//               <img src={app.img} alt={app.title} />
//             </div>
//             <div className="app-content">
//               <p className="app-title">{app.title}</p>
//               <p className="developer">{app.developer}</p>
//               <div className="rating">
//                 <span>⭐ {app.rating}</span>
//               </div>
//             </div>
//             <button className="get-btn" onClick={() => handleRedirect(app.id)}>Get</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default TopAppDeals;

import React from "react";
import "./TopAppDealSection.css";
import { useNavigate } from "react-router-dom";

function TopAppDeals() {
  const navigate = useNavigate();

  const handleRedirect = (appId) => {
    navigate("/details");
  };

  const appDeals = [
    {
      img: "/AppDeal/AD1.png",
      title: "Capybara Simulator",
      developer: "Turtle Co Entertainment",
      rating: 4.6,
    },
    {
      img: "/AppDeal/AD2.png",
      title: "Fire and Water",
      developer: "Advanced Probing Systems Inc",
      rating: 4.6,
    },
    {
      img: "/AppDeal/AD3.png",
      title: "Fortune Vs Rabbit",
      developer: "Dark Magic",
      rating: 4.3,
    },
    {
      img: "/AppDeal/AD4.png",
      title: "777 Ski Jumping Game",
      developer: "FuelTech, Inc",
      rating: 3.9,
    },
    {
      img: "/AppDeal/AD5.png",
      title: "Princess Toy Phone",
      developer: "Pi Games Studio",
      rating: 4.2,
    },
    {
      img: "/AppDeal/AD6.png",
      title: "Cartoon Sticker Book",
      developer: "WePlay Games",
      rating: 4.2,
    },
    {
      img: "/AppDeal/AD7.png",
      title: "Invincible: Guarding the Globe",
      developer: "Ubisoft Entertainment",
      rating: 3.9,
    },
    {
      img: "/AppDeal/AD8.png",
      title: "Grow Heroes VIP: Idle RPG",
      developer: "Pixstar",
      rating: 4.0,
    },
    {
      img: "/AppDeal/AD9.png",
      title: "SpotRacers - Car Racing Game",
      developer: "Casual Azur Games",
      rating: 4.2,
    },
  ];

  return (
    <section className="top-app-deals">
      <div className="deals-header">
        <h2 className="top-app-deals-title">Top App Deals</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="app-deals-list">
        {appDeals.map((app, index) => (
          <div className="app-deal-item" key={index}>
            <img src={app.img} alt={app.title} className="deal-app-icon" />
            <div className="deal-app-info">
              <p className="app-title1">{app.title}</p>
              <p className="developer">{app.developer}</p>
              <span className="rating"><img src="./Star.png"/> {app.rating}</span>
            </div>
            <button className="get-btn" onClick={() => handleRedirect(app.id)}>
              Get
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopAppDeals;