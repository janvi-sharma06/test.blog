import React from "react";
import "./ProductDetail.css";
import RatingStars from "../commonUtils/RatingStar";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const ProductDetail = () => {
    const sampleData = [
        {
            ratingIcon: "/Rating/R1.png",
            name: "Jaun Moi",
            date: "January 20, 2024",
            rating: 5,
            des: "It's so fun! U can literally take a picture of any car, and it will show up in the game! Amazing game ",
        },
        {
            ratingIcon: "/Rating/R2.png",
            name: "Capybara Simulator",
            date: "TakiApp Entertainment",
            rating: 3,
            des: "It's so fun! U can literally take a picture of any car, and it will show up in the game! Amazing game ",
        },
        {
            ratingIcon: "/Rating/R3.png",
            name: "Capybara Simulator",
            date: "TakiApp Entertainment",
            rating: 4,
            des: "It's so fun! U can literally take a picture of any car, and it will show up in the game! Amazing game ",
        },
    ];

    const suggestedAppsData = [
        {
            name: "Capybara Simulator",
            company: "TakiApp Entertainment",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            rating: "4.6",
        },
        {
            name: "777 Ski Jumping Game",
            company: "FunTech, Inc",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            rating: "3.9",
        },
        {
            name: "Princess Toy Phone",
            company: "Pi Games Studio",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            rating: "4.2",
        },
        {
            name: "Fire and Water",
            company: "Advanced Probing System",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            rating: "4.2",
        },
        {
            name: "Invincible: Guardians",
            company: "Ubisoft Entertainment",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            rating: "4.6",
        },
        {
            name: "Honor of Kings",
            company: "Level Infinite",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            rating: "4.7",
        },
        {
            name: "Police Department",
            company: "Casual Azur Games",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            rating: "4.6",
        },
    ];

    const ratingDistribution = [
        { stars: 5, count: 3400 },
        { stars: 4, count: 1100 },
        { stars: 3, count: 500 },
        { stars: 2, count: 200 },
        { stars: 1, count: 82 },
    ];
    const totalReviews = 5282;
    const averageRating = 4.0;
    const maxCount = Math.max(...ratingDistribution.map((r) => r.count));

    const carouselImages = [
        "/public/ProductDetail/ProductDetailsScreensht1.png",
        "/public/ProductDetail/ProductDetailsScreensht2.png",
        "/public/ProductDetail/ProductDetailsScreensht1.png",
        "/public/ProductDetail/ProductDetailsScreensht2.png",
        "/public/ProductDetail/ProductDetailsScreensht1.png",
        "/public/ProductDetail/ProductDetailsScreensht2.png",
        "/public/ProductDetail/ProductDetailsScreensht1.png",
        "/public/ProductDetail/ProductDetailsScreensht2.png",
        "/public/ProductDetail/ProductDetailsScreensht1.png",
        "/public/ProductDetail/ProductDetailsScreensht2.png",
        "/public/ProductDetail/ProductDetailsScreensht1.png",
        "/public/ProductDetail/ProductDetailsScreensht2.png",
        "/public/ProductDetail/ProductDetailsScreensht1.png",
    ];

    return (
        <>
            {/* HEADER */}
            <section className="app-header-section">
                <div className="app-header-container">
                    <div className="app-info">
                        <img
                            src="/public/ProductDetail/productImage.png"
                            alt="App Icon"
                            className="app-icon-product"
                        />
                        <div>
                            <h1 className="app-title">SpotRacers – Car Racing Game</h1>
                            <p className="app-publisher1">1.26.2</p>
                            <p className="app-publisher">Casual Azur Games</p>
                        </div>
                    </div>
                    <div className="app-meta">
                    </div>
                    <div className="app-buttons">
                        <img src="./appstore.png" className="store" />
                        <img src="./googleplay.png" className="play" />
                    </div>
                </div>
            </section>

            <section className="app-carousel-section">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    spaceBetween={-380}
                    breakpoints={{
                        0: { slidesPerView: 1 }, // mobile
                        768: { slidesPerView: 2 }, // tablet
                        1024: { slidesPerView: 3 }, // desktop
                    }}
                >
                    {carouselImages.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                className="carousel-img"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* ABOUT */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-left">
                        <h2>About SpotRacers - Car Racing Game</h2>
                        <p>
                            SpotRacers - Car Racing Game is a racing game developed by CASUAL
                            AZUR GAMES. The APK has been available since June 2020. In the
                            last 30 days, the app was downloaded about 220 thousand
                            times.<br />
                            <br />
                            It's top ranked. It's rated 4.04 out of 5 stars, based on 5.3
                            thousand ratings. The last update of the app was on February 7,
                            2024. SpotRacers - Car Racing Game has a content rating
                            "Everyone".<br />
                            <br />
                            SpotRacers - Car Racing Game has an APK download size of 150.64 MB
                            and the latest version available is 1.26.2. Designed for Android
                            version 6.0+. SpotRacers - Car Racing Game is FREE to download.
                        </p>
                        <div className="more-info">
                            <h2>More Information</h2>
                            <div className="info-grid">
                                <div className="info-card">
                                    <span className="info-label">Version</span>
                                    <span className="info-value">1.26.2</span>
                                </div>
                                <div className="info-card">
                                    <span className="info-label">License</span>
                                    <span className="info-value"><a href="#">Free</a></span>
                                </div>
                                <div className="info-card">
                                    <span className="info-label">Category</span>
                                    <span className="info-value"><a href="#">Racing</a></span>
                                </div>
                                <div className="info-card">
                                    <span className="info-label">Total Downloads</span>
                                    <span className="info-value">1M+</span>
                                </div>
                                <div className="info-card">
                                    <span className="info-label">Size</span>
                                    <span className="info-value">150.6 MB</span>
                                </div>
                                <div className="info-card">
                                    <span className="info-label">Ads</span>
                                    <span className="info-value">Contains Ads</span>
                                </div>
                                <div className="info-card">
                                    <span className="info-label">Developer</span>
                                    <span className="info-value"><a href="#">Casual Azur Games</a></span>
                                </div>
                                <div className="info-card">
                                    <span className="info-label">Changelog</span>
                                    <span className="info-value">
                                        <a href="#">Show changelog</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <h2>Description</h2>
                        <p>
                            SpotRacers is a game where you scan & collect real cars from the
                            street and use them for racing against your friends. Build your
                            personal car collection, and customize each car to fit your play
                            style and personality.
                            <br />
                            <br />
                            You can apply car makeup for your cool cars that you scan to your
                            phone in real life and race them! Driving in the cars you see on
                            the street!
                            <br />
                            <br />
                            A new type of cool car racing game! You should definitely check it
                            out if you are a car lover and want to customize your cars!
                            <br />
                            <br />
                            SpotRacers is a fun and innovative car racing game - discover the
                            world of car racing.
                            <br />
                            <br />
                            Upgrade your car collection with SpotRacers! This car customizing
                            game combines virtual car customization with other exciting
                            features in one game.
                            <br />
                            <br />
                            We offer car customizing games for all ages! Spot Racers will
                            allow kids (and adults) to personalize their ride, and then race
                            it against other players!
                            <br />
                            <br />
                            Need a custom car? Customize a car and start racing it today! Hurry
                            outside and scan for all the latest collections on SpotRacers - A
                            car lover's dream is here! Collect custom cars from around the
                            world. Download SpotRacers and start collecting gorgeous vehicles
                            now!{" "}
                            <a href="#" className="read">
                                READ MORE
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* RATINGS */}
            <section className="ratings-section">
                <div className="ratings-header">
                    <h2>Ratings and Reviews</h2>
                    <button className="view-all-link">View All</button>
                </div>
                <div className="ratings-summary-box">
                    <div className="rating-box">
                        <h2>{averageRating.toFixed(1)}</h2>
                        <RatingStars rating={averageRating} />
                        <p className="review-count">
                            {totalReviews.toLocaleString()} reviews
                        </p>
                    </div>
                    <div className="rating-bars">
                        {ratingDistribution.map((r) => (
                            <div key={r.stars} className="rating-bar-row">
                                <span>{r.stars}</span>
                                <div className="rating-bar">
                                    <div
                                        className="rating-bar-fill"
                                        style={{ width: `${(r.count / maxCount) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="reviews">
                    {sampleData.map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-header">
                                <img
                                    src={review.ratingIcon}
                                    alt={review.name}
                                    className="review-avatar"
                                />
                                <div className="review-user-info">
                                    <p className="review-name">{review.name}</p>
                                    <p className="review-date">{review.date}</p>
                                </div>
                            </div>
                            <RatingStars rating={review.rating} />
                            <p className="review-text">{review.des}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECH SECTION */}
            <section className="tech-section">
                <div className="tech-left">
                    <h2>Technologies used by SpotRacers – Car Racing Game</h2>
                    <p className="tech-sub">
                        SpotRacers – Car Racing Game is requesting 16 permissions and is
                        using 46 libraries. <a href="#">Show details</a>
                    </p>
                </div>

                <div className="tech-right">
                    <div className="tech-right1">
                        <div className="tech-card1">Apps other people are watching</div>
                        <div className="tech-card2">Popular Racing Games</div>
                    </div>
                    <div className="tech-right2"><div className="tech-card3">Apps on Sale</div>
                        <div className="tech-card4">Today’s trending apps</div>
                        <div className="tech-card5">Top New Apps</div>
                    </div>
                </div>
            </section>

            {/* SUGGESTED APPS */}
            <section className="suggested-apps-section">
                <div className="suggested-header">
                    <h2>You Might Also Like</h2>
                    <button className="view-all-link">View All</button>
                </div>
                <div className="suggested-list">
                    {suggestedAppsData.map((app, index) => (
                        <div className="suggested-card" key={index}>
                            <img src={app.image} alt={app.name} />
                            <p className="suggested-name">{app.name}</p>
                            <p className="suggested-company">{app.company}</p>
                            <p className="suggested-rating">
                                <FaStar color="#FFD700" size={18} />
                                {app.rating}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductDetail;
