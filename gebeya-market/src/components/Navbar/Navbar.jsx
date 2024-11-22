import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src="logo.svg" alt="" />
        </div>
        <ul className="navbar-menu">
          <li className="dropdown">
            <a href="#">
              <img src="userIcon.svg" alt="" /> Register/Sign
              <img src="arrow-down.svg" alt="" className="arrow-down" />
            </a>
          </li>
          <li>
            <a href="#" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li className="dropdown">
            <a href="#">
              More <img src="arrow-down.svg" alt="" />
            </a>
          </li>
        </ul>
        <div className="search-container">
          <div className="search-bar">
            <div className="search-icon">
              <img src="si.svg" alt="Search Icon" />
            </div>
            <input type="text" placeholder="Search" />
            <button className="search-btn">
              <img src="searchIc.svg" alt="Search Button Icon" />
            </button>
          </div>
        </div>
        <div className="language">
          <img src="uk.svg" alt="" className="lang-img" />
          EN/Currency
          <img src="arrow-down.svg" alt="" />
        </div>
        <div className="cart">
          <img className="cart-icon" src="bag-2.svg" alt="" />
          <span className="cart-count">2</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
