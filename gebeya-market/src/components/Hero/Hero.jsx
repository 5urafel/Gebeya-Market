import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <h1 className="gebeya">Gebeya</h1>
        <h1
          className="shop
   "
        >
          SHOP
        </h1>
        <img src="img1.svg" alt="" className="img1" />
        <img src="img2.svg" alt="" className="img2" />
        <img src="img3.svg" alt="" className="img3" />
        <p>
          Discover a world of convenience with our user-friendly platform,
          curaated collections, and exceptional customer service
        </p>
        <button className="hero-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;
