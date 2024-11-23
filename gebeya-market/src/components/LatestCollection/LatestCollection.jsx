import React from "react";
import "./LatestCollection.css";

const LatestCollection = () => {
  return (
    <div>
      <div className="latest-card">
        <div className="latest-top-section">
          <button className="wishlist-btn">♡</button>
          <div className="latest-card-image">
            <span className="stock-status">In Stock</span>
            <img src="bag.svg" alt="bag img" />
          </div>
        </div>

        <div className="latest-bottom-section">
          <div className="category_rating">
            <button className="category">women </button>
            <div className="rating">
              <img src="star.svg" alt="" /> <span>2k+ rating</span>
            </div>
          </div>

          <h3 className="title">French Kiss Bag</h3>
          <p className="brand">ALDO</p>

          <div className="card-footer">
            <div className="price">$ 500</div>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
