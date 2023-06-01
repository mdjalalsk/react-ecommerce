import React from "react";
import HeroSection from "./Components/Herosection";
// import { useProductContext } from "./Context/productcontex";
import { useProductContext } from "./Context/productcontex";



const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Techno Store",
  };

  return (
    <>
    {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;