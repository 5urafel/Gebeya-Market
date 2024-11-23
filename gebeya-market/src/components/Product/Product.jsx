import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src="shoe.svg" alt="" />
      </div>
      <h3 className="product-title">Shoes</h3>
      <p className="product-desc">See all collections</p>
    </div>
  );
};

export default Product;
