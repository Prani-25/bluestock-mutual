import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // <-- Install this via npm if needed
import Funds from "./Funds";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <header>
      <div className="logo">
        <img src={logo} alt="Bluestock Logo" />
        BLUESTOCK
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">IPO</a>
        <a href="#">Community</a>
        <a href="#">Products</a>
        <a href="#">Brokers</a>
        <a href="#">Live News</a>
      </nav>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up Now</button>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      
    </header>

<div className="header">
<div>
  <h1>Large Cap Mutual Funds</h1>
  <p>
    Large Cap funds invest in stocks of the top 100 companies in terms of full market capitalization.
    They invest at least 80% of their assets in large cap companies. These funds are relatively less
    riskier than other market cap funds.
  </p>
</div>
<div className="illustration"></div>
</div>

<div className="overview">
<h2>Overview of Large Cap Mutual Funds</h2>
</div>

<div className="content">
<div className="sidebar">
  <h4>Fund categories</h4>
  <ul>
    <li>Equity <span>▼</span></li>
    <li>Debt <span>▼</span></li>
    <li>Hybrid <span>▼</span></li>
    <li>Commodity <span>▼</span></li>
    <li>Other <span>▼</span></li>
  </ul>
</div>
    <Funds/>
 </div>

 
</>
  );
};

export default Header;
