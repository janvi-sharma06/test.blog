import React, { useState } from "react";
import "./Navbar.css";
import AuthenticationModal from "./AuthenticationModal";
const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const openModal = (mode) => {
    setIsLogin(mode === "login");
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbarleft">
          <img src="./logo.art.png" className="logo" />
          <ul>
            <li className="leftitem1"><a className="navlink1" href="https://google.com">App</a></li>
            <li className="leftitem2"><a className="navlink2" href="https://google.com">Statistic</a></li>
            <li className="leftitem3"><a className="navlink3" href="https://google.com">Docs</a></li>
            <li className="leftitem4"><a className="navlink4" href="https://google.com">Developer</a></li>
          </ul>
        </div>
        <div className="navbarright">
          <div className="search-container">
            <input type="text" placeholder="Search for apps" className="search-box" />
          </div>
          <div className="login-container" onClick={() => openModal("login")}>
            <button className="login" >Login</button>
          </div>
          <div className="register-container" onClick={() => openModal("signup")}>
            <button className="register" >Register</button>
            <img src="./Arrow Right.png" className="arr" />
          </div>
        </div>
      </nav>
      <AuthenticationModal
        showModal={showAuthModal}
        closeModal={() => setShowAuthModal(false)}
        isLogin={isLogin}
      />
    </>
  )
}

export default Navbar;





