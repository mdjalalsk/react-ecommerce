import React from "react";
import HeroSection from "./Components/Herosection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import FeatureProduct from "./Components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Techno Zone",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;