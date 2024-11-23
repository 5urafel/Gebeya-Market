import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import LatestCollections from "../../components/LatestCollections/LatestCollections";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <Products />
    </div>
  );
};

export default Home;
