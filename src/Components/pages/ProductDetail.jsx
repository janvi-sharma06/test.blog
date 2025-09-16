import React from 'react';
import "./ProductDetail.css";

const ProductDetail = () => {
    const sampleData = [
        {
            ratingIcon: <img src="./Rating/R1.png" />,
            name: "Jaun Moi",
            date: "January 20, 2024",
            image: <img src="./Rating/Star.png" />,
            des: "It's so fun! U can literally take a picture of any car, and it will show up in the game! Amazing game 😁",
        },
        {
            ratingIcon: <img src="./Rating/R2.png" />,
            name: "Capybara Simulator",
            date: "TakiApp Entertainment",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            des: "It's so fun! U can literally take a picture of any car, and it will show up in the game! Amazing game 😁",
        },
        {
            ratingIcon: <img src="./Rating/R3.png" />,
            name: "Capybara Simulator",
            date: "TakiApp Entertainment",
            image: "/public/ProductDetail/mightLike/MightLikeIcon1.png",
            des: "It's so fun! U can literally take a picture of any car, and it will show up in the game! Amazing game 😁",
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
    return (
        <>
            <section className="app-header-section">
                <div className="app-header-container">
                    <div className="app-info">
                        <img src="/public/ProductDetail/productImage.png" alt="App Icon" className="app-icon-product" />
                        <div>
                            <h1 className="app-title">SpotRacers – Car Racing Game</h1>
                            <p className="app-publisher">Casual Azur Games</p>
                        </div>
                    </div>
                    <div className="app-meta">
                        <span>⭐ 4.0</span>
                        <span>1M+ Downloads</span>
                        <span>150 MB</span>
                    </div>
                    <div className="app-buttons">
                        <button className="download-btn">Download</button>
                    </div>
                </div>
            </section>
            <section className="app-carousel-section">
                <div className="carousel-wrapper">
                    <img src="/public/ProductDetail/ProductDetailsScreensht1.png" alt="Screenshot 1" />
                    <img src="/public/ProductDetail/ProductDetailsScreensht2.png" alt="Screenshot 2" />
                    <img src="/public/ProductDetail/ProductDetailsScreensht1.png" alt="Screenshot 3" />
                    <img src="/public/ProductDetail/ProductDetailsScreensht2.png" alt="Screenshot 4" />
                    <img src="/public/ProductDetail/ProductDetailsScreensht1.png" alt="Screenshot 5" />
                </div>
            </section>
            <section className="about-section">
                <div className="about-container">
                    <div className="about-left">
                        <h2>About SpotRacers - Car Racing Game</h2>
                        <p>SpotRacers - Car Racing Game is a racing game developed by CASUAL AZUR GAMES. The APK has been available since June 2020. In the last 30 days, the app was downloaded about 220 thousand times.<br /><br />It's top ranked. It's rated 4.04 out of 5 stars, based on 5.3 thousand ratings. The last update of the app was on February 7, 2024. SpotRacers - Car Racing Game has a content rating "Everyone".<br /><br />SpotRacers - Car Racing Game has an APK download size of 150.64 MB and the latest version available is 1.26.2. Designed for Android version 6.0+. SpotRacers - Car Racing Game is FREE to download.</p>
                        <div className="more-info">
                            <h1>More Information</h1>
                            <p><strong>Version:</strong> 1.2.6.2</p>
                            <p><strong>Category:</strong> Racing</p>
                            <p><strong>Developer:</strong> Casual Azur Games</p>
                        </div>
                    </div>
                    <div className="about-right">
                        <h2>Description</h2>
                        <p>SpotRacers is a game where you scan & collect real cars from the street and use them for racing against your friends. Build your personal car collection, and customize each car to fit your play style and personality.<br /><br />You can apply car makeup for your cool cars that you scan to your phone in real life and race them! Driving in the cars you see on the street!<br /><br />A new type of cool car racing game! You should definitely check it out if you are a car lover and want to customize your cars!<br /><br />SpotRacers is a fun and innovative car racing game - discover the world of car racing.<br /><br />Upgrade your car collection with SpotRacers! This car customizing game combines virtual car customization with other exciting features in one game.<br /><br />We offer car customizing games for all ages! Spot Racers will allow kids (and adults) to personalize their ride, and then race it against other players!<br /><br />Need a custom car? Customize a car and start racing it today! Hurry outside and scan for all the latest collections on SpotRacers - A car lover's dream is here! Collect custom cars from around the world. Download SpotRacers and start collecting gorgeous vehicles now! <a href="#" className='read'>READ MORE</a></p>
                    </div>
                </div>
            </section>
            <section className="ratings-section">
                <div className="ratings-header">
                    <h2>Ratings and Reviews</h2>
                    <a href="#" className="view-all-link">View All</a>
                </div>
                <div className="ratings-summary">
                    <span className="rating-score">4.0</span>
                    <p>5,282 reviews</p>
                </div>
                <div className="reviews">
                    {/* Repeat this for each review */}
                    {
                        sampleData.map((app, index) => (
                            <div className='sampleD1' key={index}>
                                <p className="sample-rating">{app.ratingIcon}</p>
                                <p className="sample-name">{app.name}</p>
                                <p className="sample-date">{app.date}</p>
                                <p className="sample-image">{app.image}</p>
                                <p className="sample-des">{app.des}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="tech-section">
                <h2>Technologies used by SpotRacers – Car Racing Game</h2>
                <p className="tech-sub">Requesting 6 permissions and using 40 libraries. <a href="#">Show Details</a></p>
                <div className="tech-tags">
                    <button>Apps on Sale</button>
                    <button>Top New Apps</button>
                    <button>Trending</button>
                    <button>Popular Racing Games</button>
                </div>
            </section>
            <section className="suggested-apps-section">
                <div className="suggested-header">
                    <h2>You Might Also Like</h2>
                    <a href="#">View All</a>
                </div>
                <div className="suggested-list">
                    {suggestedAppsData.map((app, index) => (
                        <div className="suggested-card" key={index}>
                            <img src={app.image} alt={app.name} />
                            <p className="suggested-name">{app.name}</p>
                            <p className="suggested-company">{app.company}</p>
                            <p className="suggested-rating">⭐ {app.rating}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductDetail
