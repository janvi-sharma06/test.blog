// import React from "react";
// import "./FeaturedAppBrainSection.css";
// import { useNavigate } from "react-router-dom";
// import { FaStar } from 'react-icons/fa';

// function FeaturedByAppBrain() {

//   const navigate = useNavigate();

//   const handleRedirect = (appId) => {
//     navigate(`/details`);
//   };

//   const featuredApps = [
//     {
//       img: "/FeaturedApp/FA1.png",
//       title: "Sidra Chain",
//       developer: "Qatar IT",
//       rating: 4.5,
//       link: "#",
//     },
//     {
//       img: "/FeaturedApp/FA2.png",
//       title: "Jenny Mod for...",
//       developer: "Wild Craft Apps",
//       rating: 4.4,
//       link: "#",
//     },
//     {
//       img: "/FeaturedApp/FA3.png",
//       title: "SnapTick - Do...",
//       developer: "SnapTick Global",
//       rating: 4.6,
//       link: "#",
//     },
//     {
//       img: "/FeaturedApp/FA4.png",
//       title: "Babel - Learn",
//       developer: "Babbel",
//       rating: 4.7,
//       link: "#",
//     },
//     {
//       img: "/FeaturedApp/FA5.png",
//       title: "Pumping Sim...",
//       developer: "Clap Games",
//       rating: 4.2,
//       link: "#",
//     },
//     {
//       img: "/FeaturedApp/FA6.png",
//       title: "WorldApp-...",
//       developer: "World Coin",
//       rating: 4.1,
//       link: "#",
//     },
//     {
//       img: "/FeaturedApp/FA7.png",
//       title: "Mini Mini Farm",
//       developer: "Mini Mini Far...",
//       rating: 4.6,
//       link: "#",
//     },
//     {
//       img: "/FeaturedApp/FA8.png",
//       title: "UpRock AI Earn",
//       developer: "UpRock",
//       rating: 4.8,
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
//                   <span><FaStar color="#FFD700" size={18} /> 4.0</span>
//                 </div>
//               </div>
//               <button className="get-btn1" onClick={() => handleRedirect(app.id)}>Get</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="ad-banner">
//         <img
//           src="/FeaturedApp/FA-AD.png" 
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
function FeaturedByAppBrain() {
  const navigate = useNavigate();

  const handleRedirect = (appId) => {
    navigate("/details");
  };

  const featuredApps = [
    {
      img: "/FeaturedApp/FA1.png",
      title: "Sidra Chain",
      developer: "Qatar IT",
      rating: 4.5,
    },
    {
      img: "/FeaturedApp/FA2.png",
      title: "Jenny Mod for...",
      developer: "Wild Craft Apps",
      rating: 4.4,
    },
    {
      img: "/FeaturedApp/FA3.png",
      title: "SnapTick - Do...",
      developer: "SnapTick Global",
      rating: 4.6,
    },
    {
      img: "/FeaturedApp/FA4.png",
      title: "Babel - Learn",
      developer: "Babbel",
      rating: 4.7,
    },
    {
      img: "/FeaturedApp/FA5.png",
      title: "Pumping Sim...",
      developer: "Clap Games",
      rating: 4.2,
    },
    {
      img: "/FeaturedApp/FA6.png",
      title: "WorldApp-...",
      developer: "World Coin",
      rating: 4.1,
    },
    {
      img: "/FeaturedApp/FA7.png",
      title: "Mini Mini Farm",
      developer: "Mini Mini Far...",
      rating: 4.6,
    },
    {
      img: "/FeaturedApp/FA8.png",
      title: "UpRock AI Earn",
      developer: "UpRock",
      rating: 4.8,
    },
  ];

  return (
    <section className="featured-by-appbrain">
      <div className="app-cards">
        <h2 className="section-title-feature">Featured by AppBrain</h2>
        <div className="featured-app-list">
          {featuredApps.map((app, index) => (
            <div className="featured-app-card" key={index}>
              <img src={app.img} alt={app.title} className="app-img" />
              <div className="app-details">
                <p className="app-title2">{app.title}</p>
                <p className="developer">{app.developer}</p>
                <div className="rating">
                  <img src="./Star.png"/>
                  {app.rating.toFixed(1)}
                </div>
              </div>
              <button
                className="get-btn1"
                onClick={() => handleRedirect(app.id)}
              >
                Get
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="promo-banner">
        <img
          src="./FeaturedApp/AdBanner.jpg"
          alt="Play Together Anytime, Anywhere"
        />
      </div>
    </section>
  );
}

export default FeaturedByAppBrain;