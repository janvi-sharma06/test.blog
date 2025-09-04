import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h4>More Apps</h4>
          <p>Top Android Apps</p>
          <p>Seattle Sports</p>
          <p>Large Print Bible</p>
          <p>Droid TV</p>
        </div>
        <div>
          <h4>Android Statistics</h4>
          <p>Android Statistics</p>
          <p>Google Play Developer Stats</p>
          <p>Trending Android Apps</p>
          <p>Top Popular Apps</p>
        </div>
        <div>
          <h4>About AppBrain</h4>
          <p>Contact</p>
          <p>Blog</p>
          <p>Documentation</p>
          <p>Articles</p>
        </div>
        <div>
          <h4>Connect With Us</h4>
          <div className="socials">
            <span><img src="./fb.png" className="fb"/></span>
            <span><img src="./insta.png" className="insta"/></span>
            <span><img src="./tt.png" className="tt"/></span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="./logo.art.png" className="footer-logo" />
        <p>© 2024 AppBrain. All Rights Reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;

