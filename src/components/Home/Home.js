import React from "react";
import Banner from "../banner/Banner";
import Coaches from "../Feature/Coache/Coaches";
import Feature from "../Feature/Feature";
import Testimonials from "../Feature/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="-mt-3">
        <Banner />
      </div>
      <div className="-mt-3 -mb-3">
        <Feature />
      </div>
      <div className="-mt-9">
        <Coaches />
      </div>
      <div className="-mt-9">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
