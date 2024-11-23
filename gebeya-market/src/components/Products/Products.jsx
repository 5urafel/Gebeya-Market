import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="product-categories">
        <button className="product-ctegory-btn">men</button>
        <button className="product-ctegory-btn">women</button>
        <button className="product-ctegory-btn">kids</button>
        <button className="product-ctegory-btn">perfumes</button>
        <button className="product-ctegory-btn">Sport</button>
        <button className="product-ctegory-btn">jewelry</button>
      </div>
      <div className="products-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className="product-btn-parent">
        <button className="products-list-btn">
          See more <span>&gt;&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Products;
