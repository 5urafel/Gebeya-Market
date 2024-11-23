import React from "react";
import "./LatestCollections.css";
import LatestCollection from "../LatestCollection/LatestCollection";

const LatestCollections = () => {
  return (
    <div className="latest-collections">
      <div className="latest-header">
        <h2 className="title">Latest Collections</h2>
        <div className="swip-btn">
          <button className="back-btn">
            <img src="./back.svg" alt="Back" />
          </button>
          <button className="next-btn">
            <img src="./next.svg" alt="Next" />
          </button>
        </div>
      </div>
      <div className="product-card-list">
        <LatestCollection />
        <LatestCollection />
        <LatestCollection />
      </div>
    </div>
  );
};

export default LatestCollections;
