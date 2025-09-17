// import React from "react";
// import "./FeaturedAppBrainSection.css";

// function FeaturedByAppBrain() {
//   const featuredApps = [
//     {
//       img: "/public/HotAppImages/hotApp1.png",
//       title: "Sidra Chain",
//       developer: "Ozan IT",
//       rating: 4.5,
//       link: "#",
//     },
//     {
//       img: "/public/HotAppImages/hotApp1.png",
//       title: "Jenny Mod for",
//       developer: "WeCat Games",
//       rating: 4.4,
//       link: "#",
//     },
//     {
//       img: "/public/HotAppImages/hotApp1.png",
//       title: "SnapTick - Do...",
//       developer: "ShoTech Global",
//       rating: 4.6,
//       link: "#",
//     },
//     {
//       img: "/public/HotAppImages/hotApp1.png",
//       title: "Babel - Learn",
//       developer: "Babel",
//       rating: 4.7,
//       link: "#",
//     },
//     {
//       img: "/public/HotAppImages/hotApp1.png",
//       title: "Pumping Sim...",
//       developer: "Clep Games",
//       rating: 4.2,
//       link: "#",
//     },
//     {
//       img: "/public/HotAppImages/hotApp1.png",
//       title: "MiniMiniFarm",
//       developer: "MiniGames",
//       rating: 4.1,
//       link: "#",
//     },
//     {
//       img: "/public/HotAppImages/hotApp1.png",
//       title: "UpRock AI Earn",
//       developer: "Ubisoft",
//       rating: 4.0,
//       link: "#",
//     },
//   ];

//   return (
//     <section className="featured-by-appbrain">
//       <div className="app-cards">
//         <h2 className="section-title">Featured by AppBrain</h2>
//         <div className="featured-app-list">
//           {featuredApps.map((app, index) => (
//             <div className="featured-app-card" key={index}>
//               <img src={app.img} alt={app.title} className="app-img" />
//               <div className="app-details">
//                 <p className="app-title">{app.title}</p>
//                 <p className="developer">{app.developer}</p>
//                 <div className="rating">
//                   <span>⭐ {app.rating}</span>
//                 </div>
//               </div>
//               <a href={app.link} className="get-btn">Get</a>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="ad-banner">
//         <img
//           src="/public/HotAppImages/hotApp1.png" 
//           alt="Play Together Anytime, Anywhere"
//         />
//       </div>
//     </section>
//   );
// }

// export default FeaturedByAppBrain;


import React from "react";
import "./FeaturedAppBrainSection.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

function FeaturedByAppBrain() {

  const navigate = useNavigate();

  const handleRedirect = (appId) => {
    navigate(`/details`);
  };

  const featuredApps = [
    {
      img: "/FeaturedApp/FA1.png",
      title: "Sidra Chain",
      developer: "Qatar IT",
      rating: 4.5,
      link: "#",
    },
    {
      img: "/FeaturedApp/FA2.png",
      title: "Jenny Mod for...",
      developer: "Wild Craft Apps",
      rating: 4.4,
      link: "#",
    },
    {
      img: "/FeaturedApp/FA3.png",
      title: "SnapTick - Do...",
      developer: "SnapTick Global",
      rating: 4.6,
      link: "#",
    },
    {
      img: "/FeaturedApp/FA4.png",
      title: "Babel - Learn",
      developer: "Babbel",
      rating: 4.7,
      link: "#",
    },
    {
      img: "/FeaturedApp/FA5.png",
      title: "Pumping Sim...",
      developer: "Clap Games",
      rating: 4.2,
      link: "#",
    },
    {
      img: "/FeaturedApp/FA6.png",
      title: "WorldApp-...",
      developer: "World Coin",
      rating: 4.1,
      link: "#",
    },
    {
      img: "/FeaturedApp/FA7.png",
      title: "Mini Mini Farm",
      developer: "Mini Mini Far...",
      rating: 4.6,
      link: "#",
    },
    {
      img: "/FeaturedApp/FA8.png",
      title: "UpRock AI Earn",
      developer: "UpRock",
      rating: 4.8,
      link: "#",
    },
  ];

  return (
    <section className="featured-by-appbrain">
      <div className="app-cards">
        <h2 className="section-title">Featured by AppBrain</h2>
        <div className="featured-app-list">
          {featuredApps.map((app, index) => (
            <div className="featured-app-card" key={index}>
              <img src={app.img} alt={app.title} className="app-img" />
              <div className="app-details">
                <p className="app-title">{app.title}</p>
                <p className="developer">{app.developer}</p>
                <div className="rating">
                  <span><FaStar color="#FFD700" size={18} /> 4.0</span>
                </div>
              </div>
              <button className="get-btn1" onClick={() => handleRedirect(app.id)}>Get</button>
            </div>
          ))}
        </div>
      </div>

      <div className="ad-banner">
        <img
          src="/FeaturedApp/FA-AD.png" 
          alt="Play Together Anytime, Anywhere"
        />
      </div>
    </section>
  );
}

export default FeaturedByAppBrain;
