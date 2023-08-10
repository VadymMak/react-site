import React from "react";
import Cards from "../../components/card/Card";
import HeroSection from "../../components/hero-section/HeroSection";
import Footer from "../../components/footer/Footer";

import "../../App.css";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
